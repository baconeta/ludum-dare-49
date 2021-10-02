Crafty.c("UnstableDecayGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Supportable");
        this.attr({x: 0, y: 0, w: 200, h: 20})
        this.color('#070')
        this.bind('LandedOnDecayGround', () => {
            Crafty.e('Delay').delay(() => {
                this.destroy();
            }, 2000, 0)
        })
    }
})
