const GAIN_RATE = 3;
const LOSS_RATE = 3;
const MODE = { "GAIN": true, "LOSS": false };

Crafty.c("SanityZone", {
    init: function() {
        this.addComponent("2D, DOM, Collision, Delay, gain_sanity_zone");
        this.attr({x: 0, y: 0, w: 224, h: 43})
        this.mode = MODE.GAIN;
        this.setImage();

        if (this.checkHits("PlayerBody")){ // If collide hits with player.
            this.bind("HitOn", function() { // Player enters zone.
                this.trigger("ALTER_SANITY_RATE", MODE ? GAIN_RATE : -LOSS_RATE);
            })
            this.bind("HitOff", function() { // Player leaves zone.
                this.trigger("ALTER_SANITY_RATE", MODE ? -GAIN_RATE : LOSS_RATE);
            })
        }
    },

    alterSanity: function() {
        // TODO Investigate loose-ends from this trigger.
        Crafty.trigger((MODE ? "GAIN" : "LOSS") +"SANITY");
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
