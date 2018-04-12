'use strict'

var Scene = function (game) {
    var s = {
        game: game,
    }

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

    s.update = function () {

        if (window.pause) {
            return;
        }
        // 判断是否 小球是否碰到 底
        if (ball.y > paddle.y) {
            var end = Scene_End(game);
            game.replaceScene(end);
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

    }

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

    s.draw = function () {
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
    }

    return s;
}
