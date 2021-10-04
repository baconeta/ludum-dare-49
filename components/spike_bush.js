Crafty.c("SpikeBush", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Color");
        this.attr({w: 86, h: 66});
        this.lethal = true;
        this.updateAssets();

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === STABILITY.LOW) {
                this.makeLethal();
            } else if (newState === STABILITY.MEDIUM || newState === STABILITY.HIGH) {
                this.makeSafe();
            }
        });

        this.onHit("Player", function () {
            if (this.lethal === true) {
                console.log('You fell on a spiky berry bush and died');
                Crafty.trigger("ResetLevel");
            } else {
                console.info(`You fell on a berry bush without spikes!`);
            }
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
    },

    makeLethal: function () {
        if (this.lethal === true) return;

        this.lethal = true;
        this.updateAssets();
    },

    makeSafe: function () {
        if (this.lethal === false) return;

        this.lethal = false;
        this.updateAssets();
    },

    updateAssets: function () {
        // Reset.
        this.removeComponent("bush_sad_spiky, bush_sad_berries, bush_angry_spiky");
        this.removeComponent("bush_angry_berries, bush_fear_spiky, bush_fear_berries");
        // Get new asset.
        const level = Crafty("LevelController").level;
        switch (level) {
            case LEVELS.SADNESS:
                this.lethal ? this.addComponent("bush_sad_spiky") : this.addComponent("bush_sad_berries");
                break;
            case LEVELS.ANGER:
                this.lethal ? this.addComponent("bush_angry_spiky") : this.addComponent("bush_angry_berries");
                break;
            case LEVELS.FEAR:
                this.lethal ? this.addComponent("bush_fear_spiky") : this.addComponent("bush_fear_berries");
                break;
            default:
                console.error(`Cannot load spike bush image for level ${level}`);
                this.lethal ? this.addComponent("bush_sad_spiky") : this.addComponent("bush_sad_berries");
                break;
        }
        if (DEBUG) this.color(this.lethal ? 'red' : 'green');
    },
});
