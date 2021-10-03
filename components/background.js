Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = -100000;
    },
    place: function (x, y, w, h, lvl) {
        // Add the width, height, and top left co-ordinates for the box/background
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        setBackground.call(this, lvl);
        return this;
    },
});

function setBackground(lvl) {
    switch (lvl) {
        case 1:
            this.image("assets/images/bg_sad.png", "repeat");
            break;
        case 2:
            this.image("assets/images/bg_angry.png", "repeat");
            break;
        case 3:
            this.image("assets/images/bg_sad.png", "repeat"); // change for background fear when ready
            break;
    }
}