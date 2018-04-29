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
    }
}