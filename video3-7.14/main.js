'use strict'

var loadLevel = function (n, game) {
    n = n - 1;
    var level = levels[n]
    var blocks = [];
    for (let p of level) {
        let b = Block(p, game);
        blocks.push(b);
    }

    return blocks;
};
var blocks = [];
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
            blocks = loadLevel(Number(k), game);
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
        paddle: "paddle.png",
        ball: "ball.png",
        block: "block.png",
    }
    //
    var game = Game(30, images, function (g) {
        var paddle = Paddle(game);
        var ball = Ball(game);

        game.registerAction('a', function () {
            paddle.moveLeft();
        });

        game.registerAction('d', function () {
            paddle.moveRight();
        })

        game.registerAction('f', function () {
            ball.fire();
        })

        var score = 0;

        game.update = function () {
            if (!window.pause) {
                ball.move();
            }

            // 判断相撞
            if (paddle.collide(ball)) {
                ball.rebound();
            };

            for (let block of blocks) {
                // 方块与圆 判断相撞
                if (block.collide(ball)) {
                    block.kill();
                    ball.rebound();
                    // 更新分数
                    score += 100;
                    log('得分: ' + score);
                }
            }
        };

        game.draw = function () {
            game.drawImage(paddle);
            game.drawImage(ball);

            for (let block of blocks) {
                if (block.alive) {
                    game.drawImage(block);
                }
            }

            // 显示字
            game.drawWord("socre: " + score);
        };

    });

    enableDebugModel(game, true);
}

__main()
