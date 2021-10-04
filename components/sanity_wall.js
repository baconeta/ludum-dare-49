Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, DOM, tree, tree_alive_sad");
        this.attr({w: 74, h: 284});
        this.alive = true;

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
    },

    makeAlive() {
        if (this.alive === true) {
            return;
        }

        this.alive = true;
        this.resetComponents();
        this.addComponent(this.getAsset(this.alive));
        this.addComponent("tree");
        this.y -= 124;
    },

    makeDead() {
        if (this.alive === false) {
            return;
        }

        this.alive = false;
        this.resetComponents();
        this.addComponent(this.getAsset(this.alive));
        this.y += 124;
    },

    resetComponents() {
        this.removeComponent(this.getAsset(true));
        this.removeComponent(this.getAsset(false));
        this.removeComponent("tree");
    },

    getAsset(isAlive) {
        const level = Crafty("LevelController").level;
        switch (level) {
            case LEVELS.SADNESS:
                return isAlive ? "tree_alive_sad" : "tree_dead_sad";
            case LEVELS.ANGER:
                return isAlive ? "tree_alive_angry" : "tree_dead_angry";
            case LEVELS.FEAR:
                return isAlive ? "tree_alive_fear" : "tree_dead_fear";
            default:
                console.error(`Cannot load sanity wall (tree) image for level ${level}`)
                return isAlive ? "tree_alive_sad" : "tree_dead_sad";
        }
    }
});
