Crafty.c("AudioController", {
    init: function () {
        this.addComponent("Delay");
        // chrome & other browsers block autoplaying sounds.
        // user needs to interact with website before it can be played
        this.canPlay = false;
        this.isMuted = false;
    },

    loadTrack: function (trackName, pathArray) {
        Crafty.audio.add(trackName, pathArray);
    },

    // defaults to loop (play 999 times)
    playTrack: function (trackName, timesToPlay = 999, trackVolume = 1) {
        if (this.canPlay && !Crafty.audio.isPlaying(trackName)) Crafty.audio.play(trackName, timesToPlay, trackVolume);

    },

    pauseTrack: function (trackName, timeToPause = 0) {
        if (timeToPause != 0) {
            this.delay(function () {
                Crafty.audio.unpause(trackName)
            }, timeToPause, 0)
        }
        Crafty.audio.pause(trackName);
    },

    stopTrack: function (trackName = "all") {
        if (trackName == "all") {
            Crafty.audio.stop();
            Crafty.audio.remove();
        } else {
            Crafty.audio.stop(trackName);
            Crafty.audio.remove(trackName);
        }
    },

    muteToggle: function () {
        this.isMuted = !this.isMuted;
        Crafty.audio.toggleMute()
    }
})
