class Pufferfish extends Enemies {
damage = 20


pufferfish_IDLE = [
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
]

pufferfish_TRANSITION = [
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
]

pufferfish_ANGRY = [
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
]


    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.pufferfish_IDLE);
        this.loadImgCache(this.pufferfish_TRANSITION);
        this.loadImgCache(this.pufferfish_ANGRY);
        this.animateObject(this.pufferfish_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 1000) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }


    /**
     * This Function let the enemies trigger the transformation Animation
     * 
     */
    enemyDetection(){
      clearInterval(this.detection)
       this.detection = setInterval(() => {
          this.level.enemies.forEach(enemie => {
            if (this.character.isDetected(enemie) && !enemie.angry){
              enemie.enemyDetectionAnimation(enemie);
              enemie.angry = true;
            } 
          });
        }, 100);
    }

    /**
     * This Function updates the pufferfish Animation from passiv mode to offensiv mode
     * It lets the pufferfishes puff
     * 
     */
    enemyDetectionAnimation(enemie){
        clearTimeout(this.enemyDetector)
            this.enemyDetector = setTimeout(() => {
                     this.animateObjectSprite(this.pufferfish_TRANSITION, 100);
                       setTimeout(() => {
                        enemie.animateObjectSprite(this.pufferfish_ANGRY, 200);
                    }, 100);
            }, 200);
    }

    /**
     * This Function turns puffed pufferfish back into unpuffed state.
     * 
     */
    enemyIdleState(){
        this.animateObjectSprite(this.pufferfish_IDLE, 200)
    }
}