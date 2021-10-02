Crafty.c("HUD", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.w = GAME_SCREEN_WIDTH;
        this.h = 50;
        this.x = -GAME_SCREEN_WIDTH/2;
        this.y = 0;
        this.z = 1500;
        this.color("black");
        // TODO Replace with imagery.
        this.alpha = 0.00

        const sanityBar = Crafty.e("SanityBar");
        sanityBar.x = this.x + GAME_SCREEN_WIDTH - 50;
        sanityBar.y = this.y - 350;
        this.attach(sanityBar);
    },
});
