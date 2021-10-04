Crafty.c("TitleBG", {
    init: function () {
        this.addComponent('2D, DOM, Image, Mouse');
        this.attr({x: 0, y: 0, w: 1200, h: 800});
        this.image("assets/images/title/title_screen_sad.png");
    }
});

Crafty.c("TitleFG", {
    init: function () {
        this.addComponent('2D, DOM, Image');
        this.attr({x: (1200-811)/2, y: 100, w: 811, h: 484});
        this.image("assets/images/title/title_billboard.png");
    }
});

Crafty.c("PlayButton", {
    init: function () {
        this.addComponent('2D, DOM, Image, Mouse');
        this.attr({x: 275, y: 420, w: 158, h: 74});
        this.image("assets/images/buttons/play_button.png");
    }
});
