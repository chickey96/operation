class Organ {
  constructor(organSpecs){
    const {ctx, imgUrl, x, y, w, h} = organSpecs;
    this.img = new Image();
    this.img.src = imgUrl;
    this.img.onload = () => {
      ctx.drawImage(this.img, x, y, w, h)
    }
  }
  
  draw(){ 
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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