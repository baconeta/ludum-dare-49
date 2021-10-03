Crafty.c("SpikeBush", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Color");
        this.attr({w: 86, h: 66});
        if (DEBUG) {
            this.color('red');
        }

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === SANITY_STATE.HIGH) {
                this.makeSpiky();
            } else if (newState === SANITY_STATE.MEDIUM || newState === SANITY_STATE.LOW) {
                this.makeSafe();
            }
        });

        this.onHit("PlayerBody", function () {
            if (this.lethal === true) {
                console.log('You fell on a spiky berry bush and died');
                Crafty.trigger("ResetLevel");
            } else {
                console.info(`You fell on a berry bush without spikes!`);
            }
        });

        this.makeSpiky = () => {
            if (this.lethal) return;

            this.resetComponents();
            this.addComponent("bush_spiky");
            this.lethal = true;
        };

        this.makeSafe = () => {
            if (!this.lethal) return;

            this.resetComponents();
            this.addComponent("bush_berries");
            this.lethal = false;
        };

        this.resetComponents = () => {
            console.info('changing bush state');
            this.removeComponent("bush_spiky");
            this.removeComponent("bush_berries");
        }

        this.makeSpiky();
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})