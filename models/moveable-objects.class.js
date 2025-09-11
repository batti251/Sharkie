class MoveableObjects extends GameObjects{
width = 200;
height = 200;
speed = 0.25;
speedY;
speedX;
mirrorImage;
coinToss;
resetIntervalX;
resetIntervalY;
maxLife;
max;
life;
isMoving;
lastIsMoving ;
fallAsleep;
hitboxWidth;
hitboxHeight;
hitboxSlap = 240;
hitboxReset = 120


     /**
     * This Function calls the Objects Animations
     * If the Array contains 'Sharkie', Movement-Animation is called seperately
     * 
     * @param {Array} sprites - Array of image-paths
     * @param {Number} miliseconds - specified interval for setInterval()
     * 
     */
    animateObject(sprites, miliseconds){
        if (sprites.some(element => element.includes('Sharkie'))) {
        this.animateCharacterMovement();
        } else this.animateObjectSprite(sprites, miliseconds);
    }
        
    /**
     * This Function picks the needed Sprite-Array depending on the characters Status
     * When Character moves = [Swim-Array]
     * When Character doesn't move = [Idle-Array]
     * When Character doesn't move > 15 seconds = [sleep-Array]
     * It sets the active Character Movement to 60 FPS
     * 
     */
    animateCharacterMovement(){
        clearInterval(this.characterMovementInterval);
        this.characterMovementInterval = setInterval(() => {
            this.moveCharacter(this.world.keyboard);
            if (this.isMoving !== this.lastIsMoving && !this.isSlapping) {
                this.lastIsMoving  = this.isMoving;
                this.applyCharacterMovement();
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
    animateObjectSprite(sprites, miliseconds){
        this.resetCurrentImg(sprites)
        clearInterval(this.objectSpriteInterval);
         this.objectSpriteInterval =  setInterval(() => {
            let i = this.currentImg % sprites.length;
            let path = sprites[i];
            this.img = this.imgCache[path];
            this.currentImg++
        }, miliseconds)
    }

    /**
     * This Function resets currentImg-Index to 0, everytime a sprite-change is triggered
     * 
     * @param {Array} sprites - 
     */
     resetCurrentImg(sprites) {
            if (this.lastSprite !== sprites && this.isSlapping){
             this.currentImg = 0
        }
        this.lastSprite = sprites;
    }
    
    /**
     * This Function calls the actual Moveset from the Character
     * 
     * @param {object} key - Object with the listened Keyboard Keys
     */
    moveCharacter(key){
        this.moveUp(this.speedY,key);
        this.moveDown(this.speedY,key);
        this.moveRight(this.speedX,key);
        this.moveLeft(this.speedX,key);
        this.finSlap(key);
        this.negatefinSlapX();
        this.isMoving = key?.UP || key?.DOWN || key?.LEFT || key?.RIGHT;

    }


    /**
     * This Function calls Enemies (Minions) to move
     * If the Enemy gets angry-state the Movement is set to left, to try to hit the character
     * The Turning-direction is set randomly, until character detection
     * The Y-Coordinate is set randomly to vary the height-movement
     * 
     * @param {Number} speedX - px-value for X-Coordinate 
     * @param {Number} speedY - px-value for Y-Coordinate 
     */
    enemyMinionMovement(speedX, speedY){
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            if (this.angry) {
                this.enemyLeft(2.5)
        } 
        }, 100);
            this.randomTurn(speedX)
            this.setRandomCoordinateY(speedY) 
    }


    /**
     * This Function triggers the enemies character detection 
     * 
     * @param {Object} object - The dedicated Object: Enemies
     * @returns returns true, when charactter and object - X coordinate is under 600px
     */
    isDetected(object){
        return this.x + this.hitboxX + this.hitboxWidth - object.x > -600 
    }


    /**
     * This function reduces the Y-Coordinate and let the Object move up 
     * Returns either true, for Swim-Animation, or false for Idle-Animation
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    moveUp(speed, key){
        if (key?.UP == true && this.y > -100) {
            this.y = this.y - speed;
    }}
    /**
     * This function raises the Y-Coordinate and let the Object move down 
     * Returns either true, for Swim-Animation, or false for Idle-Animation
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveDown(speed, key){
        if (key?.DOWN == true && this.y < 680) {
            this.y = this.y + speed;
            } 
    }

    /**
     * This function raises the X-Coordinate and let the Object move right 
     * Returns either true, for Swim-Animation, or false for Idle-Animation
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveRight(speed, key){
        if (key?.RIGHT == true) {
            this.x = this.x + speed;
            this.world.cameraX = -this.x;
            this.mirrorImage = false;
        }
    }

    /**
     * This Function reduces the X-Coordinate and let the Object move left 
     * Returns either true, for Swim-Animation, or false for Idle-Animation
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveLeft(speed, key){
        if (key?.LEFT == true && this.x > -300) {
            this.x = this.x - speed;
            this.world.cameraX = -this.x;
            this.mirrorImage = true;
        } 
    }



    /**
     * This Function sets the Hitbox of the Objects, scaled by any size
     * 
     * @param {Number} hitboxX - X-Position of the Objects Hitbox
     * @param {Number} hitboxY - Y-Position of the Objects Hitbox 
     * @param {Number} hitboxWidth - Width of the Objects Hitbox
     * @param {Number} hitboxHeight - Height of the Objects Hitbox
     */
    setHitbox(hitboxX, hitboxY, hitboxWidth, hitboxHeight){
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
    isInsideBorder(object){
        return this.x + this.hitboxX + this.hitboxWidth> object.x &&
        this.x + this.hitboxX < object.x + object.hitboxWidth &&
        this.y + this.hitboxY + this.hitboxHeight > object.y &&
        this.y + this.hitboxY < object.y + object.hitboxHeight;
    }


        
    /**
     * This Function negates the finSlapX-coordinate to have a proper detection if the character swims to the left, to hit an enemy
     * 
     */
    negatefinSlapX(){
        if (this.mirrorImage) {
            this.finSlapX = this.hitboxX - this.finSlapHitboxWidth; 
        } else {
            this.finSlapX = this.hitboxX + this.hitboxWidth;
        }
    }

    /**
     * This Function checks, if the characters finslap-Hitbox is colliding with the objects hitbox
     * 
     * @param {Object} object - The dedicated Object: Enemies
     * @returns - returns true, to indicate a Collision, returns false if no Collision is detected
     */
    isInsideSlapBorder(object){ 
        return this.x + this.finSlapX + this.finSlapHitboxWidth > object.x && 
        this.x + this.finSlapX < object.x + object.hitboxWidth && 
        this.y + this.hitboxY + this.hitboxHeight > object.y && 
        this.y + this.hitboxY < object.y + object.hitboxHeight; 
    }


 
    /**
     * This Function decreases the targets life by 20
     * Calls poisened-Animation for 150 miliseconds, then goes over into animation-mode
     * 
     * @param {Object} object - The Target that takes the Damage
     */
    damage(object){
        this.hitted = true
       object.life = object.life - 20
        this.animateObjectSprite(this.sharkie_POISENED,100)
        setTimeout(() => {
          this.applyCharacterMovement();
        }, 150)
        this.notHittedReset(500)
    }

    /**
     * Debounce-Method
     * This Function resets character hitted-state to false, when character is not hitted anymore
     * Reset is called after 500miliseconds 
     * 
     * @param {Number} miliseconds - Timer, when Function should be called 
     */
    notHittedReset(miliseconds){
        if (this.hitTimer) {
            clearTimeout(this.hitTimer)  }
            this.hitTimer = setTimeout(() => {
            this.hitted = false;
            this.hitTimer = null
            }, miliseconds);
    }

    /**
     * This Function wether chooses the Character Swim-Animation, or sleep-animation, depending on hiis moving-state 
     * 
     */
    applyCharacterMovement(){
        if(this.isMoving){
            this.characterSwims();
            } else {
                this.characterFallAsleep()
            }     
                  
    }

    /**
     * This Function calls the dead Animation for Sharkie
     * 
     */
    sharkieDieAnimation(){
       this.sharkieDies = setTimeout(() => {
            this.animateObjectSprite(this.sharkie_DEAD,100)
                setTimeout(() => {
                   this.animateObjectSprite(this.sharkie_DEAD_SURFACE,200)
                    setInterval(() => {
                    this.y = this.y - 5
                    }, 100);
                }, 200);
            }, 100);
    }

}
