class Organ {
  
  draw(options){   
    this.info = Object.assign({}, options);
    let img = new Image();
    img.src = options.imgUrl;
    img.onload = function() {
      options.ctx.drawImage(img, options.x, options.y, options.width, options.height)
    }
  }

  xPos(){
    return;
  }

  yPos(){
    return;
  }

  width(){
    return;
  }

  height(){
    return;
  }
}

module.exports = Organ;