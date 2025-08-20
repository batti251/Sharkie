class Character extends MoveableObjects{
currentImg = 0
world;
speedX = 4;
speedY = 3;
life = 1000;
// this.ctx.strokeRect(object.x+40, object.y+90, object.hitboxWidth+20, object.hitboxHeight-30);



sharkie_IDLE = [
    'assets/img/1.Sharkie/1.IDLE/1.png',
    'assets/img/1.Sharkie/1.IDLE/2.png',
    'assets/img/1.Sharkie/1.IDLE/3.png',
    'assets/img/1.Sharkie/1.IDLE/4.png',
    'assets/img/1.Sharkie/1.IDLE/5.png',
    'assets/img/1.Sharkie/1.IDLE/6.png',
    'assets/img/1.Sharkie/1.IDLE/7.png',
    'assets/img/1.Sharkie/1.IDLE/8.png',
    'assets/img/1.Sharkie/1.IDLE/9.png',
    'assets/img/1.Sharkie/1.IDLE/10.png',
    'assets/img/1.Sharkie/1.IDLE/11.png',
    'assets/img/1.Sharkie/1.IDLE/12.png',
    'assets/img/1.Sharkie/1.IDLE/13.png',
    'assets/img/1.Sharkie/1.IDLE/14.png',
    'assets/img/1.Sharkie/1.IDLE/15.png',
    'assets/img/1.Sharkie/1.IDLE/16.png',
    'assets/img/1.Sharkie/1.IDLE/17.png',
    'assets/img/1.Sharkie/1.IDLE/18.png'
]
    constructor(path, x, y){
        super().loadImg(path);
        this.x = x;
        this.y = y;
        this.loadImgCache(this.sharkie_IDLE);
        this.animateObject(this.sharkie_IDLE);
        this.setHitbox(40, 95, 1.66, 3.3);
    }

    
}