'use strict'

class Game_Animation {
    constructor(game, animation) {
        this.game = game;
        this.animation = animation;
        this.animationOfCount = 3;
        this.animationOfIndex = 0;
        this.setAnimation();
    }

    setAnimation() {
        this.animations = {};
        let name = this.animation.name;
        for (let action of this.animation.actions) {
            this.animations[action.name] = [];
            let nameNode = action.name;
            for (let i = 0; i < action.length; i++) {
                let index = '0'.repeat(String(action.length).length - String(i).length) + String(i);
                let key = name + '_' + nameNode + '_' + index;
                this.animations[action.name].push(this.game.imageByName(key))
            }
        }

        this.animationName = [this.animation.actions[0].name];

        this.texture = this.frames()[this.animationOfIndex];
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.flipX = false;
    }

    frames() {
        return this.animations[this.animationName];
    }

    changeAnimation(name) {
        this.animationName = name;
    }

    updateFrame() {
        this.animationOfCount--;
        if (this.animationOfCount === 0) {
            this.animationOfCount = 3;
            this.animationOfIndex = (this.animationOfIndex + 1) % this.frames().length;
            this.texture = this.frames()[this.animationOfIndex];
        }
    }

    update() {
        this.updateFrame();
    }

    draw() {
        this.game.context.save();
        if (this.flipX) {
            this.game.context.scale(-1, 1);
        }
        this.game.drawImage(this);
        this.game.context.restore();
    }
}