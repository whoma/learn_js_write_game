'use strict'

class Scene_Editor extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.mario = new Game_Mario(this.game);
        this.tileMap = new Game_TileMap(this.game);
        this.addElement(this.mario);
        this.addElement(this.tileMap);
    }

    setInputs() {
        let playerSpeed = 5;
        this.game.registerAction('a', (action) => {
             this.mario.move(-playerSpeed, action);
        })
        this.game.registerAction('d', (action) => {
             this.mario.move(playerSpeed, action);
        })
        this.game.registerAction('j', (action) => {
             this.mario.jump(action);
        })
    }

    update() {
        super.update();
    }
}