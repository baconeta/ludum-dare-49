Crafty.c("HUD", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.w = GAME_SCREEN_WIDTH;
        this.h = 50;
        this.x = -GAME_SCREEN_WIDTH / 2;
        this.y = 0;
        this.z = 1500;
        this.color("black");
        // TODO Replace with imagery.
        this.alpha = 0.00

        const sanityBar = Crafty.e("SanityBar");
        sanityBar.x = this.x + GAME_SCREEN_WIDTH - 50;
        sanityBar.y = this.y - 300;
        this.attach(sanityBar);

        const itemSlot = Crafty.e("ItemSlot");
        itemSlot.x = this.x + GAME_SCREEN_WIDTH - 50;
        itemSlot.y = this.y + GAME_SCREEN_HEIGHT - 400;
        this.attach(itemSlot);

        const music = Crafty.e('Music').attr({
            x: -560, y: -300,
            w: 50, h: 50
        }).bind('Click', () => audioController.muteToggle());
        this.attach(music);
    },
});
