'use strict'

class Cloud extends Game_Image {
    constructor(game) {
        super(game, 'cloud');
        this.setup();
    }

    setup() {
        this.speed = 2
        this.x = randomBetween(0, 320);
        this.y = -randomBetween(0, 200);
    }

    update() {
        this.y += this.speed;
        if (this.y > 568) {
            this.setup();
        }
    }

    debug() {
        this.speed = config.cloud_speed;
    }

}