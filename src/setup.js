import Heart from './organs/heart';
import Lungs from './organs/lungs';
import Stomach from './organs/stomach';
import SmallIntestine from './organs/small_intestine';
import Colon from './organs/colon';
import Kidneys from './organs/kidneys';
import Liver from './organs/liver'
import Body from './body';
import Game from './game';
import Gameplay from './gameplay';

class SetUp {
  constructor(context){
    this.context = context;
    this.organs = [];
    this.addOrgans();
    this.drawOrgans();
    let body = new Body(context);
    body.draw();
    this.game = new Game(this.organs, this.context, body);
    this.repaint = this.repaint.bind(this)
  }

  addOrgans(){
    this.organs.push(new Kidneys(this.context));
    this.organs.push(new Stomach(this.context));
    this.organs.push(new SmallIntestine(this.context));
    this.organs.push(new Colon(this.context));
    this.organs.push(new Liver(this.context));
    this.organs.push(new Lungs(this.context));
    this.organs.push(new Heart(this.context));
  }

  drawOrgans(){
   this.organs.forEach( organ => {
     organ.draw();
   })
  }

  repaint(){
    let canvas = document.getElementById('canvas')
    this.context.clearRect(0, 0, canvas.width , canvas.height );
    this.addOrgans();
    this.drawOrgans();
    new Body().draw(this.context);
  }

  startGame(){
    const gameplay = new Gameplay(this.context, this.organs);
    window.setInterval(gameplay.playRound, 9000)
  }
}
 export default SetUp;
