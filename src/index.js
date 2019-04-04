
import table from './table';
import instruments from './instruments';
import SetUp from './setup';

function component() {
  let element = document.createElement('div');
  element.className = "operating-room"
  return element;
}

document.body.appendChild(component());

document.addEventListener("DOMContentLoaded", () => {
  var canvas = document.getElementById("canvas");
  canvas.width = 900;
  canvas.height = 600;
  var context = canvas.getContext("2d");
  const setup = new SetUp(context);
  document.body.onload = () => {
    setup.startGame();
  }
});


