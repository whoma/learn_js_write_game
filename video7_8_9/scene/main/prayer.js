'use strict'

class Player extends Game_Image {
    constructor(game) {
        super(game, 'player');
        this.setup();
    }

    setup() {
        this.x = 130;
        this.y = 470;
        this.speed = 10;
        this.coolDown = 5;
    }

    fire() {
        if (this.coolDown === 0) {
            this.coolDown = 5;
            let bullet = new Bullet(this.game);
            bullet.x = this.x + this.width / 2;
            bullet.y = this.y;
            this.scene.addElement(bullet);
        }
    }

    update() {
        if (this.coolDown > 0) {
            this.coolDown--;
        }
    }

    debug() {
        this.speed = config.player_speed;
        if (this.cooldown === 0)  {
            this.coolDown = config.coolDown;
        }
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}