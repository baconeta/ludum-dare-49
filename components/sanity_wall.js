Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, Color, DOM, Image, tree");
        this.attr({w: 74, h: 284});
        // This will get changed to true on the next line.
        this.alive = false;
        this.makeAlive();

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
        this.w = 74;
        this.h = 284;
    },

    makeDead() {
        if (this.alive === false)  return;

        this.alive = false;
        this.updateAssets();
        this.y += 124;
        this.w = 147;
        this.h = 160;
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
                this.alive ? this.image("assets/images/tree_alive_sad.png") : this.image("assets/images/tree_dead_sad.png");
                break;
            case LEVELS.ANGER:
                this.alive ? this.image("assets/images/tree_alive_angry.png") : this.image("assets/images/tree_dead_angry.png");
                break;
            case LEVELS.FEAR:
                this.alive ? this.image("assets/images/tree_alive_fear.png") : this.image("assets/images/tree_dead_fear.png");
                break;
            default:
                console.error(`Cannot load sanity wall (tree) image for level ${level}`)
                this.alive ? this.image("assets/images/tree_alive_sad.png") : this.image("assets/images/tree_dead_sad.png");
                break;
        }
        if (DEBUG) this.color(this.lethal ? 'red' : 'green');
        return this;
    },
});
