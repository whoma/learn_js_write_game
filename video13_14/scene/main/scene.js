'use strict'

class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setupInputs();
    }

    setup() {
        this.numberOfEnemies = 10;
        this.player = new Player(this.game);
        this.cloud = new Cloud(this.game, "cloud");
        this.bg = new Game_Image(this.game, "background");

        this.addElement(this.bg);
        this.addElement(this.cloud);
        this.addElement(this.player);

        this.addEnemies();
    }

    addEnemies() {
        let es = [];
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = new Enemy(this.game);
            es.push(e);

            this.addElement(e);
        }
        this.enemies = es;
    }

    setupInputs() {
        this.game.registerAction('a', () => {
            this.player.moveLeft();
        })

        this.game.registerAction('d', () => {
            this.player.moveRight();
        })

        this.game.registerAction('w', () => {
            this.player.moveUp();
        })

        this.game.registerAction('s', () => {
            this.player.moveDown();
        })

        this.game.registerAction('f', () => {
            this.player.fire();
        })
    }

    update() {
        super.update();
    }
}