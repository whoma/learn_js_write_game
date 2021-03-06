'use strict'

class Enemy extends Game_Image {
    constructor(game, name) {
        let image_name = name || 'enemy1';
        super(game, image_name);
        this.setup();
    }

    setup() {
        this.x = 10;
        this.y = 150;
        this.speed = 1;
        this.maxHP = 13;
        this.hp = this.maxHP;
        this.alive = true;
    }

    resetWaypoints(map, tileSize) {
        let grid = [];
        for (let m of map) {
            grid.push([m[0] * tileSize, m[1] * tileSize]);
        }
        this.stepIndex = 0;
        this.waypoints = grid;
    }

    update() {
        if (this.alive == false) {
            return;
        }
        let [dx, dy] = this.waypoints[this.stepIndex];
        let signX = (dx > this.x) ? 1 : -1;
        let signY = (dy > this.y) ? 1 : -1;
        if (dx === this.x) {
            signX = 0;
        }
        if (dy === this.y) {
            signY = 0;
        }
        this.x += signX * this.speed;
        this.y += signY * this.speed;
        if (this.x === dx && this.y === dy) {
            this.stepIndex++;
            if (this.stepIndex === this.waypoints.length) {
                log('敌人到达!');
                this.die();
            }
        }
    }

    drawLifeBar() {
        this.game.context.fillStyle = 'red';
        let [x, y] = [this.x, this.y - 10];
        let w = this.width;
        this.game.context.fillRect(x, y, w, 10);
        this.game.context.fillStyle = 'green';
        w = this.width * (this.hp / this.maxHP);
        this.game.context.fillRect(x, y, w, 10);
    }

    draw() {
        this.game.context.fillStyle = 'pink';
        for (let w of this.waypoints) {
            this.game.context.fillRect(w[0], w[1], 20, 20);
        }

        super.draw();

        this.drawLifeBar();
    }

    die() {
        this.alive = false;
        // 现象
        // 移除场景 
        this.scene.removeElement(this);
    }
}