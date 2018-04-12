'use strict'

var Block = function (position, game) {
    var img = game.imageByName('block');

    var o = img;
    //[x, y, life_value]
    var p = position;
    o.x = p[0];
    o.y = p[1];
    o.alive = true;
    o.lifes = p[2] || 1;

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