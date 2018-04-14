'use strict'

class Scene_End extends GameScene {
    constructor(game) {
        super(game)
        game.registerAction('r', () => {
            var scene = new Scene_Start(game);
            game.replaceScene(scene);
        })
    }

    draw() {
        // 显示字
        this.game.drawWord("游戏结束，按 r 重新开始", 90, 150, "black");
    }
}