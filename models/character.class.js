class Character extends MoveableObjects{
currentImg = 0
width = 400;
height = 400;
world;
maxLife = 1000;
life = this.maxLife;
canCollect = true;
hitted = false;
fallAsleep;
hitboxSlap = 240;
hitboxReset = 120;
shotBubble = false


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

sharkie_SHOCKED = [
  'assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
  'assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
  'assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
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
        super()
        this.loadImg(path);
        this.abilities =  new CharacterAbilities(this);
        this.movement = new CharacterMovement(this);
      this.swimAudio = new Audio('audio/swim.mp3'); 
      this.finslapAudio = new Audio('audio/finslap.wav');
      this.jellyHitAudio = new Audio('audio/electric-zap.wav');
      this.regularHitAudio = new Audio('audio/hit.wav');
      this.x = x 
        this.y = y
        this.loadImgCache(this.sharkie_IDLE);
        this.loadImgCache(this.sharkie_Long_IDLE);
        this.loadImgCache(this.sharkie_SLEEPING);
        this.loadImgCache(this.sharkie_SWIM);
        this.loadImgCache(this.sharkie_POISENED);
        this.loadImgCache(this.sharkie_SHOCKED);
        this.loadImgCache(this.sharkie_DEAD);
        this.loadImgCache(this.sharkie_DEAD_SURFACE);
        this.loadImgCache(this.sharkie_FIN_SLAP);
        this.loadImgCache(this.sharkie_Bubble_TRAP);
        this.animateObject(this.sharkie_IDLE, 100);
        this.setHitbox(100, 200, 1.9, 4);
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
   * This Function decreases the characters life by 20
   * When hit by Jellyfish character-shocked-Animation runs for 150miliseconds
   * Else poisened-Animation is called, then turns into IDLE-mode
   *
   * @param {Object} defender - The Target that takes the Damage
   */
  damage(defender, damageDealer) {
    this.hitted = true;
    defender.life = defender.life - 20;
    (damageDealer instanceof Jellyfish)? this.animateObjectSprite(this.sharkie_SHOCKED, 100):this.animateObjectSprite(this.sharkie_POISENED, 100)
    setTimeout(() => {
      this.movement.applyCharacterMovement();
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
   * This Function calls the dead Animation for Sharkie
   * After short delay the dead-to-surface-Function is called
   * It also has a debounce-method, to avoid multiple calls
   * @returns - returns, when sharkieDiesInterval is already set
   *
   */
  sharkieDieAnimation() {
    if (!this.sharkieDiesInterval) {
    this.sharkieDiesInterval = setTimeout(() => {
      this.animateObjectSprite(this.sharkie_DEAD, 80);
      setTimeout(() => {
        this.animateObjectSprite(this.sharkie_DEAD_SURFACE, 300);
        this.dead = true;
      }, 300);
        this.deadToSurface(1)
    }, 200)
    } else 
      return
    }
    


    /**
     * This Function clears all Intervals and Timeouts, when game is over
     * This avoids multiple Intervals running in the background, when game is restarted
     * 
     */
    clearCharacterIntervals(){
        clearInterval(this.characterMovementInterval)
        clearTimeout(this.hitTimer)
        clearTimeout(this.fallAsleep)
        clearTimeout(this.finslapTimer)
    }
}