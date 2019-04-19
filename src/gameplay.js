
class Gameplay {
  constructor(game){
    this.game = game;
    this.closeEnough = {
      "Kidneys": { x: [270, 285], y: [190, 210] }, 
      "Stomach": { x: [301, 321], y: [170, 190] }, 
      "SmallIntestine": { x: [275, 295], y: [197, 220] }, 
      "Colon": { x: [280, 300], y: [225, 245] }, 
      "Liver": { x: [275, 295], y: [175, 195] }, 
      "Lungs": { x: [275, 290], y: [110, 125] }, 
      "Heart": { x: [295, 315], y: [130, 145] }
    }

    this.bingo = {
      "Kidneys": [273, 200],
      "Stomach": [310, 174],
      "SmallIntestine": [286, 214],
      "Colon": [292, 226],
      "Liver": [285, 176],
      "Lungs": [284, 108],
      "Heart": [307, 129]
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
    let time = 30;
    let clock = setInterval(function(){
      document.getElementById('timer').innerHTML='00:'+ time;
      time--;
      if (time < 0) {
        clearInterval(clock);
      }
    }, 1000);
    this.game.startGame();
  }

  setUpProgress(){
    this.progressScreen = document.createElement('div');
    this.progressScreen.className = 'screen';
    this.progressScreen.innerText = "Progress";
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
    this.healthScreen.innerText = "Patient Condition";
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
    // if(this.lives < 7){
    //   this.lives += 1;
    //   let currLife = document.getElementById(`life${this.lives}`);
    //   currLife.style.backgroundColor = "lawngreen";
    // }
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
        let currLife = document.getElementById(`life${this.lives}`);
        currLife.style.backgroundColor = "black";
        this.lives -= 1;
      }
      return false;
  }

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