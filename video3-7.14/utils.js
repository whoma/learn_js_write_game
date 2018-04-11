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
    if (b.x > a.x && b.x < a.x + a.width) {
        if (b.y > a.y && b.y < a.y + a.height) {
            return true;
        }
    }
    return false;
}
