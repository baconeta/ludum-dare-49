const ITEM = {NOTHING: 0, SANITY_BOOSTER: 1, SANITY_DROPPER: 2};
const sanityBoosterValue = 40;
const sanityDropperValue = 40;

const useItemKey = Crafty.keys.SHIFT;


Crafty.c("ItemSlot", {
    init: function () {
        this.addComponent("2D, DOM, Color, Image");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 50});
        this.holding = ITEM.NOTHING;
        this.setIcon();

        this.bind('KeyDown', function (e) {
            if (e.key === useItemKey) {
                this.useCurrentItem();
            }
        });

        Crafty.bind("ITEM_PICKUP", (item) => {
            // TODO Change the sanity bar appearance here.
            switch (item) {
                case ITEM.SANITY_BOOSTER:
                    this.holding = item;
                    break;
                case ITEM.SANITY_DROPPER:
                    this.holding = item;
                    break;
                case ITEM.NOTHING:
                    this.holding = item; //Weird case...
                default:
                    console.warn("A non-valid item was just picked up!");
                    break;
            }
            this.setIcon();
        });
    },

    useCurrentItem: function () {
        switch (this.holding) {
            case ITEM.NOTHING:
                break;
            case ITEM.SANITY_BOOSTER:
                Crafty("SanityController").restoreSanity(sanityBoosterValue);
                gtag('event', 'use_sane_potion', {'use_sane_potion': 1});
                // TODO Play a sound based on the item used?
                break;
            case ITEM.SANITY_DROPPER:
                Crafty("SanityController").drainSanity(sanityDropperValue);
                gtag('event', 'use_insane_potion', {'use_insane_potion': 1});
                // TODO Play a sound based on the item used?
                break;
            default:
                console.error(`The item '${this.holding}' cannot be used`);
        }
        this.holding = ITEM.NOTHING;
        this.setIcon();
    },

    setIcon: function () {
        switch (this.holding) {
            case ITEM.SANITY_BOOSTER:
                this.image("assets/images/vial_icon_green.png")
                break;
            case ITEM.SANITY_DROPPER:
                this.image("assets/images/vial_icon_red.png")
                break;
            case ITEM.NOTHING:
                this.image("assets/images/vial_icon_box.png")
                break;
            default:
                console.warn("The player is holding an invalid item!");
                break;
        }

        this.attr({w: 50, h: 50})
    }
});