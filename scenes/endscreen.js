Crafty.defineScene('EndScreen', function () {
    // Crafty.("title_screen_sad");
    audioController.playTrack('theme')
    var gameEndBackground = Crafty.e("EndBG");
    var gameForeground = Crafty.e("TitleBannerOnly");
    // var playGameButton = Crafty.e("PlayButton")
    //     .bind('Click', function (MouseEvent) {
    //         // User has interact with DOM, so we can now autoplay sound
    //         audioController.canPlay = true;
    //         audioController.playTrack('theme')
    //         Crafty.trigger("NextLevel");
    //     });
    var creditsButton = Crafty.e("CreditsButton")
        .bind('Click', function (MouseEvent) {
            //Add credits here
        });
    var stoneIcon = Crafty.e("StoneIcon");
    var muteIcon = Crafty.e("Music");
});


