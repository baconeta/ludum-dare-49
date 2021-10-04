//TODO: Use better names like "insane" or "healthy" or something
const SANITY = {
    MIN: 0,
    LOW: 30,
    HIGH: 70,
    MAX: 100,
};

const STABILITY = {
    // Insane.
    LOW: 0,
    // Half-sane.
    MEDIUM: 1,
    // Sane.
    HIGH: 2,
};

const PASSIVE_RESTORE_RATE = 5; // Per second.
const PASSIVE_DRAIN_RATE = 5; // Per second.
const SANITY_TICK_RATE = 8; // Ticks per second.

Crafty.c("SanityController", {
    init: function () {
        this.addComponent("Delay");
        this.sanity = 50;
        this.state = STABILITY.MEDIUM;
        this.sanityChangeRate = 0;
        this.totalSecondsSane = 0;
        this.totalSecondsInsane = 0;

        // Repeating function to change sanity over time.
        this.delay(() => {
            // The values are measured in sanity/second, but we change the sanity at a higher rate to make it smoother.
            switch (this.state) {
                case STABILITY.HIGH:
                    this.totalSecondsSane += 1 / SANITY_TICK_RATE;
                    this.drainSanity(PASSIVE_DRAIN_RATE/SANITY_TICK_RATE);
                    break;
                case STABILITY.LOW:
                    this.totalSecondsInsane += 1 / SANITY_TICK_RATE;
                    this.restoreSanity(PASSIVE_RESTORE_RATE/SANITY_TICK_RATE);
                    break;
            }
            // Although we only use restoreSanity here, the rate can be negative and thus drain the player's sanity.
            this.restoreSanity(this.sanityChangeRate/SANITY_TICK_RATE);
        }, 1000/SANITY_TICK_RATE, -1);

        this.bind("ALTER_SANITY_RATE", function (modification) {
            this.sanityChangeRate += modification;
        })

        this.bind("NEW_SANITY_STATE", function (state) {
            if(state === STABILITY.LOW) { // going insane
                audioController.playTrack("sane-insane", 1, 0.5);
            }
            if(state === STABILITY.HIGH) { // going sane
                audioController.playTrack("insane-sane", 1, 0.5);
            }
        })
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
        if (this.sanity < SANITY.LOW && this.state !== STABILITY.LOW) {
            this.state = STABILITY.LOW;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY.HIGH && this.state !== STABILITY.HIGH) {
            this.state = STABILITY.HIGH;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }
        if (this.sanity > SANITY.LOW && this.sanity < SANITY.HIGH && this.state !== STABILITY.MEDIUM) {
            this.state = STABILITY.MEDIUM;
            Crafty.trigger("NEW_SANITY_STATE", this.state);
            return this;
        }

        return this;
    },
});
