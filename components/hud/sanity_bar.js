Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color, Delay");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 180});
        this.alpha = 0.85;
        this.color('#bfff00');

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            // TODO Change the sanity bar appearance here.
            switch (newState) {
                case STABILITY.LOW:
                    this.color('#c20034');
                    break;
                case STABILITY.MEDIUM:
                    this.color('#ffea00');
                    break;
                case STABILITY.HIGH:
                    this.color('#55ff00');
                    break;
            }
        });
    },
})
