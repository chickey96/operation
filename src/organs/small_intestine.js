const Organ = require('./organ');

export default class SmallIntestine extends Organ {
  
  constructor(context) {
    let imgUrl = '../assets/images/small_intestine.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 135, w: 80, h: 80 }
    super(organSpecs)
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 135;
    }
    this.ctx = context;
    this.width = 80;
    this.height = 80;
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

