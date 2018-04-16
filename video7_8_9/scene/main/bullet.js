'use strict'

class Bullet extends Game_Image {
    constructor(game) {
        super(game, 'bullet');
        this.setup();
    }

    setup() {
        this.speed = 5;
    }

    update() {
        this.y -= this.speed;
    }

    debug() {
        this.speed = config.bullet_speed;
    }
}