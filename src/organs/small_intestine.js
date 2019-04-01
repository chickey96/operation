const Organ = require('./organ');

export default class SmallIntestine extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 200;
    }
    this.width = 50;
    this.height = 50;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://cdn1.iconfinder.com/data/icons/internal-organs-cartoon/512/g1847-512.png"
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

