const Organ = require('./organ');

export default class Stomach extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 615;
    }
    if (!this.y) {
      this.y = 400;
    }
    this.width = 45;
    this.height = 55;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://upload.wikimedia.org/wikipedia/commons/b/be/Stomach_icon.svg"
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

