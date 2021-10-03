var GAME_SCREEN_WIDTH = 1200;
var GAME_SCREEN_HEIGHT = 800;

Crafty.init(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Title");

const levelController = Crafty.e("LevelController");
