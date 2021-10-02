Crafty.c("NoClip", {
    init: function () {

        this.addComponent("2D, DOM, Color, Fourway");
        this.attr({x: 0, y: 0, w: 50, h: 50})
        this.color('#F00')
        this.fourway(2000);
        this.holding = ITEMS.NOTHING;
        this.bind('LandedOnGround', function (e) {
            e.trigger('LandedOnDecayGround')
        });

}})
