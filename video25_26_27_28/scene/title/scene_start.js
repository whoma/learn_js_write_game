'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
    }

    debug() {
        this.bulletHitOffset = config.hit_offset.value;
    }

    setup() {
        this.offsetX = 255;
        this.offsetY = 100;
        this.widthOfColumn = 80;
        this.heightOfRow = 100;
        this.offsetYZombile = 20;
        this.bulletHitOffset = -35;
        this.plants = [];
        this.zombiles = [];
        this.bullets = [];
        this.setBG();
        this.setPeaShooter();
        this.setZombile();
        this.setInputs();
    }

    addPlant(plant, column, row) {
        let p = plant;
        let x = this.offsetX + column * this.widthOfColumn;
        let y = this.offsetY + row * this.heightOfRow;
        p.x = x;
        p.y = y;
        p.row = row;
        this.addElement(p);
        this.plants.push(p);
    }

    setPeaShooter() {
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 5; j++) {
                let p = new PeaShooter(this.game);
                this.addPlant(p, i, j);
            }
        }
    }

    addZombile(zombile, row) {
        let z = zombile;
        z.x = 900;
        let y = this.offsetYZombile + this.heightOfRow * row;
        z.y = y;
        z.row = row;
        this.addElement(z);
        this.zombiles.push(z);
    }

    setZombile() {
        let z1 = new Zombile(this.game);
        this.addZombile(z1, 0);
        let z2 = new Zombile(this.game);
        this.addZombile(z2, 4);
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

    removeZombile(zombile) {
        this.zombiles = this.zombiles.filter(e => e != zombile);
        this.removeElement(zombile);
    }

    removeBullet(bullet) {
        this.bullets = this.bullets.filter(e => e != bullet);
        this.removeElement(bullet);
    }

    updateFire() {
        for (let p of this.plants) {
            let row = p.row;
            for (let z of this.zombiles) {
                if (row === z.row) {
                    p.fire();
                }
            }
        }
    }

    updateHit() {
        for (let b of this.bullets) {
            let row = b.row;
            for (let z of this.zombiles) {
                if (row === z.row) {
                    if (z.x - b.x < this.bulletHitOffset) {
                        b.remove();
                        z.hited(b.damage);
                    }
                }
            }
        }
    }

    update() {
        super.update();

        this.updateFire();

        this.updateHit();
    }
}