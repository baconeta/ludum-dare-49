Crafty.defineScene("Level2", function () {
    const hud = Crafty.e("HUD");

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
    // var movingPlatform = Crafty.e('UnstableMovementGround')
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
    // var portal = Crafty.e('LevelPortal')
    //     .place(x, y)
    //Sanity Zone Bad
    // var sanityZoneBad = Crafty.e('SanityZone')
    //     .place(x, y).setMode("LOSS")
    //Sanity Zone Good
    // var sanityZoneGood = Crafty.e('SanityZone')
    //     .place(x, y).setMode("GAIN")
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
        .place(3000, -320)
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
        .place(4160, -550)
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
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place( 3350, -700)
    var spike = Crafty.e('SpikeBush')
        .place( 3375, -775)
    var spike = Crafty.e('SpikeBush')
        .place( 3450, -775)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place( 3050, -825)
    var spike = Crafty.e('SpikeBush')
        .place( 3075, -895)
    var spike = Crafty.e('SpikeBush')
        .place( 3150, -895)
    //Destabilize Flower Patch
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place( 3300, -1000)
    var platform = Crafty.e('Ground')
        .place( 3050, -1150)
    var sanityzoneBad = Crafty.e('SanityZone')
        .place(3050, -1240)
    //Stabilizing Flower Patch
    var platform = Crafty.e('Ground')
        .place( 2900, -700)
    var sanityzoneGood = Crafty.e('SanityZone')
        .place(2900, -800)
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
        .place(4100, -1000).maxMovementDistance(125)
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
        .place(4050, -1500)
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
        .place(5800, -1250)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -1150)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6350, -1025)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -900)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(5700, -900)
    var sanityBooster = Crafty.e('SanityDropper')
        .place(5750, -950)
    //Movement Platform to end of level
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(6100, -1350)
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
            .attr({x: 4000, y: -0});
    } else {
        var player = Crafty.e("Player")
            .attr({x: 000, y: -100});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
})


