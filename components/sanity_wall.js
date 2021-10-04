Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, DOM, tree");
        this.attr({w: 74, h: 284});
        this.alive = true;
        this.updateAssets();

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === STABILITY.HIGH || newState === STABILITY.MEDIUM) {
                this.makeAlive();
            } else if (newState === STABILITY.LOW) {
                this.makeDead();
            }
        });
    },

    place(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    makeAlive() {
        if (this.alive === true) return;

        this.alive = true;
        this.updateAssets();
        this.y -= 124;
    },

    makeDead() {
        if (this.alive === false)  return;

        this.alive = false;
        this.updateAssets();
        this.y += 124;
    },

    updateAssets() {
        // Reset.
        this.removeComponent("tree_alive_sad, tree_alive_angry, tree_alive_fear");
        this.removeComponent("tree_dead_sad, tree_dead_angry, tree_dead_fear");
        // Do specific alive/dead tweaks.
        this.alive ? this.addComponent("tree") : this.removeComponent("tree");
        // Get new asset.
        const level = Crafty("LevelController").level;
        switch (level) {
            case LEVELS.SADNESS:
                this.alive ? this.addComponent("tree_alive_sad") : this.addComponent("tree_dead_sad");
                break;
            case LEVELS.ANGER:
                this.alive ? this.addComponent("tree_alive_angry") : this.addComponent("tree_dead_angry");
                break;
            case LEVELS.FEAR:
                this.alive ? this.addComponent("tree_alive_fear") : this.addComponent("tree_dead_fear");
                break;
            default:
                console.error(`Cannot load sanity wall (tree) image for level ${level}`)
                this.alive ? this.addComponent("tree_alive_sad") : this.addComponent("tree_dead_sad");
                break;
        }
        if (DEBUG) this.color(this.lethal ? 'red' : 'green');
    },
});
