class World {
character = new Character("/assets/img/1.Sharkie/1.IDLE/1.png", 0, 0)
canvas;
ctx;
cameraX = 0;
background = [
  new Background('/assets/img/3. Background/Layers/5. Water/L1.png', -300, 0),
  new Background('/assets/img/3. Background/Layers/4.Fondo 2/L1.png', -300, 0),
  new Background('/assets/img/3. Background/Layers/3.Fondo 1/L1.png', -300, 0),
  new Background('/assets/img/3. Background/Layers/2. Floor/L1.png', -300, 0),
  new Background('/assets/img/3. Background/Layers/1. Light/1.png', -300, 0),


  new Background('/assets/img/3. Background/Layers/5. Water/L2.png', 479, 0),
  new Background('/assets/img/3. Background/Layers/4.Fondo 2/L2.png', 479, 0),
  new Background('/assets/img/3. Background/Layers/3.Fondo 1/L2.png', 479, 0),
  new Background('/assets/img/3. Background/Layers/2. Floor/L2.png',479, 0),
  new Background('/assets/img/3. Background/Layers/1. Light/2.png', 479, 0),

  new Background('/assets/img/3. Background/Layers/5. Water/L2.png', 1259, 0),
  new Background('/assets/img/3. Background/Layers/4.Fondo 2/L2.png', 1259, 0),
  new Background('/assets/img/3. Background/Layers/3.Fondo 1/L2.png', 1259, 0),
  new Background('/assets/img/3. Background/Layers/2. Floor/L2.png',1259, 0),
  new Background('/assets/img/3. Background/Layers/1. Light/2.png', 1259, 0)


];
enemies = [
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
  new Enemies('/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
];
keyboard;
healthbar = new Healthbar('assets/img/4. Marcadores/green/Life/100_  copia 2.png');
collectables;


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.draw();
    this.keyboard = keyboard
    this.setWorld();
    this.checkCollisions();
  }

  /**
   * This Function indicates the Collision from the character with an Object
   * This Function iterates each 200 miliseconds
   * 
   */
  checkCollisions(){
    clearInterval(this.collisionInterval)
    this.collisionInterval = setInterval(() => {
      this.enemies.forEach(object => {
        if(this.character.isInsideBorder(object) && this.character.life > 0){
            this.character.damage(this.character);
            this.healthbar.updatehealthbar(this.character.maxLife, this.character.life);
              if (this.character.life <=0) {
                this.character.sharkieDieAnimation();
                this.keyboard = "";
                return
              } else return
          }
      });
    }, 200);
  }



  setWorld(){
    this.character.world = this
  }

    /**
     * This Function loads the game-UI
     * 
     */
    draw() {
      this.drawCanvas()
      this.ctx.translate(this.cameraX, 0)
      this.addImgObjectsToMap(this.background);
      this.addImgObjectsToMap(this.enemies);
      this.addImgObjectToMap(this.character);
      this.imgAnimationLoop();
      this.ctx.translate(-this.cameraX, 0)

      this.addImgObjectToMap(this.healthbar);

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
      if (object.mirrorImage) {
            this.ctx.save()
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);

            object.x = object.x * -1;
      }
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(object.x +object.hitboxX, object.y + object.hitboxY, object.hitboxWidth, object.hitboxHeight);

            
      this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
        if (object.mirrorImage) {
              object.x = object.x * -1;
              this.ctx.restore()
      }
    }
    /**
     * This Function iterates through an Array and draws an Image-Layer for each Element in it
     * 
     * @param {Array} objectArray - Array with all new called Objects 
     */
    addImgObjectsToMap(objectArray){
      objectArray.forEach(object => {
        this.addImgObjectToMap(object);
      });
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
