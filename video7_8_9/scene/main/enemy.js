'use strict'

class Enemy extends Game_Image {
    constructor(game) {
        let type = randomBetween(0, 4);
        let name = 'enemy' + type;
        super(game, name);
        this.setup();
    }

    setup() {
        this.x = randomBetween(0, 320);
        this.y = -randomBetween(0, 200);
        this.speed = 5;
        this.life = true;
    }

    update() {
        this.y += this.speed;
        if (this.y > 568) {
            this.setup();
        }

    } 
    
    collide(bullet) {
        return rectIntersect(this, bullet) || rectIntersect(bullet, this);
    }
} 