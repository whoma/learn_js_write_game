'use strict'

var log = console.log.bind(console);

var imageForPath = function (path) {
    var img = new Image();
    img.src = path;
    return img;
}

var rectIntersect = function (a, b) {
    if (b.x > a.x && b.x < a.x + a.img.width) {
        if (b.y > a.y && b.y < a.y + a.img.height) {
            return true;
        }
    }
    return false;
}
