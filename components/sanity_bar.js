const MIN_SANITY = 0;
const LOW_SANITY = 30;
const STARTING_SANITY = 50;
const HIGH_SANITY = 70;
const MAX_SANITY = 100;

Crafty.c("SanityBar", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.attr({x: 0, y: 0, w: 50, h: 180});
        this.color('#55ff00');
        this.sanity = STARTING_SANITY;
        this.state = "MEDIUM";
    }
})
