Crafty.c("SanityBooster", {
    init: function() {
        this.addComponent("2D, DOM, vial_green");
        this.attr({x: 0, y: 0, w: 168/4, h: 253/4});
        // this.gravity("Ground")
        // TODO Update with pull request.
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
    }
})
