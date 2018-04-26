'use strict'

class Enemy extends Game_Image {
    constructor(game, name) {
        let image_name = name || 'enemy1';
        super(game, image_name);
        this.setup();
    }

    setup() {
        this.x = 10;
        this.y = 200;
        this.speed = 2;
        this.maxHP = 3;
        this.hp = this.maxHP;
        this.destination = 640;
        this.alive = true;
    }

    update() {
        if (this.x > this.destination) {
            return;
        }

        this.x += this.speed;
    }

    drawLifeBar() {
        this.game.context.fillStyle = 'red';
        let [x, y] = [this.x, this.y - 10];
        let w = this.width;
        this.game.context.fillRect(x, y, w, 10);
        this.game.context.fillStyle = 'green';
        w = this.width * (this.hp / this.maxHP);
        this.game.context.fillRect(x, y, w, 10);
    }

    draw() {
        super.draw();
        
        this.drawLifeBar();
    }

    die() {
        this.alive = false; 
        // 现象
        // 移除场景 
        this.scene.removeElement(this);
    }
}