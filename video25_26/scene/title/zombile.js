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

    update() {
        super.update();

        this.x -= 0.31;
    }

    setup() {
        this.x = 10;
        this.y = 150;
    }
}