const DIRECTION = {LEFT: -1, RIGHT: 1};
const MULTIPLIERS = {
    LOW: 0.5,
    HIGH: 2.0,
};

Crafty.c("UnstableStrafingGround", {
    init: function () {
        this.addComponent("2D, DOM, Delay, Motion");
        this.attr({x: 0, y: 0, w: 200, h: 71});
        this.setType();
        this.collisionTop = Crafty.e("PlatformTop");
        this.attach(this.collisionTop);

        function restrictBounds(platform) {
            if (platform.x > platform.maxDistance + platform.originalX) {
                platform.invertMovementDirection();
            }
            if (platform.x < platform.originalX) {
                platform.invertMovementDirection();
            }
        }

        this.bind('LandedOnDecayGround', (e) => {
            // Platforms should always move when standing on them
            if (this.vx < this.speed && this.vx > -this.speed) {
                this.vx = this.speed * this.direction;
            }
        });

        this.bind('LiftedOffDecayGround', () => {
            // Platforms should reset (stop or keep moving) when the player leaves them
            let sanityState = Crafty("SanityBar").state;
            this.setVelocityUsingSanityState(sanityState);
        });

        this.leftMovementBoundary = Crafty.e("MovementBoundary");
        this.rightMovementBoundary = Crafty.e("MovementBoundary");
        this.attach(this.leftMovementBoundary);
        this.attach(this.rightMovementBoundary);

        // Defaults 
        this.maxDistance = 400;
        this.speed = 40;
        this.direction = DIRECTION.RIGHT;

        // Start initial movement
        this.vx = this.speed;

        // Enforce movement turn around points.
        this.bind('EnterFrame', () => {
            restrictBounds(this);
        });

        // Speed up when sanity is low.
        Crafty.bind("NEW_SANITY_STATE", (state) => {
            this.setVelocityUsingSanityState(state);
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;

        this.leftMovementBoundary.x = this.x - this.leftMovementBoundary.w + 40;
        this.leftMovementBoundary.y = y - 10;
        this.rightMovementBoundary.x = this.x + this.w - 50;
        this.rightMovementBoundary.y = y - 10;
        return this;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("pf_sad_strafing");
                this.w = 186;
                this.h = 71;
                break;
            case LEVELS.ANGER:
                this.addComponent("pf_angry_strafing");
                this.w = 194;
                this.h = 62;
                break;
            case LEVELS.FEAR:
                this.addComponent("pf_fear_strafing");
                this.w = 224;
                this.h = 65;
                break;
            default:
                console.error(`Cannot load platform image for level ${level}`)
                this.addComponent("pf_sad_strafing");
                this.w = 186;
                this.h = 71;
                break;
        }
    },

    resetComponents: function () {
        this.removeComponent("pf_sad_norm");
        this.removeComponent("pf_angry_normal");
        this.removeComponent("pf_fear_norm");
    },

    movementSpeed: function (speed) {
        this.vx = speed;
        this.speed = speed;
        return this;
    },

    movementDirection: function (direction) {
        this.direction = direction;
        this.vx *= direction;
        return this;
    },

    maxMovementDistance: function (maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    },

    invertMovementDirection: function () {
        this.direction *= -1;
        this.vx *= this.direction;
    },

    setVelocityUsingSanityState: function (state) {
        switch (state) {
            case STABILITY.HIGH:
                this.vx = 0.000_000_1 * this.direction; // Ensures that the platform direction persists.
                break;
            case STABILITY.MEDIUM:
                this.vx = this.speed * this.direction;
                break;
            case STABILITY.LOW:
                this.vx = this.speed * MULTIPLIERS.HIGH * this.direction;
                break;
        }
    }
})
