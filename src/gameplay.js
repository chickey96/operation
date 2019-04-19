
class Gameplay {
  constructor(){
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
    this.incrementProgress = this.incrementProgress.bind(this);
    this.organsPlaced = 0;
    const OR = document.getElementsByClassName('operating-room')[0];
    const score = document.createElement('div');
    score.className = 'score';
    score.appendChild(this.setUpProgress());
    score.appendChild(this.setUpHealth());
    OR.append(score);
  }

  setUpProgress(){
    this.progressScreen = document.createElement('div');
    this.progressScreen.className = 'progressScreen';
    this.progressScreen.innerText = "Progress";
    this.progress = document.createElement('div');
    this.progress.className = "progress";
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
    this.healthScreen.className = 'healthScreen';
    this.healthScreen.innerText = "Patient Health";
    this.health = document.createElement('div');
    this.health.className = "health";
    this.healthScreen.appendChild(this.health);
    for(let i = 1; i < 8; i++){
      let bar = document.createElement('div')
      bar.id = `bar${i}`;
      this.health.appendChild(bar);
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