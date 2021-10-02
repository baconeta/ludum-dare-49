Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 40, y: 40});

	const hud = Crafty.e("HUD");

	var ground1 = Crafty.e('UnstableDroppingGround')
		.attr({x: 0, y: 780, w: 200, h: 20})

	var ground2 = Crafty.e('Ground')
		.attr({x: 400, y: 780, w: 200, h: 20})

	var ground3 = Crafty.e('Ground')
		.attr({x: 700, y: 580, w: 200, h: 20})

	var enemyJumper = Crafty.e('EnemyJumper')
		.attr({x: 750, y: 520, w: 20, h: 20})

	const sanityBooster = Crafty.e('SanityBooster')
		.attr({x: 800, y: 570})

	// Example of the sanity dropper.
	/*
	const sanityDropper = Crafty.e('SanityDropper')
		.attr({x: 800, y: 570, w: 50, h: 50})*/

	makeCameraTrackEntity(player, 50)
	// Make the sanity bar follow the location of the player
	player.attach(hud);
});
