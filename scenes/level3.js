Crafty.defineScene("Level3", function () {
    const hud = Crafty.e("HUD");

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
    //      .place( 0, 0)
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .place( 0, 0)

    //Level Design Tools
    //No Clip (True or False) *** REMEMBER TO COMMENT OUT BEFORE A MERGE TO MASTER ***
    noclip = true


    //Map Start
    var platform = Crafty.e('GroundLong')
        .place(0, -1330)

    //Lower Path
    var platform = Crafty.e('Ground')
        .place(440, -1190)
    //Left Side
    var platform = Crafty.e('GroundLong')
        .place(0, -1000)
    var spike = Crafty.e('SpikeBush')
        .place(260, -1050)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(0, -1100)
    //Right Side
    var platform = Crafty.e('GroundLong')
        .place(700, -1100)
    var spike = Crafty.e('SpikeBush')
        .place(700, -1170)
    var spike = Crafty.e('SpikeBush')
        .place(800, -1170)
    var spike = Crafty.e('SpikeBush')
        .place(900, -1170)
    var platform = Crafty.e('Ground')
        .place(1150, -1190)
    var spike = Crafty.e('SpikeBush')
        .place(1200, -1260)
    var platform = Crafty.e('GroundLong')
        .place(1400, -1100)
    var spike = Crafty.e('SpikeBush')
        .place(1400, -1170)
    var spike = Crafty.e('SpikeBush')
        .place(1500, -1170)
    var spike = Crafty.e('SpikeBush')
        .place(1600, -1170)

    //Upper Path
    var platform = Crafty.e('Ground')
        .place(550, -1400)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(550, -1500)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(850, -1450)
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
        .movementSpeed(400);
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3050, -1350)
    var sanityBooster = Crafty.e('SanityBooster')
        .place( 3125, -1400)

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

    //Dropping Platform Jumps
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3350, -600)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3650, -650)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3950, -550)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(4050, -730)
    var platform = Crafty.e('Ground')
        .place(4150, -430)
    var sanityZoneBad = Crafty.e('SanityZone')
        .place(4150, -530)

    //Moving platform
    var StrafingGround = Crafty.e('UnstableStrafingGround')
        .place(4400, -800)
        .movementDirection(VERTICAL_DIRECTION.UP)
        .maxMovementDistance(600)
        .movementSpeed(400);












    //Map End






    // misc

    noclip = true;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 4000, y: -1000});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 100, y:-1350});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
});


