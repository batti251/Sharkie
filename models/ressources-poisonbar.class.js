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
    this.setPoisonbarIndicator();
  }

  /**
   * This Function updates the Coinbar, depending on the current amount of collected coins
   *
   */
  setPoisonbarIndicator() {
    let collectedPoisonPercentage = this.poisonCount.length / world.level.poison.length;
    if (collectedPoisonPercentage == 0) this.updateImg(this.poisonbarCache, 0);
    if (collectedPoisonPercentage >= 0.2) this.updateImg(this.poisonbarCache, 1);
    if (collectedPoisonPercentage >= 0.4) this.updateImg(this.poisonbarCache, 2);
    if (collectedPoisonPercentage >= 0.6) this.updateImg(this.poisonbarCache, 3);
    if (collectedPoisonPercentage >= 0.8) this.updateImg(this.poisonbarCache, 4);
    if (collectedPoisonPercentage >= 1.0) this.updateImg(this.poisonbarCache, 5);
  }
}
