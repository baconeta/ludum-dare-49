Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, DOM, Solid, tree_door_stable");
        this.attr({w: 74, h: 284});
        this.blocking = true;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === SANITY_STATE.High || newState === SANITY_STATE.Medium) {
                if (this.blocking === false) {
                    this.addComponent("Solid");
                    this.addComponent("tree_door_stable");
                    this.removeComponent("tree_door_unstable");
                    this.y -= 124;
                    this.blocking = true;
                }
            } else if (newState === SANITY_STATE.Insane) {
                if (this.blocking === true) {
                    this.removeComponent("Solid");
                    this.removeComponent("tree_door_stable");
                    this.addComponent("tree_door_unstable");
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
