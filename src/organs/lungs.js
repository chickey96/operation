import Organ from './organ';

export default class Lungs extends Organ {

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg"
    options.x = 600;
    options.y = 250;
    options.width = 65;
    options.height = 70;
    Organ.prototype.draw(options);
  }
}

