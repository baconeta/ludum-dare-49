Crafty.c("PlatformTop", {
    init: function() {
        this.addComponent("2D, DOM, Collision, Solid, Color");
        this.color("red"); // for debugging
        this.attr({x: 20, y: 7, w: 150, h: 7})
        // Pass any events up to parent that we need.
        this.bind('LandedOnDecayGround', (e) => {
            this._parent.trigger('LandedOnDecayGround', e)
        });
    }
})