const Organ = require('./organ');

export default class SmallIntestine extends Organ {
  
  constructor(context) {
    let imgUrl = '../assets/images/small_intestine.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 200, w: 70, h: 70 }
    super(organSpecs)
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 200;
    }
    this.ctx = context;
    this.width = 70;
    this.height = 70;
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

