'use strict'

class Game_TileMap {
    constructor(game) {
        this.game = game;
        this.offsetX = 10;
        // 可由 mario_map_editor.html 生成
        this.tiles = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2,
            0, 0, 0, 1, 4, 0, 2, 0, 0, 0, 0, 2, 0, 2, 2,
            0, 0, 0, 0, 0, 1, 2, 4, 3, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 1, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
        ]
        this.th = 15;
        // TODO, tw 应为一个整数
        this.tw = this.tiles.length / this.th;
        this.tileImages = [
            new Game_Image(game, 't1'),
            new Game_Image(game, 't2'),
            new Game_Image(game, 't3'),
            new Game_Image(game, 't4'),
        ]
        this.tileSize = 32;
        // 地图移动
        this.moving = true;
        this.offsetIndex = 0;
    }

    onTheGround(i, j) {
        // this.offsetIndex * this.th 地图的漂移
        let index = this.offsetIndex * this.th + i * this.th + j;
        let tile = this.tiles[index];
        return tile != 0;
    }

    update() {
        if (this.moving) {
            this.offsetX -= 1;
        }
    }

    draw() {
        this.game.context.fillStyle = "#5080FF";
        this.game.context.fillRect(0, 0, 512, 480);
        let offsetIndex = Math.abs(parseInt(this.offsetX / this.tileSize));
        let numberOfTiles = this.th * (16 + 1);
        if (offsetIndex + numberOfTiles < this.tiles.length) {
            numberOfTiles = this.tiles.length;
        }
        if (this.tw - offsetIndex < 17) {
            this.moving = false;
        }
        this.offsetIndex = offsetIndex;
        log(offsetIndex * this.th);
        for (let i = offsetIndex * this.th; i < numberOfTiles; i++) {
            let index = this.tiles[i];
            if (index != 0) {
                let x = Math.floor(i / this.th) * this.tileSize;
                x += this.offsetX;
                let y = (i % this.th) * this.tileSize;
                let image = this.tileImages[index - 1];
                this.game.context.drawImage(image.texture, x, y);
            }
        }
    }
}