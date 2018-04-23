'use strict'

class Game_Mario {
    constructor(game) {
        this.game = game;
        this.tileOffset = 32784;
        this.data = window.bytes.slice(this.tileOffset);
        this.setup();
    }

    setup() {
        this.x = 50;
        this.y = 50;
        // 重力和加速度
        this.gy = 10;
        this.vy = 0;
        // 加速和摩擦
        this.vx = 0;
        this.mx = 0;
        this.animationOfCount = 4;
        this.animationOfIndex = 0;
        this.pixelWidth = 2;
        this.rowsOfSprite = 4;
        this.columnsOfSprite = 2;
        this.width = this.pixelWidth * this.columnsOfSprite * 8;
        this.height = this.pixelWidth * this.rowsOfSprite * 8;
        this.flipX = false;
    }

    drawSprite() {
        let bytesPerBlock = 16;
        let dataOffset = this.animationOfIndex * bytesPerBlock * 8;
        let data = this.data.slice(dataOffset);
        let context = this.game.context;
        let pixelsPerBlock = 8;
        let pixelWidth = this.pixelWidth;
        let blockSize = pixelsPerBlock * pixelWidth;
        let offset = 0;
        for (let i = 0; i < this.rowsOfSprite; i++) {
            for (let j = 0; j < this.columnsOfSprite; j++) {
                let x = j * blockSize + this.x;
                let y = i * blockSize + this.y;
                let pixels = data.slice(offset);
                this.drawBlock(context, pixels, x, y, pixelWidth);
                offset += 16;
            }
        }
    }

    drawBlock(context, data, x, y, pixelWidth) {
        const colors = [
            'white',
            '#FE1000',
            '#FFB010',
            '#AA3030',
        ]
        let w = pixelWidth;
        let h = pixelWidth;
        for (let i = 0; i < 8; i++) {
            let p1 = data[i];
            let p2 = data[i + 8];
            for (let j = 0; j < 8; j++) {
                let c1 = (p1 >> (7 - j)) & 0b00000001;
                let c2 = (p2 >> (7 - j)) & 0b00000001;
                let pixel = (c2 << 1) + c1;
                if (pixel === 0) {
                    continue;
                }
                let color = colors[pixel];
                context.fillStyle = color;
                let px = x + j * w;
                let py = y + i * h;
                context.fillRect(px, py, w, h);
            }
        }
    }

    move(x, action) {
        this.flipX = x < 0;
        // this.x += x;
        let s = 0.5 * x;
        if (action === 'down') {
            this.vx += s;
            this.mx = -s / 2;
        }
    }

    jump(action) {
        this.vy = -10;
    }

    update() {
        // 更新 x 加速度和摩擦
        this.vx += this.mx;
        // 说明摩擦力已经把速度降至 0 ， 停止摩擦
        if (this.vx * this.mx > 0) {
            this.vx = 0;
            this.mx = 0;
        } else {
            this.x += this.vx;
        }

        // 更新受力
        this.y += this.vy;
        this.vy += this.gy * 0.2;
        if (this.y > 50) {
            this.y = 50;
        }

        this.animationOfCount--;
        if (this.animationOfCount === 0) {
            this.animationOfCount = 4;
            this.animationOfIndex++;
            this.animationOfIndex %= 3;
        }
    }

    draw() {
        this.game.context.save();
        this.game.context.translate(this.x + this.width / 2, this.y + this.height / 2);
        if (this.flipX) {
            this.game.context.scale(-1, 1);
        }
        this.game.context.globalAlpha = this.alpha;
        this.game.context.rotate(this.rotate * Math.PI / 180);
        this.game.context.translate(-this.x, -this.y);
        // draw mario
        this.drawSprite();
        this.game.context.restore();
    }
}