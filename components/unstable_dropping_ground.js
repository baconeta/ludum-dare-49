Crafty.c("UnstableDroppingGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Supportable, Solid, Gravity, Motion, Delay");
        this.attr({x: 0, y: 0, w: 200, h: 20, ay: 0})
        this.color('red')
        this.bind('LandedOnDecayGround', () => {
            this.fade();
            this.color(COLOR, 0.65);
            this.delay(() => {
                this.drop();
            }, 555, 0)
        })
        this.bind('Move', () => {
            if (this.y > 5000) this.destroy();
        })
    },

    drop: function() {
        this.delay(() => {
            this.fade()
        }, 500, 4)
        this.ay += 500;
        this.color(COLOR, 0.5)
    },

    fade: function () {
        var currAlpha = getAlphaChannel(this.color());
        if (currAlpha > 0) {
            this.color(COLOR, (currAlpha - 0.1));
        }
    }
})
