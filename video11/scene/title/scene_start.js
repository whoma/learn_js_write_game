'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        // game.registerAction('k', () => {
        //     var scene = new Scene(game);
        //     game.replaceScene(scene);
        // })
        this.setup();
        this.setInputs();
    }

    setup() {
        this.bg = new Game_Image(this.game, 'bg');
        this.ground = new Game_Ground(this.game);
        this.animations = new Game_Animation(this.game);
        this.pipe = new Game_Pipe(this.game);
        this.addElement(this.bg);
        this.addElement(this.pipe);
        this.addElement(this.ground);
        this.addElement(this.animations);
    }

    setInputs() {
        this.game.registerAction('a', (action) => {
            this.animations.move(-5, action);
        })
        this.game.registerAction('d', (action) => {
            this.animations.move(5, action);
        })
        this.game.registerAction('j', (action) => {
            this.animations.jump(action);
        })

    }
}