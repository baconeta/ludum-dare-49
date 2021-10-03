var COLOR = 'red'

Crafty.c("UnstableDecayGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, pf_sad_unstable");
        this.attr({x: 0, y: 0, w: 200, h: 75})
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
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
