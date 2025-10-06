class Endboss extends Enemies {
  life = 200
  damage = 100;
  height = 500;
  width = 500;
  y = 100;

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
      'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
]

  constructor(path, x) {
    super().loadImg(path);
    this.loadImgCache(this.endboss_INTRODUCE);
    this.loadImgCache(this.endboss_FLOATING);
    this.loadImgCache(this.endboss_ATTACK);
    this.loadImgCache(this.endboss_HURT);
    this.loadImgCache(this.endboss_DEAD);
    this.endbossEntrance();
    this.x = x;
    this.setHitbox(40, 270, 1.2, 3.5);
/*     this.enemyMinionMovement(this.speedX, this.speedY); */
  }

  endbossEntrance() {
    this.animateObject(this.endboss_INTRODUCE, 120);
    setTimeout(() => {
      this.animateObject(this.endboss_FLOATING, 200);
    }, 1000);
  }

  bossDieAnimation(){
      this.bossDies = setTimeout(() => {
      this.animateObjectSprite(this.endboss_DEAD, 100);
      setTimeout(() => {
        this.animateObjectSprite(this.endboss_DEAD_SURFACE, 300);
        this.dead = true;
        world.level.bossFinished = true;
      }, 500);
        this.deadToSurface(1)
    }, 100);
  }
}
