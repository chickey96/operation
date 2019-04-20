
export default class Body {

  constructor(ctx) {
    this.ctx = ctx;
    this.body = new Image();
    // this.body.src = "http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg"
    this.body.src = '../assets/images/body.png';
    this.body.onload = () => {
      this.ctx.drawImage(this.body, 200, 10, 240, 575)
    }
  }
  draw() {
    this.ctx.drawImage(this.body, 200, 10, 240, 575)
  }
}