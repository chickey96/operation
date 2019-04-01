import Organ from './organ';

export default class Heart extends Organ {

  constructor(){
    super()
    if(!this.x){
      this.x = 500;
    }
    if(!this.y){
      this.y = 300;
    }
    this.width = 40;
    this.height = 50;
  }
  
  draw(ctx){
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/291180/Realistic-Red-Heart.svg" 
    options.x = this.xPos();
    options.y = this.yPos();
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
