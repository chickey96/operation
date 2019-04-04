

class Game{
  constructor(organs, ctx, body) {
    this.organs = organs;
    this.dragging = false;
    this.changeInX = 0;
    this.changeInY = 0;
    this.selection = null;
    this.ctx = ctx;
    this.body = body;
    this.offsetX = 0;
    this.offsetY = 0;
    
    let canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', mouseDown.bind(this));
    canvas.addEventListener('mousemove', mouseMove.bind(this));
    canvas.addEventListener('mouseup', mouseUp.bind(this));
   
    function mouseDown(e) {
      let mouseX = e.layerX;
      let mouseY = e.layerY;
      this.organs.forEach( organ => {
        if (mouseX >= organ.x && mouseX <= (organ.x + organ.width) 
        && mouseY >= organ.y  && mouseY <= (organ.y + organ.height))
        {
          this.selection = organ;
          this.dragging = true;
          this.offsetX = mouseX - organ.x;
          this.offsetY = mouseY - organ.y;
          return;
        } 
      })
    }

    function mouseMove(e) {
      let mouseX = e.layerX;
      let mouseY = e.layerY;
      if(this.dragging){
        this.changeInX = mouseX - this.selection.x - this.offsetX;
        this.changeInY = mouseY - this.selection.y - this.offsetY;
        this.selection.setX(this.selection.x + this.changeInX);
        this.selection.setY(this.selection.y + this.changeInY);
        let canvas = document.getElementById('canvas');
        requestAnimationFrame(() => {
          this.ctx.clearRect(0, 0, canvas.width, canvas.height);
          this.body.draw(this.ctx);
          this.organs.forEach(organ => {
            organ.draw(this.ctx);
          })
        })
      }
      else {
        let hover = false;
        for (let i = 0; i < this.organs.length; i++) {
          let organ = this.organs[i];
          if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)
            && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {
            canvas.className = "hover"
            hover = true;
            break;
          }
        }
        if(!hover){
          canvas.className = "default";
        }
      }
    } 

    function mouseUp (e) {
      this.dragging = false;
    }
  } 

}

export default Game;