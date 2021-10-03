Crafty.c("Spike", {
    init: function() {
        this.addComponent("2D, DOM, Collision, Color, bush_spiky");
        this.attr({x: 0, y: 0, w: 8, h: 25});
        this.color('red');
        this.lethal = true;

        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            if (newState === SANITY_STATE.HIGH) {
                if (this.lethal === true) {
                    this.removeComponent("bush_spiky");
                    this.addComponent("bush_berries");
                    this.color('green');
                    //this.y -= 124;
                    this.lethal = false;
                }
            } else if (newState === SANITY_STATE.MEDIUM || newState === SANITY_STATE.LOW) {
                if (this.lethal === false) {
                    this.addComponent("bush_spiky");
                    this.removeComponent("bush_berries");
                    this.color('red');
                    //this.y += 124;
                    this.lethal = true;
                }
            }
        });

        this.onHit("PlayerBody", function () {
            if (this.lethal === true) {
                console.log('You fell on a spiky berry bush and died');
                Crafty.trigger("ResetLevel");
            } else {
                console.info(`You fell on a berry bush without spikes!`);
            }
        });
    },

    place(x, y) {
        this.x = x;
        this.y = y;
    }
})