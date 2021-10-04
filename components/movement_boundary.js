Crafty.c("MovementBoundary", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, w: 25, h: 50});
        if (DEBUG) {
            this.color('#333'); // debug line for boundary movement.
        }
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
    },
})