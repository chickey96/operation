import Organ from './organ';

export default class Lungs extends Organ {
  
  constructor(context) {
    let imgUrl = "https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 250, w: 75, h: 80 }
    super(organSpecs)
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 250;
    }
    this.ctx = context;
    this.width = 75;
    this.height = 80;
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

