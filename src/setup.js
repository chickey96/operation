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
    this.displayRules();
    let body = new Body(context);
    body.draw();
    this.game = new Game(this.organs, this.context, body);
    this.game.play();
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

  displayRules() {
    const instructions = document.createElement('div');
    instructions.className = 'instructions';
    const title = document.createElement('div');
    title.className = 'title'
    title.innerText = 'Play Operation!'
    instructions.appendChild(title)
    const rules = document.createElement('ul');
    rules.className = 'rules'
    const rule1 = document.createElement('li')
    rule1.innerText = 'Drag organs to their correct location in the body cavity'
    rules.appendChild(rule1);
    const rule2 = document.createElement('li')
    rule2.innerText = "Improperly placed organs damage the patient\'s health"
    rules.appendChild(rule2);
    const rule3 = document.createElement('li')
    rule3.innerText = 'Implant all organs before the timer runs out or the patient reaches critical condition'
    rules.appendChild(rule3);
    instructions.appendChild(rules)  
    document.body.appendChild(instructions)
  }

  // repaint(){
  //   let canvas = document.getElementById('canvas')
  //   this.context.clearRect(0, 0, canvas.width , canvas.height );
  //   this.addOrgans();
  //   this.drawOrgans();
  //   new Body().draw();
  // }
    
}
 export default SetUp;
