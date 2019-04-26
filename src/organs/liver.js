const Organ = require('./organ');

export default class Liver extends Organ {
  
  constructor(context) {
    let imgUrl = '../assets/images/liver.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 400, w: 75, h: 51 }
    super(organSpecs)
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 400;
    }
    this.ctx = context;
    this.width = 75;
    this.height = 51;
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

