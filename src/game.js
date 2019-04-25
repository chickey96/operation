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

    this.gameWonMessage = this.gameWonMessage.bind(this);
    this.gameLostMessage = this.gameLostMessage.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.won = this.won.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.handleCanvasClick = this.handleCanvasClick.bind(this);
    this.drawBorder = this.drawBorder.bind(this);
    this.play = this.play.bind(this);
    this.repaint = this.repaint.bind(this);

    this.playGame = new Gameplay(this);
    this.modal = document.createElement('span');
    document.body.appendChild(this.modal);
    this.closeModal = this.closeModal.bind(this);
    this.gameover = document.createElement('span');
    document.body.appendChild(this.gameover);
    this.gameover.className = "close-modal";
    this.closeModal();
    this.modalBackground = document.createElement('div');
    this.modalBackground.className = "close-modal";
    document.body.appendChild(this.modalBackground);

    this.canvas = document.getElementById('canvas');
    this.canvas.addEventListener('click', this.handleCanvasClick);
    
  } 

  // allow players to start the game by directly clicking on the canvas
  handleCanvasClick(){
    this.playGame.startTimer();
    this.canvas.removeEventListener('click', this.handleCanvasClick)
  }

  // add click and drag functionality
  startGame(){
    this.canvas.addEventListener('mousedown', this.mouseDown);
    this.canvas.addEventListener('mousemove', this.mouseMove);
    this.canvas.addEventListener('mouseup', this.mouseUp);
  }

  mouseDown(e) {
    let mouseX = e.layerX;
    let mouseY = e.layerY;
    // check to see if the player clicked on an organ
    for (let i = 0; i < this.organs.length; i++) {
      let organ = this.organs[i];
      if (organ.placed) continue; // already placed organs aren't draggable
      if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)
        && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {
        // if an organ was clicked, track it and make it draggable
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
    // console.log(this.selection.x, this.selection.y);
    // if an organ was correctly placed redraw the canvas and display modal
    if (this.playGame.correctPlace(this.selection)) {
      this.repaint();
      this.feedback(this.selection);
      this.selection = null;
    } else {
      // outline the body in red if the organ was misplaced
      this.drawBorder();
      window.setTimeout(this.repaint, 300);
    }
  }

  mouseMove(e) {
    let mouseX = e.layerX;
    let mouseY = e.layerY;
    if (this.dragging) {
      // track an organ's position if it's being dragged
      this.changeInX = mouseX - this.selection.x - this.offsetX;
      this.changeInY = mouseY - this.selection.y - this.offsetY;
      this.selection.setX(this.selection.x + this.changeInX);
      this.selection.setY(this.selection.y + this.changeInY);
      // redraw the canvas to display the moving organ
      this.repaint();
    }
    else {
      // only display a hover cursor over draggable objects
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
  
  drawBorder() {
    //draw the body image offset by one in every direction for x and y coordinates
    // see https://stackoverflow.com/questions/28207232/draw-border-around-nontransparent-part-of-image-on-canvas
    const offsetCoords = [ -1,-1, 0,-1, 1,-1, -1,0, 1,0, -1,1, 0,1, 1,1] 
        const s = 2  // thickness scale
        const x = 200  // original x and y positions
        const y = 10  
        const w = 240  // original width and height
        const h = 575
   
    // draw images at each offset for an enlargened version of original
    for(let i = 0; i < offsetCoords.length; i += 2){
      this.ctx.drawImage(this.body.body, x + offsetCoords[i]*s, y + offsetCoords[i+1]*s, w, h);
    }
      this.ctx.globalCompositeOperation = "source-in";
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);

      // redraw original body outline and organs on top
      this.ctx.globalCompositeOperation = "source-over";
      this.body.draw();
      this.organs.forEach( organ => {
        organ.draw();
      })
  }

  // remove all dynamically created elements and intitialize a new setup 
  restartGame(e){
    e.preventDefault();
    const score = document.getElementsByClassName("score");
    const OR = document.getElementsByClassName('operating-room')[0]
    OR.removeChild(score[0]);
    const rules = document.getElementsByClassName('instructions')[0]
    document.body.removeChild(rules);
    document.body.removeChild(this.gameover);
    document.body.removeChild(this.modal);
    document.body.removeChild(this.modalBackground);
    new SetUp(this.ctx);
  }

  //check every second to see if the player has won
  play(){
    this.intervalID = window.setInterval(this.won, 1000);
  }

  won() {
    // player loses if patient's health bar is empty
    if(this.playGame.lives === 0){
      this.endGame();
      this.gameLostMessage();
      return false;
    }
    // check to see if any organs aren't placed
    for (let i = 0; i < this.organs.length; i++) {
      if(!this.organs[i].placed){
        return false;
      }
    }
    // player wins if all of the organs are placed correctly
    this.endGame();
    this.gameWonMessage();
  }

  endGame(){
    // stop continuously checking to see if player has won
    window.clearInterval(this.intervalID);
    // stop the timer
    window.clearInterval(this.playGame.clock)
    // remove click and drag functionality
    this.canvas.removeEventListener('mousedown', this.mouseDown);
    this.canvas.removeEventListener('mousemove', this.mouseMove);
    this.canvas.removeEventListener('mouseup', this.mouseUp);
  }

  feedback(organ){
    let organName = organ.constructor.name;
    this.openModal(organName);
  }

  // briefly show modal if organ is correctly placed
  openModal(organName){
    this.modal.innerText = `You got the ${organName}!`
    this.modal.className = "open-modal";
    window.setTimeout(this.closeModal, 1200)
  }

  closeModal(){
    this.modal.className = "close-modal";
  }

  gameWonMessage(){
    const msg = document.createElement('div');
    msg.innerText = "Congratulations! You Saved a life.";
    msg.className = 'msg';
    this.gameover.appendChild(msg);
    const replay = document.createElement('button');
    replay.className = "replay";
    replay.innerText = "Play Again";
    replay.onclick = this.restartGame;
    this.gameover.appendChild(replay);
    this.gameover.id = 'game-won';
    this.gameover.className = "gameover";
    this.modalBackground.className = "modal-background"
  }

  gameLostMessage(){
    const msg = document.createElement('div');
    msg.innerText = "You lost the patient!";;
    msg.className = 'msg';
    this.gameover.appendChild(msg);
    const replay = document.createElement('button');
    replay.className = "replay";
    replay.innerText = "Try Again";
    replay.onclick = this.restartGame;
    this.gameover.appendChild(replay);
    this.gameover.id = 'game-lost';
    this.gameover.className = "gameover";
    this.modalBackground.className = "modal-background"
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