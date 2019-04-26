import Organ from './organ';

export default class Kidneys extends Organ {
  constructor(context) {
    let imgUrl = '../assets/images/kidneys.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 495, y: 40, w: 95, h: 150 }
    super(organSpecs)
    if (!this.x) {
      this.x = 495;
    }
    if (!this.y) {
      this.y = 40;
    }
    this.ctx = context;
    this.width = 95;
    this.height = 150;
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
