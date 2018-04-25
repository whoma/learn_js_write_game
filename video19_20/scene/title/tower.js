'use strict'

class Tower extends Game_Image {
    constructor(game, name) {
        let image_name = name || 'gun1';
        super(game, image_name);
        this.setup();
    }

    setup() {
        this.x = 200;
        this.y = 200;
        this.range = 50;
        this.target = null;
        this.attack = 1;
        this.count = 5;
    }

    fire() {
        this.count--;
        if (this.count === 0) {
            this.count = 5;
            this.target.hp -= this.attack;
        }
        if (this.target.hp <= 0) {
            this.target.die();
            this.target = null;
        }
    }

    canAttack(enemy) {
        let e = enemy;
        let enemyExist = e !== null && e.alive;
        if (enemyExist) {
            return this.center().position(e.center()) < this.range;
        } else {
            return false;
        }
    }

    hasTarget() {
        return this.target !== null;
    }

    findTarget(enemies) {
        for (let e of enemies) {
            if (this.canAttack(e)) {
                this.target = e;
                break;
            }
        }
    }

    update() {
        // TODO 远离时，即不能射击时。 target 应为 null
        if (this.canAttack(this.target)) {
            this.fire();
        } else {
            this.target = null;
        }
    }
}