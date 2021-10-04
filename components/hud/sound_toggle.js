Crafty.c('Music', {
    init: function () {
        this.addComponent("2D, DOM, Color, Image, Mouse, music");
        this.attr({x: 0, y: 0, z: 1500, w: 50, h: 50});
        this.color('#333', 0.25);

        this.bind('Click', () => {
            audioController.muteToggle()
            if (audioController.isMuted) {
                this.image("assets/images/buttons/music_mute.png")
            } else {
                this.image("assets/images/buttons/music_playing.png")
            }
        });
    }
})
