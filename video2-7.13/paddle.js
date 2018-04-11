'use strict'

var Paddle = function () {
    var o = {
        x: 100,
        y: 250,
        speed: 10
    };

    // width 200px height 30px
    o.img = imageForPath('image.png');
    o.move = function (x) {
        if (x < 0) {
            x = 0;
        }

        if (x > 400 - o.img.width) {
            x = 400 - o.img.width;
        }

        o.x = x;
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed);
    }
    o.moveRight = function () {
        o.move(o.x + o.speed);
    }
    o.collide = function (ball) {
        if (ball.y + ball.img.height > o.y) {
            if (ball.x > o.x && ball.x < o.img.width + o.x) {
                return true;
            }
        }
        return false;
    }

    return o;
}
