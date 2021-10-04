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
        this.attr({x: (1200 - 811) / 2, y: (800 - 484) / 2, w: 811, h: 484});
        this.image("assets/images/title/title_billboard.png");
    }
});

Crafty.c("PlayButton", {
    init: function () {
        this.addComponent('2D, DOM, Image, Mouse');
        this.attr({x: 275, y: 475, w: 139, h: 65});
        this.image("assets/images/buttons/play_button.png");
    }
});

Crafty.c("CreditsButton", {
    init: function () {
        this.addComponent('2D, DOM, Image, Mouse');
        this.attr({x: 745, y: 475, w: 172, h: 65});
        this.image("assets/images/buttons/credits_button.png");
    }
});

Crafty.c("PlayButton", {
    init: function () {
        this.addComponent('2D, DOM, Image, Mouse');
        this.attr({x: 275, y: 475, w: 158, h: 74});
        this.image("assets/images/buttons/play_button.png");
    }
});

Crafty.c("StoneIcon", {
    init: function () {
        this.addComponent('2D, DOM, stone_green');
        this.attr({x: 510, y: 85, h: 200, w: 200})
        // this.image("assets/images/stone_green.png");
    }
});
