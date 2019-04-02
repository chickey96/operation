const Organ = require('./organ');

export default class SmallIntestine extends Organ {
  
  constructor(context) {
    let imgUrl = "https://cdn1.iconfinder.com/data/icons/internal-organs-cartoon/512/g1847-512.png"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 200, w: 50, h: 50 }
    super(organSpecs)
    if (!this.x) {
      this.x = 500;
    }
    if (!this.y) {
      this.y = 200;
    }
    this.ctx = context;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    super.draw();
  }

  // xPos() {
  //   return this.x;
  // }

  // yPos() {
  //   return this.y;
  // }
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

