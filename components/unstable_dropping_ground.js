const DROP_DELAYS = {
    SLOW: 1300,
    NORMAL: 555,
    FAST: 300,
}

Crafty.c("UnstableDroppingGround", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Gravity, Motion, Delay, pf_sad_unstable");
        this.attr({x: 0, y: 0, w: 200, h: 75, ay: 0})
        this.decayDelay = DROP_DELAYS.NORMAL;
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        this.bind('LandedOnDecayGround', () => {
            this.delay(() => {
                this.drop();
            }, this.decayDelay, 0)
        })
        this.bind('Move', () => {
            if (this.y > 5000) this.destroy();
        });

        Crafty.bind("NEW_SANITY_STATE", (state) => {
            switch (state) {
                case SANITY_STATE.HIGH:
                    this.decayDelay = DROP_DELAYS.SLOW
                    break;
                case SANITY_STATE.MEDIUM:
                    this.decayDelay = DROP_DELAYS.NORMAL
                    break;
                case SANITY_STATE.LOW:
                    this.decayDelay = DROP_DELAYS.FAST
                    break;
            }
        })
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
