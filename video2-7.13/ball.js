'use strict'

var Ball = function () {
    var o = {
        x: 180,
        y: 210,
        speedX: 15,
        speedY: 15,
        fired: false,
    };

    // width 200px height 30px
    o.img = imageForPath('ball.png');
    o.move = function () {
        if (o.fired) {
            //log('move');
            if (o.x < 0 || o.x + o.img.width > 400) {
                o.speedX *= -1;
            }
            if (o.y < 0 || o.y + o.img.height > 300) {
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