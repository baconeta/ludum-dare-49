Crafty.c("PlayerNotification", {
    init: function () {
        this.requires('2D, DOM, Text, Delay')
        this.attr({w: 500, h: 200})
        this.z = 2000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        this.css('text-shadow', '1px 1px 3px black')
        this.textColor('#ffb703');
        this.unselectable();
        this.textFont({size: '25px', weight: "bold", family: "Garamond"});
        this.bind("InstructionText", function (message) {
            if (this.messagesReceived[message] !== "SEENBEFORE") {
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, (message.length * 15), this.alpha / 0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";
            all_messages = this.messagesReceived;
        }.bind(this))
        this.setMessageEvents();
    },

    decayMessage: function () {
        this.alpha -= 0.1;
        return this;
    },

    setMessageEvents: function () {
        this.bind("StartSadness", function () { // Game start
            this.trigger("InstructionText", "Emotions are hard. Nature is dying. Is this a dream or... something else?");
        });

        this.bind("WalkIntoTree", function () { // walk into a tree for the first time (hint for getting past)
            this.trigger("InstructionText", "It seems this tree is really here. Is there a way past it? Around? It seems so.... normal.");
        });

        this.bind("NEW_SANITY_STATE", function (state) {
            if (state === STABILITY.LOW) { // You are starting to see more chaotic stuff for the first time
                this.trigger("InstructionText", "My emotions are getting stronger... what's happening to this place?");
            } else if (state === STABILITY.HIGH) { //
                this.trigger("InstructionText", "My emotions are still there, but I can see past them for the first time...");
            }
        });

        this.bind("STORY_2", function () { // halfway through level 1
            this.trigger("InstructionText", "The world is a sad place. Everything is sad.");
        });

        this.bind("STORY_3", function () { // about to finish level 1
            this.trigger("InstructionText", "What is sadness? Why is this place the way it is?");
        });

        this.bind("STORY_4", function () { // starting level 2
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "Anger is all around me... consuming... inside me. But I thrive off anger and chaos.");
            } else {
                this.trigger("InstructionText", "Anger hurts. It pains me to be so ANGRY. I'm furious. Is this what life is?");
            }
        });

        this.bind("STORY_5", function () { // see the first creature on level 2
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "FEED ME YOUR ANGER.");
            } else {
                this.trigger("InstructionText", "What is anger? Why does it exist? Can I overcome it, or have I already?");
            }
        });

        this.bind("STORY_6", function () { // almost finished level 2
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "Are you angry? Am I angry? I FEEL SO ANGRY. I NEED TO CALM DOWN.");
            } else {
                this.trigger("InstructionText", "I can control myself here. I think I'm starting to understand my purpose...");
            }
        });

        this.bind("STORY_7", function () { //start level 3
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "I am afraid, but I am not afraid of the fear around me. I embrace fear! Do you hear that, fear!?");
            } else {
                this.trigger("InstructionText", "Fear seems to be the reason I'm here. Or was it sadness? Or anger? What do these have in common?");
            }
        });

        this.bind("STORY_8", function () { //halfway through level 3
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "FEAR. ANGER. SADNESS. I feel consumed, but not lost. The world is chaos. Am I chaos?");
            } else {
                this.trigger("InstructionText", "Fear is all-around me, but I can see past it now. I see and feel its importance.");
            }
        });

        this.bind("STORY_9", function () { // finished level 3
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "I think that I need to find balance, but it's too late for me. Balance is important. It matters. But its also" +
                    " fine to be ALL CONSUMED by these emotions. Or maybe not? I don't know anymore... I feel intense. I feel lost. It might be too late for me. " +
                    "Fury. Pain. Anger. The world will crumble around me if I can't find the right balance...");
            } else {
                this.trigger("InstructionText", "It all makes sense. These unstable emotions are important. This is what gives balance to me. " +
                    "To nature. To everything around me. Too much or too little, and things become meaningless. I understand that the world around me is not " +
                    "only chaotic, but also beautiful. Without a bit of both, we can't be whole, and truly alive.");
            }
        });

        this.bind("FALL_OFF_LEVEL", function () { // fall off a platform for the first time
            if (totalSecondsInsane > totalSecondsSane) {
                this.trigger("InstructionText", "Keep me here. I LIVE for chaos. I hope this never ends.");
            } else {
                this.trigger("InstructionText", "I can't leave. I am just starting to feel again. Feel right. But I need to get out of here...");
            }
        });
        return this;
    },
})
