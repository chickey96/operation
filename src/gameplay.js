
class Gameplay {
  constructor(game){
    this.game = game;
    this.closeEnough = {
      "Kidneys": { x: [267, 280], y: [181, 199] }, 
      "Stomach": { x: [297, 320], y: [165, 190] }, 
      "SmallIntestine": { x: [268, 289], y: [193, 216] }, 
      "Colon": { x: [281, 296], y: [210, 233] }, 
      "Liver": { x: [269, 284], y: [158, 175] }, 
      "Lungs": { x: [255, 265], y: [102, 125] }, 
      "Heart": { x: [299, 312], y: [128, 149] }
    }

    this.bingo = {
      "Kidneys": [273, 192],
      "Stomach": [310, 174],
      "SmallIntestine": [281, 209],
      "Colon": [292, 226],
      "Liver": [276, 165],
      "Lungs": [259, 110],
      "Heart": [310, 133]
    }
    this.situateOrgan = this.situateOrgan.bind(this);
    this.correctPlace = this.correctPlace.bind(this);
    this.isPositioned = this.isPositioned.bind(this);
    this.setUpProgress = this.setUpProgress.bind(this);
    this.setUpHealth = this.setUpHealth.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.setupTimer = this.setupTimer.bind(this);
    this.incrementProgress = this.incrementProgress.bind(this);
    this.organsPlaced = 0;
    this.lives = 7;
    const OR = document.getElementsByClassName('operating-room')[0];
    const score = document.createElement('div');
    this.time = 45;
    score.className = 'score';
    score.appendChild(this.setUpProgress());
    score.appendChild(this.setUpHealth());
    score.appendChild(this.setupTimer());
    OR.append(score);
  }

  setupTimer() {
    this.timerScreen = document.createElement('div');
    this.timerScreen.className = 'screen';
    this.timerScreen.id = 'timer'
    let startButton = document.createElement('button')
    startButton.className = 'startButton';
    startButton.innerText = 'PLAY GAME'
    startButton.onclick = this.startTimer;
    this.timerScreen.appendChild(startButton);
    return this.timerScreen;
  }

  startTimer(){
    this.time = 45;
    let that = this;
    this.clock = setInterval(() => {
      document.getElementById('timer').innerHTML='00:'+ that.time;
      that.time--;
      if (that.time < 0) { // if timer runs out, player loses
        that.game.gameLostMessage();
      }
    }, 1000);
    this.game.startGame();
  }

  setUpProgress(){
    this.progressScreen = document.createElement('div');
    this.progressScreen.className = 'screen';
    this.progressScreen.innerText = "Implant Progress";
    this.progress = document.createElement('div');
    this.progress.className = "tracker";
    this.progressScreen.appendChild(this.progress);
    for(let i = 1; i < 8; i++){
      let bar = document.createElement('div')
      bar.id = `bar${i}`;
      this.progress.appendChild(bar);
    }
    return this.progressScreen;
  }

  setUpHealth(){
    this.healthScreen = document.createElement('div');
    this.healthScreen.className = 'screen';
    this.healthScreen.innerText = "Patient Stability";
    this.health = document.createElement('div');
    this.health.className = "tracker";
    this.healthScreen.appendChild(this.health);
    for(let i = 1; i < 8; i++){
      let life = document.createElement('div')
      life.id = `life${i}`;
      life.style.backgroundColor = "lawngreen";
      this.health.appendChild(life);
    }
    return this.healthScreen;
  }

  incrementProgress(){
    let currBar = document.getElementById(`bar${this.organsPlaced}`);
    currBar.style.backgroundColor = "lawngreen";
  }

  correctPlace(organ){
    let organName = organ.constructor.name;
      if(this.isPositioned(organ, organName)){
        this.situateOrgan(organ, organName);
        organ.lock();
        this.organsPlaced += 1;
        this.incrementProgress();
        return true;
      }
      else {
        // decrement patient's health if an organ is misplaced
        let currLife = document.getElementById(`life${this.lives}`);
        currLife.style.backgroundColor = "black";
        this.lives -= 1;
      }
      return false;
  }

  // reposition organ to exact location if the player put it within range
  situateOrgan(organ, organName){
    let goal = this.bingo[organName];
    organ.setX(goal[0]);
    organ.setY(goal[1]);
  }

  isPositioned(organ, organName){
    let x = organ.x;
    let y = organ.y;
    let aim = this.closeEnough[organName];
    if(x >= aim.x[0] && x <= aim.x[1] && y >= aim.y[0] && y <= aim.y[1]){
        return true;
    }
    return false;
  }

}

export default Gameplay;