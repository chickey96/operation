import Gameplay from './gameplay';
import SetUp from './setup';

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

    this.gameoverMessage = this.gameoverMessage.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.won = this.won.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.startGame = this.startGame.bind(this);

    this.playGame = new Gameplay(this);
    this.modal = document.createElement('span');
    document.body.appendChild(this.modal);
    this.closeModal = this.closeModal.bind(this);
    this.gameover = document.createElement('span');
    document.body.appendChild(this.gameover);
    this.gameover.className = "close-modal";
    this.closeModal();

    this.canvas = document.getElementById('canvas');
  } 

  startGame(){
    this.canvas.addEventListener('mousedown', this.mouseDown);
    this.canvas.addEventListener('mousemove', this.mouseMove);
    this.canvas.addEventListener('mouseup', this.mouseUp);
  }

  mouseDown(e) {
    let mouseX = e.layerX;
    let mouseY = e.layerY;
    for (let i = 0; i < this.organs.length; i++) {
      let organ = this.organs[i];
      if (organ.placed) continue;
      if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)
        && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {
        this.selection = organ;
        this.dragging = true;
        this.offsetX = mouseX - organ.x;
        this.offsetY = mouseY - organ.y;
        return;
      }
    }
  }

  mouseUp(e) {
    this.dragging = false;
    if (this.playGame.correctPlace(this.selection)) {
      this.repaint()
      window.setTimeout(this.feedback(this.selection), 1000);
      this.selection = null;
    }
  }

  mouseMove(e) {
    let mouseX = e.layerX;
    let mouseY = e.layerY;
    if (this.dragging) {
      this.changeInX = mouseX - this.selection.x - this.offsetX;
      this.changeInY = mouseY - this.selection.y - this.offsetY;
      this.selection.setX(this.selection.x + this.changeInX);
      this.selection.setY(this.selection.y + this.changeInY);
  
      requestAnimationFrame(() => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.body.draw();
        this.organs.forEach(organ => {
          organ.draw();
        })
      })
    }
    else {
      let hover = false;
      for (let i = 0; i < this.organs.length; i++) {
        let organ = this.organs[i];
        if (organ.placed) {
          continue;
        }
        if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)
          && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {
          this.canvas.className = "hover"
          hover = true;
          break;
        }
      }
      if (!hover) {
        this.canvas.className = "default";
      }
    }
  } 

  restartGame(e){
    e.preventDefault();
    const screen = document.getElementsByClassName("screen");
    document.body.removeChild(screen[0]);
    document.body.removeChild(this.gameover);
    document.body.removeChild(this.modal);
    new SetUp(this.ctx);
  }

  play(){
    window.setInterval(this.won, 1000);
  }

  won() {
    for (let i = 0; i < this.organs.length; i++) {
      if(!this.organs[i].placed){
        return false;
      }
    }
    window.clearInterval(this.won);
    this.canvas.removeEventListener('mousedown', this.mouseDown);
    this.canvas.removeEventListener('mousemove', this.mouseMove);
    this.canvas.removeEventListener('mouseup', this.mouseUp);
    this.gameoverMessage();
  }

  feedback(organ){
    let organName = organ.constructor.name;
    this.openModal(organName);
  }

  openModal(organName){
    this.modal.innerText = `You got the ${organName}!`
    this.modal.className = "open-modal";
    window.setTimeout(this.closeModal, 1200)
  }

  closeModal(){
    this.modal.className = "close-modal";
  }

  gameoverMessage(){
    this.gameover.innerText = "Congratulations! You Saved a life. Would you like to play again?";
    this.replay = document.createElement('button');
    this.replay.className = "replay";
    this.replay.innerText = "Replay";
    this.replay.onclick = this.restartGame;
    this.gameover.appendChild(this.replay);
    this.gameover.className = "gameover";
  }

  repaint() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.body.draw(this.ctx);
      this.organs.forEach(organ => {
        organ.draw();
      })
    })
  }

}

export default Game;