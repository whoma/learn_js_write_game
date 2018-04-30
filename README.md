观看萧大直播写游戏进行学习和加以自己的想法实现代码.

萧大 B 站: https://space.bilibili.com/39066904#/ 

萧大 git: https://github.com/guaxiao/gua.game.js

```
从零开始用 Canvas 作为画布进行游戏绘制，从函数封装为类，实现了一个简单的游戏框架

主要就是有一个 game 类里面有 update() clear() draw() 函数，通过回调函数传入不同的数据进行绘制然后循环

update() 用于坐标更新和事件判断

clear() 用于清除画布

draw() 用来绘制图片，主要调用 Canvas 里面的 drawImage() 函数
```
video1 ~ video6: 从零开始，从一个文件分离为多个文件，从函数到类。实现打方块游戏。

vide7 ~ video9: 实现飞行射击游戏。

video10: 实现动画效果，用到 Canvas 多个设置函数。

video11 ~ video12: 实现 flappy bird 游戏。

video13 ~ video18: 从马里奥 nes 中提取人物和背景，合并到 game 中。nes: [资料1](https://www.zhihu.com/question/19860051), [资料2](https://zhuanlan.zhihu.com/p/34144965)。萧大用的是本地 Ajax 获取的 nes 文件，因为有跨域问题，我改为 input 文件上传 nes。

video19 ~ video24: 实现塔防游戏的最小系统，其中敌人寻路路径用到了[该库](https://github.com/bgrins/javascript-astar)。

video25 ~ video28: 实现植物大战僵尸最小系统。