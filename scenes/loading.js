Crafty.defineScene("Loading", function () {
    var gameStartBackground = Crafty.e("TitleBG")

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
