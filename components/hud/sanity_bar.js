//TODO: Use better names like "insane" or "healthy" or something
const SANITY_THRESHOLD = {
    Min: 0,
    Low: 30,
    Default: 50,
    High: 70,
    Max: 100,
};

const SANITY_STATE = {
    Insane: 0,
    Medium: 1,
    Sane: 2,
};

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 180});
        this.alpha = 0.85;
        this.color('#bfff00');
        this.sanity = SANITY_THRESHOLD.Default;
        this.state = SANITY_STATE.Medium;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            // TODO Change the sanity bar appearance here.
            switch (newState) {
                case SANITY_STATE.Insane:
                    this.color('#c20034');
                    break;
                case SANITY_STATE.Medium:
                    this.color('#ffea00');
                    break;
                case SANITY_STATE.High:
                    this.color('#55ff00');
                    break;
            }
        });
    },

    restoreSanity: function (value) {
        this.setSanity(this.sanity + value);
    },

    drainSanity: function (value) {
        this.setSanity(this.sanity - value);
    },

    // Broadcasts a "NEW_SANITY_STATE" event when the sanity state changes.
    setSanity: function (value) {

        // Change the sanity, if it's valid.
        if (value < SANITY_THRESHOLD.Min) {
            this.sanity = SANITY_THRESHOLD.Min;
        } else if (value > SANITY_THRESHOLD.Max) {
            this.sanity = SANITY_THRESHOLD.Max;
        } else {
            this.sanity = value;
        }

        // Check if the change in sanity will cause the sanity state to change.
        if (this.sanity < SANITY_THRESHOLD.Low && this.state !== SANITY_STATE.Insane) {
            this.state = SANITY_STATE.Insane;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY_THRESHOLD.High && this.state !== SANITY_STATE.High) {
            this.state = SANITY_STATE.High;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY_THRESHOLD.Low && this.sanity < SANITY_THRESHOLD.High && this.state !== "MEDIUM") {
            this.state = SANITY_STATE.Medium;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }

        return this;
    },
})
