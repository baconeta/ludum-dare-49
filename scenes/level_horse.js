Crafty.defineScene("LevelHorse", function () {
    // hud
    const hud = Crafty.e("HUD");

    Crafty.e("Background").place(-1000,-1800,12000,12000, 1); // final variable is the level (1=sad, 2=anger, 3=fear)

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
        .attr({x: 0, y: 0, w: 10000, h: 10})
    var platform = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 10000, h: 10})
    var wall = Crafty.e('Ground')
        .attr({x: 0, y: -1600, w: 10, h: 1600})
    var wall = Crafty.e('Ground')
        .attr({x: 9990, y: -1600, w: 10, h: 1600})
    var centreLine = Crafty.e('Ground')
        .attr({x: 0, y: -800, w: 10000, h: 10})
        .color("red")

    //Map Start




    //Map End








    // misc

    noclip = true;

    if (noclip){
        var player = Crafty.e("NoClip")
            .attr({x: 10000, y: 0});
    }
    else{
        var player = Crafty.e("Player")
            .attr({x: 0, y:0});
    }

    makeCameraTrackEntity(player, 0)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 12000}).checkHits('Player');
});


