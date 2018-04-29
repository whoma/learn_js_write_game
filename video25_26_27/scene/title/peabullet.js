'use strict'

class PeaBullet extends Game_Image{
    constructor(game, name) {
        let imageName = name || 'bp1';
        super(game, imageName);
        this.setup();
    }

    setup() {
        this.row = -1;
        this.break = false;
        // 子弹伤害
        this.damage = 1;
        // 子弹速度
        this.speed = 2;
    }

    update() {
        if (this.break) {
            return;
        }
        this.x += this.speed;
    }

    draw() {
        if (this.break) {
            return;
        }

        super.draw();
    }

    fade() {
        this.break = true;
    }
}