
class Gameplay {
  constructor(ctx, organs){
    this.ctx = ctx;
    this.organs = organs;
    this.playing = true;
    this.positioned = [0, 0, 0, 0, 0, 0, 0];
    this.bingo = {
      0: { x: [270, 280], y: [200, 210] }, 
      1: { x: [290, 320], y: [175, 195] }, 
      2: { x: [270, 290], y: [215, 235] }, 
      3: { x: [280, 300], y: [225, 245] }, 
      4: { x: [280, 300], y: [175, 195] }, 
      5: { x: [275, 295], y: [110, 130] }, 
      6: { x: [295, 315], y: [130, 140] }
    }
    this.playRound = this.playRound.bind(this);
  }

  playRound(){
    // debugger;
    if(!this.playing){
      // debugger;
    }
    this.checkPositions();
    if (this.won()) {
      console.log("WINNER")
      this.playing = false;
    }
  }

  checkPositions(){
    for(let i = 0; i < this.organs.length; i++){
      if(this.positioned[i] === 1){
        continue;
      }
      if(this.isPositioned(i)){
        this.positioned[i] = 1;
      }
    }
  }

  isPositioned(i){
    let x = this.organs[i].x;
    let y = this.organs[i].y;
    let aim = this.bingo[i];
    if(x >= aim.x[0] && x <= aim.x[1]){
      if(y >= aim.y[0] && y <= aim.y[1]){
        return true;
      }
    }
    return false;
  }

  won(){
    for(let i = 0; i < this.positioned.length; i++){
      if(this.positioned[i] === 0){
        return false;
      }
    }
    return true;
  }
}

export default Gameplay;