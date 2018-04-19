'use strict'

class Game_Ground extends Game_Image {
    constructor(game) {
        super(game, 'ground');
        this.setup();
    }

    setup() {
        this.y = 600;
        this.skipCount = 3;
    }

    update() {
        this.offset = -5;
        this.skipCount--;
        if (this.skipCount < 0) {
            this.skipCount = 3;
            this.offset = -15;
        }
    }

    draw() {
        for (let i = 0; i < 12; i++) {
            this.x = i * 37 + this.offset;
            this.game.drawImage(this)
        }
    }
}