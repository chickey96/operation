let canvas = document.getElementById('canvas')
let currx = options.x;
let curry = options.y;
let isDraggable = false;

canvas.onmousedown = function (e) {
  let mousex = e.pageX;
  let mousey = e.pageY;
  if (mousex >= (options.x - options.width / 2) &&
    mousex <= (options.x + options.width / 2) &&
    mousey >= (options.y - options.height / 2) &&
    mousey <= (options.y + options.height / 2)) {
    isDraggable = true;
  }
}

canvas.onmouseup = function (e) {
  isDraggable = false;
}

canvas.onmousemove = function (e) {
  if (isDraggable) {
    currx = e.pageX;
    curry = e.pageY;
    options.ctx.drawImage(img, currx, curry, options.width, options.height)
  }
}
