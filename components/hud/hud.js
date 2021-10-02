Crafty.c("HUD", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.z = 1500;
        this.w = GAME_SCREEN_WIDTH - 15;
        this.h = 40;
        this.x = -410;
        this.y = 120;
        this.color("black");
        this.alpha = 0.05;
        this.padding = 10;

        const sanityBar = Crafty.e("SanityBar");
        sanityBar.x = this.x + this.padding + 150;
        sanityBar.y = this.y + this.padding;
        this.attach(sanityBar);

        /*this.bind("collectBucket", function() {
            var hudCounter = Crafty.e("HudCounter");
            hudCounter.x = this.x + GAME_SCREEN_WIDTH - hudCounter.w;
            hudCounter.y = this.y + this.padding;
            this.attach(hudCounter);
        });*/
    },
});

Crafty.c("HudExtension", {
    init: function() {
        this.addComponent("2D, DOM, Color");
        this.z = 1500;
        this.w = 100;
        this.h = 60;
        this.x = -410;
        this.y = 40;
        this.color("black");
        this.alpha = 0.05;
        this.padding = 15;
        this.tree = Crafty.e("HudTree").place(this.x + this.padding,this.y+this.padding/2)
        this.attach(this.tree)
    }
});
