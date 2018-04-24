'use strict'

class Game_TileMap {
    constructor(game) {
        this.game = game;
        this.tiles = [
            1, 1, 1, 0, 1,
            1, 2, 3, 0, 1,
            1, 1, 3, 0, 1,
        ]
        this.th = 5;
        // TODO, tw 应为一个整数
        this.tw = this.tiles.length / this.th;
        this.tileImages = [
            new Game_Image(game, 't1'),
            new Game_Image(game, 't2'),
            new Game_Image(game, 't3'),
            new Game_Image(game, 't4'),
        ]
        this.tileSize = 32;
    }

    update() {

    } 

    draw() {
        for (let i = 0; i < this.tiles.length; i++) {
            let index = this.tiles[i];
            if (index != 0) {
                let x = Math.floor(i / this.th) * this.tileSize;
                let y = (i % this.th) * this.tileSize;
                let image = this.tileImages[index];
                this.game.context.drawImage(image.texture, x, y);
            }
        }
    }
}