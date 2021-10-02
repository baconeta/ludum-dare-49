Crafty.c("UnstableRotatingGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Solid, AngularMotion");
        this.attr({ rotation: 0, drotation: 0, vrotation: 0})
        this.color('red')
        this.bind('LandedOnDecayGround', () => {
            if (this.drotation === 0) this.drotation = 100;
            if (this.vrotation === 0) this.vrotation = 100
        });
    }
})
