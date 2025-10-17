class CharacterMovement{
speedX = 8;
speedY = 4;
isMoving = false;
lastIsMoving = true;

    constructor(character) {
       this.character = character
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
    this.characterMovementInterval = setStoppableInterval(() => {
      this.moveCharacter(this.character.world.keyboard);
      if (this.isMoving != this.lastIsMoving && !this.character.isAttacking && !this.character.isShooting) {
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
        this.character.animateObjectSprite(this.character.sharkie_SWIM, 100);
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
    this.character.abilities.finSlap(key);
    this.character.abilities.negatefinSlapX();
    this.character.abilities.shootBubble(key);
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
    if (key?.UP == true && this.character.y > -100) {
      this.character.y = this.character.y - speed;
    this.character.swimAudio.play()

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
    if (key?.DOWN == true && this.character.y < 680) {
      this.character.y = this.character.y + speed;
    this.character.swimAudio.play()

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
    if (key?.RIGHT == true && this.character.x <= this.character.world.levelBorder ) {
      this.character.x += speed;
      this.setCharacterPositionLeft(speed);
      this.character.mirrorImage = false;
    this.character.swimAudio.play()

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
    if (key?.LEFT == true && this.character.x > -100) {
      this.character.x -= speed;
      this.setCharacterPositionRight(speed);
      this.character.mirrorImage = true;
    this.character.swimAudio.play()

    }
  }

  
  /**
   * This Function wether chooses the Character Swim-Animation, or sleep-animation, depending on it's moving-state
   *
   */
  applyCharacterMovement() {
    if (this.isMoving) {
      this.characterSwims();
    } else {
      this.character.characterFallAsleep();
    }
  }


  
  /**
   * This Function moves the camera, so the character will be set left on the screen
   * If the character is not on the left screen, the camera will move slightly faster until the character is posiitioned on the left screen again
   *
   * @param {*} speed
   */
  setCharacterPositionLeft(speed) {
    if (this.character.world.cameraX + this.character.x > 0) {
      this.character.world.cameraX -= speed + 5;
    } else {
      this.character.world.cameraX -= speed;
    }
  }

    /**
   * This Function moves the camera, so the charactar will be set right on the screen
   * If the character is not on the right screen, the camera will move slightly faster until the character is positioned on the right screen again
   *
   * @param {*} speed
   */
  setCharacterPositionRight(speed) {
    if (this.character.world.cameraX + this.character.x < canvas.width - 500) {
      this.character.world.cameraX += speed + 5;
    } else {
      this.character.world.cameraX += speed;
    }
  }


}