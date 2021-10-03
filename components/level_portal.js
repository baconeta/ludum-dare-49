Crafty.c("LevelPortal", {
    init: function () {
        this.requires('2D, DOM, Color, Collision');
        this.attr({x: 0, y: 0, w: 20, h: 100});
        this.color('#f85902');

        this.onHit("PlayerBody", () => {
            Crafty.trigger("NextLevel");
        });
    },
    place: function (x, y) {
        this.attr({x: x, y: y - this.h});
    }
});