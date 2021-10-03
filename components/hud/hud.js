Crafty.c("HUD", {
    init: function () {
        this.addComponent("2D, DOM, Color");
        this.w = 50;
        this.h = 50;
        this.x = -Crafty.viewport.x;
        this.y = -Crafty.viewport.y;
        this.z = 1500;
        this.color("black");
        // TODO Replace with imagery.
        this.alpha = 0.00

        const offsetLeft = (entity, amount) => entity.x = this.x + amount;

        const offsetRight = (entity, amount) => entity.x = this.x + Crafty.viewport.width - amount

        const offsetTop = (entity, amount) => entity.y = this.y + amount

        const offsetBottom = (entity, amount) => entity.y = this.y + Crafty.viewport.height - amount

        const sanityBar = Crafty.e("SanityBar");
        offsetRight(sanityBar, 50);
        offsetBottom(sanityBar, 600);
        this.attach(sanityBar);

        const itemSlot = Crafty.e("ItemSlot");
        offsetRight(itemSlot, 50);
        offsetTop(itemSlot, 400);
        this.attach(itemSlot);

        const music = Crafty.e('Music')
        offsetTop(music, 10);
        offsetLeft(music, 10);
        this.attach(music);

        this.bind('KeyDown', function (e) {
            if (e.key === Crafty.keys.R) {
                Crafty.trigger("ResetLevel");
            }
        });

        this.bind("ViewportScroll", function (e) {
            this.x = -Crafty.viewport.x;
            this.y = -Crafty.viewport.y;
        });
    },
});
