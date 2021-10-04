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
        switch (Crafty("LevelController").level) {
            case LEVELS.SADNESS:
                this.addComponent("tree");
                this.addComponent("tree_alive_sad");
                this.removeComponent("tree_dead_sad");
                this.y -= 124;
                this.alive = true;
                break;
            case LEVELS.ANGER:
                break;
            case LEVELS.FEAR:
            default:
                break;
        }
    },

    makeDead() {
        if (this.alive === false) {
            return;
        }
        switch (Crafty("LevelController").level) {
            case LEVELS.SADNESS:
                this.removeComponent("tree");
                this.removeComponent("tree_alive_sad");
                this.addComponent("tree_dead_sad");
                this.y += 124;
                this.alive = false;
                break;
            case LEVELS.ANGER:
                break;
            case LEVELS.FEAR:
            default:
                break;
        }
    },
});
