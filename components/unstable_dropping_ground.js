Crafty.c("UnstableDroppingGround", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Gravity, Motion, Delay, pf_sad_unstable");
        this.attr({x: 0, y: 0, w: 200, h: 75, ay: 0})
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        this.bind('LandedOnDecayGround', () => {
            this.delay(() => {
                this.drop();
            }, 555, 0)
        })
        this.bind('Move', () => {
            if (this.y > 5000) this.destroy();
        });
    },

    drop: function() {
        this.delay(() => {
            // this.fade()
        }, 500, 4)
        this.ay += 500;
    },

    // fade: function () {
    //     var currAlpha = getAlphaChannel(this.color());
    //     if (currAlpha > 0) {
    //         this.color(COLOR, (currAlpha - 0.1));
    //     }
    // }
})
