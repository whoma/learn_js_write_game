'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
        this.setInputs();
    }

    setup() {
        this.towers = [];
        this.enemies = [];

        this.setupEnemys();
        this.setupTowers();
        // UI
        this.setupHID();
    }

    setupHID() {
        this.tower = new Tower(this.game);
        this.tower.x = 500;
        this.tower.y = 300;
        this.addElement(this.tower);
    }

    setupTowers() {
        let tower1 = new Tower(this.game);
        this.addElement(tower1);
        this.towers.push(tower1);
    }

    setupEnemys() {
        for (let i = 0; i < 3; i++) {
            let enemy = new Enemy(this.game);
            enemy.y += 20 * i;
            this.addElement(enemy);
            this.enemies.push(enemy);
        }
    }

    setInputs() {
        let tower = null;
        let startDrag = false;
        this.game.registerMouse((event, status) => {
            let x = event.offsetX;
            let y = event.offsetY;
            if (status === 'down') {
                let click = this.tower.pointInFrame(x, y);
                if (click) {
                    startDrag = true;
                    tower = this.tower.clone();
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
        for (let t of this.towers) {
            if (!t.hasTarget()) {
                t.findTarget(this.enemies);
            }
        }
    }
}