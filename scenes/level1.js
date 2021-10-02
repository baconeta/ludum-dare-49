Crafty.defineScene("Level1", function () {
    // hud
    const hud = Crafty.e("HUD");

    // Assets

    // Obstacles
    //Dropping Platform
    // var droppingGround = Crafty.e('UnstableDroppingGround')
    //     .attr({x: 0, y: 0, w: 100, h: 10})
    //Raising Platform
    // var raisingGround = Crafty.e('UnstableRaisingGround')
    //     .attr({x: 0, y: 0, w: 100, h: 10})
    //Decaying Platform
    // var decayGround = Crafty.e('UnstableDecayGround')
    //     .attr({x: 0, y: 0, w: 100, h: 10})
    //Spike
    // var spike = Crafty.e('Spike')
    //     .attr({x: 0, y: 0, w: 20, h: 20})

    // Terrain
    //Ground/Platform
    //var platform = Crafty.e('Ground')
    //    .attr({x: 0, y: 0, w: 200, h: 10})
    //Wall
    //var wall = Crafty.e('Ground')
    //      .attr({x: 0, y: 0, w: 10, h: 200})


    // Enemies
    //Boundary
    // var boundary = Crafty.e('MovementBoundary')
    //     .attr({x: 0, y: 0, w: 10, h: 100})
    //Walker
    // var enemyWalker = Crafty.e('EnemyWalker')
    //     .attr({x: 0, y: 0, w: 20, h: 20})
    //Jumper
    // var enemyJumper = Crafty.e('EnemyJumper')
    //     .attr({x: 0, y: 0, w: 20, h: 20})

    // Interactables
    //Door
    // var door = Crafty.e('Ground')
    //     .attr({x: 0, y: 0, w: 20, h: 100})
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
        .attr({x: 0, y: 0, w: 12000, h: 10})
    var platform = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 12000, h: 10})
    var wall = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 10, h: 1600})
    var wall = Crafty.e('Ground')
        .attr({x: 11990, y: -1600, w: 10, h: 1600})
    var centreLine = Crafty.e('Ground')
        .attr({x: 0, y: -800, w: 12000, h: 10})
        .color("red")

    //Map Start

    //First climb
    var platform1 = Crafty.e('Ground')
        .attr({x: 500, y: -150, w: 100, h: 10})
    var platform2 = Crafty.e('Ground')
        .attr({x: 700, y: -300, w: 100, h: 10})
    var platform3 = Crafty.e('Ground')
        .attr({x: 900, y: -450, w: 100, h: 10})
    var platform4 = Crafty.e('Ground')
        .attr({x: 1100, y: -600, w: 100, h: 10})
    var platform5 = Crafty.e('Ground')
        .attr({x: 1250, y: -750, w: 100, h: 10})
    var platform6 = Crafty.e('Ground')
        .attr({x: 1500, y: -900, w: 100, h: 10})
    var platform7 = Crafty.e('Ground')
        .attr({x: 1800, y: -1050, w: 100, h: 10})

    // 1 - drop - 1
    var platform8 = Crafty.e('Ground')
        .attr({x: 2100, y: -700, w: 100, h: 10})
    var dropPlatform1 = Crafty.e('UnstableDroppingGround')
        .attr({x: 2200, y: -700, w: 100, h: 10})
    var platform10 = Crafty.e('Ground')
        .attr({x: 2300, y: -700, w: 100, h: 10})

    //drop down with wall
    var platform11 = Crafty.e('Ground')
        .attr({x: 2400, y: -350, w: 100, h: 10})
    var wall3 = Crafty.e('Ground')
        .attr({x: 2500, y: -1050, w: 10, h: 500})

    //Raising floor into platform
    var raisePlatform1 = Crafty.e('UnstableRaisingGround')
        .color('purple')
        .attr({x: 2800, y: -350, w: 100, h: 10})
    var platform13 = Crafty.e('Ground')
        .attr({x: 2900, y: -650, w: 100, h: 10})

    //jump to unstable - 1
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3200, y: -750, w: 100, h: 10})
    var platform15 = Crafty.e('Ground')
        .attr({x: 3300, y: -750, w: 100, h: 10})

    //Jump up to 3 - drop with enemy
    var platform16 = Crafty.e('Ground')
        .attr({x: 3500, y: -950, w: 100, h: 10})
    var platform17 = Crafty.e('Ground')
        .attr({x: 3600, y: -950, w: 100, h: 10})
    var platform18 = Crafty.e('Ground')
        .attr({x: 3700, y: -950, w: 100, h: 10})
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3800, y: -950, w: 100, h: 10})
    //Enemy
    var boundary1 = Crafty.e('MovementBoundary')
        .attr({x: 3450, y: -950, w: 10, h: 100})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 3500, y: -950, w: 20, h: 20})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 3600, y: -950, w: 10, h: 100})

    //Jump across to 1 - raisePlatform + jumpEnemy
    var platform20 = Crafty.e('Ground')
        .attr({x: 4200, y: -1000, w: 100, h: 10})
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .color('purple')
        .attr({x: 4300, y: -1000, w: 100, h: 10})
    //enemy
    var enemyWalker = Crafty.e('EnemyJumper')
        .attr({x: 4210, y: -1100, w: 20, h: 20})


    //Drop Tower
    var wall3 = Crafty.e('Ground')
        .attr({x: 4400, y: -1400, w: 10, h:800})
    var platform21 = Crafty.e('Ground')
        .attr({x: 4400, y: -1400, w: 100, h: 10})
    var platform22 = Crafty.e('Ground')
        .attr({x: 4500, y: -1250, w: 100, h: 10})
    var platform23 = Crafty.e('Ground')
        .attr({x: 4400, y: -1100, w: 130, h: 10})
    var platform24 = Crafty.e('Ground')
        .attr({x: 4560, y: -950, w: 40, h: 10})
    var platform25 = Crafty.e('UnstableRaisingGround')
        .attr({x: 4470, y: -950, w: 90, h: 10})
    var platform26 = Crafty.e('Ground')
        .attr({x: 4400, y: -870, w: 100, h: 10})
    var platform27 = Crafty.e('Ground')
        .attr({x: 4500, y: -700, w: 100, h: 10})
    var platform28 = Crafty.e('Ground')
        .attr({x: 4400, y: -600, w: 400, h: 10})
    var wall4 = Crafty.e('Ground')
        .attr({x: 4600, y: -1600, w: 10, h: 910})

    //Platform with spikes & enemy
    var platform29 = Crafty.e('Ground')
        .attr({x: 5000, y: -600, w: 400, h: 10})
    var spike1 = Crafty.e('Spike')
        .attr({x: 5000, y: -625, w: 8, h: 25})
    var spike2 = Crafty.e('Spike')
        .attr({x: 5392, y: -625, w: 8, h: 25})
    //enemy
    var boundary5 = Crafty.e('MovementBoundary')
        .attr({x: 5000, y: -625, w: 10, h: 100})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 5000, y: -625, w: 20, h: 20})
    var boundary6 = Crafty.e('MovementBoundary')
        .attr({x: 5392, y: -625, w: 10, h: 100})

    //Door Platform
    var platform30 = Crafty.e('Ground')
        .attr({x: 5600, y: -750, w: 600, h: 10})
    var door1 = Crafty.e('Ground')
        .attr({x: 5980, y: -850, w: 20, h: 100})
        .color("orange")
    var wall5 = Crafty.e('Ground')
        .attr({x: 5980, y: -1450, w: 20, h: 600})

    //jump to sanity zone
    var platform31 = Crafty.e('Ground')
        .attr({x: 5750, y: -850, w: 50, h: 10})
    var platform32 = Crafty.e('Ground')
        .attr({x: 5550, y: -950, w: 50, h: 10})
    var platform33 = Crafty.e('Ground')
        .attr({x: 5800, y: -1050, w: 200, h: 10})
    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 5800, y: -1150, w: 180, h: 100})

    //spike jump + Enemy Jumpers + Dropper
    var platform34 = Crafty.e('Ground')
        .attr({x: 6500, y: -750, w: 800, h: 10})
    var spike3 = Crafty.e('Spike')
        .attr({x: 6350, y: -800, w: 20, h: 20})
    var dropPlatform4 = Crafty.e('UnstableDroppingGround')
        .attr({x: 7300, y: -750, w: 100, h: 10})
    //Enemy
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6600, y: -760, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6700, y: -780, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6800, y: -800, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 6900, y: -820, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7000, y: -760, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7100, y: -780, w: 20, h: 20})
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 7200, y: -800, w: 20, h: 20})

    //safe spot
    var platform35 = Crafty.e('Ground')
        .attr({x: 7700, y: -650, w: 100, h: 10})

    //Raising Jumpers
    var raising4 = Crafty.e('UnstableRaisingGround')
        .attr({x: 7800, y: -650, w: 100, h: 10})
    var raising5 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8000, y: -950, w: 100, h: 10})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8200, y: -1250, w: 100, h: 10})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 8200, y: -1250, w: 100, h: 10})
    var platform36 = Crafty.e('Ground')
        .attr({x: 8500, y: -1300, w: 100, h: 10})

    //Spike Jump
    var spike6 = Crafty.e('Spike')
        .attr({x: 8700, y: -1600, w: 20, h: 20})
    var spike7 = Crafty.e('Spike')
        .attr({x: 8700, y: -1350, w: 20, h: 20})
    var platform37 = Crafty.e('Ground')
        .attr({x: 8800, y: -1450, w: 100, h: 10})

    //Drop platform run
    var dropPlatform5 = Crafty.e('UnstableDroppingGround')
        .attr({x: 8900, y: -1450, w: 100, h: 10})
    var dropPlatform6 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9000, y: -1450, w: 100, h: 10})
    var platform38 = Crafty.e('Ground')
        .attr({x: 9100, y: -1450, w: 50, h: 10})
    var dropPlatform7 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9150, y: -1450, w: 50, h: 10})
    var dropPlatform8 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9200, y: -1450, w: 100, h: 10})
    var dropPlatform9 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9300, y: -1450, w: 100, h: 10})
    var dropPlatform10 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9300, y: -1450, w: 100, h: 10})
    var platform39 = Crafty.e('Ground')
        .attr({x: 9400, y: -1350, w: 50, h: 10})

    //enemy platform
    var platform40 = Crafty.e('Ground')
        .attr({x: 9800, y: -1100, w: 200, h: 10})
    //enemy
    var boundary7 = Crafty.e('MovementBoundary')
        .attr({x: 9820, y: -110, w: 10, h: 100})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 9800, y: -1130, w: 20, h: 20})
    var boundary8 = Crafty.e('MovementBoundary')
        .attr({x: 9980, y: -1100, w: 10, h: 100})

    //spike platform + Gauntlet
    var platform41 = Crafty.e('Ground')
        .attr({x: 10100, y: -1150, w: 100, h: 10})
    var spike8 = Crafty.e('Spike')
        .attr({x: 10100, y: -1170, w: 20, h: 20})
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10200, y: -1150, w: 100, h: 10})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10300, y: -1150, w: 100, h: 10})
    var dropPlatform12 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10400, y: -1150, w: 100, h: 10})
    var raising7 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10500, y: -1150, w: 100, h: 10})
    var dropPlatform13 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10600, y: -1150, w: 100, h: 10})
    var raising8 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10700, y: -1150, w: 100, h: 10})
    var dropPlatform14 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10800, y: -1150, w: 100, h: 10})
    var raising9 = Crafty.e('UnstableRaisingGround')
        .attr({x: 10900, y: -1150, w: 100, h: 10})
    var dropPlatform15 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11000, y: -1150, w: 100, h: 10})
    var raising10 = Crafty.e('UnstableRaisingGround')
        .attr({x: 11100, y: -1150, w: 100, h: 10})
    var dropPlatform16 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11200, y: -1150, w: 100, h: 10})
    var raising11 = Crafty.e('UnstableRaisingGround')
        .attr({x: 11300, y: -1150, w: 100, h: 10})
    //roof spike
    var spike8 = Crafty.e('Spike')
        .attr({x: 10200, y: -1350, w: 1200, h: 20})

    //door plus goal
    var platform42 = Crafty.e('Ground')
        .attr({x: 11600, y: -1150, w: 400, h: 10})
    var door2 = Crafty.e('Ground')
        .attr({x: 11700, y: -1250, w: 20, h: 100})
        .color("orange")
    var wall5 = Crafty.e('Ground')
        .attr({x: 11700, y: -1600, w: 20, h: 350})

    //Map End


    // misc
    noclip = true;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 0, y: 0});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 0, y: 0});
    }


    const sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 800, y: 570})

    // Example of the sanity dropper.
    /*
    const sanityDropper = Crafty.e('SanityDropper')
        .attr({x: 800, y: 570, w: 50, h: 50})
    */

    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
});
