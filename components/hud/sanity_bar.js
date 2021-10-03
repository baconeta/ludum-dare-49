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

const ENABLE_PASSIVE_SANITY_CHANGE = false; //TODO: Passive change currently causes a lot of events to be fired when interacting with sanity zones
const PASSIVE_RESTORE = 3; // Per second.
const PASSIVE_DRAIN = 3; // Per second.

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color, Delay");
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

        if (ENABLE_PASSIVE_SANITY_CHANGE) {
            this.delay(() => {
                if (this.state === SANITY_STATE.HIGH) {
                    this.drainSanity(PASSIVE_DRAIN);
                }
                if (this.state === SANITY_STATE.LOW) {
                    this.restoreSanity(PASSIVE_RESTORE);
                }
            }, 1000, -1);
        }
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
            console.debug(this.sanity);
        }

        // Make sure that the new value is valid
        if (value < SANITY.MIN) {
            value = SANITY.MIN;
        } else if (value > SANITY.MAX) {
            value = SANITY.MAX;
        }
        this.sanity = value;

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
