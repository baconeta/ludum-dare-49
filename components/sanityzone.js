Crafty.c("SanityZone", {
    init: function() {
        this.addComponent("2D, DOM, Color, Collision, Delay");
        this.attr({x: 0, y: 0, w: 100, h: 50})
        this.color('black', 0.2);

        if (this.checkHits("Player")){ //if collide hits with player
            this.bind("HitOn", function(hitData){
                this.delay(this.sanityDecrement, 500, -1);
                Crafty("Player").color('yellow');
            })
            this.bind("HitOff", function(comp){ //Player leaves zone
                this.cancelDelay(this.sanityDecrement);
                Crafty("Player").color('red');
            })
        }
    },

    sanityDecrement: () => {
            currentSanity = Crafty("SanityBar").sanity;
            currentSanity = currentSanity - 1;
            //Crafty("SanityBar").setSanity(currentSanity); //lower sanity by 1
            Crafty("SanityBar").sanity = currentSanity;
    }
})
