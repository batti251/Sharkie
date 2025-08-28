class Character extends MoveableObjects{
currentImg = 0
world;
speedX = 4;
speedY = 3;
maxLife = 1000;
life = this.maxLife;
canCollect = true;
slapCooldown = false
slapCooldownTime = 1500;


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

sharkie_SWIM = [
    'assets/img/1.Sharkie/3.Swim/1.png',
    'assets/img/1.Sharkie/3.Swim/2.png',
    'assets/img/1.Sharkie/3.Swim/3.png',
    'assets/img/1.Sharkie/3.Swim/4.png',
    'assets/img/1.Sharkie/3.Swim/5.png',
    'assets/img/1.Sharkie/3.Swim/6.png',
]

sharkie_Long_IDLE = [
    'assets/img/1.Sharkie/2.Long_IDLE/i1.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i2.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i3.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i4.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i5.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i6.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i7.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i8.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i9.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i10.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i14.png'
]

sharkie_SLEEPING = [
    'assets/img/1.Sharkie/2.Long_IDLE/i11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/i14.png'
]

sharkie_FIN_SLAP = [
    'assets/img/1.Sharkie/4.Attack/Fin slap/1.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/2.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/3.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/4.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/5.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/6.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/7.png',
    'assets/img/1.Sharkie/4.Attack/Fin slap/8.png'
]

sharkie_POISENED = [
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    'assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
]

sharkie_DEAD = [
    'assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
    'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
]

sharkie_DEAD_SURFACE = [
      'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
]

    constructor(path, x, y){
        super().loadImg(path);
        this.x = x;
        this.y = y;
        this.loadImgCache(this.sharkie_IDLE);
        this.loadImgCache(this.sharkie_Long_IDLE);
        this.loadImgCache(this.sharkie_SLEEPING);
        this.loadImgCache(this.sharkie_SWIM);
        this.loadImgCache(this.sharkie_POISENED);
        this.loadImgCache(this.sharkie_DEAD);
        this.loadImgCache(this.sharkie_DEAD_SURFACE);
        this.loadImgCache(this.sharkie_FIN_SLAP);
        this.animateObject(this.sharkie_IDLE, 100);
        this.setHitbox(40, 95, 1.66, 3.3);
    }


}