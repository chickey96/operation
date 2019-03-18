const Organ = require('./organ');

export default class SmallIntestine extends Organ {

  draw(ctx) {
    let options = {};
    options.ctx = ctx;
    options.imgUrl = "https://cdn1.iconfinder.com/data/icons/internal-organs-cartoon/512/g1847-512.png"
    options.x = 500;
    options.y = 200;
    options.width = 50;
    options.height = 50;
    Organ.prototype.draw(options);
    }

}

