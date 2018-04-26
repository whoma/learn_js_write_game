'use strict'

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    position(vector) {
        let v = vector;
        let x = this.x - v.x;
        let y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    }

    sub(vector) {
        let v = vector;
        let x = Math.abs(this.x - v.x);
        let y = Math.abs(this.y - v.y);
        return new Vector(x, y);
    }
}