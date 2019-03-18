import Organ from './organ';

export default class Heart extends Organ {
  
  draw(ctx){
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/291180/Realistic-Red-Heart.svg" 
    options.x = 500;
    options.y = 300;
    options.width = 40;
    options.height = 50;
    Organ.prototype.draw(options);
  }

}
