const LEVELS = {
    SADNESS: 1,
    ANGER: 2,
    FEAR: 3
};

Crafty.c("LevelController", {
    init: function () {
        this.addComponent("Persist, 2D, DOM");
        this.level = 0;
        this.totalLevels = 3;
        this.nextLevelLoading = false;

        this.bind("SetLevel", (level) => {
            this.level = level - 1;
            this.startLoading();
            setTimeout(this.loadNextLevel, 500);
        });

        this.bind("NextLevel", () => {
            if (this.canChangeLevel()) {
                this.startLoading();
                setTimeout(this.loadNextLevel, 500);
            } else if (this.level >= this.totalLevels) { // no more levels so go to end screen
                Crafty.enterScene("EndScreen", Crafty.enterScene("EndScreen")) // there was a bug... this was my fix :)
            }
        });

        this.bind("ResetLevel", () => {
            if (!this.nextLevelLoading) {
                this.startLoading();
                setTimeout(this.resetLevel, 500);
            }
        });

        this.canChangeLevel = () => {
            return !this.nextLevelLoading && this.level < this.totalLevels;
        };

        this.loadNextLevel = () => {
            this.level++;
            audioController.stopTrack();
            Crafty.scene(`Level${this.level}`);
            this.finishLoading();
        };

        this.resetLevel = () => {
            Crafty.scene(`Level${this.level}`);
            this.finishLoading();
            Crafty.trigger("FALL_OFF_LEVEL");
        };

        this.startLoading = () => {
            this.nextLevelLoading = true;
        };

        this.finishLoading = () => {
            this.nextLevelLoading = false;
        };
    }
});