class Organ {
  constructor(){ 
  }

  draw(options){   
    let img = new Image();
    img.src = options.imgUrl;
    img.onload = function() {
      options.ctx.drawImage(img, options.x, options.y, options.width, options.height)
    }
    let canvas = document.getElementById('canvas')
    let startx = options.x;
    let starty = options.y;
    let dragging = false;
    let mouseDown = false;
    canvas.onmousedown = function(e) {
      let mousex = e.pageX;
      let mousey = e.pageY;
      if(mousex >= (options.x - options.width/2) && 
        mousex <= (options.x + options.width/2) &&
        mousey >= (options.y - options.height/2) &&
        mousey <= (options.y + options.height/2))
      {
        img.isDraggable = true;
      }
    }
    
  }

  
}

module.exports = Organ;