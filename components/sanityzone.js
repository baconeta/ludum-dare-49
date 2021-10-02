Crafty.c("SanityZone", {
    init: function() {
        this.addComponent("2D, DOM, Color, Collision");
        this.attr({x: 0, y: 0, w: 100, h: 50})
        this.color('black', 0.2);

        this.checkHits("Player")
        this.bind("HitOn", function(hitData){
            Crafty("Player").color('yellow');
            console.log(hitData);
        })
        this.bind("HitOff", function(comp){
            Crafty("Player").color('red');
        })





    }
})