Crafty.c("SpikeBush", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Image");
        this.attr({w: 86, h: 66});
        this.lethal = true;
        this.updateAssets();

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === STABILITY.MEDIUM || newState === STABILITY.LOW) {
                this.makeLethal();
            } else if (newState === STABILITY.HIGH) {
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
        return this;
    },

    makeLethal: function () {
        this.lethal = true;
        this.updateAssets();
    },

    makeSafe: function () {
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
                this.lethal ? this.image("assets/images/spikes_sad.png") : this.image("assets/images/bush_sad.png");
                break;
            case LEVELS.ANGER:
                this.lethal ? this.image("assets/images/spikes_angry.png") : this.image("assets/images/bush_angry.png");
                break;
            case LEVELS.FEAR:
                this.lethal ? this.image("assets/images/spikes_fear.png") : this.image("assets/images/bush_fear.png");
                break;
            default:
                console.error(`Cannot load spike bush image for level ${level}`);
                this.lethal ? this.image("assets/images/spikes_sad.png") : this.image("assets/images/bush_sad.png");
                break;
        }
        if (DEBUG) this.color(this.lethal ? 'red' : 'green');
        return this;
    },
});
