'use strict'

class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.height = 15;
        this.width = 20;
        this.tileSize = 32;
        this.tiles = [];
        this.setupTiles();
        this.actionTile = null;
    }

    setupTiles() {
        let s = this.height * this.width;
        for (let i = 0; i < s; i++) {
            this.tiles[i] = 0;
        }
    }

    init() {
        this.context.fillStyle = "#5080FF";
        this.context.fillRect(0, 0, 512, 480);
    }

    tilePosition(x, y) {
        this.i = Math.floor(x / this.tileSize);
        this.j = Math.floor(y / this.tileSize);
        let x1 = this.i * this.tileSize;
        let y1 = this.j * this.tileSize;
        return [x1, y1];
    }

    drawTileAt(x, y, event) {
        let target = event.target;
        let rect = target.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        let [x1, y1] = this.tilePosition(x, y);
        this.context.fillRect(x1, y1, this.tileSize, this.tileSize);
        this.setTiles();
        this.context.drawImage(this.actionTile, x1, y1);
    }

    setTiles() {
        let index = this.i * this.height + this.j;
        this.tiles[index] = Number(this.actionTile.dataset.id);
    }

    exportJSON() {
        let s = JSON.stringify(this.tiles);
        log(s);
    }

    registerAction() {
        let moving = false;
        this.canvas.addEventListener('mousedown', event => {
            moving = true;
            let x = event.clientX;
            let y = event.clientY;
            this.drawTileAt(x, y, event);
        })
        this.canvas.addEventListener('mousemove', event => {
            if (moving) {
                let x = event.clientX;
                let y = event.clientY;
                this.drawTileAt(x, y, event);
            }
        })
        this.canvas.addEventListener('mouseup', event => {
            moving = false;
        })
    }
}