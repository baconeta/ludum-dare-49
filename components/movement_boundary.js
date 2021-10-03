Crafty.c("MovementBoundary", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, w: 25, h: 25});
        if (DEBUG) {
            this.color('#333'); // debug line for boundary movement.
        }
    }
})