Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = -100000;
    },
    place: function (x, y) {
        this.x = x;
        this.y = y;
        this.w = 14000;
        setBackground.call(this);
        return this;
    },
});

function setBackground() {
    const level = Crafty("LevelController").level;
    switch (level) {
        case LEVELS.SADNESS:
            this.image("assets/images/bg_sad.png", "repeat");
            this.h = 1757;
            break;
        case LEVELS.ANGER:
            this.image("assets/images/bg_angry.png", "repeat");
            this.h = 1756;
            break;
        case LEVELS.FEAR:
            this.image("assets/images/bg_fear.png", "repeat");
            this.h = 1756;
            break;
        default:
            console.error(`Cannot load background image for level ${level}`)
            this.image("assets/images/bg_sad.png", "repeat");
            this.h = 1757;
            break;            
    }
}