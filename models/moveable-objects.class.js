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
hitboxSlap = 140;
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
     * This Function calls the character swim-Animation
     * 
     */
    characterSwims(){
        this.animateObjectSprite(this.sharkie_SWIM, 100);
    }

    /**
     * This Function calls the character sleep-Animation 
     * The Timer is set to 15 seconds unttil it starts the Animation
     * 
     */
    characterFallAsleep(){
        clearTimeout(this.fallAsleep)
         this.animateObjectSprite(this.sharkie_IDLE, 100);
                this.fallAsleep =  setTimeout(() => {
                    this.animateObjectSprite(this.sharkie_Long_IDLE, 100);
                    setTimeout(() => {
                         this.animateObjectSprite(this.sharkie_SLEEPING, 300);
                    }, 700);
                }, 15000);
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
        this.finSlap(key)
        this.isMoving = key.UP || key.DOWN || key.LEFT || key.RIGHT;
    }
    
    /**
     * This Function calls Enemies (Minions) to move
     * The Turning-direction is set randomly, until character detection
     * The Y-Coordinate is set randomly to vary the height-movement
     * 
     * @param {Number} speedX - px-value for X-Coordinate 
     * @param {Number} speedY - px-value for Y-Coordinate 
     */
    enemyMinionMovement(speedX, speedY){
        this.randomTurn(speedX)
        this.setRandomCoordinateY(speedY)
        /* this.enemyDetectionAnimation() */
    }

    isDetected(object){
        return this.x + this.hitboxX + this.hitboxWidth - object.x > -200 
    }

    /**
     * This Function updates the Enemie Animation from passiv mode to offensiv mode
     * It lets the pufferfishes puff
     * 
     */
    enemyDetectionAnimation(enemie){
        clearTimeout(this.enemyDetector)
            this.enemyDetector = setTimeout(() => {
                     this.animateObjectSprite(this.enemies_TRANSITION, 100);
                       setTimeout(() => {
                        enemie.animateObjectSprite(this.enemies_ANGRY, 200);
                    }, 100);
            }, 200);
    }

    enemyIdleState(){
        this.animateObjectSprite(this.enemies_IDLE, 200)
    }
    /**
     * This Function wether let the Enemies move left, or right, depending on coinToss-Function
     * The Function is called every 2 seconds 
     * 
     * @param {*} speedX - px-value for X-Coordinate 
     */
    randomTurn(speedX){
        setInterval(() => {
        this.coinToss = Math.random() * 1;
        if (this.coinToss > 0.5) {
                this.enemyLeft(speedX);
                return
        } else {
            this.enemyRight(speedX)
            return
        }}, 2000);
    }

    /**
     * This Function let the assigned Object move a random height up and down 
     * 
     * @param {Number} speedY - px-value for Y-Coordinate
     */
    setRandomCoordinateY(speedY){
         setInterval(() => {
            setTimeout(() => {
                this.moveDown(speedY);
            }, Math.floor(Math.random() * 300 ) + 100);
            
            setTimeout(() => {
                this.moveUp(speedY);
            }, Math.floor(Math.random() * 300 ) + 100);
        }, this.randomHeightInterval);
    }

    /**
     * This function reduces the Y-Coordinate and let the Object move up 
     * Returns either true, for Swim-Animation, or false for Idle-Animation
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    moveUp(speed, key){
        if (key.UP == true && this.y > -60) {
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
        if (key.DOWN == true && this.y < 300) {
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
        if (key.RIGHT == true) {
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
        if (key.LEFT == true && this.x > -300) {
            this.x = this.x - speed;
            this.world.cameraX = -this.x;
            this.mirrorImage = true;
        } 
    }

    /**
     * This Function let the character slap.
     * During slap-animation the character cannot collect collectibles
     * 
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    finSlap(key){
            if (key.SPACE === true && !this.slapCooldown && !this.hitted) {
                this.slapCooldown = true
                this.isSlapping = true
                this.canCollect = false
                this.animateObjectSprite(this.sharkie_FIN_SLAP, 80)
                this.expandHitbox()
                this.stallCharacterAnimationBy(720)
                setTimeout(() => {
                this.hitboxWidth = 120
                }, 600);
                }   
    }
    
    /**
     * This Function calls CharacterMovement after short delay to grant smooth movement-transition after slap
     * It also works as Cooldown for collection and key.SPACE-listener
     * 
     * @param {Number} miliseconds - Timer, when Function should be called 
     */
    stallCharacterAnimationBy(miliseconds){
        setTimeout(() => {
          this.applyCharacterMovement();
          this.isSlapping = false
          this.canCollect = true
          this.slapCooldown = false
        }, miliseconds);
    }

    /**
     * This Function increases Hitbox from character slight
     * New Hitbox width 140px,  
     * 
     */
    expandHitbox(){
        setTimeout(() => {
          this.hitboxWidth = this.hitboxSlap
                    }, 400);
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
     * This Function checks, if the character is colliding with a dedicated Object
     * 
     * 
     * @param {Object} mo - The dedicated Object: Enemies
     * @returns - returns true, to indicate a Collision, returns false if no Collision is detected
     */
    isInsideBorder(object){
        return this.x + this.hitboxX + this.hitboxWidth> object.x &&
        this.x + this.hitboxX < object.x + object.hitboxWidth &&
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
