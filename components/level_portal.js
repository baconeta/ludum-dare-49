Crafty.c("LevelPortal", {
    init: function () {
        this.requires('2D, DOM, Collision');
        this.attr({x: 0, y: 0, w: 474 / 4, h: 606 / 4});
        this.setType();

        this.onHit("PlayerBody", () => {
            Crafty.trigger("NextLevel");
        });
    },

    place: function (x, y) {
        this.attr({x: x, y: y - this.h});
        return this;
    },

    setType: function () {
        const level = Crafty("LevelController").level;
        this.resetComponents();
        switch (level) {
            case LEVELS.SADNESS:
                this.addComponent("next_level_sign_sad");
                break;
            case LEVELS.ANGER:
                this.addComponent("next_level_sign_angry");
                break;
            case LEVELS.FEAR:
                this.addComponent("next_level_sign_fear");
                break;
            default:
                console.error(`Cannot load level portal image for level ${level}`)
                this.addComponent("next_level_sign_sad");
                break;
        }
        this.attr({w: 474 / 4, h: 606 / 4});
    },

    resetComponents: function () {
        this.removeComponent("next_level_sign_sad");
        this.removeComponent("next_level_sign_angry");
        this.removeComponent("next_level_sign_fear");
    },
});