const Organ = require('./organ');

export default class Colon extends Organ {
  constructor(context) {
    let imgUrl = '../assets/images/colon.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 100, w: 60, h: 70 }
    super(organSpecs)
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 100;
    }
    this.ctx = context;
    this.width = 60;
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


