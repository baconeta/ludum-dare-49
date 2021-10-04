Crafty.defineScene("Level1", function () {
    const hud = Crafty.e("HUD");
    audioController.playTrack('sadness');

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
        .place(0, 0)

    //First climb
    var platform1 = Crafty.e('Ground')
        .place(500, 150)
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
        .attr({x: 2300, y: -700})
    var platform10 = Crafty.e('Ground')
        .attr({x: 2500, y: -700})

    //Raising floor into platform
    var platform11 = Crafty.e('Ground')
        .attr({x: 2700, y: -350})
    var raisePlatform1 = Crafty.e('UnstableRaisingGround')
        .place(2900, -350)
    var platform13 = Crafty.e('Ground')
        .attr({x: 3000, y: -650})

    //jump to unstable - 1
    var dropPlatform2 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3300, y: -800})


    //Jump up to 3 - drop with enemy
    var platform16 = Crafty.e('Ground')
        .attr({x: 3500, y: -950})
    var platform17 = Crafty.e('Ground')
        .attr({x: 3650, y: -950})
    var platform18 = Crafty.e('Ground')
        .attr({x: 3800, y: -950})
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .attr({x: 3950, y: -950})
    //Enemy
    var boundary1 = Crafty.e('MovementBoundary')
        .attr({x: 3510, y: -960})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 3650, y: -960})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 3750, y: -960})

    //Jump across to 1 + raisePlatform + jumpEnemy
    var platform20 = Crafty.e('Ground')
        .attr({x: 4400, y: -700})
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .place(4550, -700)
    var sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 4580, y: -710})
    //enemy
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 4450, y: -1010})

    //Door1
    var platform21 = Crafty.e('Ground')
        .attr({x: 4650, y: -1400})
    var platform21 = Crafty.e('Ground')
        .attr({x: 4820, y: -1400})
    var portal = Crafty.e('LevelPortal')
        .attr({x: 4900, y: -1500})
        .color("orange")

    //Sanity Zone (Left of door) + Movement platform
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(3850, -1400)
    var platform21 = Crafty.e('Ground')
        .attr({x: 3600, y: -1400})
    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 3630, y: -1450})

    //Spikes platfomrms + consumable
    var platform21 = Crafty.e('Ground')
        .attr({x: 3450, y: -1400})
    var platform21 = Crafty.e('Ground')
        .attr({x: 3300, y: -1400})
    var spike3 = Crafty.e('SpikeBush')
        .attr({x: 3550, y: -1410})
    var spike3 = Crafty.e('SpikeBush')
        .attr({x: 3530, y: -1410})
    var spike3 = Crafty.e('SpikeBush')
        .attr({x: 3510, y: -1410})
    var spike3 = Crafty.e('SpikeBush')
        .attr({x: 3490, y: -1410})
    var sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 3320, y: -1410})

    //Platform with spikes (First)
    var platform29 = Crafty.e('Ground')
        .attr({x: 5200, y: -1250})
    var spike1 = Crafty.e('SpikeBush')
        .attr({x: 5220, y: -1270})
    var spike2 = Crafty.e('SpikeBush')
        .attr({x: 5350, y: -1270})

    //Platform with spikes (Bottom Left)
    var platform29 = Crafty.e('Ground')
        .attr({x: 4900, y: -950})
    var spike1 = Crafty.e('SpikeBush')
        .attr({x: 4920, y: -970})
    var spike2 = Crafty.e('SpikeBush')
        .attr({x: 5050, y: -970})

    //Platform with spikes (Bottom Middle)
    var platform29 = Crafty.e('Ground')
        .attr({x: 5200, y: -950})
    var spike1 = Crafty.e('SpikeBush')
        .attr({x: 5220, y: -970})
    var spike2 = Crafty.e('SpikeBush')
        .attr({x: 5350, y: -970})

    //Platform with spikes (Top)
    var platform29 = Crafty.e('Ground')
        .attr({x: 5375, y: -1350})
    var spike1 = Crafty.e('SpikeBush')
        .attr({x: 5395, y: -1370})
    var spike2 = Crafty.e('SpikeBush')
        .attr({x: 5525, y: -1370})

    //Raising Platform
    var raisePlatform2 = Crafty.e('UnstableRaisingGround')
        .place(5550, -1000)

    //Moving Platform + Sanity check + Dropping ground
    var movingPlatform = Crafty.e('UnstableStrafingGround')
        .place(5750, -1400)
    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 5750, y: -1500, w: 600, h: 100})
    var dropPlatform3 = Crafty.e('UnstableDroppingGround')
        .attr({x: 6450, y: -1300})

    //Drop Down onto platform with enemy
    var platform29 = Crafty.e('Ground')
        .attr({x: 6500, y: -800})
    var platform29 = Crafty.e('Ground')
        .attr({x: 6650, y: -800})
    var platform29 = Crafty.e('Ground')
        .attr({x: 6800, y: -800})
    var platform29 = Crafty.e('Ground')
        .attr({x: 6950, y: -800})
    var platform29 = Crafty.e('Ground')
        .attr({x: 7100, y: -800})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 6510, y: -810})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 6500, y: -810})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 6800, y: -810})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 7000, y: -810})
    var boundary2 = Crafty.e('MovementBoundary')
        .attr({x: 7090, y: -810})


    //safe spot
    var platform35 = Crafty.e('Ground')
        .attr({x: 7500, y: -650})

    //Raising Jumpers
    var raising4 = Crafty.e('UnstableRaisingGround')
        .place(7800, -650)
    var raising5 = Crafty.e('UnstableRaisingGround')
        .place(8000, -950)
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(8200, -1250)
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(8200, -1250)
    var platform36 = Crafty.e('Ground')
        .attr({x: 8500, y: -1300})

    //Spike Jump
    var spike6 = Crafty.e('SpikeBush')
        .attr({x: 8700, y: -1650})
    var spike7 = Crafty.e('SpikeBush')
        .attr({x: 8700, y: -1350})
    var platform37 = Crafty.e('Ground')
        .attr({x: 8800, y: -1450})

    //Drop platform run
    var dropPlatform6 = Crafty.e('UnstableDroppingGround')
        .attr({x: 8950, y: -1450})
    var platform38 = Crafty.e('Ground')
        .attr({x: 9100, y: -1450})
    var dropPlatform7 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9250, y: -1450})
    var dropPlatform8 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9400, y: -1450})
    var dropPlatform9 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9650, y: -1450})
    var dropPlatform10 = Crafty.e('UnstableDroppingGround')
        .attr({x: 9800, y: -1450})
    var platform39 = Crafty.e('Ground')
        .attr({x: 9950, y: -1350})


    //spike platform + Gauntlet
    var platform41 = Crafty.e('Ground')
        .attr({x: 10100, y: -1150})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10150, y: -1170})
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10250, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10400, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10475, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10625, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10700, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(10850, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 10925, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11075, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11150, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11300, -1150)
    var dropPlatform11 = Crafty.e('UnstableDroppingGround')
        .attr({x: 11375, y: -1150})
    var raising6 = Crafty.e('UnstableRaisingGround')
        .place(11525, -1150)
    var sanityzone1 = Crafty.e('SanityZone')
        .attr({x: 10250, y: -1250, w: 1500, h: 100})
    //roof spikes
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10300, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10400, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10500, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10600, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10700, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10800, y: -1350})
    var spike8 = Crafty.e('SpikeBush')
        .attr({x: 10900, y: -1350})

    //Walkway above
    var platform41 = Crafty.e('Ground')
        .attr({x: 10700, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 10850, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11000, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11150, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11300, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11450, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11600, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11750, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 11800, y: -1500})

    //walkway below
    var platform41 = Crafty.e('Ground')
        .attr({x: 11850, y: -1000})
    var raising = Crafty.e('UnstableRaisingGround')
        .place(12000, -1000)

    //Goal platform
    var platform41 = Crafty.e('Ground')
        .attr({x: 12075, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 12225, y: -1500})
    var platform41 = Crafty.e('Ground')
        .attr({x: 12375, y: -1500})
    var goal = Crafty.e('Ground')
        .attr({x: 12450, y: -1550, w: 30, h: 30})


    //Map End


    // misc

    if (noclip) {
        var player = Crafty.e("NoClip")
            .attr({x: 5050, y: -970});
    } else {
        var player = Crafty.e("Player")
            .attr({x: 100, y: -100});
    }

    makeCameraTrackEntity(player, 0)
    Crafty.e('LevelBounds').attr({x: -1000, y: -1800, w: 12000, h: 5000}).checkHits('Player');
});
