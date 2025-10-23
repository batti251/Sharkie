class CharacterAbilities {
  slapCooldown = false;
  slapCooldownTime = 1500;
  keyDetection = false;

  constructor(character) {
    this.character = character;
  }

  /**
   * This Function calls the finslap-attack
   * It checks, if the character is able to use the finslap-attack
   * It calls the Slap-Function if its true
   * It resets keyDetection after it, to allow another finslap-calling
   *
   * @param {Object} key - Object with the listened Keyboard Keys
   */
  finSlap(key) {
    if (this.userCanFinslap(key)) {
      this.characterSlaps()
    }
    if (!key?.SPACE) {
      this.keyDetection = false;
    }
  }

  /**
   * This Function calls the actual finslap-animation
   * It plays the according Slap-Audio
   * It sets certain States, to prevent unappropriate behavior
   * It calls the slap-animation
   * It expand the characters hitbox 
   * It resets characters animation after 720 miliseconds
   * It resets the characterhitbox
   */
  characterSlaps(){
    this.playSlapAudio()
    this.setFinslapState();
    this.character.animateObjectSprite(this.character.sharkie_FIN_SLAP, 80);
    this.expandHitbox();
    this.stallCharacterAnimationBy(720);
    setStoppableTimeout(() => {
      this.character.setHitbox(80, 200, 1.67, 4);
    }, 600);
  }

  /**
   * This function plays the Slap-Audio, after 300 miliseconds
   */
  playSlapAudio(){
    this.character.finslapTimer = setStoppableTimeout(() => {
    this.character.finslapAudio.play();
      }, 300);
  }

  /**
   * This Function checks if the User can Finslap
   * The Space-Key has to be triggered, the attack must not be on cooldown, character must not be hit
   * 
   * @param {*} key  - Object with the listened Keyboard Keys
   * @returns - returns either true or false, based on the conditions
   */
  userCanFinslap(key) {
    return key?.SPACE === true && !this.slapCooldown && !this.character.hitted;
  }

  /**
   * This Function sets certain states to prevent unappropriate behavior
   * Sets canCollect to false to prevent collecting during ShootingState
   * Sets isAttacking-State to prevent bugs in slap-animation
   * It has a key-detection, to avoid multiple slaps being executed, when key.SPACE is pressed for longer time
   */
  setFinslapState() {
    this.keyDetection = true;
    this.slapCooldown = true;
    this.character.isAttacking = true;
    this.character.canCollect = false;
  }

  /**
   * This Function lets the character shoot a bubble, userCanShoot-condition is true
   * It has a cooldown of 700miliseconds, until the character can shoot again
   * The character can only shoot, when poisonCount is > 0
   *
   * @param {*} key - the key-events
   */
  shootBubble(key) {
    if (this.userCanShoot(key)) {
      this.setShootingState(key);
      this.character.animateObjectSprite(
        this.character.sharkie_Bubble_TRAP,
        80
      );
      this.createBubble(world.character);
      this.shootCoolDown(700, key);
    }
  }

  /**
   * This Function sets certain states to prevent unappropriate behavior
   * Sets canCollect to false to prevent collecting during ShootingState
   * Sets isShooting-State to prevent bugs in shooting-animation
   * It has a key-detection, to avoid multiple bubbles being shot, when key.Q is pressed for longer time
   * @param {*} key  - the key-events
   */
  setShootingState(key) {
    key.Q = null;
    this.keyDetection = true;
    this.character.isShooting = true;
    this.character.canCollect = false;
  }

  /**
   * This Function checks if a bubble can be shoot.
   * Therefore the Q-Key has to be triggered, the character must not be hitted and a poison must be collected before
   * It cannot appear multiple bubbles
   *
   * @param {*} key - the key-events
   * @returns - returns either true or false, based on the conditions
   */
  userCanShoot(key) {
    return (
      key?.Q === true &&
      !this.hitted &&
      this.character.world.poisonbar.poisonCount.length > 0 &&
      !this.keyDetection &&
      !this.character.world.bubble
    );
  }

  /**
   * This Function creates a new Bubble-Object after short delay, to match the animation
   * It decreases the poisonCount by 1
   * @param {*} character - The Character, to set the bubble-position
   */
  createBubble(character) {
    setStoppableTimeout(() => {
      character.world.bubble = new Bubble(
        "assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png",
        character
      );
      this.shotBubble = true;
      this.decreasePoisonCount();
    }, 700);
  }

  /**
   * This Function decreases the poisonCount by 1
   * It updates the poisonbar
   *
   */
  decreasePoisonCount() {
    this.character.world.poisonbar.poisonCount.shift();
    this.character.world.poisonbar.updatePoisonbar();
  }

  /**
   * This Function calls CharacterMovement after short delay to grant smooth movement-transition after shooting
   * It works as Cooldown for collection and key.Q-listener
   *
   * @param {*} miliseconds - Timer, when Function should be called
   * @param {*} key - the key-events
   */
  shootCoolDown(miliseconds, key) {
    setStoppableTimeout(() => {
      this.character.movement.applyCharacterMovement();
      this.character.isShooting = false;
      this.character.canCollect = true;
      if (!key?.Q) {
        this.keyDetection = false;
      }
    }, miliseconds);
  }

  /**
   * This Function calls CharacterMovement after short delay to grant smooth movement-transition after slap
   * It works as Cooldown for collection and key.SPACE-listener
   * It resets all States, that where set before
   * @param {Number} miliseconds - Timer, when Function should be called
   */
  stallCharacterAnimationBy(miliseconds) {
    setStoppableTimeout(() => {
      this.character.movement.applyCharacterMovement();
      this.character.isAttacking = false;
      this.character.canCollect = true;
      this.slapCooldown = false;
      this.character.doesDamage = false;
    }, miliseconds);
  }

  /**
   * This Function increases Hitbox from character slighty
   * This is needed, to have a proper collision-detection, when character slaps with his fin
   * It has a delay of 400miliseconds, until the hitbox is expanded, to match the animation
   * It sets the finSlapX and finSlapHitboxWidth for proper collision-detection
   * It sets doesDamage to true, to indicate that the character can deal damage
   *
   */
  expandHitbox() {
    this.character.oldHitBoxWidth = this.character.hitboxWidth;
    setStoppableTimeout(() => {
      this.character.doesDamage = true;
      this.character.hitboxWidth = this.character.hitboxSlap;
      this.character.finSlapX = this.character.oldHitBoxWidth + this.character.hitboxX;
      this.character.finSlapHitboxWidth = this.character.hitboxSlap - this.character.oldHitBoxWidth;
    }, 400);
  }

  /**
   * This Function negates the finSlapX-coordinate to have a proper detection if the character swims to the left, to hit an enemy
   *
   */
  negatefinSlapX() {
    if (this.character.mirrorImage) {
      this.character.finSlapX =
        this.character.hitboxX - this.character.finSlapHitboxWidth;
    } else {
      this.character.finSlapX =
        this.character.hitboxX + this.character.hitboxWidth;
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
      this.character.x + this.character.finSlapX + this.character.finSlapHitboxWidth > object.x + object.hitboxX &&
      this.character.x + this.character.finSlapX < object.x + object.hitboxWidth &&
      this.character.y + this.character.hitboxY + this.character.hitboxHeight > object.y + object.hitboxY &&
      this.character.y + this.character.hitboxY < object.y + object.hitboxY + object.hitboxHeight
    );
  }
}
