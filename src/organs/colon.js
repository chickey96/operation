const Organ = require('./organ');

export default class Colon extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 100;
    }
    this.width = 60;
    this.height = 70;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://marketplace.canva.com/MACzsJy7L9k/1/thumbnail_large/canva-human-organ-intestine-colon-MACzsJy7L9k.png"
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


