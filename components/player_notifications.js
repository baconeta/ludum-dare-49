Crafty.c("PlayerNotification", {
    init: function () {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 500, h: 200})
        this.z = 2000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        this.css('text-shadow', '1px 1px 3px black')
        this.textColor('#724108');
        this.unselectable();
        this.textFont({size: '60px', weight: "bold", family: "Garamond"});
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
    },

    setMessageEvents: function () {
        this.bind("StartSadness", function () {
            this.trigger("InstructionText", "Wow there's a real lack of horses here");
        })

    },
})
