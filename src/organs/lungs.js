import Organ from './organ';

export default class Lungs extends Organ {
  
  constructor(context) {
    let imgUrl = '../assets/images/lungs.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 575, y: 250, w: 135, h: 84 }
    super(organSpecs)
    if (!this.x) {
      this.x = 575;
    }
    if (!this.y) {
      this.y = 250;
    }
    this.ctx = context;
    this.width = 135;
    this.height = 84;
  }

  draw() {
    super.draw();
  }

  setX(newX){
    this.x = newX;
  }

  setY(newY){
    this.y = newY;
  }
}

