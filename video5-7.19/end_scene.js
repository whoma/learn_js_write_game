'use strict'

var Scene_End = function (game) {
    var s = {};
    s.update = function () {

    }


    s.draw = function () {
         // 显示字
         game.drawWord("游戏结束", 100, 200, "black");
    }

    return s
}