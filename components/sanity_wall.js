Crafty.c("SanityWall", {
    init: function() {
        this.addComponent("2D, DOM, Color, Solid");
        this.attr({x: 0, y: 0, w: 20, h: 200});
        this.alpha = 1.00;
        this.color('black');

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            console.log("NEW_SANITY_STATE triggered!", newState);
            if (newState === "HIGH") {
                console.log("OPEN")
                this.alpha = 0.15;
                this.removeComponent("Solid");
            }
            if (newState === "MEDIUM" || newState === "LOW") {
                console.log("CLOSED")
                this.alpha = 1.00;
                this.addComponent("Solid");
            }
        });
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})
