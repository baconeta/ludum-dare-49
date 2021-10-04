const JUMP_SPEEDS = {
    NORMAL: 300,
    FAST: 450,
};

Crafty.c("EnemyJumper", {
    init: function () {
        this.addComponent("2D, DOM, SpriteAnimation, Gravity, Delay, Jumper, Collision, Enemy, enemy_facing_left");
        this.attr({x: 0, y: 0, w: 52, h: 80});
        this.gravity('Ground');
        this.jumpSpeed(JUMP_SPEEDS.NORMAL);
        this.jumping = false;
        this.bind("LandedOnGround", function () {
            this.delay(this.jump, 500, 0);
        });
        this.reel("enemy_facing_left", 1500, 0, 0, 30, 15);
        this.animate("enemy_facing_left", -1);
        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            switch (newState) {
                case STABILITY.HIGH:
                    this.jumpSpeed(0);
                    this.removeComponent("Enemy");
                    this.alpha = 0.00;
                    break;
                case STABILITY.MEDIUM:
                    this.jumpSpeed(JUMP_SPEEDS.NORMAL);
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
                case STABILITY.LOW:
                    this.jumpSpeed(JUMP_SPEEDS.FAST);
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
            }
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
});
