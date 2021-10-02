Crafty.c("Spike", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, w: 8, h: 25});
        this.color('red');
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})