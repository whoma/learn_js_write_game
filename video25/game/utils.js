'use strict'

const log = console.log.bind(console);

const el = sel => document.querySelectorAll(sel);

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

const addAnimation = (images, animation) => {
    for (let a of animation.actions) {
        for (let i = 0; i < a.length; i++) {
            let p = animation.formatPath.replace(/{action}/g, a.name);
            let index = '0'.repeat(animation.actions.length - String(i).length) + String(i);
            let key = animation.name + '_' + a.name + '_' + index;
            let value = p.replace(/{index}/, index);
            images[key] = value;
        }
    }
}