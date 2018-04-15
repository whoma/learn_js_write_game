'use strict'

class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup();
    }

    setup() {
        this.player = new Game_Image(this.game, "player");
        this.cloud = new Game_Image(this.game, "cloud");
        this.bg = new Game_Image(this.game, "background");
        this.player.x = 150;
        this.player.y = 300;
        this.addElement(this.bg);
        this.addElement(this.cloud);
        this.addElement(this.player);
    }

    update() {
        this.cloud.y += 1;
    }
    //     this.game.registerAction('a', () => {
    //         this.player.moveLeft();
    //     });

    //     this.game.registerAction('d', () => {
    //         this.player.moveRight();
    //     })

    //     this.game.registerAction('f', () => {
    //         this.player.fire();
    //     })
    // }
    //     super(game);
    //     this.paddle = Paddle(game);
    //     this.ball = Ball(game);



    //     this.blocks = loadLevel(game, 1)
    //     this.score = 0;

    //     this.enableDrag = false;

    //     game.canvas.addEventListener("mousedown", (event) => {
    //         let x = event.offsetX;
    //         let y = event.offsetY;
    //         if (this.ball.hasPoint(x, y)) {
    //             this.enableDrag = true;
    //         }
    //     });

    //     game.canvas.addEventListener("mousemove", (event) => {
    //         let x = event.offsetX;
    //         let y = event.offsetY;
    //         if (this.enableDrag) {
    //             //log('enableDrag');
    //             this.ball.x = x;
    //             this.ball.y = y;
    //         }
    //     });

    //     game.canvas.addEventListener("mouseup", (event) => {
    //         this.enableDrag = false;
    //     });
    // }

    // update() {
    //     if (window.pause) {
    //         return;
    //     }
    //     // 判断是否 小球是否碰到 底
    //     if (this.ball.y > this.paddle.y) {
    //         var end = new Scene_End(this.game);
    //         this.game.replaceScene(end);
    //         return;
    //     }
    //     // 判断相撞
    //     if (this.paddle.collide(this.ball)) {
    //         this.ball.rebound();
    //     }

    //     this.ball.move();

    //     for (let block of this.blocks) {
    //         // 方块与圆 判断相撞
    //         if (block.collide(this.ball)) {
    //             block.kill();
    //             this.ball.rebound(block);
    //             // 更新分数
    //             this.score += 100;
    //             log('得分: ' + this.score);
    //         }
    //     }

    // }

    // draw() {
    //     // 设置背景图片
    //     this.game.background();

    //     // 显示字
    //     this.game.drawWord("socre: " + this.score);

    //     this.game.drawImage(this.paddle);
    //     this.game.drawImage(this.ball);

    //     for (let block of this.blocks) {
    //         if (block.alive) {
    //             this.game.drawImage(block);
    //         }
    //     }
    // }
}
