class Jellyfish extends Enemies{
damage = 40
type;

    constructor(path, type){
        super().loadImg(path);
        this.type = type;
        this.buildJellyfish(this.type);
        this.loadImgCache(this.jellyfish_IDLE);
        this.animateObject(this.jellyfish_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 100) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 60;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }

buildJellyfish(type){
    switch (type) {
        case 1:
    this.jellyfish_IDLE = this.buildJellyGreenIDLE();
            break;
        case 2:
    this.jellyfish_IDLE = this.buildJellyPinkIDLE();
            break;
        case 3:
    this.jellyfish_IDLE = this.buildJellyLilaIDLE();
            break;
        case 4:
    this.jellyfish_IDLE = this.buildJellyYellowIDLE();
            break;
        default:
            break;
    }
}


buildJellyLilaIDLE(){
  return [
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png`
  ]
}

buildJellyYellowIDLE(){
  return [
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png`,
    `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png`
  ]
}

buildJellyGreenIDLE(){
  return [
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png`
  ]
}

buildJellyPinkIDLE(){
  return [
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png`,
    `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png`
  ]
}
}