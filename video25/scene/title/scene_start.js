'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.zombile = new Zombile(this.game);
        this.addElement(this.zombile);
    }

    setInputs() {
        let key = {
            down: 'attacking',
            up: 'walking',
        }
        this.game.registerAction('e', (action) => {
            this.zombile.changeAnimation(key[action]);
        })
    }
}