Crafty.c("StoryTrigger", {
    init: function (position) {
        this.requires(position, "2D, DOM");
    },

    place: function(x,y) {
        this.x = x;
        this.y = y;
    }
});
