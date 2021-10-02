var COLOR = 'red'
var getAlphaChannel = (colorString) => {
    var rawAlpha = colorString.split(',')[3];
    var alpha = Number(rawAlpha.substring(0, rawAlpha.length - 1)).toFixed(2);
    return alpha;
}

Crafty.c("UnstableDecayGround", {
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Supportable");
        this.attr({x: 0, y: 0, w: 200, h: 20})
        this.color(COLOR)
        this.bind('LandedOnDecayGround', () => {
            Crafty.e('Delay').delay(() => {
                var currAlpha = getAlphaChannel(this.color());
                if (currAlpha > 0) {
                    this.color(COLOR, (currAlpha - 0.2));
                }
            }, 240, 5, () => {
                this.destroy();
            });

        })
    }
})
