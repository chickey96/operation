
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
    this.setUpHealth = this.setUpHealth.bind(this);
    this.incrementHealth = this.incrementHealth.bind(this);
    this.organsPlaced = 0;
    this.setUpHealth();
  }

  setUpHealth(){
    this.screen = document.createElement('div');
    this.screen.className = 'screen';
    this.screen.innerText = "HEALTH";
    this.health = document.createElement('div');
    this.health.className = "health";
    this.screen.appendChild(this.health);
    document.body.appendChild(this.screen);
    for(let i = 1; i < 8; i++){
      let bar = document.createElement('div')
      bar.id = `bar${i}`;
      this.health.appendChild(bar);
    }
  }

  incrementHealth(){
    let currBar = document.getElementById(`bar${this.organsPlaced}`);
    currBar.style.backgroundColor = "lawngreen";
  }

  correctPlace(organ){
    let organName = organ.constructor.name;
      if(this.isPositioned(organ, organName)){
        this.situateOrgan(organ, organName);
        organ.lock();
        this.organsPlaced += 1;
        this.incrementHealth();
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