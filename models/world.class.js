class World {
canvas;
ctx;
background;
character = new Character("/assets/img/1.Sharkie/1.IDLE/1.png")
enemies;
collectables;


  constructor(canvas) {
    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.draw();
  }

    /**
     * This Function loads the game-UI
     * 
     */
    draw() {
      this.drawCanvas()

      console.log("world.class.js: draw-function");
      this.addImgObjectToMap(this.character);
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

    /**
     * This function draws a single Image to the Canvas 
     * 
     * @param {Object} object - The Object Source
     * 
     * It draws depending on the objects: img, x-coordinate, y-coordinate, width and height
     */
    addImgObjectToMap(object){
    this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
    }


    /**
     * This Function repeats the draw()-function 
     * 
     */
    imgAnimationLoop(){
    let self = this;
    requestAnimationFrame(() => {self.draw()});
    }

}
