Crafty.defineScene("Level1", function () {
    // hud
    const hud = Crafty.e("HUD");

    // ground
    // var ground1 = Crafty.e('UnstableDroppingGround')
    //     .attr({x: -400, y: 780, w: 200, h: 20})
    // var ground2 = Crafty.e('UnstableRotatingGround')
    //     .attr({x: -200, y: 780, w: 200, h: 20})

    //Floor, Roof and Centre
    var ground1 = Crafty.e('Ground')
        .attr({x: 0, y: 0, w: 12000, h: 10})
    var roof1 = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 12000, h: 10})
    var centreline = Crafty.e('Ground')
        .attr({x: 0, y: -800, w: 12000, h: 10})
        .color("red")

    //Wall Edges
    var wall1 = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 10, h: 1600})
    var wall2 = Crafty.e('Ground')
        .attr({x: 11990, y: -1600, w: 10, h: 1600})

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
    var raisePlatform1 = Crafty.e('UnstableDroppingGround')
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

    //Jump across to 1 - raisePlatform
    var platform20 = Crafty.e('Ground')
        .attr({x: 4200, y: -1000, w: 100, h: 10})
    var raisePlatform2 = Crafty.e('UnstableDroppingGround')
        .color('purple')
        .attr({x: 4300, y: -1000, w: 100, h: 10})

    var platform21 = Crafty.e('Ground')
        .attr({x: 4400, y: -1400, w: 100, h: 10})


    noclip = true;




    // enemies
    // var enemyJumper = Crafty.e('EnemyJumper')
    //     .attr({x: 750, y: 520, w: 20, h: 20})
    // var enemyWalker = Crafty.e('EnemyWalker')
    //     .attr({x: 340, y: 670, w: 20, h: 20})

    // misc
    var zone1 = Crafty.e("SanityZone")
        .attr({x: 0, y: 770, w: 100, h: 10})
    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 3800, y: -950});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 2800, y: -350});
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
