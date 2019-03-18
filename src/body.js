
export default class Body {

  draw(ctx) {
    let body = new Image();
    body.src = "http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg"
    body.onload = function () {
      ctx.drawImage(body, 185, 25, 275, 550)
    }
  }
}