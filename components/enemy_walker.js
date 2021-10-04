Crafty.c("EnemyWalker", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Collision, Delay, Enemy");
        this.attr({x: 0, y: 0, w: 200, h: 20});
        this.color('#333');
        this.gravity('Solid');
        this.vx = 50;
        this.lastTurnPoint = 10000;
        this.onHit('MovementBoundary', (e) => {
            this.inverseDirection();
            
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
    },
    
    inverseDirection: function() {
        // If the platform is moving it can sometimes glitch so this makes 
        // sure the enemy has at least walked 20 pixels before turning around again.
        if( this.x < this.lastTurnPoint - 20 || this.x > this.lastTurnPoint + 20) {
            this.vx *= -1;
            this.lastTurnPoint = this.x;
        }
    }
})