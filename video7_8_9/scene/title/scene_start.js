'use strict'

class Scene_Start extends GameScene {
    constructor(game) {
        super(game);
        game.registerAction('k', () => {
            var scene = new Scene(game);
            game.replaceScene(scene);
        })
    }

    draw() {
        // 显示字
        this.game.drawWord("按住 k 开启游戏", 90, 150, "black");
    }
}