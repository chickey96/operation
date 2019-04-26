const Organ = require('./organ');

export default class Colon extends Organ {
  constructor(context) {
    let imgUrl = '../assets/images/colon.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 470, w: 67, h: 77 }
    super(organSpecs)
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 470;
    }
    this.ctx = context;
    this.width = 67;
    this.height = 77;
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


