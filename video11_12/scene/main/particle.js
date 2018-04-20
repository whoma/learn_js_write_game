'use strict'

class Particle extends Game_Image {
    constructor(game) {
        super(game, 'fire');
        this.life = 30;
    }

    init(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    update() {
        if (this.life > 0) {
            this.life--;
        }
        let s = 0.1;
        this.x += s * this.vx;
        this.y += s * this.vy;
    }

    draw() {
        if (this.life > 0) {
            super.draw();
        }
    }
}