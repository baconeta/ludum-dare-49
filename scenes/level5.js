Crafty.defineScene("Level5", function () {
    const hud = Crafty.e("HUD");

    Crafty.e("Background").place(-1000, -800);

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
    //      .attr({x: 0, y: 0})
    //Dropper
    // var sanityBooster = Crafty.e('SanityDropper')
    //      .attr({x: 0, y: 0})

    //Level Design Tools
    //No Clip (True or False) *** REMEMBER TO COMMENT OUT BEFORE A MERGE TO MASTER ***
    noclip = true


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
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
});


