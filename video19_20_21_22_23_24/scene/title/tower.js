'use strict'

class Tower extends Game_Image {
    constructor(game, name) {
        let image_name = name || 'gun1';
        super(game, image_name);
        this.setup();
    }

    setup() {
        this.x = 200;
        this.y = 220;
        this.range = 60;
        this.target = null;
        this.attack = 1;
        this._coolDown = 5;
        this._fireCount = 0;
        this.tileSize = this.width;
    }

    updateRotation() {
        let v = this.center().sub(this.target.center())
        this.rotation = arcTan(-v.x, v.y)
    }

    fire() {
        if (this._fireCount !== 0) {
            this._fireCount--;
            return;
        }
        this.updateRotation();
        this._fireCount = this._coolDown;
        this.target.hp -= this.attack;
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

    drawAttackRange() {
        this.game.context.beginPath();
        let v = this.center();
        this.game.context.arc(v.x, v.y, this.range, 0, 2 * Math.PI);
        this.game.context.stroke();
    }

    draw() {
        this.drawAttackRange();

        super.draw();
    }
}