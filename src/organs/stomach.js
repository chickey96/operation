const Organ = require('./organ');

export default class Stomach extends Organ {

  draw(ctx){
    let stomachImg = new Image();
    stomachImg.src = "https://upload.wikimedia.org/wikipedia/commons/b/be/Stomach_icon.svg"
    stomachImg.onload = function() {
      ctx.drawImage(stomachImg, 615, 400, 45, 55)
    }
  }

}

