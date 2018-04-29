'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
    }

    setup() {
        this.setBG();
        this.setPeaShooter();
        this.setZombile();
        this.setInputs();
    }

    setPeaShooter() {
        this.p = new PeaShooter(this.game);
        this.p.x = 250;
        this.p.y = 160;
        this.addElement(this.p);
    }

    setZombile() {
        this.zombile = new Zombile(this.game);
        this.zombile.x = 900;
        this.zombile.y = 110;
        this.addElement(this.zombile);
    }

    setBG() {
        let bg1 = new Game_Image(this.game, 'bg1');
        this.addElement(bg1);
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