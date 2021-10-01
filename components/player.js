Crafty.c("Player", {
	init: function() {
    this.addComponent("2D, DOM, Color, Collision, Twoway, Gravity");
    this.attr({x: 0, y: 0, w: 50, h: 50})
    this.color('#F00')
    this.twoway(200)
    this.gravity('Ground');
  }
})
