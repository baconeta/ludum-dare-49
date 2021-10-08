Crafty.c("Ground", {
    init: function () {
        this.addComponent("2D, DOM");
        this.collisionTop = Crafty.e("PlatformTop")
        this.collisionTop.w = this.w;
        this.attach(this.collisionTop);
        this.setType();
        this.leftMovementBoundary = Crafty.e("MovementBoundary");
        this.rightMovementBoundary = Crafty.e("MovementBoundary");
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;

        this.leftMovementBoundary.x = this.x - this.leftMovementBoundary.w + 20;
        this.leftMovementBoundary.y = y - 20;
        this.rightMovementBoundary.x = this.x + this.w - 30;
        this.rightMovementBoundary.y = y - 20;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("pf_sad_normal");
                this.w = 199;
                this.h = 75;
                break;
            case LEVELS.ANGER:
                this.addComponent("pf_angry_normal");
                this.w = 203;
                this.h = 117;
                break;
            case LEVELS.FEAR:
                this.addComponent("pf_fear_normal");
                this.w = 267;
                this.h = 72;
                this.collisionTop.y = 12;
                break;
            default:
                console.error(`Cannot load platform image for level ${level}`)
                this.addComponent("pf_sad_normal");
                this.w = 199;
                this.h = 75;
                break;
        }
    },

    resetComponents: function () {
        this.removeComponent("pf_sad_norm");
        this.removeComponent("pf_angry_normal");
        this.removeComponent("pf_fear_norm");
    }

});

Crafty.c("GroundLong", {
    init: function () {
        this.addComponent("2D, DOM");
        this.collisionTop = Crafty.e("PlatformTop")
        this.collisionTop.w = this.w;
        this.attach(this.collisionTop);
        this.setType();
        this.leftMovementBoundary = Crafty.e("MovementBoundary");
        this.rightMovementBoundary = Crafty.e("MovementBoundary");
    },

    place(x, y) {
        this.x = x;
        this.y = y;

        this.leftMovementBoundary.x = this.x - this.leftMovementBoundary.w;
        this.leftMovementBoundary.y = y - this.h;
        this.rightMovementBoundary.x = this.x + this.w;
        this.rightMovementBoundary.y = y - this.h;

        return this;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("pf_sad_long");
                this.w = 349;
                this.h = 87;
                break;
            case LEVELS.ANGER:
                this.addComponent("pf_angry_long");
                this.w = 334;
                this.h = 68;
                break;
            case LEVELS.FEAR:
                this.addComponent("pf_fear_long");
                this.w = 351;
                this.h = 86;
                this.collisionTop.y = 12;
                break;
            default:
                console.error(`Cannot load platform image for level ${level}`)
                this.addComponent("pf_sad_long");
                this.w = 349;
                this.h = 87;
                break;
        }
        return this;
    },

    resetComponents: function () {
        this.removeComponent("pf_sad_long");
        this.removeComponent("pf_angry_long");
        this.removeComponent("pf_fear_long");
        return this;
    }
})
