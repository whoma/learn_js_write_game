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

const fileChange = (event) => {
    let f = event.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(f);
    reader.onload = () => {
        let bytes = new Uint8Array(reader.result);
        window.bytes = bytes;
        
        // 加载图片
        var images = {
            bg: "img/bird/background.png",
            ground: "img/bird/ground.png",
            pipe: "img/bird/pipe.png",
        }

        addImage(images, 'bird', 4);

        var game = Game.getInstance(30, images, function (g) {
            var s = new Scene_Start(g);
            g.runWithScene(s);
        });

        enableDebugModel(game, true);
    }
}