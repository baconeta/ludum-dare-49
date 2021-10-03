Crafty.c("EnemyJumper", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Delay, SpriteAnimation, Collision, Enemy, enemy_left");
        this.attr({x: 0, y: 0, w: 60, h: 60});
        // this.color('#007');
        this.gravity('Ground');
        this.jumping = false;
        this.bind("LandedOnGround", function () {
            if(!this.jumping) {
                this.jumping = true;
                this.delay(this.jump, 500, 0);
            }
        })
        this.setReelSpeed()
        this.animate("walking_left", -1);
    },
    jump: function() {
        this.vy -= 300;
        this.jumping = false;
    },

    setReelSpeed: function () {
        this.reel("walking_right", 1000, [
            [4, 0], [3, 0], [0, 0], [3, 0]
        ])

        this.reel("walking_left", 1000, [
            [1, 0], [0, 0], [2, 0], [0, 0]
        ])
    }
})
