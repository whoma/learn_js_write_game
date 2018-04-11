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
    o.collide = function (ball) {
        if (ball.y + ball.height > o.y) {
            if (ball.x > o.x && ball.x < o.width + o.x) {
                return true;
            }
        }
        return false;
    }

    return o;
}
