'use strict'

class Game_Animation {
    constructor(game) {
        this.game = game;
        // this.animations = {
        //     crouching: [],
        //     running: [],
        // };
        this.birds = [];
        //this.animationState = 'crouching';
        this.animationOfCount = 3;
        this.animationOfIndex = 0;
        this.setup();
    }

    setup() {
        for (let i = 1; i <= 4; i++) {
            // let name1 = `crouching${i}`;
            // let a1 = this.game.imageByName(name1);
            // this.animations['crouching'].push(a1);
            let name = `bird${i}`;
            let a = this.game.imageByName(name);
            this.birds.push(a);
            // let name2 = `running${i}`;
            // let a2 = this.game.imageByName(name2);
            // this.animations['running'].push(a2);
        }
        this.x = 100;
        this.y = 357;
        this.gy = 10;
        this.vy = 0;
        this.rotate = 1;
        //this.texture = this.getAnimations()[this.animationOfIndex];
        this.texture = this.birds[this.animationOfIndex];
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.flipX = false;
        this.alpha = 1;
        // this.actions = {
        //     'down': 'running',
        //     'up': 'crouching',
        // }
    }

    move(x, action) {
        this.flipX = x < 0;
        this.x += x;
        //this.animationState = this.actions[action];
    }

    jump(action) {
        this.vy = -10;
        this.rotate = -45;
        this.alpha = 1;
    }

    update() {
        this.y += this.vy;
        this.vy += this.gy * 0.2;
        if (this.y > 370) {
            this.y = 370;
            this.alpha = 1;
        }
        if (this.rotate < 45) {
            this.rotate += 5;
        }

        if (this.alpha > 0) {
            this.alpha -= 0.05;
        }
        this.animationOfCount--;
        if (this.animationOfCount === 0) {
            this.animationOfCount = 3;
            // this.animationOfIndex = (this.animationOfIndex + 1) % this.getAnimations().length;
            this.animationOfIndex = (this.animationOfIndex + 1) % this.birds.length;
            // this.texture = this.getAnimations()[this.animationOfIndex];
            this.texture = this.birds[this.animationOfIndex];
        }
    }

    // getAnimations() {
    //     return this.animations[this.animationState];
    // }

    draw() {
        this.game.context.save();
        //var x = this.x + this.width / 2;
        // Set the origin to the center of the image
        this.game.context.translate(this.x + this.width / 2, this.y + this.height / 2);
        if (this.flipX) {
            this.game.context.scale(-1, 1);
        }
        this.game.context.globalAlpha = this.alpha;
        this.game.context.rotate(this.rotate * Math.PI / 180);
        this.game.context.translate(-this.x, -this.y);
        //this.game.context.translate(-x, 0);
        // Draw the image    
        //this.game.context.drawImage(this.texture, -this.x - this.width, this.y);
        this.game.drawImage(this);
        this.game.context.restore();
    }
}