const VERTICAL_DIRECTION = { UP: -1, DOWN: 1 };
const VERTICAL_MULTIPLIERS = {
    LOW: 0.5,
    HIGH: 2.0,
};

Crafty.c("UnstableRaisingGround2", {
    init: function () {
        this.addComponent("2D, DOM, Delay, Motion, pf_sad_up");
        this.attr({x: 0, y: 0, w: 101, h: 160});
        this.collisionTop = Crafty.e("PlatformTop");
        this.attach(this.collisionTop);
        this.collisionTop.w = 70;

        function restrictBounds(platform) {
            if (platform.y < platform.originalY - platform.maxDistance) {
                platform.invertMovementDirection();
            }
            if (platform.y > platform.originalY + platform.maxDistance) {
                platform.invertMovementDirection();
            }
        }

        // This changes direction whenever the player lands on it
        // Was mostly for debugging but we can use it too..
        // this.bind('LandedOnDecayGround', (e) => {
        //     this.invertMovementDirection();
        // })

        // Defaults 
        this.maxDistance = 400;
        this.speed = 40;
        this.direction = VERTICAL_DIRECTION.UP;
        this.speedMultiplier = 1;

        // Start initial movement
        this.updateVelocity();

        // Enforce movement turn around points.
        this.bind('EnterFrame', () => {
            restrictBounds(this);
        });

        // Speed up when sanity is low.
        Crafty.bind("NEW_SANITY_STATE", (state) => {
            switch (state) {
                case SANITY_STATE.HIGH:
                    this.speedMultiplier = 0.000_000_1;
                    break;
                case SANITY_STATE.MEDIUM:
                    this.speedMultiplier = 1;
                    break;
                case SANITY_STATE.LOW:
                    this.speedMultiplier = VERTICAL_MULTIPLIERS.HIGH;
                    break;
            }
            this.updateVelocity();
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;

        return this;
    },

    movementSpeed: function (speed) {
        this.speed = speed;
        this.updateVelocity();
        return this;
    },

    movementDirection: function (direction) {
        this.direction = direction;
        this.updateVelocity();
        return this;
    },

    maxMovementDistance: function (maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    },

    invertMovementDirection: function () {
        this.direction *= -1;
        this.updateVelocity();
    },

    updateVelocity: function () {
        this.vy = this.speed * this.direction * this.speedMultiplier;
    }
});
