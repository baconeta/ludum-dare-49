var sanityBar;

const setSanity = (value) => {
	if (MIN_SANITY < value < MAX_SANITY) {
		sanityBar.sanity = value;
	}
	if (getSanity() < LOW_SANITY) {
		sanityBar.state = "LOW";
	} else if (getSanity() < HIGH_SANITY) {
		sanityBar.state = "MEDIUM";
	} else {
		sanityBar.state = "HIGH";
	}
};
const getSanity = () => {
	return sanityBar.sanity
};
const getState = () => {
	return sanityBar.state
}

Crafty.defineScene("Game", function() {
	var player = Crafty.e("Player")
		.attr({x : 40, y: 40});

	var sanityBar = Crafty.e("SanityBar")
		.attr({x : 1125, y : 100});

	var ground1 = Crafty.e('Ground')
		.attr({x: 0, y: 780, w: 200, h: 20})

	var ground2 = Crafty.e('Ground')
		.attr({x: 400, y: 780, w: 200, h: 20})

	var ground3 = Crafty.e('Ground')
		.attr({x: 700, y: 580, w: 200, h: 20})
});