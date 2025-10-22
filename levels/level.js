class Level {
  levelLength;
  xStart = -1859;
  x1Start = -1080;
  multiplicator = 1559;
  enemyMultiplicator = 5;
  background = [
    new Background(
      "assets/img/3. Background/Layers/5. Water/L1.png",
      this.xStart,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/4.Fondo 2/L1.png",
      this.xStart,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/3.Fondo 1/L1.png",
      this.xStart,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/2. Floor/L1.png",
      this.xStart,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/1. Light/1.png",
      this.xStart,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/5. Water/L2.png",
      this.x1Start,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/4.Fondo 2/L2.png",
      this.x1Start,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/3.Fondo 1/L2.png",
      this.x1Start,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/2. Floor/L2.png",
      this.x1Start,
      0
    ),
    new Background(
      "assets/img/3. Background/Layers/1. Light/2.png",
      this.x1Start,
      0
    ),
  ];
  enemies = [];
  coins = [];
  poison = [];

  constructor(level) {
    this.levelLength = level;
    this.x = this.xStart + this.multiplicator;
    this.x1 = this.x1Start + this.multiplicator;
    this.generateLevelObjects();
    this.setBackgroundAudio();
    this.victoryAudio = AudioManager.register(new Audio("audio/victory.wav"));
    this.defeatAudio = AudioManager.register(new Audio("audio/defeat.wav"));
  }

  /**
   * This Function sets the background Audio to the Level
   * Its volume is preset to 40%
   * Different to other Audio, this Audio is looped.
   */
  setBackgroundAudio() {
    this.backgroundAudio = AudioManager.register(new Audio("audio/ocean.wav"));
    this.backgroundAudio.volume = 0.4;
    this.backgroundAudio.loop = true;
    this.backgroundAudio.play();
  }

  /**
   * This Function generates all level-oriented Objects for the Level
   * It generates Pufferfish, Jellyfish, Coins, Poison and the Background
   *
   */
  generateLevelObjects() {
    this.generateBackground();
    this.generatePufferfish();
    this.generateJellyfish();
    this.generateCoins();
    this.generatePoison();
  }

  /**
   * This Function generates the Background for the level
   * Depending on the defined level-length the amount of background-frames will be lined up next to each other
   *
   */
  generateBackground() {
    for (let index = 0; index < this.levelLength + 2; index++) {
      this.backgroundTemplate = this.setBackgroundFrame();
      this.backgroundTemplate.forEach((layer) => this.background.push(layer));
      this.increaseBackgroundX();
    }
  }

  /**
   * This returns 1 whole background-frame
   *
   * @returns returns the Array with all needed background-image-paths
   */
  setBackgroundFrame() {
    return [
      new Background(
        "assets/img/3. Background/Layers/5. Water/L1.png",
        this.x,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/4.Fondo 2/L1.png",
        this.x,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/3.Fondo 1/L1.png",
        this.x,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/2. Floor/L1.png",
        this.x,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/1. Light/1.png",
        this.x,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/5. Water/L2.png",
        this.x1,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/4.Fondo 2/L2.png",
        this.x1,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/3.Fondo 1/L2.png",
        this.x1,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/2. Floor/L2.png",
        this.x1,
        0
      ),
      new Background(
        "assets/img/3. Background/Layers/1. Light/2.png",
        this.x1,
        0
      ),
    ];
  }

  /**
   * This Function increases the x-coordinate of both background-frames, to enable a fluent background-generation
   *
   */
  increaseBackgroundX() {
    this.x = this.x += this.multiplicator;
    this.x1 = this.x1 += this.multiplicator;
  }

  /**
   * This Function generates the Pufferfishes for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Pufferfish
   *
   */
  generatePufferfish() {
    this.levelFactor = this.levelLength * this.enemyMultiplicator;
    for (let index = 0; index < this.levelFactor; index++) {
      this.setRandomTypes();
      this.setRandomPosition();
      this.enemies.push(
        new Pufferfish(
          `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`,
          this.randomPufferType,
          this.randomXPosition
        )
      );
    }
  }

  /**
   * This Function generates the Jellyfishes for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Jellyfish
   *
   */
  generateJellyfish() {
    this.levelFactor = this.levelLength * this.enemyMultiplicator;
    for (let index = 0; index < this.levelFactor; index++) {
      this.setRandomTypes();
      this.setRandomPosition();
      this.enemies.push(
        new Jellyfish(
          `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,
          this.randomJellyType,
          this.randomXPosition
        )
      );
    }
  }

  /**
   * This Function generates the collectible Coins for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Coin
   *
   */
  generateCoins() {
    this.levelFactor = this.levelLength * this.enemyMultiplicator;
    for (let index = 0; index < this.levelFactor; index++) {
      this.setRandomPosition();
      this.coins.push(
        new COINS(
          `assets/img/4. Marcadores/1. Coins/1.png`,
          this.randomXPosition
        )
      );
    }
  }

  /**
   * This Function generates the collectible Poisons for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Poison
   *
   */
  generatePoison() {
    this.levelFactor = this.levelLength * this.enemyMultiplicator;
    for (let index = 0; index < this.levelFactor; index++) {
      this.setRandomPosition();
      this.poison.push(
        new POISONS(
          `assets/img/4. Marcadores/Posión/Animada/1.png`,
          this.randomXPosition
        )
      );
    }
  }

  /**
   * This Function sets a random Number-type-indicator for Jelly- and Pufferfish
   * For Jellyfish between 1-4 ; for Pufferfish between 1-3
   *
   */
  setRandomTypes() {
    this.randomJellyType = Math.floor(Math.random() * 4) + 1;
    this.randomPufferType = Math.floor(Math.random() * 3) + 1;
  }

  /**
   * This function sets a random x-value for collectibles and enemies
   */
  setRandomPosition() {
    this.randomXPosition = Math.floor(Math.random() * (this.x - 2600)) + 800;
  }
}
