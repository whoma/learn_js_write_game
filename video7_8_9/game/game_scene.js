'use strict'

class GameScene {
    constructor(game) {
        this.game = game;
        this.element = [];
    }

    addElement(e) {
        this.element.push(e);
    }

    update() {

    }

    draw() {
        for (var e of this.element) {
            this.game.drawImage(e);
        }
    }
}
