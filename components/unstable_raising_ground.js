var COLOR = 'red';

Crafty.c("UnstableRaisingGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Supportable, Solid, Gravity, Motion");
        this.attr({x: 0, y: 0, w: 200, h: 20, ay: 0})
        this.color(COLOR)
        this.bind('LandedOnDecayGround', () => {
            Crafty.e('Delay').delay(() => {
                var currAlpha = getAlphaChannel(this.color());
                if (currAlpha > 0) {
                    this.color(COLOR, (currAlpha - 0.1));
                }
            }, 750, 5)
            this.ay = -100
            this.color(COLOR, 0.5)
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
                this.color(COLOR, 1)
            }

            // stop component once it's met the origin
            if (this.y > this.originY && this.returnToOrigin) {
                this.resetMotion();
                this.returnToOrigin = false;
                this.ay = 0;
                // make sure it's exactly at it's origin
                this.move('n', this.y - this.originY)
                // sometimes the color doesn't reset properly
                this.color(COLOR, 1);
            }
        })
    }
})
