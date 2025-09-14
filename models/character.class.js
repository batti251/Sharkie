class Character extends MoveableObjects{
currentImg = 0
width = 400;
height = 400;
world;
speedX = 4;
speedY = 4;
maxLife = 1000;
life = this.maxLife;
canCollect = true;
hitted = false;
slapCooldown = false
slapCooldownTime = 1500;
shotBubble = false
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
    'assets/img/1.Sharkie/2.Long_IDLE/I2.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I3.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I4.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I5.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I6.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I7.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I8.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I9.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I10.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I14.png'
]

sharkie_SLEEPING = [
    'assets/img/1.Sharkie/2.Long_IDLE/I11.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I12.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I13.png',
    'assets/img/1.Sharkie/2.Long_IDLE/I14.png'
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

sharkie_Bubble_TRAP = [
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
    'assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
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
        this.x = x 
        this.y = y
        this.loadImgCache(this.sharkie_IDLE);
        this.loadImgCache(this.sharkie_Long_IDLE);
        this.loadImgCache(this.sharkie_SLEEPING);
        this.loadImgCache(this.sharkie_SWIM);
        this.loadImgCache(this.sharkie_POISENED);
        this.loadImgCache(this.sharkie_DEAD);
        this.loadImgCache(this.sharkie_DEAD_SURFACE);
        this.loadImgCache(this.sharkie_FIN_SLAP);
        this.loadImgCache(this.sharkie_Bubble_TRAP);
        this.animateObject(this.sharkie_IDLE, 100);
        this.setHitbox(100, 200, 1.9, 4);

    }


    /**
     * This Function calls the character swim-Animation
     * 
     */
    characterSwims(){
        this.animateObjectSprite(this.sharkie_SWIM, 100);
    }

    /**
     * This Function calls the character sleep-Animation 
     * The Timer is set to 15 seconds until it starts the Animation
     * 
     */
    characterFallAsleep(){
        clearTimeout(this.fallAsleep)
         this.animateObjectSprite(this.sharkie_IDLE, 100);
                this.fallAsleep =  setTimeout(() => {
                    this.animateObjectSprite(this.sharkie_Long_IDLE, 100);
                    setTimeout(() => {
                         this.animateObjectSprite(this.sharkie_SLEEPING, 300);
                    }, 700);
                }, 15000);
    }



    /**
     * This Function let the character attack with his fin.
     * During slap-animation the character cannot collect collectibles
     * 
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    finSlap(key){
            if (key?.SPACE === true && !this.slapCooldown && !this.hitted) {
                this.slapCooldown = true
                this.isSlapping = true
                this.canCollect = false
                this.animateObjectSprite(this.sharkie_FIN_SLAP, 80)
                this.expandHitbox()
                this.stallCharacterAnimationBy(720)
                setTimeout(() => {
                this.hitboxWidth = 210
                }, 600);
                }   
    }
    
    shootBubble(key){

        if (key?.Q === true && !this.shootCooldown && !this.hitted && this.world.poisonbar.poisonCount.length > 0) {
            console.log("shoot");
            this.isShooting = true
            this.canCollect = false
            this.animateObjectSprite(this.sharkie_Bubble_TRAP, 80)
            this.createBubble(world.character)
            this.shootCoolDown(700)
            console.log();
        }


    }

    createBubble(character){
        setTimeout(() => {
            this.world.bubble = new Bubble('assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', character);
            this.shotBubble = true;
            this.decreasePoisonCount();
        }, 700);


    }

    decreasePoisonCount(){
        this.world.poisonbar.poisonCount.shift(0)
    }

    shootCoolDown(miliseconds){
        setTimeout(() => {
          this.applyCharacterMovement();
          this.isShooting = false
          this.canCollect = true
        /*   this.shotBubble = false */
        }, miliseconds);
    }

    /**
     * This Function calls CharacterMovement after short delay to grant smooth movement-transition after slap
     * It also works as Cooldown for collection and key.SPACE-listener
     * 
     * @param {Number} miliseconds - Timer, when Function should be called 
     */
    stallCharacterAnimationBy(miliseconds){
        setTimeout(() => {
          this.applyCharacterMovement();
          this.isSlapping = false
          this.canCollect = true
          this.slapCooldown = false
        }, miliseconds);
    }

    /**
     * This Function increases Hitbox from character slighty
     * New Hitbox width 140px,  
     * 
     */
    expandHitbox(){
        this.oldHitBoxWidth = this.hitboxWidth
        setTimeout(() => {
            this.hitboxWidth = this.hitboxSlap
            this.finSlapX = this.oldHitBoxWidth + this.hitboxX
            this.finSlapHitboxWidth = this.hitboxSlap - this.oldHitBoxWidth
                    }, 400);
    }




}