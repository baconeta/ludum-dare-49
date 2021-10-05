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
            // Crafty.e("2D, DOM, Text").attr({x: 350, y: 320, w: 100, h: 18}).text("")
            //     .textFont({size: '15px'})
            //     .textAlign("left")
            //     .textColor("white");
        });
    var stoneIcon = Crafty.e("StoneIcon");
    var muteIcon = Crafty.e("Music");
});


