const GAIN_RATE = 15; // Per second
const LOSS_RATE = 15; // Per second
const MODE = {"GAIN": true, "LOSS": false};

Crafty.c("SanityZone", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Delay, sanity_up_sad");
        this.attr({x:0, y:0})
        this.mode = MODE.GAIN;

        if (this.checkHits("PlayerBody")) { // If collide hits with player.
            this.bind("HitOn", function () { // Player enters zone.
                this.trigger("ALTER_SANITY_RATE", MODE ? GAIN_RATE : -LOSS_RATE);
            })
            this.bind("HitOff", function () { // Player leaves zone.
                this.trigger("ALTER_SANITY_RATE", MODE ? -GAIN_RATE : LOSS_RATE);
            })
        }
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    alterSanity: function () {
        // TODO Investigate loose-ends from this trigger.
        Crafty.trigger((MODE ? "GAIN" : "LOSS") + "SANITY");
    },

    setMode: function (mode) {
        this.mode = mode;
        this.setImage();
    },

    setImage: function () {
        const level = Crafty("LevelController").level;
        console.log(level)
        this.removeComponent("sanity_up_sad");
        if (this.mode) { //on gain
            this.w = 184;
            this.h = 43;
            switch (level) {
                case LEVELS.SADNESS:
                    this.addComponent("sanity_up_sad");
                    break;
                case LEVELS.ANGER:
                    this.addComponent("sanity_up_angry");
                    break;
                case LEVELS.FEAR:
                    this.addComponent("sanity_up_fear");
                    break;
                default:
                    console.error(`Cannot load sanity zone image for level ${level}`)
                    this.addComponent("sanity_up_sad");
                    break;
            }
            console.log(this.has("sanity_up_sad"))

        } else {
            this.w = 225;
            this.h = 43;
            switch (level) {
                case LEVELS.SADNESS:
                    this.addComponent("sanity_down_sad");
                    break;
                case LEVELS.ANGER:
                    this.addComponent("sanity_down_angry");
                    break;
                case LEVELS.FEAR:
                    this.addComponent("sanity_down_fear");
                    break;
                default:
                    console.error(`Cannot load sanity zone image for level ${level}`)
                    this.addComponent("sanity_down_sad");
                    break;
            }
            console.log(this.has("sanity_down_sad"))


        }
    }
})
