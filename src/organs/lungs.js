import Organ from './organ';

export default class Lungs extends Organ {
  
  constructor(context) {
    let imgUrl = '../assets/images/lungs.png'
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 575, y: 260, w: 125, h: 78 }
    super(organSpecs)
    if (!this.x) {
      this.x = 575;
    }
    if (!this.y) {
      this.y = 260;
    }
    this.ctx = context;
    this.width = 125;
    this.height = 78;
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

