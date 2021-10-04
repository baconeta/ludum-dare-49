Crafty.c("EnemyJumper", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Delay, Collision, Enemy");
        this.attr({x: 0, y: 0, w: 20, h: 20});
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
    place: function (x, y) {
        this.x = x;
        this.y = y;
    },

    jump: function() {
        this.vy -= 300;
        this.jumping = false;
    }
})
