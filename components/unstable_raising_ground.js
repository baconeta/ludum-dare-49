var COLOR = 'red';

Crafty.c("UnstableRaisingGround", {
    init: function () {
        this.addComponent("2D, DOM, Collision, Supportable, Solid, Gravity, Motion, pf_sad_up");
        this.attr({x: 0, y: 0, w: 101, h: 160, ay: 0})
        this.bind('LandedOnDecayGround', () => {
            this.ay = -100
        })
        this.originY = 0;
        this.returnToOrigin = false;
        this.bind('Move', (e) => {
            // setup originY
            if (this.originY === 0 && this.y !== 0) this.originY = this.y;

            // move component back down
            if (this.y < -500 && this.y !== 0 && !this.returnToOrigin) {
                this.resetMotion();
                this.ay = 100;
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
    }
})
