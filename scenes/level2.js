Crafty.defineScene("Level2", function () {
    const hud = Crafty.e("HUD");

    Crafty.e("Background").place(-1000, -1600);

    // Assets

    // Obstacles
    //Dropping Platform
    // var droppingGround = Crafty.e('UnstableDroppingGround')
    //     .place({, y})
    //Raising Platform
    // var raisingGround = Crafty.e('UnstableRaisingGround')
    //     .place(0, 0)
    //     .movementDirection(VERTICAL_DIRECTION.UP)
    //     .maxMovementDistance(200)
    //     .movementSpeed(100);
    //Decaying Platform
    // var decayGround = Crafty.e('UnstableDroppingGround')
    //     .place({, y})
    //Moving Platform
    // var movingPlatform = Crafty.e('UnstableMovementGround')
    //     .place(0, 0)
    //Spike
    // var spike = Crafty.e('SpikeBush')
    //     .place({, y})
    // Terrain
    //Ground/Platform
    //var platform = Crafty.e('Ground')
    //    .place({, y})

    // Enemies
    //Boundary
    // var boundary = Crafty.e('MovementBoundary')
    //     .place({, y})
    //Walker
    // var enemyWalker = Crafty.e('EnemyWalker')
    //     .place({, y})
    //Jumper
    // var enemyJumper = Crafty.e('EnemyJumper')
    //     .place({, y})
    // Interactables
    //Door
    // var portal = Crafty.e('LevelPortal')
    //     .place({, y})
    //     .color("orange")
    //Sanity Zone
    // var sanityzone = Crafty.e('SanityZone')
    //     .place({, y})
    //Goal -- Currently a door until its implemented
    // var portal = Crafty.e('LevelPortal')
    //     .attr({x: 0, y: 0, w: 50, h: 50})
    //     .color("green")

    //Pickups
    //Booster
    // var sanityBooster = Crafty.e('SanityBooster')
    //      .attr({x: 0, y: 0})
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .attr({x: 0, y: 0})

    //Centre line to help with level design
    // var centreLine = Crafty.e('Ground')
    //     .attr({x: 0, y: -800, w: 12000, h: 10})
    //     .color("red")


    //Map Start
    var platform = Crafty.e('Ground')
        .place(0, -0)

    var platform = Crafty.e('Ground')
        .place(150, -0)
    var platform = Crafty.e('Ground')
        .place(300, -0)
    var platform = Crafty.e('Ground')
        .place(450, -150)
    var platform = Crafty.e('Ground')
        .place(600, -150)
    var platform = Crafty.e('Ground')
        .place(750, -150)
    var platform = Crafty.e('Ground')
        .place(1050, -0)
    //Dropping Platform
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(1300, 0)
    var platform = Crafty.e('Ground')
        .place(1550, -0)
    //Moving Platform
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(1750, -50)
    var platform = Crafty.e('Ground')
        .place(2450, -50)
    //Raising Platform
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(2600, -50)
    var platform = Crafty.e('Ground')
        .place(2675, -300)
    //Walking Enemy Platform
    var platform = Crafty.e('Ground')
        .place(2825, -300)
    var platform = Crafty.e('Ground')
        .place(2975, -300)
    var platform = Crafty.e('Ground')
        .place(3125, -300)
    var boundary = Crafty.e('MovementBoundary')
        .place(2825, -330)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(2900, -320)
    var boundary = Crafty.e('MovementBoundary')
        .place(3250, -330)
//Jumping Enemy Platform
    var platform = Crafty.e('Ground')
        .place(3350, -400)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place(3400, -410)

//Dropping Platform                                         ***PATH SPLIT POINT***
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3700, -550)
//Consumable path
    var platform = Crafty.e('Ground')
        .place(4000, -500)
    var platform = Crafty.e('Ground')
        .place(4150, -500)
    var spike = Crafty.e('SpikeBush')
        .place(4160, -520)
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(4320, -500)
//Movement Platform for Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(4450, -800)
    var sanityBooster = Crafty.e('SanityBooster')
        .place(4900, -830)
//Spike Platform -- Safety net for consumable
    var platform = Crafty.e('Ground')
        .place(4600, -600)
    var spike = Crafty.e('SpikeBush')
        .place(4620, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4640, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4660, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4680, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4700, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4720, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4740, -620)
    var spike = Crafty.e('SpikeBush')
        .place(4760, -620)
//Spike drop platforms --                                         ***PATH SPLIT POINT***
//Player is predicted to be in HIGH sanity on entry. LOW sanity on exit
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3350, -700)
    var spike = Crafty.e('SpikeBush')
        .place(3375, -720)
    var spike = Crafty.e('SpikeBush')
        .place(3450, -720)
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .place(3050, -825)
    var spike = Crafty.e('SpikeBush')
        .place(3075, -845)
    var spike = Crafty.e('SpikeBush')
        .place(3150, -845)
