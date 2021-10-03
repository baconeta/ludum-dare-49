const GAIN_RATE = 3;
const LOSS_RATE = 3;
const MODE = { "GAIN": true, "LOSS": false };

Crafty.c("SanityZone", {
    init: function() {
        this.addComponent("2D, DOM, Color, Collision, Delay");
        this.attr({x: 0, y: 0, w: 100, h: 50})
        this.color('black', 0.2);
        this.mode = MODE.GAIN;

        if (this.checkHits("PlayerBody")){ //if collide hits with player
            this.bind("HitOn", function() {
                this.delay(this.alterSanity, 250, -1);
            })
            this.bind("HitOff", function() { //Player leaves zone
                this.cancelDelay(this.alterSanity);
            })
        }
    },

    alterSanity: function() {
        Crafty("SanityBar").setSanity(Crafty("SanityBar").sanity + (this.mode ? GAIN_RATE : -LOSS_RATE));
    },
})
