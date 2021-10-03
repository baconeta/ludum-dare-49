Crafty.c("Door", {
    init: function () {
        this.requires('2D, DOM, Color, Collision');
        this.attr({x: 0, y: 0, w: 100, h: 200});
        this.color('#f85902');
    },
    place: function (x, y) {
        this.attr({x: x, y: y - this.h});
    }
});