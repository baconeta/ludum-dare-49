Crafty.defineScene("Level3", function () {
    const hud = Crafty.e("HUD");
    audioController.playTrack('fear');
    gtag('event', 'start_lvl_3', {'start_lvl_3': 1});
    Crafty.e("Background").place(-1000, -1757);

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
    //     .place(x, y)

    //Pickups
    //Booster
    // var sanityBooster = Crafty.e('SanityBooster')
    //      .place( 0, 0)
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .place( 0, 0)

    //Level Design Tools
    //No Clip (True or False) *** REMEMBER TO COMMENT OUT BEFORE A MERGE TO MASTER ***

    no_clip = false


    //Map Start
    var platform = Crafty.e('GroundLong')
        .place(50, -1330)

    //Lower Path
    var platform = Crafty.e('Ground')
        .place(440, -1190)
    //Left Side
    var platform = Crafty.e('GroundLong')
        .place(0, -1000)
    var spike = Crafty.e('SpikeBush')
        .place(260, -1050)
    var sanityZoneGood = Crafty.e('SanityZone')
        .place(0, -1092).setMode(MODES.GAIN)
    //Right Side (bottom)
    var platform = Crafty.e('GroundLong')
        .place(700, -1100)
    var spike = Crafty.e('SpikeBush')
        .place(710, -1150)
    var spike = Crafty.e('SpikeBush')
        .place(813, -1150)
    var spike = Crafty.e('SpikeBush')
        .place(915, -1150)
    var platform = Crafty.e('Ground')
        .place(1140, -1190)
    var spike = Crafty.e('SpikeBush')
        .place(1200, -1240)
    var platform = Crafty.e('GroundLong')
        .place(1400, -1100)
    var spike = Crafty.e('SpikeBush')
        .place(1410, -1150)
    var spike = Crafty.e('SpikeBush')
        .place(1512, -1150)
    var spike = Crafty.e('SpikeBush')
        .place(1615, -1150)

    //Upper Path
    var platform = Crafty.e('Ground')
        .place(550, -1400)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(550, -1425).setMode(MODES.LOSS)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(850, -1450)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(1150, -1450)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(1450, -1450)
    var platform = Crafty.e('GroundLong')
        .place(1800, -1400)
    var spike = Crafty.e('SpikeBush')
        .place(1880, -1450)
    var door = Crafty.e('SanityWall')
        .place(2040, -1670)

    //Movement Jump + Consumable
    var StrafingGround = Crafty.e('UnstableStrafingGround')
        .place(2250, -1200)
        .movementDirection(VERTICAL_DIRECTION.UP)
        .maxMovementDistance(600)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3050, -1300)
    var sanityBooster = Crafty.e('SanityBooster')
        .place( 3125, -1350)

    //Bottom platform Set
            //Left
     var boundary = Crafty.e('MovementBoundary')
         .place(2130, -710)
    var platform = Crafty.e('GroundLong')
        .place(2150, -570)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(2250, -600)
    var boundary = Crafty.e('MovementBoundary')
        .place(2460, -710)
            //Middle
    var platform = Crafty.e('GroundLong')
        .place(2450, -700)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(2550, -750)
    var boundary = Crafty.e('MovementBoundary')
        .place(2780, -710)
            //Right
    var platform = Crafty.e('GroundLong')
        .place(2800, -630)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(3030, -750)
    var boundary = Crafty.e('MovementBoundary')
        .place(3130, -710)
            //Middle bottom
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(2525, -450)
    var sanityBooster = Crafty.e('SanityBooster')
         .place( 2600, -520)

    //Dropping Platform Jumps
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3350, -600)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3650, -650)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3950, -550)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(4050, -730)
    var platform = Crafty.e('GroundLong')
        .place(4150, -430)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(4300, -530).setMode(MODES.LOSS)

    //Moving platform + Door
    var StrafingGround = Crafty.e('UnstableStrafingGround')
        .place(4400, -800)
        .movementDirection(VERTICAL_DIRECTION.UP)
        .maxMovementDistance(600)
    var platform = Crafty.e('GroundLong')
        .place(5300, -800)
    var spike = Crafty.e('SpikeBush')
        .place(5580, -850)
    var door = Crafty.e('SanityWall')
        .place(5300, -1070)


    //Lower Platforms
    var platform = Crafty.e('Ground')
        .place(6000, -430)
    var platform = Crafty.e('GroundLong')
        .place(6350, -400)
    var door = Crafty.e('SanityWall')
        .place(6400, -620)
    var boundary = Crafty.e('MovementBoundary')
        .place(6450, -450)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(6500, -500)
    var boundary = Crafty.e('MovementBoundary')
        .place(6720, -450)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(6900, -250)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(6650, -100)
    var sanityBooster = Crafty.e('SanityDropper')
        .place( 6650, -150)

    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(7250, -600)
        .movementDirection(VERTICAL_DIRECTION.UP)
        .maxMovementDistance(300)
    var boundary = Crafty.e('MovementBoundary')
        .place(6930, -960)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(6950, -950)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(7000, -1000)
    var boundary = Crafty.e('MovementBoundary')
        .place(7120, -960)


    //Upper Platforms (End of Level)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(5750, -600)
    var platform = Crafty.e('Ground')
        .place(6060, -730)
    var spike = Crafty.e('SpikeBush')
        .place(6060, -780)
    var platform = Crafty.e('GroundLong')
        .place(6390, -700)
    var portal = Crafty.e('LevelPortal')
        .place(6550, -700)

    //Map End




    // misc

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 0, y: -1000});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 100, y:-1350});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 14000, h: 5000}).checkHits('Player');
    var playerNotification = Crafty.e("PlayerNotification").attr({x: player.x - 220, y: player.y - 280});
    playerNotification.messagesReceived = all_messages;
    player.attach(playerNotification);
});
