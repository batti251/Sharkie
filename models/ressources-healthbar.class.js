class Healthbar extends GameObjects {
  x = 0;
  y = -20;
  width = 300;
  height = 80;

  healthbarCache = [
    "assets/img/4. Marcadores/green/Life/0_  copia 3.png",
    "assets/img/4. Marcadores/green/Life/20_ copia 4.png",
    "assets/img/4. Marcadores/green/Life/40_  copia 3.png",
    "assets/img/4. Marcadores/green/Life/60_  copia 3.png",
    "assets/img/4. Marcadores/green/Life/80_  copia 3.png",
    "assets/img/4. Marcadores/green/Life/100_  copia 2.png",
  ];
  constructor(path, world) {
    super().loadImg(path);
    this.loadImgCache(this.healthbarCache);
    this.world = world;
  }

  /**
   * This Function listens if the character takes damage and triggers the healthbar update
   *
   * @param {*} maxLife
   * @param {*} currentLife
   */
  HealthbarListener(maxLife, currentLife) {
    if (this.world.character.takesDamage == true) {
      this.updatehealthbar(maxLife, currentLife);
    }
  }

  /**
   * This Function updates the character Healthbar depending on it's percentual Life
   *
   * @param {*} maxLife - Objects max Life
   * @param {*} currentLife - Objects current Life
   */
  updatehealthbar(maxLife, currentLife) {
    let healthbarIndicator = currentLife / maxLife;
    if (healthbarIndicator <= 0.8) {
      this.loadImg(this.healthbarCache[4]);
    }
    if (healthbarIndicator <= 0.6) {
      this.loadImg(this.healthbarCache[3]);
    }
    if (healthbarIndicator <= 0.4) {
      this.loadImg(this.healthbarCache[2]);
    }
    if (healthbarIndicator <= 0.2) {
      this.loadImg(this.healthbarCache[1]);
    }
    if (healthbarIndicator <= 0) {
      this.loadImg(this.healthbarCache[0]);
    }
  }
}
