'use strict'

class Game {
    constructor(fps, images, callback) {
        window.fps = fps;
        this.canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
        this.keydowns = {};
        this.actions = {};
        this.images = images;
        this.imgs = {};
        this.callback = callback;
        //事件绑定
        this.init();
    }

    static getInstance(...args) {
        this.i = this.i || new Game(...args);
        return this.i;
    }

    init() {
        this.registerAction = (key, action) => {
            this.actions[key] = action;
        }
        window.addEventListener("keydown",(e) => {
            this.keydowns[e.key] = true;
        });
        window.addEventListener("keyup",(e) => {
            this.keydowns[e.key] = false;
        });

        this.context.font = "20px Georgia";
        

        // 预习载入所有图片
        var loads = [];
        var names = Object.keys(this.images);
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = this.images[name];
            let img = new Image();
            img.src = path;

            img.onload = () => {
                this.imgs[name] = img;
                loads.push(1);
                if (loads.length === names.length) {
                    this.__start();
                }
            }
        }

    }

    drawImage(gameImage) {
        this.context.drawImage(gameImage.image, gameImage.x, gameImage.y);
    }

    drawWord(word, x = 10, y = 280, c = "white") {
        this.context.fillStyle = c;
        this.context.fillText(word, x, y);
    }

    background() {
        // var img = o.imageByName('background');
        // var ptrn = o.context.createPattern(img.image, 'repeat');
        this.context.fillStyle = "#3d4d4f";
        this.context.fillRect(0, 0, 400, 300);
    }

    // update
    update() {
        this.scene.update();
    }

    // draw
    draw() {
        this.scene.draw();
    }

    loopRun() {
        // 查询 key 是否是 按下
        // events
        var keys = Object.keys(this.actions);
        for (var i = 0; i < keys.length; i++) {
            if (this.keydowns[keys[i]]) {
                this.actions[keys[i]]();
            }
        }
        // update
        this.update();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw
        this.draw();

        setTimeout(() => {
            this.loopRun();
        }, 1000 / window.fps)
    }

    imageByName(name) {
        // 变量声明提前
        var i = this.imgs[name];
        var img = {
            image: i,
            width: i.width,
            height: i.height,
        }

        return img;
    }

    replaceScene(scene) {
        this.scene = scene;
    }

    runWithScene(s) {
        this.scene = s;
        setTimeout(() => {
            this.loopRun();
        }, 1000 / window.fps);
    }

    __start() {
        this.callback(this);
    }
}