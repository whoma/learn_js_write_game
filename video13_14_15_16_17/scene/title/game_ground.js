'use strict'

class Game_Ground {
    constructor(game) {
        this.game = game;
        this.setup();
    }

    setup() {
        //this.y = 600;
        this.grounds = [];
        this.skipCount = 3;
        for (let i = 0; i < 13; i++) {
            let p = new Game_Image(this.game, 'ground');
            p.x = i * 37;
            p.y = 400;
            this.grounds.push(p);
        }
    }

    update() {
        // this.offset = -5;
        // this.skipCount--;
        // if (this.skipCount < 0) {
        //     this.skipCount = 3;
        //     this.offset = 15;
        // }
    }

    draw() {
        for (let i = 0; i < 12; i++) {
            let p = this.grounds[i];
            //p.x += this.offset;
            this.game.drawImage(p)
        }
    }
}