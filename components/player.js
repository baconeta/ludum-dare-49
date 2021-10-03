const ENEMY_SANITY_DRAIN = 18;
const ALLY_SANITY_RESTORE = 18;

Crafty.c("Player", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Twoway, Gravity, Keyboard, Color, GroundAttacher");
        this.color("red");
        this.attr({w: 10, h: 15, x: 20, y: 0});
        this.twoway(200);
        this.gravity('Solid');
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround', e);
        });

        this.bind('Move', function (evt) { // after player moved
            var hitDatas, hitData;
            if ((hitDatas = this.hit('wall'))) { // check for collision with walls
                hitData = hitDatas[0]; // resolving collision for just one collider
                if (hitData.type === 'SAT') { // SAT, advanced collision resolution
                    // move player back by amount of overlap
                    this.x -= hitData.overlap * hitData.nx;
                    this.y -= hitData.overlap * hitData.ny;
                } else { // MBR, simple collision resolution
                    // move player to previous position
                    this.x = evt._x;
                    this.y = evt._y;
                }
            }
        })

        this.playerBody = Crafty.e("PlayerBody")
        this.playerBody.y = -162 + this.h;
        this.attach(this.playerBody);
    }
});

Crafty.c("PlayerBody", {
    init: function () {

        this.addComponent("2D, DOM, Collision, elf");
        this.attr({x: 0, y: 0, w: 42, h: 162})

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

        this.onHit("Spike", (hitData) => {
            if (Crafty("SanityBar").state === SanityState.Low) {
                console.info(`You fell on some spikes... but they're harmless when your sanity is low!`);
                return;
            }

            console.log('You fell on some spikes and died');
            Crafty.trigger("ResetLevel");
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
