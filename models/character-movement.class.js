class CharacterMovement {
  speedX = 8;
  speedY = 4;
  isMoving = false;
  lastIsMoving = true;

  constructor(character) {
    this.character = character;
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
      if (
        this.isMoving != this.lastIsMoving &&
        !this.character.isAttacking &&
        !this.character.isShooting
      ) {
        this.lastIsMoving = this.isMoving;
        this.applyCharacterMovement();
      }
    }, 1000 / 60);
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
   * This Function calls the character swim-Animation
   *
   */
  characterSwims() {
    this.character.animateObjectSprite(this.character.sharkie_SWIM, 100);
  }

  /**
   * This Function calls the Movesets and Abilities from the Character
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
      this.character.swimAudio.play();
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
      this.character.swimAudio.play();
    }
  }

  /**
   * This Function moves the character right, when Right-key is pressed
   * There are 3 different states:
   * character x-coordinate <= levelborder => the character moves regulary including moving the Camera (from the beginning until level-end)
   * character x-coordinate <= levelborder => the character moves regulary without moving Camera (at the end of the leven)
   * character x-coordinate >= levelborder + 1200 => barrier to prevent character from moving outside the level
   *
   * @param {Number} speed - The px-value
   * @param {Object} key - Object with the listened Keyboard Keys
   */
  moveRight(speed, key) {
    if (this.characterReachesExpandLevelEnd(key)) {
    } else if (this.characterMovesRegular(key)) {
      this.moveWithCameraRight(speed);
    } else if (this.characterMovesInBossArea(key)) {
      this.moveWithoutCameraRight(speed);
    }
  }

  /**
   * This Function checks, if the user reaches the expanded levelborder
   * ExpandLevelborder = world.levelborder +400
   * @param {*} key - Object with the listened Keyboard Keys
   * @returns - true or false, based on the condition
   */
  characterReachesExpandLevelEnd(key){
    return this.character.x >= this.character.world.levelBorder + 400
  } 

  /**
   * This Function checks, if the user is allowed to move right in the boss area
   * @param {*} key - Object with the listened Keyboard Keys
   * @returns - true or false, based on the condition
   */
  characterMovesInBossArea(key){
    return key?.RIGHT == true && this.character.x >= this.character.world.levelBorder
  }

  /**
   * This Function checks, if the user is allowed to move right, until to the levelborder
   * @param {*} key - Object with the listened Keyboard Keys
   * @returns - true or false, based on the condition
   */
  characterMovesRegular(key){
      return key?.RIGHT == true && this.character.x <= this.character.world.levelBorder
  }

  /**
   * This function raises the X-Coordinate and let the Object move right
   * It moves the Camera so the Character appears on the left side of the screen
   * It faces the character to the right
   * It plays the Swim-Audio
   * @param {Number} speed - The px-value
   */
  moveWithCameraRight(speed) {
    this.character.x += speed;
    this.setCharacterPositionLeft(speed);
    this.character.mirrorImage = false;
    this.character.swimAudio.play();
  }

  /**
   * This function raises the X-Coordinate and let the Object move right
   * It does not move the character, to imply the end of the Level
   * It faces the character to the right
   * It plays the Swim-Audio
   * @param {Number} speed - The px-value
   */
  moveWithoutCameraRight(speed) {
    this.character.x += speed;
    this.character.mirrorImage = false;
    this.character.swimAudio.play();
  }

  /**
   * This Function moves the character left, when LEFT-key is pressed and the characters x-coordinate is bigger than -100
   *
   * @param {Number} speed - The px-value
   * @param {Object} key - Object with the listened Keyboard Keys
   */
  moveLeft(speed, key) {
    if (key?.LEFT == true && this.character.x > -100) {
      this.moveWithCameraLeft(speed);
    } else if (this.characterReachesExpandLevelEnd(key)) {
    }
  }

  /**
   * This function decreases the X-Coordinate and let the Object move left
   * It moves the Camera so the Character appears on the right side of the screen
   * It faces the character to the left
   * It plays the Swim-Audio
   * @param {Number} speed - The px-value
   */
  moveWithCameraLeft(speed) {
    this.character.x -= speed;
    this.character.world.cameraX += speed;
    this.character.mirrorImage = true;
    this.character.swimAudio.play();
  }

  /**
   * This Function moves the camera, so the character will be set left on the screen
   * If the character is not on the left screen, the camera will move slightly faster until the character is positioned on the left screen again
   *
   * @param {*} speed
   */
  setCharacterPositionLeft(speed) {
    if (this.character.world.cameraX + this.character.x > 600) {
      this.character.world.cameraX -= speed + 10;
    } else {
      this.character.world.cameraX -= speed;
    }
  }

  /**
   * This Function moves the camera, so the charactar will be set right on the screen
   *
   * @param {*} speed
   */
  setCharacterPositionRight(speed) {
    if (
      this.character.world.cameraX + this.character.x <=
      canvas.width - 200
    ) {
      this.character.world.cameraX += speed + 10;
    } else {
      this.character.world.cameraX += speed;
    }
  }
}
