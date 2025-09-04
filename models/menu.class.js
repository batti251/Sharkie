class Menu{
background = new menuBackground('assets/background.png');
button = new Button('assets/img/6.Botones/Start/3.png');


constructor(canvas) {

    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.draw();

}


    draw() {
      this.drawCanvas()
      this.addImgObjectToMap(this.background)
      this.addImgObjectToMap(this.button)
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
    }
    imgAnimationLoop(){
    let self = this;
    requestAnimationFrame(() => {self.draw()});
    }

}