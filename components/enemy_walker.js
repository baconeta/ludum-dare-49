const SPEEDS = {
    NORMAL: 40,
    FAST: 80,
};

Crafty.c("EnemyWalker", {
    init: function() {
        this.addComponent("2D, DOM, SpriteAnimation, Gravity, Collision, Delay, Enemy, enemy_facing_right");
        this.attr({x: 0, y: 0, w: 69, h: 106});
        this.gravity('Solid');
        this.vx = SPEEDS.NORMAL;
        this.lastTurnPoint = 10000;
        this.direction = "right";
        this.onHit('MovementBoundary', () => {
            this.inverseDirection();
        });
        this.setReels();
        this.animate("enemy_facing_left", -1);
        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            switch (newState) {
                case STABILITY.HIGH:
                    this.vx = SPEEDS.FAST;
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
                case STABILITY.MEDIUM:
                    this.vx = SPEEDS.NORMAL;
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
                case STABILITY.LOW:
                    this.vx = 0;
                    this.removeComponent("Enemy");
                    this.alpha = 0.00;
                    break;
            }
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
            if (this.direction === "right") {
                this.direction = "left";
                this.addComponent("enemy_facing_left");
                this.removeComponent("enemy_facing_right");
                this.animate("enemy_facing_left", -1);
            } else {
                this.direction = "right";
                this.addComponent("enemy_facing_right");
                this.removeComponent("enemy_facing_left");
                this.animate("enemy_facing_right", -1);
            }
        }
    },

    setReels: function () {
        this.reel("enemy_facing_left", 1500, 0, 0, 30, 15);
        this.reel("enemy_facing_right", 1500, 0, 0, 30, 15);
    },
})