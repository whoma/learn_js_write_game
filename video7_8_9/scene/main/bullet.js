'use strict'

class Bullet extends Game_Image {
    constructor(game) {
        super(game, 'bullet');
        this.setup();
    }

    setup() {
        this.speed = 5;
        this.life = true;
    }

    update() {
        this.y -= this.speed;
        if (this.life) {
            for (let e of this.scene.enemies) {
                if (e.collide(this)) {
                    this.game.audio_enemy_down.play();
                    this.game_particles = new Game_Particle(this.game, this.x, this.y);
                    this.scene.addElement(this.game_particles);
                    // 子弹应该可回收, 即为子弹可消失，但并不是不绘制, 可设置一个子弹数组，大小为屏幕显示最大子弹数
                    this.life = false;
                    e.setup();
                    break;
                }
            }
        }
    }

    debug() {
        this.speed = config.bullet_speed;
    }
}