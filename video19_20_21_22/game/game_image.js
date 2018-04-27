'use strict'

class Game_Image {
    constructor(game, name) {
        this.game = game;
        this.texture = game.imageByName(name);
        this.x = 0;
        this.y = 0;
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.rotation = 0;
    }

    clone() {
        let c = new Game_Image(this.game, 'gun1');
        c.x = this.x;
        c.y = this.y;
        return c;
    }

    pointInFrame(x, y) {
        let xIn = this.x < x && this.x + this.width > x;
        let yIn = this.y < y && this.y + this.height > y;
        return xIn && yIn;
    }

    center() {
        let x = this.x + this.width / 2;
        let y = this.y + this.height / 2;
        return new Vector(x, y);
    }

    update() {

    }

    draw() {
        this.game.context.save();
        let w2 = this.width / 2;
        let h2 = this.height / 2;
        this.game.context.translate(this.x + w2, this.y + h2);
        this.game.context.rotate(this.rotation * Math.PI / 180);
        this.game.context.translate(-w2, -h2);
        this.game.context.drawImage(this.texture, 0, 0);
        this.game.context.restore();
    }
}