class MoveableObjects extends GameObjects {
  width = 200;
  height = 200;
  mirrorImage;
  maxLife;
  life;

  hitboxWidth;
  hitboxHeight;


  /**
   * This Function calls the Objects Animations
   * If the Array contains 'Sharkie', Movement-Animation is called seperately
   *
   * @param {Array} sprites - Array of image-paths
   * @param {Number} miliseconds - specified interval for setInterval()
   *
   */
  animateObject(sprites, miliseconds) {
    if (sprites.some((element) => element.includes("Sharkie"))) {
      this.movement.animateCharacterMovement();
    } else this.animateObjectSprite(sprites, miliseconds);
  }

    /**
   * This Function triggers the enemies character detection
   *
   * @param {Object} object - The dedicated Object: Enemies
   * @returns returns true, when charactter and object - X coordinate is under 600px
   */
  isDetected(object) {
    return this.x + this.hitboxX + this.hitboxWidth - object.x > -600;
  }

    /**
   * This Function lets the object Y-coordinate decrease, to have a death-effect in Water 
   * 
   * @param {*} speedY 
   */
     deadToSurface(speedY){
        this.deadSurfaceInterval = setStoppableInterval(() => {
            if (this.dead) {
            this.y -= speedY;
            }
        }, 1000 / 60);
    }


    
  /**
   * This Function updates the displayed image in each iteration
   * The Iteration is done every 100 miliseconds per frame
   * Its done for Character, Enemies and Collectables
   *
   * @param {Array} sprites - Array of image-paths
   * @param {Number} miliseconds - specified interval for setInterval()
   */
  animateObjectSprite(sprites, miliseconds) {
    this.resetCurrentImg(sprites);
    clearInterval(this.objectSpriteInterval);
    this.objectSpriteInterval = setStoppableInterval(() => {
      let i = this.currentImg % sprites.length;
      let path = sprites[i];
      this.img = this.imgCache[path];
      this.currentImg++;
    }, miliseconds);
  }

  /**
   * This Function resets currentImg-Index to 0, everytime a sprite-change is triggered
   *
   * @param {Array} sprites -
   */
  resetCurrentImg(sprites) {
    if (this.lastSprite !== sprites && this.isAttacking || this.isShooting) {
      this.currentImg = 0;
    }
    this.lastSprite = sprites;
  }






  /**
   * This Function sets the Hitbox of the Objects, scaled by any size
   *
   * @param {Number} hitboxX - X-Position of the Objects Hitbox
   * @param {Number} hitboxY - Y-Position of the Objects Hitbox
   * @param {Number} hitboxWidth - Width of the Objects Hitbox
   * @param {Number} hitboxHeight - Height of the Objects Hitbox
   */
  setHitbox(hitboxX, hitboxY, hitboxWidth, hitboxHeight) {
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
    this.hitboxWidth = this.width / hitboxWidth;
    this.hitboxHeight = this.height / hitboxHeight;
  }

  /**
   * This Function checks, if the characters Hitbox is colliding with a dedicated Object
   *
   *
   * @param {Object} object - The dedicated Object: Enemies
   * @returns - returns true, to indicate a Collision, returns false if no Collision is detected
   */
  isInsideBorder(object) {
    return (
      this.x + this.hitboxX + this.hitboxWidth > object.x + object.hitboxX &&
      this.x + this.hitboxX < object.x + object.hitboxWidth &&
      this.y + this.hitboxY + this.hitboxHeight > object.y + object.hitboxY &&
      this.y + this.hitboxY < object.y + object.hitboxY + object.hitboxHeight
    )//;
  }


      /**
     * This function reduces the X-Coordinate and let the Enemy move left 
     * It sets the Image, according to the Boolean, to turn the Enemy to the correct direction
     * The Movement is set to 60 FPS
     * @param {*} speedX - The px-value 
     */
    enemyMoveLeft(speedX){
        this.resetIntervalX = setStoppableInterval(() => {
            this.x -= speedX;
             this.mirrorImage = false
        }, 1000 / 60);
    }

    /**
     * This function increases the X-Coordinate and let the Enemy move right 
     * It sets the Image, according to the Boolean, to turn the Enemy to the correct direction
     * The Movement is set to 60 FPS
     * @param {*} speedX - The px-value 
     */
    enemyMoveRight(speedX){
         this.resetIntervalX = setStoppableInterval(() => {
            this.x += speedX;
            this.mirrorImage = true
        }, 1000 / 60);
    }


}
