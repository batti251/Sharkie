class POISONS extends MoveableObjects {
  currentImg = 0;
  width = 80;
  height = 95;
  poison_IDLE = [
    "assets/img/4. Marcadores/Posión/Animada/1.webp",
    "assets/img/4. Marcadores/Posión/Animada/2.webp",
    "assets/img/4. Marcadores/Posión/Animada/3.webp",
    "assets/img/4. Marcadores/Posión/Animada/4.webp",
    "assets/img/4. Marcadores/Posión/Animada/5.webp",
    "assets/img/4. Marcadores/Posión/Animada/6.webp",
    "assets/img/4. Marcadores/Posión/Animada/7.webp",
    "assets/img/4. Marcadores/Posión/Animada/8.webp",
  ];

  constructor(imgPath, x) {
    super();
    this.loadImg(imgPath);
    this.x = x;
    this.loadImgCache(this.poison_IDLE);
    this.animateObject(this.poison_IDLE, 220);
    this.y = Math.floor(Math.random() * 200) + 200;
    this.setHitbox(18, 45, 1.8, 2);
    this.collectAudio = AudioManager.getAudio("audio/poison-collect.wav");
  }
}
