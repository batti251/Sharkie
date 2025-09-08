class World {
character = new Character('assets/img/1.Sharkie/1.IDLE/1.png', 0, 0)
canvas;
ctx;
cameraX = 0;
keyboard;
healthbar = new Healthbar('assets/img/4. Marcadores/green/Life/100_  copia 2.png');
coinbar = new Coinbar('assets/img/4. Marcadores/green/Coin/0_  copia 4.png');
poisonbar = new Poisonbar('assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png')
level = new Level(3);



  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d"); // enables 2 dimensional Area
    this.draw();
    this.keyboard = keyboard
    this.setWorld();
    this.enemyDetection();
    this.checkCollisions();
    this.checkCollectiblesCollisions();
    this.finishedLevel();
    this.enemyJellyfishDetection();
  }

  /**
   * This Function sets the end of the level
   * 
   */
  finishedLevel(){
    this.levelEnd = this.level.x - 1000
    setInterval(() => {
      if (this.character.x == this.levelEnd) {
        console.log("success");
        // 
      }
    }, 200);
    
  }

  /**
   * This Function detects collision from the character with the collectibles
   * If a collision is detected, it calls the fill-bar-function
   * 
   */
  checkCollectiblesCollisions(){
    setInterval(() => {
      this.level.coins.forEach(coin => {
        if (this.character.isInsideBorder(coin) && this.character.canCollect) {
            this.coinbar.fillCoinbar(coin);
            }
           })
    }, 200);
    setInterval(() => {
      this.level.poison.forEach(poison => {
        if (this.character.isInsideBorder(poison)) {
            this.poisonbar.fillPoisonbar(poison);
           }
           })
    }, 200);
  }

  
    /**
     * This Function let the enemies trigger the transformation Animation
     * 
     */
    enemyDetection(){
      clearInterval(this.detection)
       this.detection = setInterval(() => {
            this.level.enemies.forEach(enemie => {
            if (this.character.isDetected(enemie) && !enemie.angry && enemie instanceof Pufferfish){
              enemie.enemyDetectionAnimation(enemie);
              enemie.angry = true;
            } 
          });
        }, 100);
    }

    enemyJellyfishDetection(){
      clearInterval(this.detectionJellyfish)
      this.detectionJellyfish = setInterval(() => {
        this.level.enemies.forEach(enemie => {
          if(this.character.isDetected(enemie) && !enemie.angry && enemie instanceof Jellyfish){
            enemie.angry = true;
            console.log(enemie);
            
         } 
          });
        }, 100);
    }

  /**
   * This Function indicates the Collision from the character with an Object
   * It indicates collision during slap-animation
   * This Function iterates each 200 miliseconds
   * 
   */
  checkCollisions(){
    clearInterval(this.collisionInterval)
    this.collisionInterval = setInterval(() => {
      this.level.enemies.forEach(object => {
        if (this.character.isInsideBorder(object) && this.character.isSlapping && !this.character.hitted) {
                  object.x = -1000
              }  
        if(this.character.isInsideBorder(object) && this.character.life > 0){
            this.character.damage(this.character);
            this.healthbar.updatehealthbar(this.character.maxLife, this.character.life);
              if (this.character.life <=0) {
                this.keyboard = null
                this.character.sharkieDieAnimation();
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
      this.addImgObjectsToMap(this.level.background)
      this.addImgObjectsToMap(this.level.coins);
      this.addImgObjectsToMap(this.level.poison);
      this.addImgObjectsToMap(this.level.enemies)
      this.addImgObjectToMap(this.character);
      this.imgAnimationLoop();
      this.ctx.translate(-this.cameraX, 0)

      this.addImgObjectToMap(this.healthbar);
      this.addImgObjectToMap(this.coinbar);
      this.addImgObjectToMap(this.poisonbar);

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
