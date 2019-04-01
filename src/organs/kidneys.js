import Organ from './organ';

export default class Kidneys extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 475;
    }
    if (!this.y) {
      this.y = 400;
    }
    this.width = 95;
    this.height = 115;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://marketplace.canva.com/MAC1WBTdwQY/1/thumbnail_large/canva-bladder-and-kidney-it-is-color-icon-.-MAC1WBTdwQY.png"
    options.x = this.x;
    options.y = this.y;
    options.width = this.width;
    options.height = this.height;
    Organ.prototype.draw(options);
  }

  xPos() {
    return this.x;
  }

  yPos() {
    return this.y;
  }
  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
  }
  width() {
    return this.width;
  }

  height() {
    return this.height;
  }
  
} 
