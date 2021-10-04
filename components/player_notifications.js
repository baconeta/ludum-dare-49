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
            if (this.messagesReceived[message] != "SEENBEFORE") {
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, (message.length * 10), this.alpha / 0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";
            all_messages = this.messagesReceived;
        }.bind(this))
        this.setMessageEvents();
    },

    decayMessage: function () {
        this.alpha -= 0.1;
        return this;
        return this;
    },

    setMessageEvents: function () {
        this.bind("StartSadness", function () {
            this.trigger("InstructionText", "You're feeling normal, but your emotions are unstable...");
        });
        
        this.bind("WalkIntoTree", function() {
            this.trigger("InstructionText", "You shall not pass while you're feeling sane.");
        });

        this.bind("ALTER_SANITY_RATE", function(rate) {
            if (rate < 0) {
                this.trigger("InstructionText", "You feel yourself becoming more unstable...");
            } else if (rate > 0) {
                this.trigger("InstructionText", "You feel yourself returning to normal.");
            }
        });
        return this;
    },
})
