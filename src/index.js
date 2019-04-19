
import tableGen from './table';
import getInstruments from './instruments';
import SetUp from './setup';

function component() {
  let element = document.createElement('div');
  element.className = "operating-room"
  return element;
}

const OR = component();
document.body.appendChild(OR);
const surgicalSite = document.createElement('div')
surgicalSite.className = 'surgicalSite';
surgicalSite.appendChild(tableGen());
surgicalSite.appendChild(getInstruments());
OR.appendChild(surgicalSite);


document.addEventListener("DOMContentLoaded", () => {
  var canvas = document.createElement('canvas')
  canvas.id = 'canvas'
  canvas.width = 900;
  canvas.height = 600;
  surgicalSite.appendChild(canvas);
  var context = canvas.getContext("2d");
  new SetUp(context);
});


