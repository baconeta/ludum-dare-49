Crafty.c("LevelBounds", {
    init: function () {
        this.requires('2D, DOM, Collision');
        this.z = -100000;
        this.bind("HitOff", () => {
            gtag('event', 'death_by_falling', {'death_by_falling': 1});
            levelController.resetLevel()});
    },
});
