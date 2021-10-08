const GAME_SCREEN_WIDTH = 1200;
const GAME_SCREEN_HEIGHT = 800;

const DEBUG = true;
var totalSecondsSane = 0.0;
var totalSecondsInsane = 0.0;

// needs to be above game init, as each level needs the AudioController
const audioController = Crafty.e("AudioController");
Crafty.init(GAME_SCREEN_WIDTH, GAME_SCREEN_HEIGHT, document.getElementById('game'));

Crafty.scene("Loading");
// Controllers.
const levelController = Crafty.e("LevelController");
const sanityController = Crafty.e("SanityController");

// audio setup
const BASE_SOUND_URL = "assets/sounds/"
// add music tracks here
audioController.loadTrack('theme', [`${BASE_SOUND_URL}theme.ogg`]);
audioController.loadTrack('sadness',[`${BASE_SOUND_URL}sadness.ogg`]);
audioController.loadTrack('fear',[`${BASE_SOUND_URL}fear.ogg`]);
audioController.loadTrack('anger',[`${BASE_SOUND_URL}anger.ogg`]);

audioController.loadTrack('bottle-pickup',[`${BASE_SOUND_URL}bottle-pickup.ogg`]);
audioController.loadTrack('enemy-walk',[`${BASE_SOUND_URL}critter-walk-loop.ogg`]);
audioController.loadTrack('insane-sane',[`${BASE_SOUND_URL}sane-insane.ogg`]);
audioController.loadTrack('sane-insane',[`${BASE_SOUND_URL}insane-sane.ogg`]);

audioController.loadTrack('grass_step_1',[`${BASE_SOUND_URL}grass_step_1.ogg`]);
audioController.loadTrack('grass_step_2',[`${BASE_SOUND_URL}grass_step_2.ogg`]);

audioController.loadTrack('crumble_1',[`${BASE_SOUND_URL}crumble_1.ogg`]);
audioController.loadTrack('crumble_2',[`${BASE_SOUND_URL}crumble_2.ogg`]);

audioController.loadTrack('hit_1',[`${BASE_SOUND_URL}hit_1.ogg`]);
audioController.loadTrack('hit_2',[`${BASE_SOUND_URL}hit_2.ogg`]);
audioController.loadTrack('hit_3',[`${BASE_SOUND_URL}hit_3.ogg`]);
audioController.loadTrack('hit_4',[`${BASE_SOUND_URL}hit_4.ogg`]);
