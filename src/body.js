
export default class Body {

  constructor(ctx) {
    this.ctx = ctx;
    this.body = new Image();
    this.body.src = "http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg"
    this.body.onload = () => {
      this.ctx.drawImage(this.body, 185, 25, 275, 550)
    }
  }
  draw() {
    this.ctx.drawImage(this.body, 185, 25, 275, 550)
  }
}