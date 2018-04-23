'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.bg = new Game_Image(this.game, 'bg');
        this.ground = new Game_Ground(this.game);
        this.mario = new Game_Mario(this.game);
        this.addElement(this.bg);
        this.addElement(this.ground);
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