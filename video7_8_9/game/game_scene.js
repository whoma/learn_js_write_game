'use strict'

class GameScene {
    constructor(game) {
        this.game = game;
        this.element = [];
        this.enableDebugModel = true;
    }

    addElement(e) {
        e.scene = this;
        this.element.push(e);
    }

    update() {
        if (this.enableDebugModel) {
            for (var e of this.element) {
                e.debug && e.debug();
            }
        }
        for (var e of this.element) {
            e.update();
        }
    }

    draw() {
        for (var e of this.element) {
            this.game.drawImage(e);
        }
    }
}
