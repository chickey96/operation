import Organ from './organ';

export default class Lungs extends Organ {
  constructor() {
    super()
    if (!this.x) {
      this.x = 600;
    }
    if (!this.y) {
      this.y = 250;
    }
    this.width = 65;
    this.height = 70;
  }

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg"
    options.x = this.x;
    options.y = this.y;
    options.width = this.width;
    options.height = this.height;
    Organ.prototype.draw(options);
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

