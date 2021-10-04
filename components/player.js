const ENEMY_SANITY_DRAIN = 18;
const ALLY_SANITY_RESTORE = 18;

Crafty.c("Player", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Delay, Twoway, Gravity, Keyboard, Color, GroundAttacher");
        this.color("red")
        this.alpha = DEBUG ? 1.00 : 0.00;
        this.attr({w: 25, h: 15, x: 20, y: 0})
        this.twoway(200)
        // Set what keys trigger a jump.
        this.jumper(['UP_ARROW', 'W', 'SPACE']);
        this.gravity('Solid');

        this.bind('LandedOnGround', function (entity) {
            Crafty.trigger("PlayerLanded");
            entity.trigger('LandedOnDecayGround', entity);
        });

        this.bind('LiftedOffGround', function (entity) {
            entity.trigger('LiftedOffDecayGround', entity);
        });

        this.checkHits("tree");
        this.bind("HitOn", function (event) {
            var kickDirection = (this.x - event[0].obj.x) > 0;
            Crafty.trigger("WalkIntoTree");
            if (kickDirection) {
                this.x += 10;
            } else {
                this.x -= 10;
            }
        });

        if (this.checkHits("Enemy")) {
            this.bind("HitOn", function (hitData) {
                var kickDirection = (this.x - hitData[0].obj.x) > 0;
                this.delay(function () {
                    if (kickDirection) {
                        this.x += 15;
                    } else {
                        this.x -= 15;
                    }
                }, 15, 1);
            });
        }

        this.bind("KickBackEnemy", function (hitData) {

        })

        this.bind("RESET_TILT", function (event) {
            this.rotation = 0;
        });

        this.playerBody = Crafty.e("PlayerBody")
        this.playerBody.y = -209 + this.h;
        this.playerBody.x = -33 + this.w;
        this.attach(this.playerBody);
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
    }
});

Crafty.c("PlayerBody", {
    init: function () {
        this.facing_right = true;
        this.addComponent("2D, DOM, Delay, Collision, SpriteAnimation, Keyboard, sprite_jump_right");
        this.attr({x: 0, y: 0, w: 135, h: 209}) // walking needs w=135, idle w=69, jump w=135 (h=186 for jump)

        this.setReels();
        this.setKeybindings();

        // Start with the jumping animation, because we spawn in mid-air.
        this.animate("sprite_jump_right", -1);

        this.onHit("SanityBooster", (hitData) => {
            if (Crafty("ItemSlot").holding === ITEM.NOTHING) {
                Crafty("ItemSlot").holding = ITEM.SANITY_BOOSTER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                // TODO Change the sprite when picking up the item instead of changing the colour.
                audioController.playTrack("bottle-pickup", 1, 0.5);
                hitData[0].obj.destroy();
            }
        });

        this.onHit("SanityDropper", (hitData) => {
            if (Crafty("ItemSlot").holding === ITEM.NOTHING) {
                Crafty("ItemSlot").holding = ITEM.SANITY_DROPPER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                // TODO Change the sprite when picking up the item instead of changing the colour.
                audioController.playTrack("bottle-pickup", 1, 0.5);
                hitData[0].obj.destroy();
            }
        });

        //if Collides with enemy
        if (this.checkHits("Enemy")) {
            //onHit
            this.bind("HitOn", function (hitData) {
                console.log(Crafty("SanityController").sanity)
                Crafty("SanityController").drainSanity(ENEMY_SANITY_DRAIN);
                console.log(Crafty("SanityController").sanity)
                Crafty.trigger("KickBackEnemy", hitData);
            });
            //offHit
            this.bind("HitOff", function (comp) {
                // do thing
            });
        }
    },

    charImg: function (idle = false, jump = false) {
        //code controlling the char Sprite state
        if (idle) {
            if (this.facing_right) {
                this.startAnimation("sprite_idle_right");
            } else {
                this.startAnimation("sprite_idle_left");
            }
        } else if (jump) {
            if (this.facing_right) {
                this.startAnimation("sprite_jump_right");
            } else {
                this.startAnimation("sprite_jump_left");
            }
        } else if (this.facing_right) {
            this.startAnimation("sprite_walking_right");
        } else {
            this.startAnimation("sprite_walking_left");
        }
    },

    setKeybindings: function () {
        this.bind("KeyDown", function (event) {
            if (event.key === Crafty.keys.LEFT_ARROW
                || event.key === Crafty.keys["A"]) {
                this.facing_right = false;
                this.charImg();
            } else if (event.key === Crafty.keys.RIGHT_ARROW
                || event.key === Crafty.keys["D"]) {
                this.facing_right = true;
                this.charImg();
            } else if (event.key === Crafty.keys.UP_ARROW
                || event.key === Crafty.keys["W"] || event.key === Crafty.keys.SPACE) {
                this.charImg(false, true);
            }
        });

        this.bind("KeyUp", function (event) {
            if (event.key === Crafty.keys.LEFT_ARROW || event.key === Crafty.keys["A"]) {
                this.facing_right = false;
                this.charImg(true);
            } else {
                if (event.key === Crafty.keys.RIGHT_ARROW || event.key === Crafty.keys["D"]) {
                    this.facing_right = true;
                    this.charImg(true);
                }
            }
        });

        this.bind("PlayerLanded", function () {
            if (this.facing_right) {
                this.startAnimation("sprite_idle_right");
            } else {
                this.startAnimation("sprite_idle_left");
            }
        })
    },

    startAnimation: function (animationName) {
        this.removeComponent("sprite_idle_right");
        this.removeComponent("sprite_idle_left");
        this.removeComponent("sprite_walking_right");
        this.removeComponent("sprite_walking_left");
        this.removeComponent("sprite_jump_left");
        this.removeComponent("sprite_jump_right");
        this.addComponent(animationName);
        this.animate(animationName, -1);
    },

    setReels: function () {
        this.reel("sprite_walking_left", 1500, 0, 0, 16, 8);
        this.reel("sprite_walking_right", 1500, 0, 0, 16, 8);
        this.reel("sprite_idle_left", 3000, 0, 0, 60, 15);
        this.reel("sprite_idle_right", 3000, 0, 0, 60, 15);
        this.reel("sprite_jump_right", 2000, 0, 0, 14);
        this.reel("sprite_jump_left", 2000, 0, 0, 14);
    }
})
