Crafty.c("SpikeBush", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Color");
        this.attr({w: 86, h: 66});

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === STABILITY.HIGH) {
                this.makeSpiky();
            } else if (newState === STABILITY.MEDIUM || newState === STABILITY.LOW) {
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
            if (this.lethal === true) return;

            this.lethal = true;
            this.updateComponents();
        };

        this.makeSafe = () => {
            if (this.lethal === false) return;

            this.lethal = false;
            this.updateComponents();
        };

        this.updateComponents = () => {
            this.resetComponents();
            this.addComponent(this.getCurrentAsset(this.lethal));
            this.displayDebug();
        }
        this.resetComponents = () => {
            this.removeComponent(this.getCurrentAsset(true));
            this.removeComponent(this.getCurrentAsset(false));
        }

        this.getCurrentAsset = (isSpiky) => {
            const level = Crafty("LevelController").level;
            switch (level) {
                case LEVELS.SADNESS:
                    return isSpiky ? "bush_sad_spiky" : "bush_sad_berries";
                case LEVELS.ANGER:
                    return isSpiky ? "bush_angry_spiky" : "bush_angry_berries";
                case LEVELS.FEAR:
                    return isSpiky ? "bush_fear_spiky" : "bush_fear_berries";
                default:
                    console.error(`Cannot load spike bush image for level ${level}`)
                    return isSpiky ? "bush_sad_spiky" : "bush_sad_berries";
            }
        };

        this.displayDebug = () => {
            if (!DEBUG) return;

            this.color(this.lethal ? 'red' : 'green');
        };

        this.makeSpiky();
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})