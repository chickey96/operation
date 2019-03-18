const Organ = require('./organ');

export default class Colon extends Organ {

  draw(ctx){
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://marketplace.canva.com/MACzsJy7L9k/1/thumbnail_large/canva-human-organ-intestine-colon-MACzsJy7L9k.png"
    options.x = 600;
    options.y = 100;
    options.width = 60;
    options.height = 70;
    Organ.prototype.draw(options);
  }
}


