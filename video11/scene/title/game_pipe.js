'use strict'

class Game_Pipe {
    constructor(game) {
        this.game = game;
        this.setup();
    }

    setup() {
        this.pipes = [];
        this.pipeSpace = 100;
        this.pipe_row_distance = 150;
        for (let i = 0; i < 3; i++) {
            let p1 = new Game_Image(this.game, 'pipe');
            p1.x = (i + 1) * this.pipe_row_distance;
            p1.y = randomBetween(-200, -100);
            p1.flipY = true;
            let p2 = new Game_Image(this.game, 'pipe');
            p2.x = p1.x;
            p2.y = -p1.y + this.pipeSpace;
            this.pipes.push(p1);
            this.pipes.push(p2);
        }
    }

    update() {
        for (let i = 0; i < this.pipes.length; i += 2) {
            let p1 = this.pipes[i];
            let p2 = this.pipes[i + 1];
            p1.x -= 5;
            if (p1.x < -30) {
                p1.x = 300 + (this.pipe_row_distance);
                p1.y = randomBetween(-200, -100);
                p2.y = -p1.y + this.pipeSpace;
            }
            p2.x = p1.x;
        }
    }

    debug() {
        this.pipeSpace = config.pipe_space.value;
        this.pipe_row_distance = config.pipe_row_distance.value;
    }

    draw() {
        for (let p of this.pipes) {
            this.game.context.save();
            if (p.flipY) {
                this.game.context.scale(1, -1);
            }
            this.game.drawImage(p);
            this.game.context.restore();
        }
    }
}