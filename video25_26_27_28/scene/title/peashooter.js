'use strict'

class PeaShooter extends Game_Animation {
    constructor(game) {
        let animation = {
            name: 'peashooter',
            formatPath: './img/peashooter/{action}/peashooter_{action}_{index}.png',
            actions: [
                {
                    name: 'idle',
                    length: 13,
                },
            ],
        }
        super(game, animation);
        this.setup();
    }

    setup() {
        this.x = 10;
        this.y = 200;
        this._countDown = 60;
        this._coolDown = 0
        this.offsetBulletX = 30;
        this.row = -1;
    }

    fire() {
        if (this._coolDown !== 0) {
            this._coolDown--;
            return;
        }
        this._coolDown = this._countDown;
        let bullet = new PeaBullet(this.game);
        bullet.x = this.x + this.offsetBulletX;
        bullet.y = this.y
        bullet.row = this.row;
        this.scene.addElement(bullet);
        this.scene.bullets.push(bullet);
    }
}