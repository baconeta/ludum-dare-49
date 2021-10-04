Crafty.defineScene('Title', function () {
    // Crafty.("title_screen_sad");
    var gameStartBackground = Crafty.e("TitleBG").bind('Click', function() {
        audioController.canPlay = true;
        audioController.playTrack('theme')
    });
    var gameForeground = Crafty.e("TitleFG");
    var playGameButton = Crafty.e("PlayButton")
        .bind('Click', function (MouseEvent) {
            // User has interact with DOM, so we can now autoplay sound
            audioController.canPlay = true;
            audioController.playTrack('theme')
            Crafty.trigger("NextLevel");
        });
    var creditsButton = Crafty.e("CreditsButton")
        .bind('Click', function (MouseEvent) {
            // User has interact with DOM, so we can now autoplay sound
            console.log("credits hehe")
        });
    var stoneIcon = Crafty.e("StoneIcon");
});


