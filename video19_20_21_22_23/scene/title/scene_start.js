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

    addTowers(x, y) {
        x = Math.floor(x / 100) * 100;
        y = Math.floor(y / 100) * 100;
        let tower = new Tower(this.game);
        tower.x = x;
        tower.y = y;
        this.addElement(tower);
        this.towers.push(tower);
    }

    setupTowers() {
        this.addTowers(100, 100);
        this.addTowers(100, 200);
    }

    setupEnemys() {
        let offsetY = [0, 50];
        for (let i = 0; i < 23; i++) {
            let enemy = new Enemy(this.game);
            enemy.x -= i * 20;
            enemy.y += offsetY[i % 2];
            this.addElement(enemy);
            this.enemies.push(enemy);
        }
    }

    setInputs() {
        let tower = null;
        let startDrag = false;
        let offsetX = 0;
        let offsetY = 0;
        this.game.registerMouse((event, status) => {
            let x = event.offsetX;
            let y = event.offsetY;
            if (status === 'down') {
                let click = this.tower.pointInFrame(x, y);
                if (click) {
                    startDrag = true;
                    tower = this.tower.clone();
                    this.addElement(tower);
                    offsetX = this.tower.x - x;
                    offsetY = this.tower.y - y;
                }
            }
            else if (status === 'move') {
                if (startDrag) {
                    tower.x = x + offsetX;
                    tower.y = y + offsetY;
                }
            } else {
                if (startDrag) {
                    this.addTowers(x, y);
                }
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