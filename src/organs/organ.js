class Organ {
  constructor(organSpecs){
    const {ctx, imgUrl, x, y, w, h} = organSpecs;
    this.img = new Image();
    this.img.src = imgUrl;
    this.img.onload = () => {
      ctx.drawImage(this.img, x, y, w, h)
    }
    this.placed = false;
  }
  
  draw(){ 
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  lock(){
    this.placed = true;
  }

}

module.exports = Organ;