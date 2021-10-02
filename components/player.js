const ITEMS = {NOTHING: 0, SANITY_BOOSTER: 1, SANITY_DROPPER: 2};
const useItemKey = Crafty.keys.I;
const sanityBoosterValue = 20;
const sanityDropperValue = 20;

Crafty.c("Player", {
    init: function () {

        var enemyDamage = 10; // sorry didnt know if var goes at top or not
        var healAmount = 10;

        this.addComponent("2D, DOM, Color, Collision, Twoway, Gravity, Keyboard");
        this.attr({x: 0, y: 0, w: 50, h: 50})
        this.color('#F00')
        this.twoway(200)
        this.gravity('Solid');
        this.holding = ITEMS.NOTHING;
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround');
        });

        this.onHit("SanityBooster", (hitData) => {
            if (this.holding === ITEMS.NOTHING) {
                this.holding = ITEMS.SANITY_BOOSTER;
                // TODO Change the sprite when picking up the item instead of changing the colour.
                this.color('#930000');
                // TODO Play pickup sound?
                hitData[0].obj.destroy();
            }
        });

        this.onHit("SanityDropper", (hitData) => {
            if (this.holding === ITEMS.NOTHING) {
                this.holding = ITEMS.SANITY_DROPPER;
                // TODO Change the sprite when picking up the item instead of changing the colour.
                this.color('#002293');
                // TODO Play pickup sound?
                hitData[0].obj.destroy();
            }
        });

        this.bind('Move', function (evt) { // after player moved
            let hitData;
            if ((hitData = this.hit('SanityWall'))) {
                if (hitData[0].obj.has("Solid")) { // if the wall is solid now
                    this.x = evt._x; // move the player back to the prev location
                    this.y = evt._y;
                }
            }
        });

        this.onHit("Spike", (hitData) => {
            this.resetLevel();
        });

        this.bind('KeyDown', function (e) {
            if (e.key === useItemKey) {
                this.useCurrentItem();
            }
        });

        this.useCurrentItem = () => {
            switch (this.holding) {
                case ITEMS.NOTHING:
                    break;
                case ITEMS.SANITY_BOOSTER:
                    this.sanityIncrease(sanityBoosterValue);
                    break;
                case ITEMS.SANITY_DROPPER:
                    this.sanityReduce(sanityDropperValue);
                    break;
                default:
                    console.error(`The item '${this.holding}' cannot be used`);
            }

            this.holding = ITEMS.NOTHING;
        };
        
        //if Collides with enemy
        if (this.checkHits("Enemy")) {
            //onHit
            this.bind("HitOn", function (hitData) {
                this.sanityReduce(enemyDamage);
            });
            //offHit
            this.bind("HitOff", function (comp) {
                console.log("Hitoff Enemy") // do thing
            });
        }
    },

    sanityReduce: (value) => {
        let currentSanity = Crafty("SanityBar").sanity;
        currentSanity = currentSanity - value
        //Crafty("SanityBar").setSanity(currentSanity); //Will work when setSanity is fixed
        Crafty("SanityBar").sanity = currentSanity; // temporary
        console.log(currentSanity, "current");
    },

    sanityIncrease: (value) => {
        let currentSanity = Crafty("SanityBar").sanity;
        currentSanity = currentSanity + value;
        //Crafty("SanityBar").setSanity(currentSanity); //Will work when setSanity is fixed
        Crafty("SanityBar").sanity = currentSanity; // temporary
        console.log(currentSanity, "current");
    },

    resetLevel: () => {
        Crafty.scene("Game");
    }

})
