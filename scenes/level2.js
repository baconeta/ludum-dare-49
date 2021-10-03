Crafty.defineScene("Level2", function () {
    // hud
    const hud = Crafty.e("HUD");

    Crafty.e("Background").place(-1000,-1800,12000,12000, 3); // final variable is the level (1=sad, 2=anger, 3=fear)

    // Assets

    // Obstacles
    //Dropping Platform
    // var droppingGround = Crafty.e('UnstableDroppingGround')
    //     .attr({x: 0, y: 0})
    //Raising Platform
    // var raisingGround = Crafty.e('UnstableRaisingGround')
    //     .attr({x: 0, y: 0})
    //Decaying Platform
    // var decayGround = Crafty.e('UnstableDecayGround')
    //     .attr({x: 0, y: 0})
    //Moving Platform
    // var movingPlatform = Crafty.e('UnstableMovementGround')
    //     .place(0, 0)
    //Spike
    // var spike = Crafty.e('Spike')
    //     .attr({x: 0, y: 0})

    // Terrain
    //Ground/Platform
    //var platform = Crafty.e('Ground')
    //    .attr({x: 0, y: 0})


    // Enemies
    //Boundary
    // var boundary = Crafty.e('MovementBoundary')
    //     .attr({x: 0, y: 0})
    //Walker
    // var enemyWalker = Crafty.e('EnemyWalker')
    //     .attr({x: 0, y: 0})
    //Jumper
    // var enemyJumper = Crafty.e('EnemyJumper')
    //     .attr({x: 0, y: 0})

    // Interactables
    //Door
    // var door = Crafty.e('Door')
    //     .attr({x: 0, y: 0})
    //     .color("orange")
    //Sanity Zone
    // var sanityzone = Crafty.e('SanityZone')
    //     .attr({x: 0, y: 0})
    //Goal -- Currently a door until its implemented
    // var goal = Crafty.e('Door')
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
        .attr({x: 0, y: -0})

    var platform = Crafty.e('Ground')
        .attr({x: 150, y: -0})
    var platform = Crafty.e('Ground')
        .attr({x: 300, y: -0})
    var platform = Crafty.e('Ground')
        .attr({x: 450, y: -150})
    var platform = Crafty.e('Ground')
        .attr({x: 600, y: -150})
    var platform = Crafty.e('Ground')
        .attr({x: 750, y: -150})
    var platform = Crafty.e('Ground')
        .attr({x: 1050, y: -0})
    //Decaying Platform
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 1300, y: 0})
    var platform = Crafty.e('Ground')
        .attr({x: 1550, y: -0})
    //Moving Platform
    var movingPlatform = Crafty.e('UnstableMovementGround')
        .place(1750, -50)
    var platform = Crafty.e('Ground')
        .attr({x: 2450, y: -50})
    //Raising Platform
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .attr({x: 2600, y: -50})
    var platform = Crafty.e('Ground')
        .attr({x: 2675, y: -300})
    //Walking Enemy Platform
    var platform = Crafty.e('Ground')
        .attr({x: 2825, y: -300})
    var platform = Crafty.e('Ground')
        .attr({x: 2975, y: -300})
    var platform = Crafty.e('Ground')
        .attr({x: 3125, y: -300})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 2825, y: -330})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 2900, y: -320, w: 30})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 3250, y: -330})
    //Jumping Enemy Platform
    var platform = Crafty.e('Ground')
        .attr({x: 3350, y: -400})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 3400, y: -410, w:30})
    //Dropping Platform                                         ***PATH SPLIT POINT***
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 3700, y: -550})
    //Consumable path
    var platform = Crafty.e('Ground')
        .attr({x: 4000, y: -500})
    var platform = Crafty.e('Ground')
        .attr({x: 4150, y: -500})
    var spike = Crafty.e('Spike')
        .attr({x: 4160, y: -520})
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .attr({x: 4300, y: -500})
    //Movement Platform for Consumable
    var movingPlatform = Crafty.e('UnstableMovementGround')
        .place(4450, -800)
    var sanityBooster = Crafty.e('SanityBooster')
         .attr({x: 4900, y: -830})
    //Spike Platform -- Safety net for consumable
    var platform = Crafty.e('Ground')
        .attr({x: 4600, y: -600})
    var spike = Crafty.e('Spike')
        .attr({x: 4620, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4640, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4660, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4680, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4700, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4720, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4740, y: -620})
    var spike = Crafty.e('Spike')
        .attr({x: 4760, y: -620})
    //Spike drop platforms --                                         ***PATH SPLIT POINT***
                //Player is predicted to be in HIGH sanity on entry. LOW sanity on exit
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 3350, y: -700})
    var spike = Crafty.e('Spike')
        .attr({x: 3375, y: -720})
    var spike = Crafty.e('Spike')
        .attr({x: 3450, y: -720})
    var droppingGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 3050, y: -825})
    var spike = Crafty.e('Spike')
        .attr({x: 3075, y: -845})
    var spike = Crafty.e('Spike')
        .attr({x: 3150, y: -845})
    //Movement Platform + Consumable
    var movingPlatform = Crafty.e('UnstableMovementGround')
        .place(2300, -900)
    var sanityBooster = Crafty.e('SanityDropper')
         .attr({x: 2350, y: -1000})
    //Platform to door                                          ***PATH SPLIT POINT***
        //Player is predicted to be in LOW sanity on entry.
    var platform = Crafty.e('Ground')
        .attr({x: 3700, y: -850})
    var platform = Crafty.e('Ground')
        .attr({x: 3850, y: -850})
    var door = Crafty.e('Door')
        .attr({x: 3950, y: -950})
        .color("orange")
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .attr({x: 4100, y: -950})
    //Enemy Platforms
    var platform = Crafty.e('Ground')
        .attr({x: 4200, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 4350, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 4500, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 4650, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 4800, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 4950, y: -1300})
    var platform = Crafty.e('Ground')
        .attr({x: 5100, y: -1300})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 4200, y: -1350, w: 20, h: 100})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 4250, y: -1350, w: 20})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 4600, y: -1350, w: 20})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 5200, y: -1350, w: 20})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 5250, y: -1350, w: 20, h: 100})
    //Consumable platforms + Jumper
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 4650, y: -1450})
    var sanityzone = Crafty.e('SanityZone')
        .attr({x: 4200, y: -1500, w: 1050, h: 200})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 4725, y: -1500, w:30})
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 4300, y: -1550})
    var sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 4375, y: -1600})
    //Spike Platform
    var platform = Crafty.e('Ground')
        .attr({x: 5500, y: -1250})
    var spike = Crafty.e('Spike')
        .attr({x: 5520, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5540, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5560, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5580, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5600, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5620, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5640, y: -1270})
    var spike = Crafty.e('Spike')
        .attr({x: 5660, y: -1270})
    //Decaying floor gauntlet
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 5800, y: -1250})
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 6050, y: -1150})
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 6350, y: -1025})
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 6050, y: -900})
    var decayGround = Crafty.e('UnstableDecayGround')
        .attr({x: 5700, y: -900})
    //Movement Platform to end of level
    var movingPlatform = Crafty.e('UnstableMovementGround')
        .place(6100, -1350)
    var platform = Crafty.e('Ground')
        .attr({x: 6800, y: -1350})
    var platform = Crafty.e('Ground')
        .attr({x: 6950, y: -1350})
    var platform = Crafty.e('Ground')
        .attr({x: 7100, y: -1350})
    var door = Crafty.e('Door')
        .attr({x: 6900, y: -1450})
        .color("orange")
    var goal = Crafty.e('Door')
        .attr({x: 7200, y: -1400, w: 50, h: 50})
        .color("green")

    //Map End


    // misc
    noclip = false;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 2350, y: -920});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 4300, y: -500});
    }

    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 12000}).checkHits('Player');
});


