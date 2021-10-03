Crafty.c("SanityWall", {
    init: function () {
        this.addComponent("2D, DOM");
        this.attr({w: 74, h: 284});

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === SanityState.High) {
                this.removeComponent("tree_door_stable");
                this.removeComponent("Solid");
                this.addComponent("tree_door_unstable");
                this.y += 124;
            } else if (newState === SanityState.Low) {
                this.removeComponent("tree_door_unstable");
                this.addComponent("tree_door_stable");
                this.addComponent("Solid");
                this.y -= 124;
            }
        });
    },

    place(x, y, stable) {
        this.x = x;
        this.y = y;
        if (stable) {
            this.addComponent("tree_door_stable, Solid");
        } else {
            this.addComponent("tree_door_unstable");
        }
    }
})
