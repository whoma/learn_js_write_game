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
    }

    decideDirection(vector) {
        let v = vector;
        if (this.target.x >= this.x) {
            v.x *= -1;
        }
        if (this.target.y <= this.y) {
            v.y *= -1;
        }

        return v;
    }

    decideRotation(vector) {
        let v = vector;
        let x = v.x;
        let y = v.y;
        let r = 0;
        if (y === 0) {
            if (x > 0) {
                r = -90;
            } else {
                r = 90;
            }
        }
        if (x === 0) {
            if (y > 0) {
                r = 0;
            } else {
                r = -180;
            }
        }
        if (x != 0 && y != 0) {
            r = arcTan(y, x);
        }

        return r;
    }

    updateRotation() {
        let v = this.center().sub(this.target.center())
        // 校准方向
        v = this.decideDirection(v);
        // 校准角度
        this.rotation = this.decideRotation(v);
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