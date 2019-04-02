import Organ from './organ';

export default class Lungs extends Organ {
  
  constructor(context) {
    let imgUrl = "https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg"
    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 250, w: 65, h: 70 }
    super(organSpecs)
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 250;
    }
    this.ctx = context;
    this.width = 65;
    this.height = 70;
  }

  draw() {
    super.draw();
  }

  xPos() {
    return this.x;
  }

  yPos() {
    return this.y;
  }

  setX(newX){
    this.x = newX;
  }

  setY(newY){
    this.y = newY;
  }

  width() {
    return this.width;
  }

  height() {
    return this.height;
  }
  
}

