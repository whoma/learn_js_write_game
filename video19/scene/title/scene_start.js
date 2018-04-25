'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.gun = new Game_Image(this.game, 'gun1');
        this.gun.x = 500;
        this.gun.y = 200;
        this.addElement(this.gun);
    }

    setInputs() {
        let tower = null;
        let startDrag = false;
        this.game.registerMouse((event, status) => {
            let x = event.offsetX;
            let y = event.offsetY;
            if (status === 'down') {
                let click = this.gun.pointInFrame(x, y);
                if (click) {
                    startDrag = true;
                    tower = this.gun.clone();
                    this.addElement(tower);
                }
            }
            else if (status === 'move') {
                if (startDrag) {
                    tower.x = x;
                    tower.y = y;
                }
            } else {
                startDrag = false;
                this.removeElement(tower);
            }
        })
    }

    update() {
        super.update();
    }
}