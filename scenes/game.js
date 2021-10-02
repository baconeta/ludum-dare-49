Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 0, y: 750});

	var sanityBar = Crafty.e("SanityBar")
		.attr({x : 1125, y : 100});

	var ground1 = Crafty.e('Ground')
		.attr({x: 0, y: 780, w: 200, h: 20})

	var ground2 = Crafty.e('Ground')
		.attr({x: 400, y: 780, w: 200, h: 20})

	var ground3 = Crafty.e('Ground')
		.attr({x: 700, y: 580, w: 200, h: 20})

	var zone1 = Crafty.e("SanityZone")
		.attr({x:0, y:770, w: 100, h:10})

	makeCameraTrackEntity(player, 50)


});