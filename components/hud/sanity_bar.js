//TODO: Use better names like "insane" or "healthy" or something
const SanityLevel = {
    Minimum: 0,
    Low: 30,
    Normal: 50,
    High: 70,
    Maximum: 100
};

const SanityState = {
    Low: "LOW",
    Medium: "MEDIUM",
    High: "HIGH"
}

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 180});
        this.alpha = 0.85;
        this.color('#bfff00');
        this.sanity = SanityLevel.Normal;
        this.state = SanityState.Medium;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            // TODO Change the sanity bar appearance here.
            switch (newState) {
                case SanityState.Low:
                    this.color('#c20034');
                    break;
                case SanityState.Medium:
                    this.color('#ffea00');
                    break;
                case SanityState.High:
                    this.color('#55ff00');
                    break;
            }
        });
    },

    restoreSanity: function (value) {
        this.setSanity(this.sanity + value);
    },

    drainSanity: function (value) {
        this.setSanity(this.sanity = value);
    },

    // Broadcasts a "NEW_SANITY_STATE" event when the sanity state changes.
    setSanity: function (value) {

        // Change the sanity, if it's valid.
        if (value < SanityLevel.Minimum) {
            this.sanity = SanityLevel.Minimum;
        } else if (value > SanityLevel.Maximum) {
            this.sanity = SanityLevel.Maximum;
        } else {
            this.sanity = value;
        }

        // Check if the change in sanity will cause the sanity state to change.
        if (this.sanity < SanityLevel.Low && this.state !== SanityState.Low) {
            this.state = SanityState.Low;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SanityLevel.High && this.state !== SanityState.High) {
            this.state = SanityState.High;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        // if (this.sanity > LOW_SANITY && this.sanity < HIGH_SANITY && this.state !== SanityState.Medium) {
        //     this.state = SanityState.Medium;
        //     Crafty.trigger("NEW_SANITY_STATE", this.state);
        //     return this;
        // }

        return this;
    },
})
