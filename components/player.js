const useItemKey = Crafty.keys.SHIFT;

Crafty.c("Player", {
    init: function () {

        var enemyDamage = 10; // sorry didnt know if var goes at top or not
        var healAmount = 10;

        this.addComponent("2D, DOM, Collision, Twoway, Gravity, Keyboard, elf, GroundAttacher");
        this.attr({x: 0, y: 0, w: 42, h: 162})
        this.twoway(200)
        this.gravity('Solid');
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround', e)
        });

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

        this.onHit("Spike", (hitData) => {
            this.resetLevel();
        });

        this.bind('KeyDown', function (e) {
            if (e.key === useItemKey) {
                this.useCurrentItem();
            }
        });

        //if Collides with enemy
        if (this.checkHits("Enemy")) {
            //onHit
            this.bind("HitOn", function (hitData) {
                this.sanityReduce(enemyDamage);
            });
            //offHit
            this.bind("HitOff", function (comp) {
                // do thing
            });
        }
    },

    useCurrentItem: function () {
        let sanity = Crafty("SanityBar").sanity;
        switch (Crafty("ItemSlot").holding) {
            case ITEM.NOTHING:
                break;
            case ITEM.SANITY_BOOSTER:
                Crafty("SanityBar").setSanity(sanity + sanityBoosterValue);
                Crafty.trigger("ITEM_CONSUMED", ITEM.SANITY_BOOSTER);
                break;
            case ITEM.SANITY_DROPPER:
                Crafty("SanityBar").setSanity(sanity - sanityDropperValue);
                Crafty.trigger("ITEM_CONSUMED", ITEM.SANITY_DROPPER);
                break;
            default:
                console.error(`The item '${Crafty("ItemSlot").holding}' cannot be used`);
        }

        Crafty("ItemSlot").holding = ITEM.NOTHING;
    },

    resetLevel: () => {
        Crafty.scene("Game");
    },

})

