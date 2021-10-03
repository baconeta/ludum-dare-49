Crafty.defineScene("Level4", function () {
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
        .attr({x: 0, y: 0})



    //Map End






    // misc

    noclip = true;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 10000, y: 0});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 100, y:-100});
    }

    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
});


