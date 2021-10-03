//TODO: Use better names like "insane" or "healthy" or something
const SANITY = {
    MIN: 0,
    LOW: 30,
    HIGH: 70,
    MAX: 100,
};

const SANITY_STATE = {
    // Insane.
    LOW: 0,
    // Half-sane.
    MEDIUM: 1,
    // Sane.
    HIGH: 2,
};

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 180});
        this.alpha = 0.85;
        this.color('#bfff00');
        this.sanity = 50;
        this.state = SANITY_STATE.MEDIUM;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            // TODO Change the sanity bar appearance here.
            switch (newState) {
                case SANITY_STATE.LOW:
                    this.color('#c20034');
                    break;
                case SANITY_STATE.MEDIUM:
                    this.color('#ffea00');
                    break;
                case SANITY_STATE.HIGH:
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
        if (DEBUG) {
            console.log(value);
        }
        // Change the sanity, if it's valid.
        if (value < SANITY.MIN) {
            this.sanity = SANITY.MIN;
        } else if (value > SANITY.MAX) {
            this.sanity = SANITY.MAX;
        } else {
            this.sanity = value;
        }

        // Check if the change in sanity will cause the sanity state to change.
        if (this.sanity < SANITY.LOW && this.state !== SANITY_STATE.LOW) {
            this.state = SANITY_STATE.LOW;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY.HIGH && this.state !== SANITY_STATE.HIGH) {
            this.state = SANITY_STATE.HIGH;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY.LOW && this.sanity < SANITY.HIGH && this.state !== SANITY_STATE.MEDIUM) {
            this.state = SANITY_STATE.MEDIUM;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }

        return this;
    },
})
