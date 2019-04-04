const Organ = require('./organ');

export default class Stomach extends Organ {
 
  constructor(context) {
    let imgUrl = "https://upload.wikimedia.org/wikipedia/commons/b/be/Stomach_icon.svg"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 615, y: 400, w: 45, h: 55 }
    super(organSpecs)
    if (!this.x) {
      this.x = 615;
    }
    if (!this.y) {
      this.y = 400;
    }
    this.ctx = context;
    this.width = 45;
    this.height = 55;
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

