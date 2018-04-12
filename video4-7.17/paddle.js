'use strict'

var Paddle = function (game) {
    var img = game.imageByName('paddle');
    var o = img;

    o.x = 100;
    o.y = 250;
    o.speed = 10;

    o.move = function (x) {
        if (x < 0) {
            x = 0;
        }

        if (x > 400 - o.width) {
            x = 400 - o.width;
        }

        o.x = x;
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed);
    }
    o.moveRight = function () {
        o.move(o.x + o.speed);
    }
    // var aInb = function (x, x1, x2) {
    //     return x > x1 && x < x2;
    // }
    o.collide = function (ball) {
        // first  检测碰撞 v1.0
        // if (ball.y + ball.height > o.y) {
        //     if (ball.x > o.x && ball.x < o.width + o.x) {
        //         return true;
        //     }
        // }
        // return false;

        // second  检测碰撞 v2.0
        // var a = o
        // var b = ball
        // if (aInb(a.x, b.x, b.x + b.width) || aInb(b.x, a.x, a.x + a.width)) {
        //     if (aInb(a.y, b.y, b.y + b.height) || aInb(b.y, a.y, a.y + a.height)) {
        //         return true
        //     }

        // }
        // return false

        // 将 检测碰撞 v2.0 提取为 utils 中的 工具函数
        return rectIntersect(o, ball) || rectIntersect(ball, o);
    }

    return o;
}
