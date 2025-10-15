class CharacterAbilities{
slapCooldown = false
slapCooldownTime = 1500;
keyDetection = false;

    constructor(character) {
       this.character = character
    }


    /**
     * This Function let the character attack with his fin.
     * During slap-animation the character cannot collect collectibles
     * It has a cooldown of 1500miliseconds, until the character can slap again
     * It has a key-detection, to avoid multiple slaps being executed, when key.SPACE is pressed for longer time
     * 
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    finSlap(key){
            if (key?.SPACE === true && !this.slapCooldown && !this.character.hitted) {
              this.character.finslapTimer = setTimeout(() => {
                this.character.finslapAudio.play();
              }, 300);
                this.keyDetection = true
                this.slapCooldown = true
                this.character.isAttacking = true
                this.character.canCollect = false
                this.character.animateObjectSprite(this.character.sharkie_FIN_SLAP, 80)
                this.expandHitbox()
                this.stallCharacterAnimationBy(720)
                setTimeout(() => {
                this.character.hitboxWidth = 210
                }, 600);
                }  
                 if (!key?.SPACE) {
            this.keyDetection = false
        } 
    }
    
    /**
     * This Function lets the character shoot a bubble, when key.Q is pressed
     * During shoot-animation the character cannot collect collectibles
     * It has a cooldown of 700miliseconds, until the character can shoot again
     * The character can only shoot, when poisonCount is > 0
     * It has a key-detection, to avoid multiple bubbles being shot, when key.Q is pressed for longer time
     * 
     * @param {*} key 
     */
    shootBubble(key){
        if (key?.Q === true && !this.shootCooldown && !this.hitted && this.world.poisonbar.poisonCount.length > 0 && !this.keyDetection && !this.world.bubble) {
            key.Q = null
            this.keyDetection = true
            this.character.isShooting = true
            this.character.canCollect = false
            this.character.animateObjectSprite(this.character.sharkie_Bubble_TRAP, 80)
            this.createBubble(world.character)
            this.shootCoolDown(700)
        }
        if (!key?.Q) {
            this.keyDetection = false
        }
    }

    /**
     * This Function creates a new Bubble-Object after short delay, to match the animation
     * It decreases the poisonCount by 1
     * @param {*} character - The Character, to set the bubble-position
     */
    createBubble(character){
        setTimeout(() => {
            this.character.world.bubble = new Bubble('assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', character);
            this.shotBubble = true;
            this.decreasePoisonCount();
        }, 700);
    }

    /**
     * This Function decreases the poisonCount by 1
     * It updates the poisonbar
     * 
     */
    decreasePoisonCount(){
        this.character.world.poisonbar.poisonCount.shift()
        this.character.world.poisonbar.updatePoisonbar()
    }

    /**
     * This Function calls CharacterMovement after short delay to grant smooth movement-transition after shooting
     * It works as Cooldown for collection and key.Q-listener
     * 
     * @param {*} miliseconds - Timer, when Function should be called
     */
    shootCoolDown(miliseconds){
        setTimeout(() => {
          this.character.applyCharacterMovement();
          this.character.isShooting = false
          this.character.canCollect = true
        }, miliseconds);
    }

    /**
     * This Function calls CharacterMovement after short delay to grant smooth movement-transition after slap
     * It works as Cooldown for collection and key.SPACE-listener
     * 
     * @param {Number} miliseconds - Timer, when Function should be called 
     */
    stallCharacterAnimationBy(miliseconds){
        setTimeout(() => {
          this.character.movement.applyCharacterMovement();
          this.character.isAttacking = false
          this.character.canCollect = true
          this.slapCooldown = false
          this.character.doesDamage = false
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
    expandHitbox(){
        this.character.oldHitBoxWidth = this.character.hitboxWidth
        setTimeout(() => {
          this.character.doesDamage = true
            this.character.hitboxWidth = this.character.hitboxSlap
            this.character.finSlapX = this.character.oldHitBoxWidth + this.character.hitboxX
            this.character.finSlapHitboxWidth = this.character.hitboxSlap - this.character.oldHitBoxWidth
                    }, 400);
    }



    /**
   * This Function negates the finSlapX-coordinate to have a proper detection if the character swims to the left, to hit an enemy
   *
   */
  negatefinSlapX() {
    if (this.character.mirrorImage) {
      this.character.finSlapX = this.character.hitboxX - this.character.finSlapHitboxWidth;
    } else {
      this.character.finSlapX = this.character.hitboxX + this.character.hitboxWidth;
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