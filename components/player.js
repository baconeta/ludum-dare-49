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
        this.jumping = false;

        if (this.checkHits("tree")) {
            this.bind("HitOn", function (event) {
                const kickDirection = (this.x - event[0].obj.x) > 0;
                Crafty.trigger("WalkIntoTree");
                if (kickDirection) {
                    this.x += 10;
                } else {
                    this.x -= 10;
                }
            })
        }

        this.bind("RESET_TILT", function (event) {
            this.rotation = 0;
        });

        this.playerBody = Crafty.e("PlayerBody")
        this.playerBody.y = -209 + this.h;
        this.playerBody.x = -33 + this.w;
        this.attach(this.playerBody);

        this.bind('LandedOnGround', function (entity) {
            Crafty.trigger("PlayerLanded");
            entity.trigger('LandedOnDecayGround', entity);
            Crafty("AudioController").playTrack('grass_step_2', 0.70);
        });

        this.bind('LiftedOffGround', function (entity) {
            entity.trigger('LiftedOffDecayGround', entity);
            this.playerBody.jumping = true;
        });

        // this.checkHits("StoryTrigger");
        // this.bind("HitOn", function (event) {
        //     console.log(event);
        // });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
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
                gtag('event', 'picked_up_sane_potion', {'picked_up_sane_potion': 1});
                Crafty("ItemSlot").holding = ITEM.SANITY_BOOSTER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                audioController.playTrack("bottle-pickup", 1, 0.5);
                hitData[0].obj.destroy();
            }
        });

        this.onHit("SanityDropper", (hitData) => {
            if (Crafty("ItemSlot").holding === ITEM.NOTHING) {
                gtag('event', 'picked_up_insane_potion', {'picked_up_insane_potion': 1});
                Crafty("ItemSlot").holding = ITEM.SANITY_DROPPER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                audioController.playTrack("bottle-pickup", 1, 0.5);
                hitData[0].obj.destroy();
            }
        });

        //if Collides with enemy
        if (this.checkHits("Enemy")) {
            this.bind("HitOn", function (hitData) {
                if (!this.hitRecently) {
                    Crafty.trigger("HitMonster");
                    gtag('event', 'walk_into_creature', {'walk_into_creature': 1});
                    Crafty("SanityController").drainSanity(ENEMY_SANITY_DRAIN);
                    this.hitRecently = true;
                    this.delay(() => {
                        this.hitRecently = false;
                    }, 2000, 0)
                }
            });
        }
    },

    charImg: function (idle = false) {
        //code controlling the char Sprite state
        if (idle && !this.jumping) {
            if (this.facing_right) {
                this.startAnimation("sprite_idle_right");
            } else {
                this.startAnimation("sprite_idle_left");
            }
        } else if (this.jumping) {
            if (this.facing_right) {
                this.startAnimation("sprite_jump_right");
            } else {
                this.startAnimation("sprite_jump_left");
            }
        } else if (this.facing_right && !this.jumping) {
            this.startAnimation("sprite_walking_right");
        } else {
            this.startAnimation("sprite_walking_left");
        }
        return this;
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
                gtag('event', 'jumps', {'jumps': 1});
                this.jumping = true;
                this.charImg(false);
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
            this.jumping = false;
            if (Crafty.s('Keyboard').isKeyDown('LEFT_ARROW') || Crafty.s('Keyboard').isKeyDown('RIGHT_ARROW')) {
                if (this.facing_right) {
                    this.startAnimation("sprite_walking_right");
                } else {
                    this.startAnimation("sprite_walking_left");
                }
            } else {
                if (this.facing_right) {
                    this.startAnimation("sprite_idle_right");
                } else {
                    this.startAnimation("sprite_idle_left");
                }
            }
        });
        return this;
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
        return this;
    },

    setReels: function () {
        this.reel("sprite_walking_left", 1500, 0, 0, 16, 8);
        this.reel("sprite_walking_right", 1500, 0, 0, 16, 8);
        this.reel("sprite_idle_left", 3000, 0, 0, 60, 15);
        this.reel("sprite_idle_right", 3000, 0, 0, 60, 15);
        this.reel("sprite_jump_right", 2000, 0, 0, 14);
        this.reel("sprite_jump_left", 2000, 0, 0, 14);
        return this;
    }
})
