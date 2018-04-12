'use strict'

var Game = function (fps, images, callback) {
    window.fps = fps;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var o = {
        keydowns: {},
        actions: {},
        canvas: canvas,
        context: context,
        imgs: {},
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
        o.context.drawImage(gameImage.image, gameImage.x, gameImage.y);
    }


    o.context.font = "20px Georgia";
    o.drawWord = function (word, x = 10, y = 280, c = "white"){
        o.context.fillStyle = c;
        o.context.fillText(word, x, y);
    }

    o.background = function () {
        // var img = o.imageByName('background');
        // var ptrn = o.context.createPattern(img.image, 'repeat');
        o.context.fillStyle = "#3d4d4f";
        o.context.fillRect(0, 0, 400, 300);
    }

    // update
    o.update = function () {
        o.scene.update();
    }

    // draw
    o.draw = function () {
        o.scene.draw();
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


    var loads = [];
    // 预习载入所有图片
    var names = Object.keys(images);
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        let path = images[name];
        let img = new Image();
        img.src = path;

        img.onload = function () {
            o.imgs[name] = img;
            loads.push(1);
            if (loads.length === names.length) {
                o.__start();
            }
        }
    }

    o.imageByName = function (name) {
        // 变量声明提前
        var i = o.imgs[name];
        var img = {
            image: i,
            width: i.width,
            height: i.height,
        }

        return img;
    }

    o.replaceScene = function (scene) {
        o.scene = scene;
    }

    o.runWithScene = function (s) {
        o.scene = s;
        setTimeout(function () {
            loopRun();
        }, 1000 / window.fps);
    }

    o.__start = function () {
        callback(o);
    };

    return o;
}
