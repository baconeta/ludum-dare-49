Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 40, y: 40});

	var ground1 = Crafty.e('Ground')
		.attr({x: 0, y: 780, w: 200, h: 20})

	var ground2 = Crafty.e('Ground')
		.attr({x: 400, y: 780, w: 200, h: 20})

	var ground3 = Crafty.e('Ground')
		.attr({x: 700, y: 580, w: 200, h: 20})

	makeCameraTrackEntity(player, 50)


});