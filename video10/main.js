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

// DOM finish do
window.onload = function () {
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
            fire: "img/fire.png",
            bg: "img/bg.png",
            walking1: "img/walking/walking1.png",
            walking2: "img/walking/walking2.png",
            walking3: "img/walking/walking3.png",
            walking4: "img/walking/walking4.png",
            walking5: "img/walking/walking5.png",
            walking6: "img/walking/walking6.png",
            walking7: "img/walking/walking7.png",
            walking8: "img/walking/walking8.png",
            walking9: "img/walking/walking9.png",
            walking10: "img/walking/walking10.png",
            walking11: "img/walking/walking11.png",
            walking12: "img/walking/walking12.png",
        }
        //
        var game = Game.getInstance(30, images, function (g) {
            var s = new Scene_Start(g);
            g.runWithScene(s);
        });

        enableDebugModel(game, true);
    }
    __main()
}