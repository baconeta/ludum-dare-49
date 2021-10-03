Crafty.defineScene("Level2", function () {
    // hud
    const hud = Crafty.e("HUD");
    audioController.playTrack('sadness');

    Crafty.e("Background").place(-1000,-1800,12000,12000, 3)// final variable is the level (1=sad, 2=anger, 3=fear)


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
    // var door = Crafty.e('SanityWall')
    //     .attr({x: 0, y: 0})

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
        .attr({x: 0, y: -200})

    var platform = Crafty.e('Ground')
        .attr({x: 150, y: -200})
    var platform = Crafty.e('Ground')
        .attr({x: 300, y: -200})
    var platform = Crafty.e('Ground')
        .attr({x: 450, y: -350})
    var platform = Crafty.e('Ground')
        .attr({x: 600, y: -350})
    var platform = Crafty.e('Ground')
        .attr({x: 750, y: -350})
    var platform = Crafty.e('Ground')
        .attr({x: 1050, y: -200})
    //Decaying Platform
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 1300, y: -200})
    var platform = Crafty.e('Ground')
        .attr({x: 1550, y: -200})
    //Moving Platform
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(1750, -250)
    var platform = Crafty.e('Ground')
        .attr({x: 2450, y: -250})
    //Raising Platform
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .attr({x: 2600, y: -250})
    var platform = Crafty.e('Ground')
        .attr({x: 2675, y: -500})
    //Walking Enemy Platform
    var platform = Crafty.e('Ground')
        .attr({x: 2825, y: -500})
    var platform = Crafty.e('Ground')
        .attr({x: 2975, y: -300})
    var platform = Crafty.e('Ground')
        .attr({x: 3125, y: -300})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 2975, y: -330, w:20, h:200})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 3150, y: -350, w: 30})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 3300, y: -330, w:20, h:200})
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
        .attr({x: 4320, y: -500})
    //Movement Platform for Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
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
    var platform = Crafty.e('Ground')
        .attr({x: 2800, y: -900})
    var spike = Crafty.e('Spike')
        .attr({x: 2930, y: -925})
    var sanityzone = Crafty.e('SanityZone')
        .attr({x: 2800, y: -950})
    //Movement Platform + Consumable
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(2200, -900)
    var sanityBooster = Crafty.e('SanityDropper')
         .attr({x: 2250, y: -950})
    //Platform to door                                          ***PATH SPLIT POINT***
        //Player is predicted to be in LOW sanity on entry.
    var platform = Crafty.e('Ground')
        .attr({x: 3700, y: -850})
    var platform = Crafty.e('Ground')
        .attr({x: 3850, y: -850})
    var door = Crafty.e('SanityWall')
        .attr({x: 3950, y: -1125})
    var raisingGround = Crafty.e('UnstableRaisingGround')
        .attr({x: 4100, y: -950})
    //Platforms
    var platform = Crafty.e('Ground')
        .attr({x: 4200, y: -1150})
    var platform = Crafty.e('Ground')
        .attr({x: 4450, y: -1200})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 4725, y: -1480, w:30})
    //Upper dropping platforms
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 4650, y: -1300})

    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 4500, y: -1400})
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 4300, y: -1450})
    var sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 4325, y: -1500})
    //Lower Path Onwards
    var platform = Crafty.e('Ground')
        .attr({x: 4650, y: -1100})
    var platform = Crafty.e('Ground')
        .attr({x: 4800, y: -1200})
    var platform = Crafty.e('Ground')
        .attr({x: 4950, y: -1200})
    var platform = Crafty.e('Ground')
        .attr({x: 5100, y: -1200})
        //Enemies
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 4800, y: -1250, w: 20, h: 150})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 4850, y: -1250, w: 20})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 5150, y: -1250, w: 20})
    var boundary = Crafty.e('MovementBoundary')
        .attr({x: 5200, y: -1250, w: 20, h: 150})

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
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 5800, y: -1250})
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 6050, y: -1150})
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 6350, y: -1025})
    var decayGround = Crafty.e('UnstableDroppingGround')
        .attr({x: 6050, y: -900})
    var platform = Crafty.e('Ground')
        .attr({x: 5700, y: -900})
    var sanityzone = Crafty.e('SanityZone')
         .attr({x: 5750, y: -950})

    //Movement Platform to end of level
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(6100, -1350)
    var platform = Crafty.e('Ground')
        .attr({x: 6800, y: -1350})
    var platform = Crafty.e('Ground')
        .attr({x: 6950, y: -1350})
    var platform = Crafty.e('Ground')
        .attr({x: 7100, y: -1350})
    var door = Crafty.e('SanityWall')
        .attr({x: 6900, y: -1625})
    var goal = Crafty.e('Door')
        .attr({x: 7200, y: -1400, w: 50, h: 50})
        .color("green")

    //Map End


    // misc
    noclip = true;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 2350, y: -920});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 100, y: -100});
    }

    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 12000}).checkHits('Player');
});


