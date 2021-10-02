Crafty.defineScene("Level1", function () {
    // hud
    const hud = Crafty.e("HUD");

    Crafty.e("Background").place(-1000,-1800,12000,12000, 1); // final variable is the level (1=sad, 2=anger, 3=fear)

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
    //Spike
    // var spike = Crafty.e('Spike')
    //     .attr({x: 0, y: 0})

    // Terrain
    //Ground/Platform
    //var platform = Crafty.e('Ground')
    //    .attr({x: 0, y: 0})
    //Wall
    //var wall = Crafty.e('Ground')
    //      .attr({x: 0, y: 0})


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
    // var door = Crafty.e('Ground')
    //     .attr({x: 0, y: 0})
    //     .color("orange")

    //Pickups
    //Booster
    // var sanityBooster = Crafty.e('SanityBooster')
    //      .attr({x: 0, y: 0})
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .attr({x: 0, y: 0})

    //Map Boundary
    var platform = Crafty.e('Ground')
        .attr({x: 0, y: 0})
    var platform = Crafty.e('Ground')
        .attr({x: 0, y: -1600})
    var wall = Crafty.e('Ground')
        .attr({x: 0, y: -1600})
    var wall = Crafty.e('Ground')
        .attr({x: 11990, y: -1600})
    var centreLine = Crafty.e('Ground')
        .attr({x: 0, y: -800})

    //Map Start

    //First climb
    var platform1 = Crafty.e('Ground')
        .attr({x: 500, y: -150})
    var platform2 = Crafty.e('Ground')
        .attr({x: 700, y: -300})
    var platform3 = Crafty.e('Ground')
        .attr({x: 900, y: -450})
    var platform4 = Crafty.e('Ground')
        .attr({x: 1100, y: -600})
    var platform5 = Crafty.e('Ground')
        .attr({x: 1250, y: -750})
    var platform6 = Crafty.e('Ground')
        .attr({x: 1500, y: -900})
    var platform7 = Crafty.e('Ground')
        .attr({x: 1800, y: -1050})

    // 1 - drop - 1
    var platform8 = Crafty.e('Ground')
        .attr({x: 2100, y: -700})
    var dropPlatform1 = Crafty.e('UnstableDroppingGround')
        .attr({x: 2200, y: -700})
    var platform10 = Crafty.e('Ground')
        .attr({x: 2300, y: -700})

    //drop down with wall
    var platform11 = Crafty.e('Ground')
        .attr({x: 2400, y: -350})
    var wall3 = Crafty.e('Ground')
        .attr({x: 2500, y: -1050})

    //Raising floor into platform
    var raisePlatform1 = Crafty.e('UnstableRaisingGround')
        .attr({x: 2800, y: -350})
    var platform13 = Crafty.e('Ground')
        .attr({x: 2900, y: -650})

    //jump to unstable - 1
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3200, y: -750})
    var platform15 = Crafty.e('Ground')
        .attr({x: 3300, y: -750})

    //Jump up to 3 - drop with enemy
    var platform16 = Crafty.e('Ground')
        .attr({x: 3500, y: -950})
    var platform17 = Crafty.e('Ground')
        .attr({x: 3600, y: -950})
    var platform18 = Crafty.e('Ground')
        .attr({x: 3700, y: -950})
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3800, y: -950})
    //Enemy
    var boundary1 = Crafty.e('MovementBoundary')
        .attr({x: 3450, y: -950})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 3500, y: -950})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 3600, y: -950})

    //Jump across to 1 - raisePlatform + jumpEnemy
    var platform20 = Crafty.e('Ground')
        .attr({x: 4200, y: -1000})
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .attr({x: 4300, y: -1000})
    //enemy
    var enemyWalker = Crafty.e('EnemyJumper')
        .attr({x: 4210, y: -1100})


    //Drop Tower
    var wall3 = Crafty.e('Ground')
        .attr({x: 4400, y: -1400})
    var platform21 = Crafty.e('Ground')
        .attr({x: 4400, y: -1400})
    var platform22 = Crafty.e('Ground')
        .attr({x: 4500, y: -1250})
    var platform23 = Crafty.e('Ground')
        .attr({x: 4400, y: -1100})
    var platform24 = Crafty.e('Ground')
        .attr({x: 4560, y: -950})
    var platform25 = Crafty.e('UnstableRaisingGround')
        .attr({x: 4470, y: -950})
    var platform26 = Crafty.e('Ground')
        .attr({x: 4400, y: -870})
    var platform27 = Crafty.e('Ground')
        .attr({x: 4500, y: -700})
    var platform28 = Crafty.e('Ground')
        .attr({x: 4400, y: -600})
    var wall4 = Crafty.e('Ground')
        .attr({x: 4600, y: -1600})

    //Platform with spikes & enemy
    var platform29 = Crafty.e('Ground')
        .attr({x: 5000, y: -600})
    var spike1 = Crafty.e('Spike')
        .attr({x: 5000, y: -625})
    var spike2 = Crafty.e('Spike')
        .attr({x: 5392, y: -625})
    //enemy
    var boundary5 = Crafty.e('MovementBoundary')
        .attr({x: 5000, y: -625})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 5000, y: -625})
    var boundary6 = Crafty.e('MovementBoundary')
        .attr({x: 5392, y: -625})

    //Door Platform
    var platform30 = Crafty.e('Ground')
        .attr({x: 5600, y: -750})
    var door1 = Crafty.e('Ground')
        .attr({x: 5980, y: -850})
    var wall5 = Crafty.e('Ground')
        .attr({x: 5980, y: -1450})

    //jump to sanity zone
    var platform31 = Crafty.e('Ground')
        .attr({x: 5750, y: -850})
    var platform32 = Crafty.e('Ground')
        .attr({x: 5550, y: -950})
    var platform33 = Crafty.e('Ground')
        .attr({x: 5800, y: -1050})
    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 5800, y: -1150})

    //spike jump + Enemy Jumpers + Dropper
    var platform34 = Crafty.e('Ground')
        .attr({x: 6500, y: -750})
    var spike3 = Crafty.e('Spike')
        .attr({x: 6350, y: -800})
    var dropPlatform4 = Crafty.e('UnstableDroppingGround')
        .attr({x: 7300, y: -750})
    //Enemy
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6600, y: -760})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6700, y: -780})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6800, y: -800})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6900, y: -820})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7000, y: -760})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7100, y: -780})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7200, y: -800})

    //safe spot
    var platform35 = Crafty.e('Ground')
        .attr({x: 7700, y: -650})

    //Raising Jumpers
    var raising4 = Crafty.e('UnstableRaisingGround')
        .attr({x: 7800, y: -650})
    var raising5 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8000, y: -950})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8200, y: -1250})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8200, y: -1250})
    var platform36 = Crafty.e('Ground')
        .attr({x: 8500, y: -1300})

    //Spike Jump
    var spike6 = Crafty.e('Spike')
        .attr({x: 8700, y: -1600})
    var spike7 = Crafty.e('Spike')
        .attr({x: 8700, y: -1350})
    var platform37 = Crafty.e('Ground')
        .attr({x: 8800, y: -1450})

    //Drop platform run
    var dropPlatform5 = Crafty.e('UnstableDroppingGround')
        .attr({x: 8900, y: -1450})
    var dropPlatform6 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9000, y: -1450})
    var platform38 = Crafty.e('Ground')
        .attr({x: 9100, y: -1450})
    var dropPlatform7 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9150, y: -1450})
    var dropPlatform8 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9200, y: -1450})
    var dropPlatform9 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9300, y: -1450})
    var dropPlatform10 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9300, y: -1450})
    var platform39 = Crafty.e('Ground')
        .attr({x: 9400, y: -1350})

    //enemy platform
    var platform40 = Crafty.e('Ground')
        .attr({x: 9800, y: -1100})
    //enemy
    var boundary7 = Crafty.e('MovementBoundary')
        .attr({x: 9820, y: -110})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 9800, y: -1130})
    var boundary8 = Crafty.e('MovementBoundary')
        .attr({x: 9980, y: -1100})

    //spike platform + Gauntlet
    var platform41 = Crafty.e('Ground')
        .attr({x: 10100, y: -1150})
    var spike8 = Crafty.e('Spike')
        .attr({x: 10100, y: -1170})
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10200, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10300, y: -1150})
    var dropPlatform12 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10400, y: -1150})
    var raising7 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10500, y: -1150})
    var dropPlatform13 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10600, y: -1150})
    var raising8 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10700, y: -1150})
    var dropPlatform14 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10800, y: -1150})
    var raising9 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10900, y: -1150})
    var dropPlatform15 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11000, y: -1150})
    var raising10 = Crafty.e('UnstableRaisingGround')
        .attr({x: 11100, y: -1150})
    var dropPlatform16 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11200, y: -1150})
    var raising11 = Crafty.e('UnstableRaisingGround')
        .attr({x: 11300, y: -1150})
    //roof spike
    var spike8 = Crafty.e('Spike')
        .attr({x: 10200, y: -1350})

    //door plus goal
    var platform42 = Crafty.e('Ground')
        .attr({x: 11600, y: -1150})
    var door2 = Crafty.e('Ground')
        .attr({x: 11700, y: -1250})
    var wall5 = Crafty.e('Ground')
        .attr({x: 11700, y: -1600})

    //Map End


    // misc
    noclip = false;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 0, y: 0});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 0, y: 0});
    }

    var door1 = Crafty.e('SanityWall')
        .attr({x: 200, y: -100})

    const sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 500, y: 0});

    const sanityDropper = Crafty.e('SanityDropper')
        .attr({x: 560, y: 0});

    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 300, y: -100});


    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
});
