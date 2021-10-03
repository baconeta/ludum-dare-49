const GAIN_RATE = 3;
const LOSS_RATE = 3;
const MODE = { "GAIN": true, "LOSS": false };

Crafty.c("SanityZone", {
    init: function() {
        this.addComponent("2D, DOM, Collision, Delay, gain_sanity_zone");
        this.attr({x: 0, y: 0, w: 224, h: 43})
        this.mode = MODE.GAIN;
        this.setImage();

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
        Crafty.trigger((MODE ? "GAIN" : "LOSS") +"SANITY");
        Crafty("SanityBar").setSanity(Crafty("SanityBar").sanity + (this.mode ? GAIN_RATE : -LOSS_RATE));
    },

    setMode: function (mode) {
        this.mode = mode;
        this.setImage();
    },

    setImage: function () {
        if(this.mode) {
            this.removeComponent("loss_sanity_zone");
            this.addComponent("gain_sanity_zone");
           this.w = 184;
            this.h = 106;
        } else {
            this.removeComponent("gain_sanity_zone");
            this.addComponent("loss_sanity_zone");
             this.w = 224;
            this.h = 43;
        }
    }
})
