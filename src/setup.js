import Heart from './organs/heart';
import Lungs from './organs/lungs';
import Stomach from './organs/stomach';
import SmallIntestine from './organs/small_intestine';
import Colon from './organs/colon';
import Kidneys from './organs/kidneys';
import Liver from './organs/liver'
import Body from './body';

export default class SetUp {
  constructor(game, context){
    this.context = context;
    this.game = game;
    this.organs = [];
    this.addOrgans();
    this.drawOrgans();
    new Body().draw(context);
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

}

