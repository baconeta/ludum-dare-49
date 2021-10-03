Crafty.defineScene('Title', function () {
    Crafty.background("#AAA");
    Crafty.e("2D, DOM, Text")
        .attr({ w: 200, h: 50, x: (GAME_SCREEN_WIDTH/2)-100, y: (GAME_SCREEN_HEIGHT/2)-100 })
        .text("Click to play 'Emotionally unstable horses who have to go to work on Monday!'")
        .textFont({ size: '20px', weight: 'bold' })
        .textAlign("center")
        .textColor("#111");
    Crafty.e("2D, DOM, Text")
        .attr({ w: 200, h: 50, x: 550, y: 700 })
        .text("Robot Horses made this game!")

    var playGameButton = Crafty.e("2D, DOM, Image, Mouse")
        .attr({
            x: 0,
            y: 0,
            w: 10000,
            h: 1000
        })
        .bind('Click', function (MouseEvent) {
            Crafty.trigger("NextLevel");
        });
});


