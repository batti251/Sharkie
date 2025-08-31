class Jellyfish extends Enemies{
damage = 40


jellyfish_lila_IDLE = [
    '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
    '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
    '/assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
]

jellyfish_yellow_IDLE = [
    'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
    'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
    'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
]

jellyfish_green_IDLE = [
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
]

jellyfish_pink_IDLE = [
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
    '/assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
]


    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.jellyfish_lila_IDLE);
        this.loadImgCache(this.jellyfish_yellow_IDLE);
        this.loadImgCache(this.jellyfish_green_IDLE);
        this.loadImgCache(this.jellyfish_pink_IDLE);
        this.animateObject(this.jellyfish_lila_IDLE, 100)
        this.animateObject(this.jellyfish_yellow_IDLE, 100)
        this.animateObject(this.jellyfish_green_IDLE, 100)
        this.animateObject(this.jellyfish_pink_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 100) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 60;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }

}