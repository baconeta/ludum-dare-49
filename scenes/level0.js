Crafty.defineScene('Level0', function () {
	// hud
	const hud = Crafty.e('HUD');

	Crafty.e("Background").place(-1000,-1900,12000,12000, 1); // final variable is the level (1=sad, 2=anger, 3=fear)

	// ground
	const movementGround = Crafty.e('UnstableMovementGround')
		.place(-700, 580)
		.movementDirection(DIRECTION.RIGHT)
		.movementSpeed(60)
		.maxMovementDistance(500)

	const movementGround2 = Crafty.e('UnstableMovementGround')
		.place(-600, 450)
		.movementDirection(DIRECTION.RIGHT)
		.movementSpeed(20)
		.maxMovementDistance(300)

	const movementGround3 = Crafty.e('UnstableMovementGround')
		.place(-400, 320)
		.movementDirection(DIRECTION.RIGHT)
		.movementSpeed(200)
		.maxMovementDistance(500)

	const ground1 = Crafty.e('UnstableDroppingGround')
		.attr({x: -400, y: 720, w: 200, h: 75})
	const ground2 = Crafty.e('UnstableDroppingGround')
		.attr({x: -200, y: 780, w: 200, h: 75})
	const ground3 = Crafty.e('Ground')
		.place(0, 780)
	const ground4 = Crafty.e('Ground')
		.place(300, 680)
	const ground6 = Crafty.e('Ground')
		.place(700, 580)

	const upPlatform = Crafty.e('UnstableRaisingGround')
		.attr({x: 400, y:550})

	// spikes
	const spikes = Crafty.e('Spike')
		.place(750, 550)

	// sanity zones
	const sanityBooster = Crafty.e('SanityZone')
		.attr({x:-50, y:720, mode: MODE.GAIN})
	const sanityDropper = Crafty.e('SanityZone')
		.attr({x: 100, y: 720, mode: MODE.LOSS})

	// sanity wall
	const sanityWall = Crafty.e('SanityWall')
		.place(340, 396, true)

	// enemies
	const enemyJumper = Crafty.e('EnemyJumper')
		.attr({x: 750, y: 520, w: 20, h: 20})
	const enemyWalker = Crafty.e('EnemyWalker')
		.attr({x: 340, y: 670, w: 20, h: 20})

	// misc
	const player = Crafty.e('Player')
		.attr({x: 40, y: 760});

	makeCameraTrackEntity(player, 200)
	// Make the sanity bar follow the location of the player
	player.attach(hud);
});
