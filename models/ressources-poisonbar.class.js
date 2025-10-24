class Poisonbar extends GameObjects {
  x = 650;
  y = -20;
  width = 300;
  height = 80;
  maxPoison;
  poisonCount = [];
  collectedPoisonPercentage;
  poisonbarCache = [
    "assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
    "assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
    "assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
    "assets/img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
    "assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
    "assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png",
  ];

  constructor(path, world) {
    super();
    this.loadImg(path);
    this.loadImgCache(this.poisonbarCache);
    this.world = world;
  }

  /**
   * This Function updates the character Poisonbar
   * It pushes all collected poison-potions into an array-collector
   *
   * @param {Object} poison - the collected poison-object
   */
  fillPoisonbar(poison) {
    this.poisonCount.push(poison);
    poison.x = -1000;
    poison.y = -1000;
    this.updatePoisonbar();
  }

  /**
   * This Function updates the Coinbar, depending on the current amount of collected coins
   *
   */
  updatePoisonbar() {
    this.maxPoison = world.level.poison.length;
    let collectedPoisonPercentage = this.poisonCount.length / this.maxPoison;
    let updatedBar = this.poisonbarCache[0];
    if (collectedPoisonPercentage >= 0.2) updatedBar = this.poisonbarCache[1];
    if (collectedPoisonPercentage >= 0.4) updatedBar = this.poisonbarCache[2];
    if (collectedPoisonPercentage >= 0.6) updatedBar = this.poisonbarCache[3];
    if (collectedPoisonPercentage >= 0.8) updatedBar = this.poisonbarCache[4];
    if (collectedPoisonPercentage >= 1.0) updatedBar = this.poisonbarCache[5];
    this.loadImg(updatedBar);
  }
}
