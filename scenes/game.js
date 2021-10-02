Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 40, y: 440});

	const hud = Crafty.e("HUD");

	var ground1 = Crafty.e('Ground')
		.place(0, 780)

	var ground2 = Crafty.e('UnstableDroppingGround')
		.attr({x: 400, y: 780, w: 200, h: 20})

	var ground3 = Crafty.e('Ground')
		.place(700, 580)

	var enemyJumper = Crafty.e('EnemyJumper')
		.attr({x: 750, y: 520, w: 20, h: 20})
		
	var zone1 = Crafty.e("SanityZone")
		.attr({x:0, y:770, w: 100, h:10})


	var enemyWalker = Crafty.e('EnemyWalker')
		.attr({x: 420, y: 720, w: 20, h: 20})

	makeCameraTrackEntity(player, 50)
	// Make the sanity bar follow the location of the player
	player.attach(hud);
});
