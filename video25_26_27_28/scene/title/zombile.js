'use strict'

class Zombile extends Game_Animation {
    constructor(game) {
        let animation = {
            name: 'zombile',
            formatPath: './img/zombile/{action}/zombile_{action}_{index}.png',
            actions: [
                {
                    name: 'walking',
                    length: 15,
                },
                {
                    name: 'attacking',
                    length: 11,
                },
            ],
        }
        super(game, animation);
        this.setup();
    }

    setup() {
        this.x = 10;
        this.y = 150;
        this.row = -1;
        this.hp = 4;
    }

    hited(damage) {
        this.hp -= damage;
        if (this.hp === 0) {
            this.die();
        }
    }

    die() {
        this.scene.removeZombile(this);
    }

    update() {
        super.update();

        this.x -= 0.31;
    }
}