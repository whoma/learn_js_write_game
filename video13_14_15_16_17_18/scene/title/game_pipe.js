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
            p1.x = 300 + i * this.pipe_row_distance;
            p1.y = randomBetween(-200, -100);
            p1.flipY = true;
            let p2 = new Game_Image(this.game, 'pipe');
            p2.x = p1.x;
            p2.y = -p1.y + this.pipeSpace;
            this.pipes.push(p1);
            this.pipes.push(p2);
        }
    }

    collide(bird) {
        for (let p of this.pipes) {
            let birdXW = bird.x + bird.width;
            if (birdXW >= p.x && birdXW <= p.x + p.width) {
                let birdYH = bird.y + bird.height;
                if (p.flipY) {
                    /* 
                    y 轴为负值，当进行垂直翻转后，屏幕显示的为 0 ~ -y
                    即 -y 为可见管子的高度
                    */
                    if (birdYH <= -p.y) {
                        return true;
                    }
                } else {
                    if (birdYH >= p.y) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    update() {
        for (let i = 0; i < this.pipes.length; i += 2) {
            let p1 = this.pipes[i];
            let p2 = this.pipes[i + 1];
            p1.x -= 5;
            if (p1.x < -30) {
                //p1.x = 300 + this.pipe_row_distance * ((i + 1) % 2);
                p1.x = 300 + this.pipe_row_distance + p1.width;
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