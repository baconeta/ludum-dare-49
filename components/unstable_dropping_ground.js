const DROP_DELAYS = {
    SLOW: 1100,
    NORMAL: 420,
    FAST: 250,
}

const PLATFORM_REGEN_DELAY_MS = 10000;

Crafty.c("UnstableDroppingGround", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Gravity, Motion, Delay");
        this.attr({x: 0, y: 0, w: 200, h: 75, ay: 0});
        this.setType();
        this.decayDelay = DROP_DELAYS.NORMAL;
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        // Set the rotation point to be the center of the sprite.
        this.origin(this.w / 2, this.h / 2);
        this.bind('LandedOnDecayGround', () => {
            this.shake();
            this.delay(() => {
                this.drop();
            }, this.decayDelay, 0)
        });
        Crafty.bind("NEW_SANITY_STATE", (state) => {
            switch (state) {
                case STABILITY.HIGH:
                    this.decayDelay = DROP_DELAYS.SLOW
                    break;
                case STABILITY.MEDIUM:
                    this.decayDelay = DROP_DELAYS.NORMAL
                    break;
                case STABILITY.LOW:
                    this.decayDelay = DROP_DELAYS.FAST
                    break;
            }
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("pf_sad_dropping");
                this.w = 797/4;
                this.h = 300/4;
                break;
            case LEVELS.ANGER:
                this.addComponent("pf_angry_dropping");
                this.w = 203;
                this.h = 117;
                break;
            case LEVELS.FEAR:
                this.addComponent("pf_fear_dropping");
                this.w = 267;
                this.h = 72;
                break;
            default:
                console.error(`Cannot load platform image for level ${level}`)
                this.addComponent("pf_sad_dropping");
                this.w = 797/4;
                this.h = 300/4;
                break;
        };
        return this;
    },

    resetComponents: function () {
        this.removeComponent("pf_sad_norm");
        this.removeComponent("pf_angry_normal");
        this.removeComponent("pf_fear_norm")
        return this;
    },

    drop: function () {
        this.originalY = this.y;
        this.delay(() => {
            this.y = this.originalY;
            this.ay = 0;
            this.vy = 0;
            // this.fade()
        }, PLATFORM_REGEN_DELAY_MS, 0)
        this.ay += 500;
        return this;
    },

    shake: function () {
        Crafty("AudioController").playTrack('crumble_1', 1);
        this.delay(() => {
                this.rotation = 3;
            },
            12, 0);
        this.delay(() => {
                this.rotation = 6;
            },
            24, 0);
        this.delay(() => {
                this.rotation = 9;
            },
            36, 0);
        this.delay(() => {
                this.rotation = 12;
            },
            48, 0);
        this.delay(() => {
                this.rotation = 6;
            },
            60, 0);
        this.delay(() => {
                this.rotation = 0;
                Crafty.trigger("RESET_TILT");
            },
            72, 0);
        this.delay(() => {
                this.rotation = -6;
            },
            84, 0);
        this.delay(() => {
                this.rotation = -12;
            },
            96, 0);
        this.delay(() => {
                this.rotation = -9;
            },
            108, 0);
        this.delay(() => {
                this.rotation = -6;
            },
            120, 0);
        this.delay(() => {
                this.rotation = -3;
            },
            132, 0);
        this.delay(() => {
                this.rotation = 0;
            },
            144, 0);
        this.delay(() => {
                Crafty("AudioController").playTrack('crumble_2', 1);
                Crafty.trigger("RESET_TILT");
            },
            175, 0);
        return this;
    },

    // fade: function () {
    //     var currAlpha = getAlphaChannel(this.color());
    //     if (currAlpha > 0) {
    //         this.color(COLOR, (currAlpha - 0.1));
    //     }
    // }
})
