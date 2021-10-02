Crafty.c("EnemyJumper", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Delay");
        this.attr({x: 0, y: 0, w: 200, h: 20});
        this.color('#007');
        this.gravity('Ground');
        this.jumping = false;
        this.bind("LandedOnGround", function () {
            if(!this.jumping) {
                this.jumping = true;
                this.delay(this.jump, 500, 0);
            }
        })
    },
    jump: function() {
        this.vy -= 300;
        this.jumping = false;
    }
})
