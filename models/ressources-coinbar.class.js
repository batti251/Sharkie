class Coinbar extends GameObjects {
  x = 350;
  y = -20;
  width = 300;
  height = 80;
  maxCoins;
  coinCount = [];
  collectedCoinsPercentage;

  coinbarCache = [
    "assets/img/4. Marcadores/green/Coin/0_  copia 4.png",
    "assets/img/4. Marcadores/green/Coin/20_  copia 2.png",
    "assets/img/4. Marcadores/green/Coin/40_  copia 4.png",
    "assets/img/4. Marcadores/green/Coin/60_  copia 4.png",
    "assets/img/4. Marcadores/green/Coin/80_  copia 4.png",
    "assets/img/4. Marcadores/green/Coin/100_ copia 4.png",
  ];
  constructor(path, world) {
    super().loadImg(path);
    this.loadImgCache(this.coinbarCache);
    this.world = world;
  }

  /**
   * This Function updates the character Coinbar
   * It pushes all collected coins into an array-collector
   *
   * @param {Object} coin - the collected coin-object
   */
  fillCoinbar(coin) {
    this.coinCount.push(coin);
    coin.x = -1000;
    coin.y = -1000;
    this.updateCoinbar();
  }

  /**
   * This Function updates the Coinbar, depending on the current amount of collected coins
   *
   */
  updateCoinbar() {
    this.maxCoins = world.level.coins.length;
    let collectedCoinsPercentage = this.coinCount.length / this.maxCoins;
    let updatedBar = this.coinbarCache[0];
    if (collectedCoinsPercentage >= 0.2) updatedBar = this.coinbarCache[1];
    if (collectedCoinsPercentage >= 0.4) updatedBar = this.coinbarCache[2];
    if (collectedCoinsPercentage >= 0.6) updatedBar = this.coinbarCache[3];
    if (collectedCoinsPercentage >= 0.8) updatedBar = this.coinbarCache[4];
    if (collectedCoinsPercentage >= 1.0) updatedBar = this.coinbarCache[5];
    this.loadImg(updatedBar);
  }
}
