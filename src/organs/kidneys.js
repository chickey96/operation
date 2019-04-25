import Organ from './organ';

export default class Kidneys extends Organ {
  constructor(context) {
    let imgUrl = '../assets/images/kidneys.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 475, y: 400, w: 95, h: 115 }
    super(organSpecs)
    if (!this.x) {
      this.x = 475;
    }
    if (!this.y) {
      this.y = 400;
    }
    this.ctx = context;
    this.width = 95;
    this.height = 115;
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
