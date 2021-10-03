Crafty.defineScene('Level0', function () {
    Crafty.trigger("StartSadness");
    // hud
    const hud = Crafty.e('HUD');
    audioController.playTrack('sadness');

    Crafty.e("Background").place(-1000, -150, 12000, 1757, 1); // final variable is the level (1=sad, 2=anger, 3=fear)

	// ground
    const movementGround = Crafty.e('UnstableStrafingGround')
        .place(-700, 580)
        .movementDirection(DIRECTION.RIGHT)
        .movementSpeed(60)
        .maxMovementDistance(500)

    const movementGround2 = Crafty.e('UnstableStrafingGround')
        .place(-600, 450)
        .movementDirection(DIRECTION.RIGHT)
        .movementSpeed(20)
        .maxMovementDistance(300)

    const movementGround3 = Crafty.e('UnstableStrafingGround')
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
        .attr({x: 400, y: 550})

    // spikes
    const spikes = Crafty.e('SpikeBush')
        .place(750, 550)

    // sanity zones
    const sanityBooster = Crafty.e('SanityZone')
        .attr({x: -50, y: 675})
        .setMode(MODE.GAIN)
    const sanityDropper = Crafty.e('SanityZone')
        .attr({x: 100, y: 735})
        .setMode(MODE.LOSS)

    // sanity wall
    const sanityWall = Crafty.e('SanityWall')
        .place(340, 396, true)

    // enemies
    const enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 750, y: 520, w: 20, h: 20})
    const enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 340, y: 670, w: 20, h: 20})
    const enemyWalker2 = Crafty.e('EnemyWalker')
        .attr({x: -550, y: 400, w: 20, h: 20})

    // misc
    const player = Crafty.e('Player')
        .attr({x: 40, y: 760});

    const tempPortal = Crafty.e('LevelPortal')
        .place(-200, 1000);

    // misc setup
    makeCameraTrackEntity(player, 200)
    // Make the sanity bar follow the location of the player
    Crafty.e('LevelBounds').attr({x: -1000, y: -1900, w: 12000, h: 5000}).checkHits('Player');

    // notifcations
    var playerNotification = Crafty.e("PlayerNotification").attr({x: player.x - 150, y: player.y - 250});
    playerNotification.messagesReceived = all_messages;
    player.attach(playerNotification);
    Crafty.trigger("StartSadness");
});
