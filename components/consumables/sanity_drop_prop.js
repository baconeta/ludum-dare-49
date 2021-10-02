Crafty.c("SanityDropper", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity");
        this.attr({x: 0, y: 0, w: 50, h: 50});
        this.color('#502f0c')
        // TODO Update with pull request.
        this.gravity("Ground");
    }
})
