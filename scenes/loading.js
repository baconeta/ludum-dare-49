Crafty.defineScene("Loading", function () {
    Crafty.background("#AAA");
    Crafty.e("2D, DOM, Text")
        .attr({w: 200, h: 50, x: 300, y: 280})
        .text("Loading...")
        .textFont({size: '20px', weight: 'bold'})
        .textAlign("center")
        .textColor("#111");

    // Game Assets would be a list of images, but this tutorial doesn't use them.

    Crafty.load(gameAssets, function () {
        console.info('Loaded successfully');
        Crafty.trigger("NextLevel");
    }, function (progress) {
        if (DEBUG) {
            console.log(`Loading (${progress.loaded} / ${progress.total})...`);
        }
    }, function (e) {
        console.log("Crafty Load Error", e);
    });
});
