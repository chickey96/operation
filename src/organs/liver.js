const Organ = require('./organ');

export default class Liver extends Organ {
  
  constructor(context) {
    let imgUrl = "https://openclipart.org/download/37315/liver.svg"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 100, w: 30, h: 40 }
    super(organSpecs)
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 100;
    }
    this.ctx = context;
    this.width = 30;
    this.height = 40;
  }

  draw() {
    super.draw();
  }

  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
  }
  
}

