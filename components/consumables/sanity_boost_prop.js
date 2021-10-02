Crafty.c("SanityBooster", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity");
        this.attr({x: 800, y: 570, w: 50, h: 50});
        this.color('#f3e903');
        // TODO Update with pull request.
        this.gravity("Ground");
    }
})
