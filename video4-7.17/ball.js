'use strict'

var Ball = function (game) {
    var img = game.imageByName('ball');

    var o = img;
    o.speedX = 15;
    o.speedY = 15;
    o.fired = false;
    o.x = 180;
    o.y = 210;

    o.move = function () {
        if (o.fired) {
            //log('move');
            if (o.x < 0 || o.x + o.width > 400) {
                o.speedX *= -1;
            }
            if (o.y < 0 || o.y + o.height > 300) {
                o.speedY *= -1;

            }
            o.x += o.speedX;
            o.y += o.speedY;
        }
    }

    o.fire = function () {
        o.fired = true;
    }

    // 判断 碰撞 的反弹方向，根据 x y 的比例情况
    o.rebound = function (block) {
        if (block == undefined || block.y < o.y + o.height) {
            o.speedY *= -1;
        } else {
            o.speedX *= -1;
        }
    }


    o.hasPoint = function (x, y) {
        var xIn = x > o.x && x < o.x + o.width;
        var yIn = y > o.y && y < o.y + o.height;
        return xIn && yIn;
    }

    return o;
}