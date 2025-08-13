class World {
canvas;
ctx;
background;
character = new Character("/assets/img/1.Sharkie/1.IDLE/1.png")
enemies;
collectables;


  constructor(canvas) {
    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.ctx.fillStyle = "black"; //background-color
    this.ctx.fillRect(0, 0, canvas.width, canvas.height); // adds x,y, width, height to the canvas + fillstyle
    this.draw();
  }

  draw() {
    console.log("world.class.js: draw-function");
    

    this.addObjectToMap(this.character);

    
    let self = this;
    requestAnimationFrame(() => {self.draw()});
}



    addObjectToMap(object){
    this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)

    }



}
