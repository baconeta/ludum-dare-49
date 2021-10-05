Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Delay, Image, stone_yellow");
        this.attr({x: 0, y: 0, z: 1500, w: 304/4, h: 318/4});
        this.alpha = 0.85;

        Crafty.bind("EnterFrame", () => {
            // this.removeComponent("stone_red, stone_yellow, stone_green");
            if (DEBUG) {
                console.debug({"state": Crafty("SanityController").state, "sanity": Crafty("SanityController").sanity});
            }
            switch (Crafty("SanityController").state) {
                case STABILITY.LOW:
                    this.image("assets/images/stone_red.png");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
                case STABILITY.MEDIUM:
                    this.image("assets/images/stone_yellow.png");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
                case STABILITY.HIGH:
                    this.image("assets/images/stone_green.png");
                    this.w = 304/4;
                    this.h = 318/4;
                    break;
            };
        });
    },
});
