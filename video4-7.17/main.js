'use strict'

var loadLevel = function (game, n) {
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
            blocks = loadLevel(game, Number(k));
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
        //background: 'background.png',
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

        blocks = loadLevel(game, 1)
        var score = 0;

        game.update = function () {
            if (window.pause) {
                return;
            }

            // 判断相撞
            if (paddle.collide(ball)) {
                ball.rebound();
            }

            ball.move();

            for (let block of blocks) {
                // 方块与圆 判断相撞
                if (block.collide(ball)) {
                    block.kill();
                    ball.rebound(block);
                    // 更新分数
                    score += 100;
                    log('得分: ' + score);
                }
            }



        };

        var enableDrag = false;

        game.canvas.addEventListener("mousedown", function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            if (ball.hasPoint(x, y)) {
                enableDrag = true;
            }
        });

        game.canvas.addEventListener("mousemove", function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            if (enableDrag) {
                //log('enableDrag');
                ball.x = x;
                ball.y = y;
            }
        });

        game.canvas.addEventListener("mouseup", function (event) {
            enableDrag = false;
        });


        game.draw = function () {

            // 设置背景图片
            game.background();

            // 显示字
            game.drawWord("socre: " + score);

            game.drawImage(paddle);
            game.drawImage(ball);

            for (let block of blocks) {
                if (block.alive) {
                    game.drawImage(block);
                }
            }
        };

    });

    enableDebugModel(game, true);
}

__main()
