class Character extends MoveableObjects{
currentImg = 0
width = 400;
height = 400;
world;
speedX = 8;
speedY = 4;
maxLife = 1000;
life = this.maxLife;
canCollect = true;
hitted = false;
slapCooldown = false
slapCooldownTime = 1500;
shotBubble = false
keyDetection = false;


sharkie_IDLE = [
    'assets/img/1.Sharkie/1.IDLE/1.png',
    'assets/img/1.Sharkie/1.IDLE/2.png',
    'assets/img/1.Sharkie/1.IDLE/3.png',
    'assets/img/1.Sharkie/1.IDLE/4.png',
    'assets/img/1.Sharkie/1.IDLE/5.png',
    'assets/img/1.Sharkie/1.IDLE/6.png',
    'assets/img/1.Sharkie/1.IDLE/7.png',
    'assets/img/1.Sharkie/1.IDLE/8.png',
    'assets/img/1.Sharkie/1.IDLE/9.png',
    'assets/img/1.Sharkie/1.IDLE/10.png',
    'assets/img/1.Sharkie/1.IDLE/11.png',
    'assets/img/1.Sharkie/1.IDLE/12.png',
    'assets/img/1.Sharkie/1.IDLE/13.png',
    'assets/img/1.Sharkie/1.IDLE/14.png',
    'assets/img/1.Sharkie/1.IDLE/15.png',
    'assets/img/1.Sharkie/1.IDLE/16.png',
    'assets/img/1.Sharkie/1.IDLE/17.png',
    'assets/img/1.Sharkie/1.IDLE/18.png'
]

sharkie_SWIM = [
    'assets/img/1.Sharkie/3.Swim/1.png',
    'assets/img/1.Sharkie/3.Swim/2.png',
    'assets/img/1.Sharkie/3.Swim/3.png',
    'assets/img/1.Sharkie/3.Swim/4.png',
    'assets/img/1.Sharkie/3.Swim/5.png',
    'assets/img/1.Sharkie/3.Swim/6.png',
]

sharkie_Long_IDLE = [
    'assets/img/1.Sharkie/2.Long_IDLE/i1.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I2.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I3.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I4.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I5.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I6.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I7.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I8.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I9.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I10.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I14.png'
]

sharkie_SLEEPING = [
    'assets/img/1.Sharkie/2.Long_IDLE/I11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I14.png'
]

sharkie_FIN_SLAP = [
    'assets/img/1.Sharkie/4.Attack/Fin slap/1.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/2.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/3.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/4.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/5.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/6.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/7.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/8.png'
]

sharkie_Bubble_TRAP = [
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
]

sharkie_POISENED = [
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
]

sharkie_DEAD = [
    'assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
]

sharkie_DEAD_SURFACE = [
      'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
]

