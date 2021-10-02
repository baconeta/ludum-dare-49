Crafty.defineScene("Game", function () {
    // hud
    const hud = Crafty.e("HUD");

    // ground
    var ground1 = Crafty.e('UnstableDroppingGround')
        .attr({x: -400, y: 780, w: 200, h: 20})
    var ground2 = Crafty.e('UnstableRotatingGround')
        .attr({x: -200, y: 780, w: 200, h: 20})
    var ground3 = Crafty.e('Ground')
        .place(0, 780)
    var ground4 = Crafty.e('Ground')
        .place(300, 680)
    var ground6 = Crafty.e('Ground')
        .place(700, 580)

    // enemies
    var enemyJumper = Crafty.e('EnemyJumper')
        .attr({x: 750, y: 520, w: 20, h: 20})
    var enemyWalker = Crafty.e('EnemyWalker')
        .attr({x: 340, y: 670, w: 20, h: 20})

    // misc
    var zone1 = Crafty.e("SanityZone")
        .attr({x: 0, y: 770, w: 100, h: 10})
    var player = Crafty.e("Player")
        .attr({x: 40, y: 440});
    const sanityBooster = Crafty.e('SanityBooster')
        .attr({x: 800, y: 570})

    // Example of the sanity dropper.
    /*
    const sanityDropper = Crafty.e('SanityDropper')
        .attr({x: 800, y: 570, w: 50, h: 50})
    */

    makeCameraTrackEntity(player, 200)
    // Make the sanity bar follow the location of the player
    player.attach(hud);
});
