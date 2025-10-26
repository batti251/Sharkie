class Character extends MoveableObjects {
  currentImg = 0;
  width = 400;
  height = 400;
  world;
  maxLife = 500;
  life = this.maxLife;
  canCollect = true;
  hitted = false;
  fallAsleep;
  hitboxSlap = 260;
  hitboxReset = 120;
  shotBubble = false;

  sharkie_IDLE = [
    "assets/img/1.Sharkie/1.IDLE/1.png",
    "assets/img/1.Sharkie/1.IDLE/2.png",
    "assets/img/1.Sharkie/1.IDLE/3.png",
    "assets/img/1.Sharkie/1.IDLE/4.png",
    "assets/img/1.Sharkie/1.IDLE/5.png",
    "assets/img/1.Sharkie/1.IDLE/6.png",
    "assets/img/1.Sharkie/1.IDLE/7.png",
    "assets/img/1.Sharkie/1.IDLE/8.png",
    "assets/img/1.Sharkie/1.IDLE/9.png",
    "assets/img/1.Sharkie/1.IDLE/10.png",
    "assets/img/1.Sharkie/1.IDLE/11.png",
    "assets/img/1.Sharkie/1.IDLE/12.png",
    "assets/img/1.Sharkie/1.IDLE/13.png",
    "assets/img/1.Sharkie/1.IDLE/14.png",
    "assets/img/1.Sharkie/1.IDLE/15.png",
    "assets/img/1.Sharkie/1.IDLE/16.png",
    "assets/img/1.Sharkie/1.IDLE/17.png",
    "assets/img/1.Sharkie/1.IDLE/18.png",
  ];

  sharkie_SWIM = [
    "assets/img/1.Sharkie/3.Swim/1.png",
    "assets/img/1.Sharkie/3.Swim/2.png",
    "assets/img/1.Sharkie/3.Swim/3.png",
    "assets/img/1.Sharkie/3.Swim/4.png",
    "assets/img/1.Sharkie/3.Swim/5.png",
    "assets/img/1.Sharkie/3.Swim/6.png",
  ];

  sharkie_Long_IDLE = [
    "assets/img/1.Sharkie/2.Long_IDLE/i1.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I2.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I3.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I4.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I5.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I6.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I7.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I8.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I9.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I10.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I11.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I12.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I13.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  sharkie_SLEEPING = [
    "assets/img/1.Sharkie/2.Long_IDLE/I11.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I12.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I13.png",
    "assets/img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  sharkie_FIN_SLAP = [
    "assets/img/1.Sharkie/4.Attack/Fin slap/1.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/2.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/3.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/4.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/5.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/6.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/7.png",
    "assets/img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  sharkie_Bubble_TRAP = [
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  sharkie_POISENED = [
    "assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  sharkie_SHOCKED = [
    "assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  sharkie_DEAD = [
    "assets/img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  sharkie_DEAD_SURFACE = ["assets/img/1.Sharkie/6.dead/1.Poisoned/12.png"];

  constructor(path, x, y, world) {
    super();
    this.loadImg(path);
    this.abilities = new CharacterAbilities(this);
    this.movement = new CharacterMovement(this);
    this.swimAudio = AudioManager.register(new Audio("audio/swim.mp3"));
    this.finslapAudio = AudioManager.register(new Audio("audio/finslap.wav"));
    this.jellyHitAudio = AudioManager.register(new Audio("audio/electric-zap.wav"));
    this.regularHitAudio = AudioManager.register(new Audio("audio/hit.wav"));
    this.x = x;
    this.y = y;
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
    this.setHitbox(80, 200, 1.67, 4);
    this.checkCollectiblesCollisions();
    this.world = world;
  }

  /**
   * This Function detects collision from the character with the collectibles
   * If a collision is detected, it calls the fill-bar-function
   *
   */
  checkCollectiblesCollisions() {
    clearInterval(this.collectibleInterval);
    this.collectibleInterval = setStoppableInterval(() => {
      this.collectItemListener(this.world.level.poison);
      this.collectItemListener(this.world.level.coins);
    }, 1000/60);
  }

  /**
   * This Function listens to the character collision with an object
   *
   *
   * @param {*} collectibleObjects - the dedicated object  => coin or poison
   */
  collectItemListener(collectibleObjects) {
    collectibleObjects.forEach((obj) => {
      if (this.isInsideBorder(obj) && this.canCollect) {
        this.pickObjectType(obj);
      }
    });
  }

  /**
   * This Function picks the correct attributes, rather it is detected as COIN or as POISON
   * When the objects instance is COINS, it will adjust collectObject-function for coin-collection
   * When the objects instance is POISON, it will adjust collectObject-function for poison-collection
   *
   * @param {*} object - the dedicated object => coin or poison
   */
  pickObjectType(object) {
    if (this.isInsideBorder(object)) {
      object instanceof COINS
        ? this.collectObject(object, this.world.level.coins, this.world.coinbar)
        : this.collectObject(
            object,
            this.world.level.poison,
            this.world.poisonbar
          );
    }
  }

  /**
   * This Function fill the bar, depending of its object instance
   * When the objects instance is COINS, it will fill coinbar
   * When the objects instance is POISON, it will fill poisonbar
   * It removes the dedicated object from the level-array
   *
   * @param {*} object - the dedicated object => coin or poison
   * @param {*} array - the dedicated array of all the objects => coin or poison
   * @param {*} bar - the dedicated bar, to update the HUD-bar => coinbar or poisonbar
   */
  collectObject(object, array, bar) {
    array = array.filter((object) => !object.isCollected);
    object instanceof COINS
      ? bar.fillCoinbar(object)
      : bar.fillPoisonbar(object);
    object.collectAudio.play();
  }

  /**
   * This Function calls the character sleep-Animation
   * The Timer is set to 15 seconds until it starts the Animation
   *
   */
  characterFallAsleep() {
    clearTimeout(this.fallAsleep);
    this.animateObjectSprite(this.sharkie_IDLE, 100);
    this.fallAsleep = setStoppableTimeout(() => {
      this.animateObjectSprite(this.sharkie_Long_IDLE, 100);
      setStoppableTimeout(() => {
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
    damageDealer instanceof Jellyfish
      ? this.animateObjectSprite(this.sharkie_SHOCKED, 100)
      : this.animateObjectSprite(this.sharkie_POISENED, 100);
    setStoppableTimeout(() => {
      this.movement.applyCharacterMovement();
    }, 150);
    this.resetHittedState(1000);
  }

  /**
   * Debounce-Method
   * This Function resets character hitted-state to false, when character is not hitted anymore
   * Reset is called after 500miliseconds
   *
   * @param {Number} miliseconds - Timer, when Function should be called
   */
  resetHittedState(miliseconds) {
    if (this.hitTimeout) {
      clearTimeout(this.hitTimer);
    }
    this.hitTimeout = setStoppableTimeout(() => {
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
      this.sharkieDiesInterval = setStoppableTimeout(() => {
        this.animateObjectSprite(this.sharkie_DEAD, 80);
        setStoppableTimeout(() => {
          this.animateObjectSprite(this.sharkie_DEAD_SURFACE, 300);
          this.dead = true;
        }, 300);
        this.deadToSurface(1);
      }, 200);
    } else return;
  }
}
