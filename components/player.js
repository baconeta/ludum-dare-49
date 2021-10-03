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

});
