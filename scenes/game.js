Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 40, y: 440});

	var sanityBar = Crafty.e("SanityBar")
		.attr({x : 1125, y : 100});

	var ground1 = Crafty.e('Ground')
		.place(0, 780)

	var ground2 = Crafty.e('Ground')
		.place(400, 780)

	var ground3 = Crafty.e('Ground')
		.place(700, 580)

	var enemyJumper = Crafty.e('EnemyJumper')
		.attr({x: 750, y: 520, w: 20, h: 20})

	var enemyWalker = Crafty.e('EnemyWalker')
		.attr({x: 420, y: 720, w: 20, h: 20})

	makeCameraTrackEntity(player, 50)
});
