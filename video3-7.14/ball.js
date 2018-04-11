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

    o.rebound = function () {
        o.speedY *= -1;
    }

    return o;
}