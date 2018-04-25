'use strict'

class Enemy extends Game_Image {
    constructor(game, name) {
        let image_name = name || 'enemy1';
        super(game, image_name);
        this.setup();
    }

    setup() {
        this.x = 50;
        this.y = 200;
        this.speed = 5;
        this.hp = 3;
        this.destination = 640;
        this.alive = true;
    }

    update() {
        if (this.x > this.destination) {
            return;
        }

        this.x += this.speed;
    }

    die() {
        this.alive = false; 
        // 现象
        // 移除场景 
        this.scene.removeElement(this);
    }
}