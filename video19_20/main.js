'use strict'

var enableDebugModel = function (game, enable) {
    if (!enable) {
        return
    }

    window.pause = false;
    window.addEventListener('keydown', function (event) {
        var k = event.key;
        // 暂停
        if (k === "p") {
            window.pause = !window.pause;
            // 加载关卡 与 level.js 关联
        } else if ("12".indexOf(k) != -1) {
            // blocks = loadLevel(game, Number(k));
        }
    });

    document.querySelector('#input-range').addEventListener('input', function (event) {
        var input = event.target;
        window.fps = Number(input.value);
    });

}

// DOM finish do
window.onload = function () {
    var __main = function () {
        // 加载图片
        var images = {
            gun1: 'img/gun1.png',
            enemy1: 'img/enemy.png',
        }

        var game = Game.getInstance(30, images, function (g) {
            var s = new Scene_Start(g);
            g.runWithScene(s);
        });

        enableDebugModel(game, true);
    }
    __main()
}