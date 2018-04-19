'use strict'

const log = console.log.bind(console);
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

const rectIntersect = (a, b) => {
    if (a.x + a.width >= b.x && a.x + a.width <= b.x + b.width) {
        if (b.y + b.height >= a.y && b.y + b.height <= a.y + a.height) {
            return true;
        }
    }
    return false;
}

const randomBetween = (start, end) => {
    let n = Math.random() * (end - start + 1);
    return Math.floor(n) + start;
}

const config = {
    player_speed: 10,
    coolDown: 5,
    cloud_speed: 2,
    bullet_speed: 5,
}

const addImage = (images, name, length) => {
    for (let i = 1; i <= length; i++) {
        let n = name + i
        images[n] = `img/${name}/${n}.png`;
    }
}