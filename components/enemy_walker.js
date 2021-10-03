Crafty.c("EnemyWalker", {
    init: function() {
        this.addComponent("2D, DOM, Gravity, Collision, SpriteAnimation, Delay, Enemy, enemy_left");
        this.attr({x: 0, y: 0, w: 60, h: 60});
        this.gravity('Solid');
        this.vx = 50;
        this.lastTurnPoint = 10000;
        this.onHit('MovementBoundary', (e) => {
            this.inverseDirection();
            
        });
    },

    inverseDirection: function() {
        // If the platform is moving it can sometimes glitch so this makes 
        // sure the enemy has at least walked 20 pixels before turning around again.
        if( this.x < this.lastTurnPoint - 50 || this.x > this.lastTurnPoint + 50) {
            this.vx *= -1;
            this.lastTurnPoint = this.x;
        }
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