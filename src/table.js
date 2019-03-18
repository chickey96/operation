// const bodyCavity = require('./body-cavity');

function tableGen () {
  let table = document.createElement('div');
  table.className = 'table';
  table.backgroundImage = '../assets/images/body.png';
  return table;
}

document.body.appendChild(tableGen());