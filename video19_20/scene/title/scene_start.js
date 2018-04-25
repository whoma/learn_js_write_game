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
        let tower = new Tower(this.game);
        tower.x = 500;
        tower.y = 300;
        this.addElement(tower);
    }

    setupTowers() {
        let tower1 = new Tower(this.game);
        this.addElement(tower1);
        this.towers.push(tower1);
    }

    setupEnemys() {
        let enemy1 = new Enemy(this.game);
        let enemy2 = new Enemy(this.game);
        enemy2.x += 35;
        this.addElement(enemy1);
        this.addElement(enemy2);

        this.enemies.push(enemy1);
        this.enemies.push(enemy2);
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
        for (let t of this.towers) {
            if (!t.hasTarget()) {
                t.findTarget(this.enemies);
            }
        }
    }
}