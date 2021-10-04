Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, DOM, tree, tree_alive_sad");
        this.attr({w: 74, h: 284});
        this.blocking = true;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === STABILITY.HIGH || newState === STABILITY.MEDIUM) {
                if (this.blocking === false) {
                    this.addComponent("tree");
                    this.addComponent("tree_alive_sad");
                    this.removeComponent("tree_dead_sad");
                    this.y -= 124;
                    this.blocking = true;
                }
            } else if (newState === STABILITY.LOW) {
                if (this.blocking === true) {
                    this.removeComponent("tree");
                    this.removeComponent("tree_alive_sad");
                    this.addComponent("tree_dead_sad");
                    this.y += 124;
                    this.blocking = false;
                }
            }
        });
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})
