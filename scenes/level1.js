Crafty.defineScene("Level1", function () {
    const hud = Crafty.e("HUD");
    audioController.playTrack('sadness');
    gtag('event', 'start_lvl_1', {'start_lvl_1': 1});
    Crafty.e("Background").place(-1000, -1600);

// Assets

    // Obstacles
    //Raising Platform
    // var raisingGround = Crafty.e('UnstableRaisingGround')
    //     .place(x, y)
    //     .movementDirection(VERTICAL_DIRECTION.UP)
    //     .maxMovementDistance(200)
    //     .movementSpeed(100);

    //Dropping Platform
    // var droppingGround = Crafty.e('UnstableDroppingGround')
    //     .place(x, y)

    //Moving Platform
    // var movingPlatform = Crafty.e('UnstableStrafingGround')
    //     .place(x, y)
    //Spike
    // var spike = Crafty.e('SpikeBush')
    //     .place(x, y)

    // Terrain

    //Short
    //var platform = Crafty.e('Ground')
    //    .place(x, y)
    //Long
    //var platform = Crafty.e('GroundLong')
    //    .place(x, y)


    // Enemies
    //Boundary
    // var boundary = Crafty.e('MovementBoundary')
    //     .place(x, y).movementSpeed(200).maxMovementDistance(300)
    //Walker
    // var enemyWalker = Crafty.e('EnemyWalker')
    //     .place(x, y)
    //Jumper
    // var enemyJumper = Crafty.e('EnemyJumper')
    //     .place(x, y)

    // Interactables
    //Door
    // var door = Crafty.e('SanityWall')
    //     .place(x, y)
    //Sanity Zone Bad
    // var sanityZoneBad = Crafty.e('SanityZone')
    //     .place(x, y)
    //Sanity Zone Good
    // var sanityZoneGood = Crafty.e('SanityZone')
    //     .place(x, y)
    //Level Portal
    // var portal = Crafty.e('LevelPortal')
    //     .place(x, y)d

    //Pickups
    //Booster
    // var sanityBooster = Crafty.e('SanityBooster')
    //      .place( 0, 0)
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .place( 0, 0)

    //Level Design Tools
    //No Clip (True or False) *** REMEMBER TO COMMENT OUT BEFORE A MERGE TO MASTER ***
    noclip = false


    //Map Start
    var platformLong = Crafty.e('GroundLong')
        .place(0, -0)
    var platformLong = Crafty.e('GroundLong')
        .place(350, -150)
    var platformShort = Crafty.e('Ground')
        .place(775, -75)
    var platformLong = Crafty.e('GroundLong')
        .place(1050, -0)
    //Dropping Platform
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(1425, -40)
    var platform = Crafty.e('Ground')
        .place( 1650, -0)
    //Moving Platform
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(1850, -50).maxMovementDistance(300)
    var platform = Crafty.e('Ground')
        .place(2350, -0)
    //Raising Platform
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(2550, -150).maxMovementDistance(150)
    //Walking Enemy Platform
    var platform = Crafty.e('Ground')
        .place(2675, -300)
    var platform = Crafty.e('GroundLong')
        .place(2975, -300)
    var boundary = Crafty.e('MovementBoundary')
        .place(2930, -330)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(3000, -330)
    var boundary = Crafty.e('MovementBoundary')
        .place( 3330, -330)
    //Jumping Enemy Platform
    var platform = Crafty.e('Ground')
        .place( 3350, -400)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place(3400, -410)
    //Dropping Platform                                            ***PATH SPLIT POINT***
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3650, -550)
    //Consumable path
    var platform = Crafty.e('GroundLong')
        .place( 4000, -500)
    var spike = Crafty.e('SpikeBush')
        .place(4160, -560)
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(4400, -650).maxMovementDistance(100)
    //Movement Platform for Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(4450, -800)
    var sanityBooster = Crafty.e('SanityBooster')
        .place( 4900, -850)
    //Spike Platform -- Safety net for consumable
    var platform = Crafty.e('GroundLong')
        .place( 4550, -600)
    var spike = Crafty.e('SpikeBush')
        .place( 4560, -660)
    var spike = Crafty.e('SpikeBush')
        .place( 4645, -660)
    var spike = Crafty.e('SpikeBush')
        .place( 4730, -660)
    var spike = Crafty.e('SpikeBush')
        .place( 4815, -660)
    //Spike drop platforms --                                         ***PATH SPLIT POINT***
    //Player is predicted to be in HIGH sanity on entry. LOW sanity on exit
    var platform = Crafty.e('Ground')
        .place( 3350, -700)
    var spike = Crafty.e('SpikeBush')
        .place( 3365, -765)
    var spike = Crafty.e('SpikeBush')
        .place( 3450, -765)
    var platform = Crafty.e('Ground')
        .place( 3050, -825)
    var spike = Crafty.e('SpikeBush')
        .place( 3065, -885)
    var spike = Crafty.e('SpikeBush')
        .place( 3150, -885)
    //Destabilize Flower Patch
    var Ground = Crafty.e('Ground')
        .place( 3300, -1000)
    var platform = Crafty.e('Ground')
        .place( 3050, -1150)
    var sanityzoneBad = Crafty.e('SanityZone')
        .place(3050, -1190).setMode(MODES.LOSS)
    //Stabilizing Flower Patch
    var platform = Crafty.e('Ground')
        .place( 2900, -700)
    var sanityzoneGood = Crafty.e('SanityZone')
        .place(2680, -400).setMode(MODES.GAIN)
    //Movement Platform + Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(2300, -900)
    var sanityBooster = Crafty.e('SanityDropper')
        .place(2350, -950)
    // Platform to door                                          ***PATH SPLIT POINT***
    // Player is predicted to be in LOW sanity on entry.
    var platform = Crafty.e('GroundLong')
        .place( 3700, -850)
    var door1 = Crafty.e('SanityWall')
        .place( 3950, -1125)
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(4050, -1050).maxMovementDistance(125)
    //Enemy Platforms
    var boundary = Crafty.e('MovementBoundary')
        .place( 4175, -1200)
    var platform = Crafty.e('GroundLong')
        .place( 4200, -1150)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(4250, -1200)
    var platform = Crafty.e('Ground')
        .place(4550, -1250)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place(4625, -1500)
    var platform = Crafty.e('GroundLong')
        .place(4700, -1150)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(4800, -1200)
    var boundary = Crafty.e('MovementBoundary')
        .place(5250, -1200)
    //Consumable platforms + Jumper
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(4350, -1400)
    var sanityzoneGood = Crafty.e('SanityZone')
        .place(4050, -1500).setMode(MODES.GAIN)
    var platform = Crafty.e('Ground')
        .place(4050, -1400)
    //Spike Platform
    var platform = Crafty.e('GroundLong')
        .place(5200, -1250)
    var spike = Crafty.e('SpikeBush')
        .place(5300, -1320)
    var spike = Crafty.e('SpikeBush')
        .place(5450, -1320)
    //Decaying floor gauntlet
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(5700, -1300)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(5900, -1200)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -1100)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6200, -1040)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -925)
    var ground = Crafty.e('Ground')
        .place(5700, -900)
    var sanityBooster = Crafty.e('SanityDropper')
        .place(5750, -950)
    //Movement Platform to end of level
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(5960, -1400).maxMovementDistance(500)
    var platform = Crafty.e('GroundLong')
        .place(6800, -1350)
    var door = Crafty.e('SanityWall')
        .place(6900, -1625)
    var portal = Crafty.e('LevelPortal')
        .place(7100, -1340)

    //Map End


// misc
    if (noclip) {
        var player = Crafty.e("NoClip")
            .attr({x: 0, y: -0});
    } else {
        var player = Crafty.e("Player")
            .attr({x: 100, y: -100});
    }

    makeCameraTrackEntity(player, 0)
Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 14000, h: 5000}).checkHits('Player');
    var playerNotification = Crafty.e("PlayerNotification").attr({x: player.x - 220, y: player.y - 280});
    playerNotification.messagesReceived = all_messages;
    player.attach(playerNotification);
    Crafty.trigger("StartSadness");
    Crafty.e('StoryTrigger').place();
});
