const Organ = require('./organ');

export default class Liver extends Organ {
  
  constructor(context) {
    let imgUrl = "https://openclipart.org/download/37315/liver.svg"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 100, w: 35, h: 45 }
    super(organSpecs)
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 100;
    }
    this.ctx = context;
    this.width = 35;
    this.height = 45;
  }

  draw() {
    super.draw();
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

