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
            console.log("test");
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

    // Broadcasts a "NEW_SANITY_STATE" event when the sanity state changes.
    setSanity: (value) => {
        if (MIN_SANITY < value < MAX_SANITY) {
            this.sanity = value;
        }
        if (this.sanity < LOW_SANITY) {
            if (this.state !== "LOW") {
                this.state = "LOW";
                Crafty.trigger("NEW_SANITY_STATE", this.state);
            }
        } else if (this.sanity > HIGH_SANITY) {
            if (this.state !== "HIGH") {
                this.state = "HIGH";
                Crafty.trigger("NEW_SANITY_STATE", this.state);
            }
        } else {
            if (this.state !== "MEDIUM") {
                this.state = "MEDIUM";
                Crafty.trigger("NEW_SANITY_STATE", this.state);
            }
        }
    },
})
