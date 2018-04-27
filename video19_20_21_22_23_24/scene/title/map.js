'use strict'

class FPMap {
    constructor(h, w) {
        this.h = h;
        this.w = w;
        this.setup();
    }

    setup() {
        this.grid = [];
        for (let i = 0; i < this.h; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.w; j++) {
                this.grid[i][j] = 1;
            }
        }
    }

    addTowers(i, j) {
        this.grid[i][j] = 0;
    }

    pathFinding(enemies, tileSize) {
        this.graph = new Graph(this.grid);
        for (let e of enemies) {
            let i = Math.floor(e.x / tileSize);
            let j = Math.floor(e.y / tileSize);
            if (i < 0) {
                i = 0;
            }
            if (j < 0) {
                j = 0;
            }
            let start = this.graph.grid[i][j];
            let end = this.graph.grid[11][5];
            let result = astar.search(this.graph, start, end);
            let map = result.map(n => [n.x, n.y]);
            e.resetWaypoints(map, tileSize);
        }
    }
}