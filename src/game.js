
import Body from './body';
class Game{
  constructor(organs, ctx) {
    this.organs = organs;
    this.dragging = false;
    this.changeInX = 0;
    this.changeInY = 0;
    this.selection = null;
    this.ctx = ctx;
    
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
          return;
        } 
      })
    }

    function mouseMove(e) {
      let mouseX = e.layerX;
      let mouseY = e.layerY;
      if(this.dragging){
        this.changeInX = mouseX - this.selection.x;
        this.changeInY = mouseY - this.selection.y;
        this.selection.setX(this.selection.x + this.changeInX);
        this.selection.setY(this.selection.y + this.changeInY);
        let canvas = document.getElementById('canvas');
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        new Body().draw(this.ctx);
        this.organs.forEach(organ => {
          organ.draw(this.ctx);
        })
      }
    } 

    function mouseUp (e) {
      this.dragging = false;
    }
  } 
}

export default Game;