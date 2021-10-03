const ITEM = {NOTHING: 0, SANITY_BOOSTER: 1, SANITY_DROPPER: 2};
const sanityBoosterValue = 20;
const sanityDropperValue = 20;

const useItemKey = Crafty.keys.SHIFT;


Crafty.c("ItemSlot", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 50});
        this.alpha = 0.85;
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
                    this.color('#F303CB');
                    this.holding = item;
                    break;
                case ITEM.SANITY_DROPPER:
                    this.color('#502f0c');
                    this.holding = item;
                    break;
                case ITEM.NOTHING:
                default:
                    console.warn("A non-valid item was just picked up!");
                    break;
            }
        });
    },

    useCurrentItem: function () {
        let sanity = Crafty("SanityBar").sanity;
        switch (this.holding) {
            case ITEM.NOTHING:
                break;
            case ITEM.SANITY_BOOSTER:
                Crafty("SanityBar").setSanity(sanity + sanityBoosterValue);
                // TODO Play a sound based on the item used?
                break;
            case ITEM.SANITY_DROPPER:
                Crafty("SanityBar").setSanity(sanity - sanityDropperValue);
                // TODO Play a sound based on the item used?
                break;
            default:
                console.error(`The item '${this.holding}' cannot be used`);
        }

        this.color('#b2b2b2');
        this.holding = ITEM.NOTHING;
    },
})
