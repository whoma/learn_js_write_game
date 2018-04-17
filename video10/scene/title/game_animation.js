'use strict'

class Game_Animation {
    constructor(game) {
        this.game = game;
        this.animatoins = [];
        this.animationOfCount = 3;
        this.animationOfIndex = 0;
        this.setup();
    }

    setup() {
        for (let i = 1; i < 12; i++) {
            let name = `walking${i}`;
            let a = this.game.imageByName(name);
            this.animatoins.push(a);
        }
        this.x = 400;
        this.y = 357;
        this.texture = this.animatoins[this.animationOfIndex];
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.flipX = false;
    }

    move(x) {
        this.flipX = x < 0;
        this.x += x;
    }

    update() {
        this.texture = this.animatoins[this.animationOfIndex];
        this.animationOfCount--;
        if (this.animationOfCount === 0) {
            this.animationOfCount = 3;
            this.animationOfIndex = (this.animationOfIndex + 1) % this.animatoins.length;

        }
    }

    draw() {
        if (this.flipX) {
            this.game.context.save();
            var x = this.x + this.width / 2;
            // Set the origin to the center of the image
            //this.game.context.translate(x, 0);
            this.game.context.scale(-1, 1);
            //this.game.context.translate(-x, 0);
            // Draw the image    
            this.game.context.drawImage(this.texture, -this.x - this.width, this.y);
            this.game.context.restore();
        } else {
            this.game.drawImage(this);
        }
    }
}