//Movement Platform + Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(2300, -900)
    var sanityBooster = Crafty.e('SanityDropper')
        .place(2350, -1000)
// Platform to door                                          ***PATH SPLIT POINT***
// Player is predicted to be in LOW sanity on entry.
    var platform = Crafty.e('Ground')
        .place(3700, -850)
    var platform = Crafty.e('Ground')
        .place(3850, -850)
    var portal = Crafty.e('LevelPortal')
        .place(3950, -950)
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .place(4100, -950)
//Enemy Platforms
    var platform = Crafty.e('Ground')
        .place(4200, -1300)
    var platform = Crafty.e('Ground')
        .place(4350, -1300)
    var platform = Crafty.e('Ground')
        .place(4500, -1300)
    var platform = Crafty.e('Ground')
        .place(4650, -1300)
    var platform = Crafty.e('Ground')
        .place(4800, -1300)
    var platform = Crafty.e('Ground')
        .place(4950, -1300)
    var platform = Crafty.e('Ground')
        .place(5100, -1300)
    var boundary = Crafty.e('MovementBoundary')
        .place(4200, -1350)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(4250, -1350)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(4600, -1350)
    var enemyWalker = Crafty.e('EnemyWalker')
        .place(5200, -1350)
    var boundary = Crafty.e('MovementBoundary')
        .place(5250, -1350)
//Consumable platforms + Jumper
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(4650, -1450)
    var sanityzone = Crafty.e('SanityZone')
        .place(4200, -1500)
    var enemyJumper = Crafty.e('EnemyJumper')
        .place(4725, -1500)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(4300, -1550)
    var sanityBooster = Crafty.e('SanityBooster')
        .place(4375, -1600)
//Spike Platform
    var platform = Crafty.e('Ground')
        .place(5500, -1250)
    var spike = Crafty.e('SpikeBush')
        .place(5520, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5540, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5560, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5580, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5600, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5620, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5640, -1270)
    var spike = Crafty.e('SpikeBush')
        .place(5660, -1270)
//Decaying floor gauntlet
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(5800, -1250)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -1150)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6350, -1025)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(6050, -900)
    var decayGround = Crafty.e('UnstableDroppingGround')
        .place(5700, -900)
//Movement Platform to end of level
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(6100, -1350)
    var platform = Crafty.e('Ground')
        .place(6800, -1350)
    var platform = Crafty.e('Ground')
        .place(6950, -1350)
    var platform = Crafty.e('Ground')
        .place(7100, -1350)
    var portal = Crafty.e('LevelPortal')
        .place(6900, -1450)
    var portal = Crafty.e('LevelPortal')
        .place(7200, -1400)

//Map End


// misc
    noclip = false;

    if (noclip) {
        var player = Crafty.e("NoClip")
            .attr({x: 2350, y: -920});
    } else {
        var player = Crafty.e("Player")
            .attr({x: 100, y: -100});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
})