    constructor(path, x, y){
        super().loadImg(path);

        this.x = x 
        this.y = y
        this.loadImgCache(this.sharkie_IDLE);
        this.loadImgCache(this.sharkie_Long_IDLE);
        this.loadImgCache(this.sharkie_SLEEPING);
        this.loadImgCache(this.sharkie_SWIM);
        this.loadImgCache(this.sharkie_POISENED);
        this.loadImgCache(this.sharkie_DEAD);
        this.loadImgCache(this.sharkie_DEAD_SURFACE);
        this.loadImgCache(this.sharkie_FIN_SLAP);
        this.loadImgCache(this.sharkie_Bubble_TRAP);
        this.animateObject(this.sharkie_IDLE, 100);
        this.setHitbox(100, 200, 1.9, 4);
    }

/**
   * This Function picks the needed Sprite-Array depending on the characters Status
   * When Character moves = [Swim-Array]
   * When Character doesn't move = [Idle-Array]
   * When Character doesn't move > 15 seconds = [sleep-Array]
   * It sets the active Character Movement to 60 FPS
   *
   */
  animateCharacterMovement() {
    clearInterval(this.characterMovementInterval);
    this.characterMovementInterval = setInterval(() => {
      this.moveCharacter(this.world.keyboard);
      if (this.isMoving !== this.lastIsMoving && !this.isAttacking && !this.isShooting) {
        this.lastIsMoving = this.isMoving;
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
   * This Function calls the actual Moveset from the Character
   *
   * @param {object} key - Object with the listened Keyboard Keys
   */
  moveCharacter(key) {
    this.moveUp(this.speedY, key);
    this.moveDown(this.speedY, key);
    this.moveRight(this.speedX, key);
    this.moveLeft(this.speedX, key);
    this.finSlap(key);
    this.negatefinSlapX();
    this.shootBubble(key);
    this.isMoving = key?.UP || key?.DOWN || key?.LEFT || key?.RIGHT;
  }

    /**
   * This function reduces the Y-Coordinate and let the Object move up
   * Returns either true, for Swim-Animation, or false for Idle-Animation
   *
   * @param {Number} speed - The px-value
   * @param {Object} key - Object with the listened Keyboard Keys
   */
  moveUp(speed, key) {
    if (key?.UP == true && this.y > -100) {
      this.y = this.y - speed;
    }
  }
  /**
   * This function raises the Y-Coordinate and let the Object move down
   * Returns either true, for Swim-Animation, or false for Idle-Animation
   *
   * @param {Number} speed - The px-value
   * @param {Object} key - Object with the listened Keyboard Keys
   */
  moveDown(speed, key) {
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
  moveRight(speed, key) {
    if (key?.RIGHT == true && this.x <= this.world.levelBorder ) {
      this.x += speed;
      this.setCharacterPositionLeft(speed);
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
  moveLeft(speed, key) {
    if (key?.LEFT == true && this.x > -100) {
      this.x -= speed;
      this.setCharacterPositionRight(speed);
      this.mirrorImage = true;
    }
  }

    /**
   * This Function negates the finSlapX-coordinate to have a proper detection if the character swims to the left, to hit an enemy
   *
   */
  negatefinSlapX() {
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
  isInsideSlapBorder(object) {
    return (
      this.x + this.finSlapX + this.finSlapHitboxWidth > object.x + object.hitboxX &&
      this.x + this.finSlapX < object.x + object.hitboxWidth &&
      this.y + this.hitboxY + this.hitboxHeight > object.y + object.hitboxY &&
      this.y + this.hitboxY < object.y + object.hitboxY + object.hitboxHeight
    );
  }


    /**
     * This Function calls the character sleep-Animation 
     * The Timer is set to 15 seconds until it starts the Animation
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
   * This Function decreases the targets life by 20
   * Calls poisened-Animation for 150 miliseconds, then goes over into animation-mode
   *
   * @param {Object} object - The Target that takes the Damage
   */
  damage(object) {
    this.hitted = true;
    object.life = object.life - 20;
    this.animateObjectSprite(this.sharkie_POISENED, 100);
    setTimeout(() => {
      this.applyCharacterMovement();
    }, 150);
    this.notHittedReset(500);
  }

  /**
   * Debounce-Method
   * This Function resets character hitted-state to false, when character is not hitted anymore
   * Reset is called after 500miliseconds
   *
   * @param {Number} miliseconds - Timer, when Function should be called
   */
  notHittedReset(miliseconds) {
    if (this.hitTimer) {
      clearTimeout(this.hitTimer);
    }
    this.hitTimer = setTimeout(() => {
      this.hitted = false;
      this.hitTimer = null;
    }, miliseconds);
  }

  /**
   * This Function wether chooses the Character Swim-Animation, or sleep-animation, depending on hiis moving-state
   *
   */
  applyCharacterMovement() {
    if (this.isMoving) {
      this.characterSwims();
    } else {
      this.characterFallAsleep();
    }
  }

  /**
   * This Function calls the dead Animation for Sharkie
   *
   */
  sharkieDieAnimation() {
    this.sharkieDies = setTimeout(() => {
      this.animateObjectSprite(this.sharkie_DEAD, 100);
      setTimeout(() => {
        this.animateObjectSprite(this.sharkie_DEAD_SURFACE, 300);
        this.dead = true;
      }, 200);
        this.deadToSurface(1)

    }, 100);
  }



    /**
     * This Function let the character attack with his fin.
     * During slap-animation the character cannot collect collectibles
     * 
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    finSlap(key){
            if (key?.SPACE === true && !this.slapCooldown && !this.hitted) {
                this.keyDetection = true
                this.slapCooldown = true
                this.isAttacking = true
                this.canCollect = false
                this.animateObjectSprite(this.sharkie_FIN_SLAP, 80)
                this.expandHitbox()
                this.stallCharacterAnimationBy(720)
                setTimeout(() => {
                this.hitboxWidth = 210
                }, 600);
                }  
                 if (!key?.SPACE) {
            this.keyDetection = false
        } 
    }
    
    shootBubble(key){
        if (key?.Q === true && !this.shootCooldown && !this.hitted && this.world.poisonbar.poisonCount.length > 0 && !this.keyDetection && !this.world.bubble) {
            key.Q = null
            this.keyDetection = true
            this.isShooting = true
            this.canCollect = false
            this.animateObjectSprite(this.sharkie_Bubble_TRAP, 80)
            this.createBubble(world.character)
            this.shootCoolDown(700)
        }
        if (!key?.Q) {
            this.keyDetection = false
        }
    }

    createBubble(character){
        setTimeout(() => {
            this.world.bubble = new Bubble('assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', character);
            this.shotBubble = true;
            this.decreasePoisonCount();
        }, 700);


    }

    decreasePoisonCount(){
        this.world.poisonbar.poisonCount.shift()
        this.world.poisonbar.updatePoisonbar()
    }

    shootCoolDown(miliseconds){
        setTimeout(() => {
          this.applyCharacterMovement();
          this.isShooting = false
          this.canCollect = true
        }, miliseconds);
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
          this.isAttacking = false
          this.canCollect = true
          this.slapCooldown = false
          this.doesDamage = false
        }, miliseconds);
    }

    /**
     * This Function increases Hitbox from character slighty
     * New Hitbox width 140px,  
     * 
     */
    expandHitbox(){
        this.oldHitBoxWidth = this.hitboxWidth
        setTimeout(() => {
          this.doesDamage = true
            this.hitboxWidth = this.hitboxSlap
            this.finSlapX = this.oldHitBoxWidth + this.hitboxX
            this.finSlapHitboxWidth = this.hitboxSlap - this.oldHitBoxWidth
                    }, 400);
    }




}