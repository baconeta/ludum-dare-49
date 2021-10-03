const MIN_SANITY = 0;
const LOW_SANITY = 30;
const STARTING_SANITY = 50;
const HIGH_SANITY = 70;
const MAX_SANITY = 100;

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 180});
        this.alpha = 0.85;
        this.color('#bfff00');
        // Is a number between 0 and 100.
        this.sanity = STARTING_SANITY;
        // Is either "HIGH", "MEDIUM", or "LOW".
        this.state = "MEDIUM";

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            // TODO Change the sanity bar appearance here.
            switch (newState) {
                case "LOW":
                    this.color('#c20034');
                    break;
                case "MEDIUM":
                    this.color('#ffea00');
                    break;
                case "HIGH":
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
        if (value < MIN_SANITY) {
            this.sanity = MIN_SANITY;
        } else if (value > MAX_SANITY) {
            this.sanity = MAX_SANITY;
        } else {
            this.sanity = value;
        }

        // Check if the change in sanity will cause the sanity state to change.
        if (this.sanity < LOW_SANITY && this.state !== "LOW") {
            this.state = "LOW";
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > HIGH_SANITY && this.state !== "HIGH") {
            this.state = "HIGH";
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        // if (this.sanity > LOW_SANITY && this.sanity < HIGH_SANITY && this.state !== "MEDIUM") {
        //     this.state = "MEDIUM";
        //     Crafty.trigger("NEW_SANITY_STATE", this.state);
        //     return this;
        // }

        return this;
    },
})
