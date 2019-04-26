import Organ from './organ';

export default class Heart extends Organ {

  constructor(context){
    let imgUrl = '../assets/images/heart.png'
    let organSpecs = {ctx: context, imgUrl: imgUrl, x: 515, y: 215, w: 30, h: 45 }
    super(organSpecs)
    if(!this.x){
      this.x = 515;
    }
    if(!this.y){
      this.y = 215;
    }
    this.ctx = context;
    this.width = 30;
    this.height = 45;
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

  // lock(){
  //   super()
  // }

}
