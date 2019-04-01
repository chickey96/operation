import Heart from './organs/heart';
import Lungs from './organs/lungs';
import Stomach from './organs/stomach';
import SmallIntestine from './organs/small_intestine';
import Colon from './organs/colon';
import Kidneys from './organs/kidneys';
import Liver from './organs/liver'
import Body from './body';
import Game from './game';

class SetUp {
  constructor(context){
    this.context = context;
    this.organs = [];
    this.addOrgans();
    this.drawOrgans();
    new Body().draw(context);
    this.game = new Game(this.organs, this.context);
    this.repaint = this.repaint.bind(this)
  }

  addOrgans(){
    this.organs.push(new Heart);
    this.organs.push(new Lungs);
    this.organs.push(new Stomach);
    this.organs.push(new SmallIntestine);
    this.organs.push(new Colon);
    this.organs.push(new Kidneys);
    this.organs.push(new Liver);
  }

  drawOrgans(){
   this.organs.forEach( organ => {
     organ.draw(this.context);
   })
  }

  repaint(){
    let canvas = document.getElementById('canvas')
    this.context.clearRect(0, 0, canvas.width , canvas.height );
    this.addOrgans();
    this.drawOrgans();
    new Body().draw(this.context);
  }
}
 export default SetUp;
