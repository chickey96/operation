const Organ = require('./organ');

export default class Liver extends Organ {

  draw(ctx){
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://openclipart.org/download/37315/liver.svg"
    options.x = 500;
    options.y = 100;
    options.width = 35;
    options.height = 45;
    Organ.prototype.draw(options);
  }

}

