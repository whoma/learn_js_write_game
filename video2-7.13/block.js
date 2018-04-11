'use strict'

var Block = function (position) {
    //[x, y, life_value]
    var p = position;
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    };

    // width 50px height 20px
    o.img = imageForPath('block.png');

    o.kill = function () {
        //log('相撞，并清除块')
        o.lifes--;
        if (o.lifes == 0) {
            o.alive = false;
        }
    }

    o.collide = function (ball) {
        return o.alive && (rectIntersect(o, ball) || rectIntersect(ball, o));
    }

    return o;
}