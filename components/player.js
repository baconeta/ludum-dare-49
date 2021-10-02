const ITEMS = {NOTHING: 0, SANITY_BOOSTER: 1, SANITY_DROPPER: 2};

Crafty.c("Player", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Twoway, Gravity");
        this.attr({x: 0, y: 0, w: 50, h: 50})
        this.color('#F00')
        this.twoway(200)
        this.gravity('Solid');
        this.holding = ITEMS.NOTHING;
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround')
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
        this.onHit("SanityBooster", (hitData) => {
            if (this.holding === ITEMS.NOTHING) {
                this.holding = ITEMS.SANITY_DROPPER;
                // TODO Change the sprite when picking up the item instead of changing the colour.
                this.color('#002293');
                // TODO Play pickup sound?
                hitData[0].obj.destroy();
            }
        });
    },
})
