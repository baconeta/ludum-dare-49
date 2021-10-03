var GAME_SCREEN_WIDTH = 1200;
var GAME_SCREEN_HEIGHT = 800;

var DEBUG = false;

// needs to be above game init, as each level needs the AudioController
var audioController = Crafty.e("AudioController");
Crafty.init(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Title");
// controllers
const levelController = Crafty.e("LevelController");

// audio setup
var BASE_SOUND_URL = "assets/sounds/"
// add music tracks here
audioController.loadTrack('theme', [`${BASE_SOUND_URL}theme.ogg`])
audioController.loadTrack('sadness',[`${BASE_SOUND_URL}sadness.ogg`])


