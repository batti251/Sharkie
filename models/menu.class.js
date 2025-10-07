class Menu{
  background = new menuBackground('assets/background.png');
  header = new menuObj('assets/sharkie-title.png', 0, -25, 300, 200 ,"title", "center");
  hero = new menuObj('assets/sharkie-background.png', 0, 200, 400, 200 ,"hero", "center");
  instruction = new menuObj('assets/img/6.Botones/Instructions 2.png', 1200, 500, 500, 300 ,"instruction", "");

constructor(canvas) {
    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.draw();
}


    draw() {
      this.drawCanvas()
      this.addImgObjectToMap(this.background)
      this.addImgObjectToMap(this.header)
      this.addImgObjectToMap(this.instruction)
      this.addImgObjectToMap(this.hero)
      this.imgAnimationLoop();
  } 


    /**
     * This Function refreshes the Canvas on each frame
     * 
     */
      drawCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the Canvas on the current frame 
        this.ctx.fillStyle = "black"; //background-color
        this.ctx.fillRect(0, 0, canvas.width, canvas.height); // adds x, y, width and height to the canvas + fillstyle
      }


        addImgObjectToMap(object){
      this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
      this.ctx.strokeRect(object.x, object.y, object.width, object.height);

    }
    imgAnimationLoop(){
    let self = this;
    requestAnimationFrame(() => {self.draw()});
    }

}