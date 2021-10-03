const DIRECTION = {"LEFT":-1, "RIGHT": 1};

Crafty.c("UnstableMovementGround", {
    init: function () {
        this.addComponent("2D, DOM, Delay, Motion, pf_sad_sideways");
        this.attr({x: 0, y: 0, w: 200, h: 71})
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        
        function restrictBounds(platform) {
            if(platform.x > platform.maxDistance + platform.originalX) {
                platform.invertMovementDirection();
            }
            if(platform.x < platform.originalX) {
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
        this.direction = DIRECTION.RIGHT;

        // Start initial movement
        this.vx = this.speed;

        // Enforce movement turn around points.
        this.bind('EnterFrame', () => {
            restrictBounds(this);
        })
    },

    place: function(x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        return this;
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
    }
})
