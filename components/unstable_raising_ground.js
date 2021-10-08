const VERTICAL_DIRECTION = {UP: -1, DOWN: 1};
const VERTICAL_MULTIPLIERS = {
    LOW: 0.5,
    HIGH: 2.0,
};

Crafty.c("UnstableRaisingGround", {
    init: function () {
        this.addComponent("2D, DOM, Delay, Motion");
        this.attr({x: 0, y: 0, w: 101, h: 160});
        this.collisionTop = Crafty.e("PlatformTop");
        this.attach(this.collisionTop);
        this.collisionTop.w = this.w;
        this.setType();

        function restrictBounds(platform) {
            if (platform.y < platform.originalY - platform.maxDistance) {
                platform.invertMovementDirection();
            }
            if (platform.y > platform.originalY + platform.maxDistance) {
                platform.invertMovementDirection();
            }
        }

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
        Crafty.bind("NEW_SANITY_STATE", (sanityState) => {
            this.updateSpeedMultiplier(sanityState);
        });

        this.bind('LandedOnDecayGround', () => {
            // Platforms should always move when standing on them
            if (this.speedMultiplier < 1) {
                this.speedMultiplier = 1;
                this.updateVelocity();
            }
        });

        this.bind('LiftedOffDecayGround', () => {
            // Platforms should reset (stop or keep moving) when the player leaves them
            let sanityState = Crafty("SanityBar").state;
            this.updateSpeedMultiplier(sanityState);
        });
    },

    place: function (x, y) {
        this.x = x;
        this.y = y;
        this.originalY = y;
        return this;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("pf_sad_raising");
                this.w = 101;
                this.h = 160;
                break;
            case LEVELS.ANGER:
                this.addComponent("pf_angry_raising");
                this.w = 93;
                this.h = 165;
                break;
            case LEVELS.FEAR:
                this.addComponent("pf_fear_raising");
                this.w = 110;
                this.h = 183;
                this.collisionTop.y = 12;
                break;
            default:
                console.error(`Cannot load platform image for level ${level}`)
                this.addComponent("pf_sad_raising");
                this.w = 101;
                this.h = 160;
                break;
        }
    },

    resetComponents: function () {
        this.removeComponent("pf_sad_norm");
        this.removeComponent("pf_angry_normal");
        this.removeComponent("pf_fear_norm");
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
        return this;
    },

    updateSpeedMultiplier: function (sanityState) {
        switch (sanityState) {
            case STABILITY.HIGH:
                this.speedMultiplier = 0.000_000_1;
                break;
            case STABILITY.MEDIUM:
                this.speedMultiplier = 1;
                break;
            case STABILITY.LOW:
                this.speedMultiplier = VERTICAL_MULTIPLIERS.HIGH;
                break;
        }
        this.updateVelocity();
        return this;
    },

    updateVelocity: function () {
        this.vy = this.speed * this.direction * this.speedMultiplier;
        return this;
    }
});
