const ITEM = {NOTHING: 0, SANITY_BOOSTER: 1, SANITY_DROPPER: 2};
const sanityBoosterValue = 40;
const sanityDropperValue = 40;

const useItemKey = Crafty.keys.SHIFT;


Crafty.c("ItemSlot", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 50});
        this.alpha = 0.4;
        this.color('#b2b2b2');
        // Is an ITEM.
        this.holding = ITEM.NOTHING;

        this.bind('KeyDown', function (e) {
            if (e.key === useItemKey) {
                this.useCurrentItem();
            }
        });

        Crafty.bind("ITEM_PICKUP", (item) => {
            // TODO Change the sanity bar appearance here.
            switch (item) {
                case ITEM.SANITY_BOOSTER:
                    this.removeComponent("vial_red")
                    this.addComponent("vial_green")
                    this.attr({w: 50, h: 50})
                    // this.attr({w: 168/4, h: 253/4})
                    this.holding = item;
                    this.alpha = 1;
                    break;
                case ITEM.SANITY_DROPPER:
                    this.removeComponent("vial_green")
                    this.addComponent("vial_red")   
                    this.attr({w: 50, h: 50})
                    // this.attr({w: 220/4, h: 259/4})
                    this.holding = item;
                    this.alpha = 1;
                    break;
                case ITEM.NOTHING:
                    this.removeComponent("vial_red")
                    this.removeComponent("vial_green")
                    this.alpha = 0.4;
                default:
                    console.warn("A non-valid item was just picked up!");
                    break;
            }
        });
    },

    useCurrentItem: function () {
        switch (this.holding) {
            case ITEM.NOTHING:
                break;
            case ITEM.SANITY_BOOSTER:
                Crafty("SanityController").restoreSanity(sanityBoosterValue);
                // TODO Play a sound based on the item used?
                break;
            case ITEM.SANITY_DROPPER:
                Crafty("SanityController").drainSanity(sanityDropperValue);
                // TODO Play a sound based on the item used?
                break;
            default:
                console.error(`The item '${this.holding}' cannot be used`);
        }
        this.removeComponent("vial_red")
        this.removeComponent("vial_green")
        this.alpha = 0.4;
        this.color('#b2b2b2');
        this.holding = ITEM.NOTHING;
    },
})
