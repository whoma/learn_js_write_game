'use strict'

class PeaBullet extends Game_Image {
    constructor(game, name) {
        let imageName = name || 'bp1';
        super(game, imageName);
        this.setup();
    }

    debug() {
        this.speed = config.bullet_speed.value
    }

    setup() {
        this.row = -1;
        // 子弹伤害
        this.damage = 1;
        // 子弹速度
        this.speed = 2;

        this.borderX = 1400;
    }

    update() {
        this.x += this.speed;

        if (this.x >= this.borderX) {
            this.remove();
        }
    }

    draw() {
        super.draw();
    }

    remove() {
        this.scene.removeBullet(this);
    }
}