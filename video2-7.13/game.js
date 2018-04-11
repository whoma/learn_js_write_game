'use strict'

var Game = function (fps) {
    window.fps = fps;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var o = {
        keydowns: {},
        actions: {},
        canvas: canvas,
        context: context,
    }
    //事件绑定
    o.registerAction = function (key, action) {
        o.actions[key] = action;
    }
    window.addEventListener("keydown", function (e) {
        o.keydowns[e.key] = true;
    });
    window.addEventListener("keyup", function (e) {
        o.keydowns[e.key] = false;
    });
    o.drawImage = function (gameImage) {
        o.context.drawImage(gameImage.img, gameImage.x, gameImage.y);
    }

    var loopRun = function () {
        // 查询 key 是否是 按下
        // events
        var keys = Object.keys(o.actions);
        for (var i = 0; i < keys.length; i++) {
            if (o.keydowns[keys[i]]) {
                o.actions[keys[i]]();
            }
        }
        // update
        o.update();
        context.clearRect(0, 0, canvas.width, canvas.height);
        // draw
        o.draw();

        setTimeout(function () {
            loopRun();
        }, 1000 / window.fps)
    }

    setTimeout(function () {
        loopRun();
    }, 1000 / window.fps)

    return o;
}
