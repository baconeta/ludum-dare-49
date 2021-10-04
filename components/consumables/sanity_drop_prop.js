Crafty.c("SanityDropper", {
    init: function() {
        this.addComponent("2D, DOM, vial_red");
        this.attr({x: 0, y: 0, w: 220/4, h: 259/4});
        // TODO Update with pull request.
        // this.gravity("Ground");
    },
    place: function (x, y) {
        this.x = x;
        this.y = y;
    }
})
