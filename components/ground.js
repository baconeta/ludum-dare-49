Crafty.c("Ground", {
	init: function() {
        this.addComponent("2D, DOM, Collision, Solid, pf_sad_norm");
        this.attr({x: 0, y: 0, w: 199, h: 75})
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

Crafty.c("GroundLong", {
    init: function() {
        this.addComponent("2D, DOM, Collision, Solid, pf_sad_long");
        this.attr({x: 0, y: 0, w: 349, h: 87})
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
