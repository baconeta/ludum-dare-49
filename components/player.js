const ENEMY_SANITY_DRAIN = 18;
const ALLY_SANITY_RESTORE = 18;

Crafty.c("Player", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Twoway, Gravity, Keyboard, Color, GroundAttacher");
        this.color("red")
        this.alpha = DEBUG ? 1.00 : 0.00;
        this.attr({w: 10, h: 15, x: 20, y: 0})
        this.twoway(200)
        this.gravity('Solid');
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround', e);
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

        this.playerBody = Crafty.e("PlayerBody")
        this.playerBody.y = -214 + this.h;
        this.attach(this.playerBody);


    }
});

Crafty.c("PlayerBody", {
    init: function () {

        this.addComponent("2D, DOM, Collision, SpriteAnimation, sprite_walking_right");
        this.attr({x: 0, y: 0, w: 135, h: 209})

        this.reel("sprite_walking_left", 2000, 0, 0, 16, 8);
        this.reel("sprite_walking_right", 1000, 0, 0, 16, 8);
        this.reel("sprite_idle_left", 1000, 0, 0, 16, 8);
        this.reel("sprite_jump_right", 1000, 0, 0, 16, 8);
        this.reel("sprite_jump_left", 1000, 0, 0, 16, 8);

        this.animate("sprite_walking_right", -1)
        // this.animate("sprite_walking_left", -1)

        this.onHit("SanityBooster", (hitData) => {
            if (Crafty("ItemSlot").holding === ITEM.NOTHING) {
                Crafty("ItemSlot").holding = ITEM.SANITY_BOOSTER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                // TODO Change the sprite when picking up the item instead of changing the colour.
                // TODO Play pickup sound?
                hitData[0].obj.destroy();
            }
        });

        this.onHit("SanityDropper", (hitData) => {
            if (Crafty("ItemSlot").holding === ITEM.NOTHING) {
                Crafty("ItemSlot").holding = ITEM.SANITY_DROPPER;
                Crafty.trigger("ITEM_PICKUP", Crafty("ItemSlot").holding);
                // TODO Change the sprite when picking up the item instead of changing the colour.
                // TODO Play pickup sound?
                hitData[0].obj.destroy();
            }
        });

        //if Collides with enemy
        if (this.checkHits("Enemy")) {
            //onHit
            this.bind("HitOn", function (hitData) {
                Crafty("SanityBar").drainSanity(ENEMY_SANITY_DRAIN);
            });
            //offHit
            this.bind("HitOff", function (comp) {
                // do thing
            });
        }

        //if Collides with enemy
        if (this.checkHits("Ally")) {
            //onHit
            this.bind("HitOn", function (hitData) {
                Crafty("SanityBar").restoreSanity(ALLY_SANITY_RESTORE);
            });
            //offHit
            this.bind("HitOff", function (comp) {
                // do thing
            });
        }
    },
});
