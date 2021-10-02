Crafty.c("SanityBooster", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity");
        this.attr({x: 800, y: 570, w: 50, h: 50});
        this.color('#502f0c')
        // TODO Update with pull request.
        this.gravity("Ground");
    }
})
