class Endboss extends Enemies {
  life = 200;
  damage = 100;
  height = 500;
  width = 500;
  y = 100;
  bossAttackOnCooldown = true;
  boss = true;
  endboss_INTRODUCE = [
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  endboss_FLOATING = [
    "assets/img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "assets/img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  endboss_ATTACK = [
    "assets/img/2.Enemy/3 Final Enemy/Attack/1.png",
    "assets/img/2.Enemy/3 Final Enemy/Attack/2.png",
    "assets/img/2.Enemy/3 Final Enemy/Attack/3.png",
    "assets/img/2.Enemy/3 Final Enemy/Attack/4.png",
    "assets/img/2.Enemy/3 Final Enemy/Attack/5.png",
    "assets/img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  endboss_HURT = [
    "assets/img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "assets/img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "assets/img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "assets/img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  endboss_DEAD = [
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  endboss_DEAD_SURFACE = [
    "assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor(path, x) {
    super();
    this.loadImg(path);
    this.loadImgCache(this.endboss_INTRODUCE);
    this.loadImgCache(this.endboss_FLOATING);
    this.loadImgCache(this.endboss_ATTACK);
    this.loadImgCache(this.endboss_HURT);
    this.loadImgCache(this.endboss_DEAD);
    this.x = x;
    this.setHitbox(40, 270, 1.2, 3.5);
    this.bossEntranceAudio = AudioManager.register(new Audio("audio/boss-entrance.mp3"));
    this.bossBiteAudio = AudioManager.register(new Audio("audio/boss-bite.wav"));
  }

  /**
   * This Function calculates its position compared to the characters position
   * Each second it will refresh the conditions of x and y from the Boss compared to the character and retarget the character
   * This gives the Boss a complete Moveset always aiming the character, no matter where the character is 
   */
  bossFocus(){
    setStoppableInterval(() => {
      let characterPositionX = world.character.x
      let characterPositionY = world.character.y
      this.x < characterPositionX ? this.enemyRight(4) : this.enemyLeft(4);
      this.y < characterPositionY ? this.moveDown(2) : this.moveUp(2)
    },1000)
  }

  /**
   * This Function let the boss appear on the screen
   * It sets its Attack on cooldown, to prevent Introduce-Animation-Cancelling
   * It spawns 1000px additionally from the set levelEnd
   * It plays the boss Entrance Audio
   */
  bossSpawn() {
    this.bossEntranceAudio.play();
    this.bossAttackCooldown();
    this.endbossEntrance();
    this.x = world.levelEnd + 1000;
    this.bossFocus()
  }

  /**
   * This function plays the Boss-Entrance-Animation once at the beginning of the level
   * It sets a Timeout to start the floating-Animation after the entrance is finished
   * It plays a specific Audio when the floating-Animation starts
   * It clears the bossEntranceInterval to avoid multiple calls
   *
   */
  endbossEntrance() {
    clearTimeout(this.bossEntranceTimeout);
    this.animateObject(this.endboss_INTRODUCE, 120);
    this.bossEntranceTimeout = setStoppableTimeout(() => {
      this.animateObject(this.endboss_FLOATING, 200);
    }, 1000);
  }

  /**
   * This function plays the Boss-Death-Animation, when life is 0 or below
   * It sets the dead-Property to true, to avoid further interactions with the Boss
   * It calls the deadToSurface-Function to let the Boss float to the surface
   * It sets the bossFinished-Property in level to true, to end the level
   * It clears all Intervals and Timeouts, to avoid further movements or actions of the Boss
   */
  bossDieAnimation() {
    clearTimeout(this.bossDies);
    this.bossDies = setStoppableTimeout(() => {
      this.animateObjectSprite(this.endboss_DEAD, 100);
      setStoppableTimeout(() => {
        this.animateObjectSprite(this.endboss_DEAD_SURFACE, 300);
        this.setBossDeathState();
      }, 500);
      this.deadToSurface(1);
    }, 100);
  }

  /**
   * This function lets the Boss float to the surface when he dies
   * It sets the dead-Property to true, to avoid further interactions with the Boss
   * It sets the bossFinished-Property in level to true, to end the level
   */
  setBossDeathState() {
    this.dead = true;
    this.angry = false;
    world.level.bossFinished = true;
  }

  /**
   * This function reduces the life of the Boss by 50, when he gets hit
   * It calls the bossKnockback-Function to let him move back a bit
   * It plays the hurt-Animation and after short delay the floating-Animation again
   */
  bossDamage() {
    this.life -= 50;
    this.bossKnockback();
    this.animateObjectSprite(this.endboss_HURT, 100);
    this.floatTimeout = setStoppableTimeout(() => {
      this.animateObjectSprite(this.endboss_FLOATING, 200);
      clearInterval(this.knockbackInterval);
    }, 500);
    if (this.life <= 0) {
      clearTimeout(this.floatTimeout)
       this.bossDieAnimation()
      }
  }

  /**
   * This function let the Boss move back when he gets hit
   *
   */
  bossKnockback() {
    this.knockbackInterval = setStoppableInterval(() => {
      this.x += 10;
    }, 1000 / 60);
  }

  /**
   * This function let the Boss dash to the left when he attacks
   */
  bossDash() {
    this.dashInterval = setStoppableInterval(() => {
    this.mirrorImage ? this.x += 5 : this.x -= 5;
    }, 1000 / 60);
  }

  /**
   * This Function calls the Boss-Attack, when not on Cooldown
   * It has a debounce-method, to avoid multiple calls
   * @returns - returns, when bossAttackOnCooldown is true
   */
  bossAttack() {
    if (!this.bossAttackOnCooldown) {
      clearTimeout(this.cooldownTimeout);
      this.setBossAttackState();
      this.bossAttackAnimation();
      this.bossDash();
      this.bossAttackCooldown();
      this.playSound(this.bossBiteAudio, 400);
    }
  }

  /**
   * This Function sets the Boss-Attack-State to true
   * It is used to avoid multiple Attacks, when Boss is already attacking
   * It is reset after the cooldown-Time in the bossAttackCooldown-Function
   */
  setBossAttackState() {
    this.bossAttackOnCooldown = true;
    this.isAttacking = true;
  }

  /**
   * This Function resets the Boss-Attack-State to false
   * It is called after the cooldown-Time in the bossAttackCooldown-Function
   */
  removeBossAttackState() {
    this.bossAttackOnCooldown = false;
    this.isAttacking = false;
  }

  /**
   * This Function plays a specific Audio after a defined time
   *
   * @param {*} audio - the specific Audio
   * @param {*} time - time in miliseconds, when Audio should be played
   */
  playSound(audio, time) {
    this.biteTimeout = setStoppableTimeout(() => {
      audio.play();
    }, time);
  }

  /**
   * This Function calls the Boss-Attack-Animation
   * After short delay the floating-Animation is called again
   * It clears the dash-Interval
   */
  bossAttackAnimation() {
    this.animateObjectSprite(this.endboss_ATTACK, 100);
    setStoppableTimeout(() => {
      this.animateObjectSprite(this.endboss_FLOATING, 200);
      clearInterval(this.dashInterval);
    }, 600);
  }

  /**
   * This Function sets a cooldown for the Boss-Attack
   * After 5 seconds the Boss attacks again
   * It has a debounce-method, to avoid multiple calls
   * @returns - returns, when cooldownTimeout is already set
   */
  bossAttackCooldown() {
    clearTimeout(this.cooldownTimeout);
    this.cooldownTimeout = setStoppableTimeout(() => {
      this.removeBossAttackState();
    }, 2000);
  }

  /**
   * This Function clears all Intervals and Timeouts, when game is over
   * This avoids multiple Intervals running in the background, when game is restarted
   */
  clearBossIntervalls() {
    clearInterval(this.knockbackInterval);
    clearInterval(this.dashInterval);
    clearTimeout(this.cooldownTimeout);
    clearTimeout(this.bossDies);
    clearTimeout(this.biteInterval);
    clearInterval(this.randomCoordinateYInterval);
    clearInterval(this.randomTurnInterval);
    clearInterval(this.resetIntervalX);
    clearInterval(this.resetIntervalY);
    clearTimeout(this.bossEntranceInterval);
    clearTimeout(this.bossDies);
    clearTimeout(this.bossEntranceInterval);
    clearTimeout(this.biteInterval);
    clearTimeout(this.cooldownTimeout);
    clearTimeout(this.bossDies);
    clearTimeout(this.biteInterval);
  }
}
