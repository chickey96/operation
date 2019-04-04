import Organ from './organ';

export default class Heart extends Organ {

  constructor(context){
    let imgUrl = "https://openclipart.org/download/291180/Realistic-Red-Heart.svg" 
    let organSpecs = {ctx: context, imgUrl: imgUrl, x: 500, y: 300, w: 40, h: 50 }
    super(organSpecs)
    if(!this.x){
      this.x = 500;
    }
    if(!this.y){
      this.y = 300;
    }
    this.ctx = context;
    this.width = 40;
    this.height = 50;
  }
  
  draw(){
    super.draw();
  }

  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
  }

}
