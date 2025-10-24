class Jellyfish extends Enemies {
  damage = 40;
  type;
  jellyfish_IDLE;
  speedY = 0.6;
  speedX = 0.25;

  constructor(path, type, x) {
    super();
    this.loadImg(path);
    this.type = type;
    this.x = x;
    this.buildJellyfish(this.type);
    this.loadImgCache(this.jellyfish_IDLE);
    this.loadImgCache(this.jellyfish_DEAD);
    this.animateObject(this.jellyfish_IDLE, 100);
    this.enemyMinionMovement(this.speedX, this.speedY);
    this.y = Math.floor(Math.random() * 200) + 200;
    this.width = Math.floor(Math.random() * 100) + 60;
    this.speedX = Math.floor(Math.random() * 2) + this.speedX;
    this.height = this.width *1.5;
    this.setHitbox(10, 8, 1.2, 1.2);
  }

  /**
   * This Function builds the Jellyfish-IDLE, according to its defined type
   *
   * @param {Number} type - the defined type: (1,2,3,4) represents a specific color for the jellyfish
   *                         1: green Jellyfish
   *                         2: pink Jellyfish
   *                         3: lila Jellyfish, sets damage to 80 additionaly
   *                         4: yellow Jellyfish, sets damage to 80 additionaly
   */
  buildJellyfish(type) {
    switch (type) {
      case 1:
        this.buildJellyfishTypeOne();
        break;
      case 2:
        this.buildJellyfishtypeTwo();
        break;
      case 3:
        this.buildJellyfishTypeThree();
        break;
      case 4:
        this.buildJellyfishTypeFour();
        break;
      default:
        break;
    }
  }

  /**
   * This Function builds the green jellyfish
   * It sets the according IDLE and DEAD Array into Img-Cache
   * The Jellyfish has a Damage-Value of 80
   */
  buildJellyfishTypeOne() {
    this.jellyfish_IDLE = this.buildJellyGreenIDLE();
    this.jellyfish_DEAD = this.buildJellyGreen_DEAD();
    this.damage = 80;
  }

  /**
   * This Function builds the pink jellyfish
   * It sets the according IDLE and DEAD Array into Img-Cache
   * The Jellyfish has a Damage-Value of 80
   */
  buildJellyfishtypeTwo() {
    this.jellyfish_IDLE = this.buildJellyPinkIDLE();
    this.jellyfish_DEAD = this.buildJellyPink_DEAD();
    this.damage = 80;
  }

  /**
   * This Function builds the lila jellyfish
   * It sets the according IDLE and DEAD Array into Img-Cache
   */
  buildJellyfishTypeThree() {
    this.jellyfish_IDLE = this.buildJellyLilaIDLE();
    this.jellyfish_DEAD = this.buildJellyLila_DEAD();
  }

  /**
   * This Function builds the yellow jellyfish
   * It sets the according IDLE and DEAD Array into Img-Cache
   */
  buildJellyfishTypeFour() {
    this.jellyfish_IDLE = this.buildJellyYellowIDLE();
    this.jellyfish_DEAD = this.buildJellyYellow_DEAD();
  }

  /**
   * This Function calls the Dead(bubbled)-Animation
   * It sets the according IDLE and DEAD Array into Img-Cache
   * It is called, when the Jelly was hit by a bubble
   */
  jellyfishDeadAnimation() {
    this.animateObjectSprite(this.jellyfish_DEAD, 100);
    this.angry = false;
    clearInterval(this.randomCoordinateYInterval);
    clearInterval(this.randomTurnInterval);
    clearInterval(this.resetIntervalX);
    this.deadToSurface(1);
  }

  /**
   * This Function builds the IDLE-Array for Jellyfish, according to its defined type 1
   *
   * @returns - returns lila Jellyfish Array
   */
  buildJellyLilaIDLE() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png`,
    ];
  }

  /**
   * This Function builds the IDLE-Array for Jellyfish, according to its defined type 2
   *
   * @returns - returns yellow Jellyfish Array
   */
  buildJellyYellowIDLE() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png`,
    ];
  }

  /**
   * This Function builds the IDLE-Array for Jellyfish, according to its defined type 3
   *
   * @returns - returns green Jellyfish Array
   */
  buildJellyGreenIDLE() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png`,
    ];
  }

  /**
   * This Function builds the IDLE-Array for Jellyfish, according to its defined type 4
   *
   * @returns - returns pink Jellyfish Array
   */
  buildJellyPinkIDLE() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png`,
    ];
  }

  /**
   * This Function builds the DEAD-Array for Jellyfish, according to its defined type 1
   *
   * @returns - returns lila Jellyfish-dead Array
   */
  buildJellyLila_DEAD() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png`,
    ];
  }

  /**
   * This Function builds the DEAD-Array for Jellyfish, according to its defined type 2
   *
   * @returns - returns yellow Jellyfish-dead Array
   */
  buildJellyYellow_DEAD() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png`,
    ];
  }

  /**
   * This Function builds the DEAD-Array for Jellyfish, according to its defined type 3
   *
   * @returns - returns green Jellyfish-dead Array
   */
  buildJellyGreen_DEAD() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Dead/green/g1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/green/g2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/green/g3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/green/g4.png`,
    ];
  }

  /**
   * This Function builds the DEAD-Array for Jellyfish, according to its defined type 4
   *
   * @returns - returns pink Jellyfish-dead Array
   */
  buildJellyPink_DEAD() {
    return [
      `assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png`,
      `assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png`,
    ];
  }
}
