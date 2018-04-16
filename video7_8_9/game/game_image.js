'use strict'

class Game_Image {
    constructor(game, name) {
        this.game = game;
        this.texture = game.imageByName(name);
        this.x = 0;
        this.y = 0;
        this.width = this.texture.width;
        this.height = this.texture.height;
    }

    update() {
        
    }
}