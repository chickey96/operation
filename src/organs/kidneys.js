import Organ from './organ';

export default class Kidneys extends Organ {

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://marketplace.canva.com/MAC1WBTdwQY/1/thumbnail_large/canva-bladder-and-kidney-it-is-color-icon-.-MAC1WBTdwQY.png"
    options.x = 475;
    options.y = 400;
    options.width = 95;
    options.height = 115;
    Organ.prototype.draw(options);
  }
} 
