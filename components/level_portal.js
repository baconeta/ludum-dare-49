Crafty.c("LevelPortal", {
    init: function () {
        this.requires('2D, DOM, Collision, next_level_sign_sad');
        this.attr({x: 0, y: 0, w: 474/4, h: 606/4});

        this.onHit("PlayerBody", () => {
            Crafty.trigger("NextLevel");
        });
    },
    place: function (x, y) {
        this.attr({x: x, y: y - this.h});
    }
});