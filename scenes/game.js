Crafty.defineScene("Game", function() {
	const unstableGround2 = Crafty.e('UnstableDroppingGround')
		.attr({x: -400, y: 780, w: 200, h: 20})

	const player = Crafty.e("Player")
		.attr({x : 40, y: 440});

	const hud = Crafty.e("HUD");

	const ground1 = Crafty.e('Ground')
		.place(0, 780)

	const ground3 = Crafty.e('Ground')
		.place(300, 680)

	const ground4 = Crafty.e('Ground')
		.place(700, 580)

	const enemyJumper = Crafty.e('EnemyJumper')
		.attr({x: 750, y: 520, w: 20, h: 20})

	const enemyWalker = Crafty.e('EnemyWalker')
		.attr({x: 340, y: 670, w: 20, h: 20})

	const sanityBooster = Crafty.e("SanityZone")
		.attr({x:-50, y:720, mode: MODE.LOSS})

	const sanityDropper = Crafty.e('SanityZone')
		.attr({x: 100, y: 720, mode: MODE.GAIN})

	const sanityWall = Crafty.e("SanityWall")
		.attr({x: 750, y: 520})

	// Example of the sanity dropper.
	/*
	const sanityDropper = Crafty.e('SanityDropper')
		.attr({x: 800, y: 570, w: 50, h: 50})*/

	makeCameraTrackEntity(player, 50)
	// Make the sanity bar follow the location of the player
	player.attach(hud);
});
