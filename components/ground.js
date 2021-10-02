Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, Color, Collision");
        this.attr({x: 0, y: 0, w: 200, h: 20})
        this.color('#070')
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
  }
})
