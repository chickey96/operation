const Organ = require('./organ');

export default class Stomach extends Organ {
 
  constructor(context) {
    let imgUrl = '../assets/images/Stomach_icon.svg'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 510, y: 350, w: 40, h: 50 }
    super(organSpecs)
    if (!this.x) {
      this.x = 510;
    }
    if (!this.y) {
      this.y = 350;
    }
    this.ctx = context;
    this.width = 40;
    this.height = 50;
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

