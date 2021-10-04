const DROP_DELAYS = {
    SLOW: 1100,
    NORMAL: 420,
    FAST: 250,
}

const PLATFORM_REGEN_DELAY_MS = 10000;

Crafty.c("UnstableDroppingGround", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Gravity, Motion, Delay, pf_sad_unstable");
        this.attr({x: 0, y: 0, w: 200, h: 75, ay: 0})
        this.decayDelay = DROP_DELAYS.NORMAL;
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        // Set the rotation point to be the center of the sprite.
        this.origin(this.w/2, this.h/2);
        this.bind('LandedOnDecayGround', () => {
            this.shake();
            this.delay(() => {
                this.drop();
            }, this.decayDelay, 0)
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
        });
    },

    drop: function() {
        this.originalY = this.y;
        this.delay(() => {
            this.y = this.originalY;
            this.ay = 0;
            this.vy = 0;
            // this.fade()
        }, PLATFORM_REGEN_DELAY_MS, 0)
        this.ay += 500;
    },

    shake: function() {
        this.delay(() => {this.rotation = 3;},
            12, 0);
        this.delay(() => {this.rotation = 6;},
            24, 0);
        this.delay(() => {this.rotation = 9;},
            36, 0);
        this.delay(() => {this.rotation = 12;},
            48, 0);
        this.delay(() => {this.rotation = 6;},
            60, 0);
        this.delay(() => {this.rotation = 0;},
            72, 0);
        this.delay(() => {Crafty.trigger("RESET_TILT");},
            72, 0);
        this.delay(() => {this.rotation = -6;},
            84, 0);
        this.delay(() => {this.rotation = -12;},
            96, 0);
        this.delay(() => {this.rotation = -9;},
            108, 0);
        this.delay(() => {this.rotation = -6;},
            120, 0);
        this.delay(() => {this.rotation = -3;},
            132, 0);
        this.delay(() => {this.rotation = 0;},
            144, 0);
        this.delay(() => {Crafty.trigger("RESET_TILT");},
            175, 0);
    },

    // fade: function () {
    //     var currAlpha = getAlphaChannel(this.color());
    //     if (currAlpha > 0) {
    //         this.color(COLOR, (currAlpha - 0.1));
    //     }
    // }
})
