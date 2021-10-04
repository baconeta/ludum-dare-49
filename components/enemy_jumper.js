const JUMP_SPEEDS = {
    NORMAL: 300,
    FAST: 450,
};

Crafty.c("EnemyJumper", {
    init: function() {
        this.addComponent("2D, DOM, Color, Gravity, Delay, Jumper, Collision, Enemy");
        this.attr({x: 0, y: 0, w: 20, h: 20});
        this.color('#007');
        this.gravity('Ground');
        this.jumpSpeed(JUMP_SPEEDS.NORMAL);
        this.jumping = false;
        this.bind("LandedOnGround", function () {
                this.delay(this.jump, 500, 0);
        });
        Crafty.bind("NEW_SANITY_STATE", (newState) => {
            switch (newState) {
                case STABILITY.HIGH:
                    this.jumpSpeed(JUMP_SPEEDS.FAST);
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
                case STABILITY.MEDIUM:
                    this.jumpSpeed(JUMP_SPEEDS.NORMAL);
                    this.addComponent("Enemy");
                    this.alpha = 1.00;
                    break;
                case STABILITY.LOW:
                    this.jumpSpeed(0);
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
});
