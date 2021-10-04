Crafty.defineScene("Loading", function () {
    var gameStartBackground = Crafty.e("TitleBG")
    Crafty.e("2D, DOM, Text")
        .attr({w: 700, h: 50, x: 275, y: 570})
        .text("Loading... Please wait, as this could take a while on your first play.")
        .textFont({size: '20px', weight: 'bold'})
        .textAlign("center")
        .textColor("#3d0a57");


    Crafty.load(gameAssets, function () {
        console.info('Loaded successfully');
        Crafty.scene("Title");
    }, function (progress) {
        if (DEBUG) {
            console.log(`Loading (${progress.loaded} / ${progress.total})...`);
        }
    }, function (e) {
        console.log("Crafty Load Error", e);
    });
});
