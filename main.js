const GAME_SCREEN_WIDTH = 1200;
const GAME_SCREEN_HEIGHT = 800;

const DEBUG = false;
var totalSecondsSane = 0.0;
var totalSecondsInsane = 0.0;

// needs to be above game init, as each level needs the AudioController
const audioController = Crafty.e("AudioController");
Crafty.init(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Title");
// Controllers.
const levelController = Crafty.e("LevelController");
const sanityController = Crafty.e("SanityController");

// audio setup
const BASE_SOUND_URL = "assets/sounds/"
// add music tracks here
audioController.loadTrack('theme', [`${BASE_SOUND_URL}theme.ogg`])
audioController.loadTrack('sadness',[`${BASE_SOUND_URL}sadness.ogg`])
audioController.loadTrack('fear',[`${BASE_SOUND_URL}fear.ogg`])
audioController.loadTrack('anger',[`${BASE_SOUND_URL}anger.ogg`])

audioController.loadTrack('insane-sane',[`${BASE_SOUND_URL}sane-insane.ogg`])
audioController.loadTrack('sane-insane',[`${BASE_SOUND_URL}insane-sane.ogg`])
audioController.loadTrack('bottle-pickup',[`${BASE_SOUND_URL}bottle-pickup.ogg`])

