'use strict'

var log = console.log.bind(console);
/*
var log = function (r) {
    document.querySelector('#input-text').value += r + '\r\n';
}
*/

// var imageForPath = function (path) {
//     var img = new Image();
//     img.src = path;
//     return img;
// }

var rectIntersect = function (a, b) {
    if (a.x + a.width >= b.x && a.x + a.width <= b.x + b.width) {
        if (b.y + b.height >= a.y && b.y + b.height <= a.y + a.height) {
            return true;
        }
    }
    return false;
}
