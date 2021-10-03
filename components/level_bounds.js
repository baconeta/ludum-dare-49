Crafty.c("LevelBounds", {
    init: function () {
        this.requires('2D, DOM, Collision');
        this.z = -100000;
        this.bind("HitOff", () => levelController.resetLevel());
    },
});
