'use strict'

class Scene_Editor extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.tileMap = new Game_TileMap(this.game);
        this.mario = new Game_Mario(this.game, this.tileMap);
        this.addElement(this.tileMap);
        this.addElement(this.mario);
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