var COLOR = 'red';
var DEFAULT_RAISE_HEIGHT = -500; // -y is 'north'/'up'
var DEFAULT_RAISE_SPEED = -100;

Crafty.c("UnstableRaisingGround", {
    init: function () {
        this.addComponent("2D, DOM, Gravity, Motion, pf_sad_up");
        this.attr({x: 0, y: 0, w: 101, h: 160, ay: 0})
        this.raiseHeight = DEFAULT_RAISE_HEIGHT;
        this.raiseSpeed = DEFAULT_RAISE_SPEED;
        this.collisionTop = Crafty.e("PlatformTop")
        this.attach(this.collisionTop);
        this.collisionTop.w = 70;
        this.bind('LandedOnDecayGround', () => this.ay = this.raiseSpeed)
        this.originY = 0;
        this.returnToOrigin = false;

        this.bind('Move', (e) => {
            // setup originY
            if (this.originY === 0 && this.y !== 0) this.originY = this.y;

            // move component back down
            if (this.y < this.raiseHeight && this.y !== 0 && !this.returnToOrigin) {
                this.resetMotion();
                this.ay = -this.raiseSpeed;
                this.returnToOrigin = true;
            }

            // stop component once it's met the origin
            if (this.y > this.originY && this.returnToOrigin) {
                this.resetMotion();
                this.returnToOrigin = false;
                this.ay = 0;
                // make sure it's exactly at it's origin
                this.move('n', this.y - this.originY)
            }
        })
    },
    setRaise: function (raiseHeight, raiseSpeed) {
        this.raiseHeight = raiseHeight;
        this.raiseSpeed = raiseSpeed;
        return this;
    },
})
