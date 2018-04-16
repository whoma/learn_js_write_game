'use strict'

// var loadLevel = function (game, n) {
//     n = n - 1;
//     var level = levels[n]
//     var blocks = [];
//     for (let p of level) {
//         let b = Block(p, game);
//         blocks.push(b);
//     }

//     return blocks;
// };
// var blocks = [];
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

var __main = function () {
    // 加载图片
    var images = {
        background: "img/background.png",
        player: "img/player.png",
        cloud: "img/cloud.png",
        bullet: "img/bullet.png",
        enemy0: "img/enemy0.png",
        enemy1: "img/enemy1.png",
        enemy2: "img/enemy2.png",
        enemy3: "img/enemy3.png",
        enemy4: "img/enemy4.png",
    }
    //
    var game = Game.getInstance(30, images, function (g) {
        var s = new Scene(g);
        g.runWithScene(s);
    });

    enableDebugModel(game, true);
}

__main()