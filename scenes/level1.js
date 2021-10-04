Crafty.defineScene("Level1", function () {
    const hud = Crafty.e("HUD");
    audioController.playTrack('sadness');

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
    //Ground Short
    //var platformShort = Crafty.e('Ground')
    //    .place(x, y)
    //Ground Long
    // var platformLong = Crafty.e('GroundLong')
    //     .place(0, -0)


    // Enemies
    //Boundary
    // var boundary = Crafty.e('MovementBoundary')
    //     .place(x, y)
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
    //Portal
    // var portal = Crafty.e('LevelPortal')
    //     .place(0, 0)

    //Pickups
    //Booster
    // var sanityBooster = Crafty.e('SanityBooster')
    //      .attr({x: 0, y: 0})
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .attr({x: 0, y: 0})

    //Level Design Tools
    //No Clip (True or False) *** REMEMBER TO COMMENT OUT BEFORE A MERGE TO MASTER ***
    noclip = true


    //Map Start
    var platform = Crafty.e('GroundLong')
        .place(0, -1300)

    //First Platforms
    var platform = Crafty.e('Ground')
        .place(500, -1400)
    var platform = Crafty.e('Ground')
        .place(780, -1325)
    var platform = Crafty.e('Ground')
        .place(1050, -1425)
    var platform = Crafty.e('Ground')
        .place(1350, -1575)
    var platform4 = Crafty.e('Ground')
        .place(1400, -1250)
    var platform = Crafty.e('Ground')
        .place(1650, -1350)
    var platform7 = Crafty.e('Ground')
        .place(1850, -1050)

    //Split left for consumable                                                      ***SPLIT POINT***
    var platform7 = Crafty.e('Ground')
        .place( 1650, -750)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(1200, -720)
    var platform7 = Crafty.e('Ground')
        .place(800, -720)
    var sanityBooster = Crafty.e('SanityDropper')
         .place(875, -780)

    // Continue Right
    var platform8 = Crafty.e('Ground')
        .place(2100, -700)
    var dropPlatform1 = Crafty.e('UnstableDroppingGround')
        .place(2500, -715)

    //Door Platform with EnemyWalker
    var boundary = Crafty.e('MovementBoundary')
        .place(2840, -700)
    var platform11 = Crafty.e('GroundLong')
        .place(2850, -675)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(2900, -700)
    var boundary = Crafty.e('MovementBoundary')
        .place(3075, -700)
    var door1 = Crafty.e('SanityWall')
        .place(3100, -950)

    //Drop Platform                                                          ***SPLIT A POINT***
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .place( 3300, -800)

    //Drop platform gauntlet - Booster Reward                               ***SPLIT A DOWN***
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .place( 3550, -675)
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .place( 3700, -450)
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(2975, -250).maxMovementDistance(400)
    var sanityBooster = Crafty.e('SanityBooster')
        .place(3000, -300)


    //Continue Onwards - Enemy Platform                                                       ***SPLIT A UP***
    var boundary1 = Crafty.e('MovementBoundary')
        .place(3510, -960)
    var platform16 = Crafty.e('GroundLong')
        .place( 3540, -950)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(3650, -960)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place( 3650, -1000)
    var boundary2 = Crafty.e('MovementBoundary')
        .place(3880, -960)
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place(3950, -950)
    var platform16 = Crafty.e('Ground')
        .place( 4200, -800)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place(4270, -850)

    //Raising Platform
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .place(4500, -1100).maxMovementDistance(350)

    //Door2
    var platform21 = Crafty.e('GroundLong')
        .place( 4650, -1400)
    var door2 = Crafty.e('SanityWall')
        .place(4900, -1675)

    //Sanity Zone (Left of door) to                                             ***Split LEFT***
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(3850, -1400)
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place( 3500, -1450)
    var platform16 = Crafty.e('GroundLong')
        .place( 2950, -1390)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(3000, -1500)

    //Continue Onwards --> Spike platforms                       ***RETURN RIGHT***
    //Platform with spikes (First)
    var platform = Crafty.e('Ground')
        .place(5100, -1250)
    var spike1 = Crafty.e('SpikeBush')
        .place( 5180, -1300)

    //Platform with spikes (Bottom Left)
    var platform29 = Crafty.e('Ground')
        .place(4900, -850)
    var spike1 = Crafty.e('SpikeBush')
        .place(4920, -920)

    //Platform State Change
    var platform29 = Crafty.e('Ground')
        .place(4750, -650)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(4750, -750)

    //Platform with spikes (Bottom Middle)
    var platform29 = Crafty.e('GroundLong')
        .place(5200, -850)
    var spike1 = Crafty.e('SpikeBush')
        .place( 5220, -920)
    var spike2 = Crafty.e('SpikeBush')
        .place(5400,  -920)

    //Platform with spikes (Top)
    var platform29 = Crafty.e('Ground')
        .place(5375, -1350)
    var spike1 = Crafty.e('SpikeBush')
        .place( 5420,  -1400)

    //Raising Platform
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .place(5700, -1200).maxMovementDistance(300)
    //Moving Platform
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(5900, -1400)
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place(6500, -1100)

    //Drop Down onto platform with Insanity patch & Enemy
    var platform29 = Crafty.e('GroundLong')
        .place( 6500, -800)
    var boundary2 = Crafty.e('MovementBoundary')
        .place(6490, -810)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(6550, -850)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(6600, -900)
    var boundary2 = Crafty.e('MovementBoundary')
        .place( 6810,  -810)
            //Jump across platforms
    var boundary2 = Crafty.e('MovementBoundary')
        .place( 7050,  -810)
    var platform29 = Crafty.e('Ground')
        .place( 7060, -790)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place( 7130, -830)
    var boundary2 = Crafty.e('MovementBoundary')
        .place( 7220, -810)

    //safe spot
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place(7400, -650)

    //Raising Jumpers
    var raising4 = Crafty.e('UnstableRaisingGround')
        .place(7800, -1000).maxMovementDistance(400).movementSpeed(160)
    var raising5 = Crafty.e('UnstableRaisingGround')
        .place(7950, -1200).maxMovementDistance(400).movementSpeed(120)
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(8150, -1250).maxMovementDistance(400).movementSpeed(140)
    var platform36 = Crafty.e('Ground')
        .place(8500, -1300)
    var spike7 = Crafty.e('SpikeBush')
        .place( 8600, -1350)

    //Consumable Platforms
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place(8000, -500)
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .place(8150, -300)
    var platform36 = Crafty.e('Ground')
        .place(8300, -200)
    var sanityBooster = Crafty.e('SanityBooster')
        .place(8400, -250)

    //Drop platform run
    var platform37 = Crafty.e('Ground')
        .place( 8800, -1450)
    var dropPlatform6 = Crafty.e('UnstableDroppingGround')
        .place( 9030, -1450)
    var dropPlatform7 = Crafty.e('UnstableDroppingGround')
        .place( 9300, -1450)
    var dropPlatform8 = Crafty.e('UnstableDroppingGround')
        .place(9650, -1450)
    var dropPlatform9 = Crafty.e('UnstableDroppingGround')
        .place(10000,  -1450)
    var dropPlatform10 = Crafty.e('UnstableDroppingGround')
        .place( 10350, -1450)
    var platform39 = Crafty.e('Ground')
        .place( 10500,  -1350)


    //spike platform + Gauntlet
    var platform41 = Crafty.e('Ground')
        .place({x: 10100, y: -1150})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10150, y: -1170})
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 10250, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10400, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 10475, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10625, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 10700, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10850, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 10925, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11075, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 11150, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11300, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .place({x: 11375, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11525, -1150)
    var sanityzone1 = Crafty.e('SanityZone')
        .place({x: 10250, y: -1250, w: 1500, h: 100})
    //roof spikes
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10300, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10400, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10500, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10600, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10700, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10800, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .place({x: 10900, y: -1350})

    //Walkway above
    var platform41 = Crafty.e('Ground')
        .place({x: 10700, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 10850, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11000, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11150, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11300, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11450, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11600, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11750, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 11800, y: -1500})

    //walkway below
    var platform41 = Crafty.e('Ground')
        .place({x: 11850, y: -1000})
    var raising = Crafty.e('UnstableRaisingGround')
        .place(12000, -1000)

    //Goal platform
    var platform41 = Crafty.e('Ground')
        .place({x: 12075, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 12225, y: -1500})
    var platform41 = Crafty.e('Ground')
        .place({x: 12375, y: -1500})
    var goal = Crafty.e('Ground')
        .place({x: 12450, y: -1550, w: 30, h: 30})


    //Map End


    // misc

    if (noclip) {
        var player = Crafty.e("NoClip")
            .attr({x: 3880, y: -1340});
    } else {
        var player = Crafty.e("Player")
            .attr({x: 100, y: -1340});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
});
