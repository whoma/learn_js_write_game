'use strict'

class Game_Particle {
    constructor(game, x, y){
        this.game = game;
        this.setup();
        this.x = x;
        this.y = y;
    }
    
    setup() {
        this.numberOfParticles = 20;
        this.duration = 20;
        this.particles = [];
    }

    update() {
        this.duration > 0 ? this.duration-- : '';
        if (this.duration > 0 && this.particles.length < this.numberOfParticles) {
            let p = new Particle(this.game);
            var vx = randomBetween(-10, 10);
            var vy = randomBetween(-10, 10);
            p.init(this.x, this.y, vx, vy);
            this.particles.push(p);
            this.scene.addElement(p);
        }
    }

    draw() {
        for (let p of this.particles) {
            p.draw();
            this.particles = this.particles.filter(p => p.life > 0);
        }
    }
}