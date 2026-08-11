class COINS extends MoveableObjects {
  currentImg = 0;
  width = 80;
  height = 80;
  value = 1;
  collected = false;
  coins_IDLE = [
    "assets/img/4. Marcadores/1. Coins/1.webp",
    "assets/img/4. Marcadores/1. Coins/2.webp",
    "assets/img/4. Marcadores/1. Coins/3.webp",
    "assets/img/4. Marcadores/1. Coins/4.webp",
  ];

  constructor(imgPath, x) {
    super();
    this.loadImg(imgPath);
    this.x = x;
    this.loadImgCache(this.coins_IDLE);
    this.animateObject(this.coins_IDLE, 220);
    this.y = Math.floor(Math.random() * 200) + 200;
    this.setHitbox(-2, 2, 1, 1);
    this.collectAudio = AudioManager.getAudio("audio/coin-collect.wav");
  }
}
