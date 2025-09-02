class COINS extends MoveableObjects{
currentImg = 0;
width = 40;
height = 40;
value = 1;
collected = false;

coins_IDLE = [
    'assets/img/4. Marcadores/1. Coins/1.png',
    'assets/img/4. Marcadores/1. Coins/2.png',
    'assets/img/4. Marcadores/1. Coins/3.png',
    'assets/img/4. Marcadores/1. Coins/4.png',
]



    constructor(imgPath, x){
        super().loadImg(imgPath);
        this.x = x
        this.loadImgCache(this.coins_IDLE);
        this.animateObject(this.coins_IDLE, 220);
        this.y = Math.floor(Math.random() * 200) + 200;
        this.setHitbox(5, 5, 1.5, 1.5);
        
    }



}