'use strict'

class Game_Animation {
    constructor(game) {
        this.game = game;
        this.animations = {
            crouching: [],
            running: [],
        };
        this.animationState = 'crouching';
        this.animationOfCount = 3;
        this.animationOfIndex = 0;
        this.setup();
    }

    setup() {
        for (let i = 1; i <= 12; i++) {
            let name1 = `crouching${i}`;
            let a1 = this.game.imageByName(name1);
            this.animations['crouching'].push(a1);

            let name2 = `running${i}`;
            let a2 = this.game.imageByName(name2);
            this.animations['running'].push(a2);
        }
        this.x = 400;
        this.y = 357;
        this.texture = this.getAnimations()[this.animationOfIndex];
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.flipX = false;
        this.actions = {
            'down': 'running',
            'up': 'crouching',
        }
    }

    move(x, action) {
        this.flipX = x < 0;
        this.x += x;
        this.animationState = this.actions[action];
    }

    update() {
        this.animationOfCount--;
        if (this.animationOfCount === 0) {
            this.animationOfCount = 3;
            this.animationOfIndex = (this.animationOfIndex + 1) % this.getAnimations().length;
            this.texture = this.getAnimations()[this.animationOfIndex];
        }
    }

    getAnimations() {
        return this.animations[this.animationState];
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