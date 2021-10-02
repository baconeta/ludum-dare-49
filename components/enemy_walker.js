Crafty.c("EnemyWalker", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Collision, Delay, Enemy");
        this.attr({x: 0, y: 0, w: 200, h: 20});
        this.color('#333');
        this.gravity('Ground');
        this.vx = 200;
        this.onHit('MovementBoundary', () => {
            this.inverseDirection();
        });
    },
    inverseDirection: function() {
        this.vx *= -1;
    }
})