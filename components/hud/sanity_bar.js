Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Delay, stone_yellow");
        this.attr({x: 0, y: 0, z: 1500, w: 304/4, h: 318/4});
        this.alpha = 0.85;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            this.removeComponent("stone_red, stone_yellow, stone_green");
            if (DEBUG) {
                console.debug({"state": Crafty("SanityController").state, "sanity": Crafty("SanityController").sanity});
            }
            switch (newState) {
                case STABILITY.LOW:
                    this.addComponent("stone_red");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
                case STABILITY.MEDIUM:
                    this.addComponent("stone_yellow");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
                case STABILITY.HIGH:
                    this.addComponent("stone_green");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
            };
        });
    },
});
