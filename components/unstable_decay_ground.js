var COLOR = 'red'

Crafty.c("UnstableDecayGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Supportable, Solid");
        this.attr({x: 0, y: 0, w: 200, h: 20})
        this.color(COLOR)
        this.bind('LandedOnDecayGround', () => {
            Crafty.e('Delay').delay(() => {
                var currAlpha = getAlphaChannel(this.color());
                if (currAlpha > 0) {
                    this.color(COLOR, (currAlpha - 0.2));
                }
            }, 240, 5, () => {
                this.destroy();
            });

        })
    }
})
