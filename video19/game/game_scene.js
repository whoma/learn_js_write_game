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

    removeElement(tower) {
        this.element = this.element.filter(e => e != tower);
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
            if (e.life == undefined || e.life == true) {
                e.draw();
            }
        }
    }
}