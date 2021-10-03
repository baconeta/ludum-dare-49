function makeCameraTrackEntity(entity, yoffset) {
    // Sets up the Camera Tracking to the player entity
    Crafty.viewport.clampToEntities = false;
    Crafty.viewport.scale(1);
    Crafty.one("CameraAnimationDone", function () {
        Crafty.viewport.follow(entity, 0, 0 + yoffset);
    });
    Crafty.viewport.centerOn(entity, 0);

    Crafty.bind("ViewportScroll", () => {
        let background = Crafty("Background");
        const topOfBackground = Crafty.viewport.height - background.y;
        const bottomOfBackground = topOfBackground - background.h;

        const cameraY = Crafty.viewport.y;
        const maxCameraY = topOfBackground - Crafty.viewport.height;
        const minCameraY = bottomOfBackground;

        if (cameraY < minCameraY) {
            Crafty.viewport.y = bottomOfBackground;
        }

        if (cameraY > maxCameraY) {
            Crafty.viewport.y = maxCameraY;
        }
    });
}