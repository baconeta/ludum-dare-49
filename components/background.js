Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = -100000,
        this.image("assets/images/bg_sad.png", "repeat");
    },
    place: function (x,y,w,h) {
        // Add the width, height, and top left co-ordinates for the box/background
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        return this;
    },
});