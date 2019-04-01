const Organ = require('./organ');

export default class Liver extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 100;
    }
    this.width = 35;
    this.height = 45;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/37315/liver.svg"
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

