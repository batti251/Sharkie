class Enemies extends MoveableObjects{
currentImg = 0
speedX = 0.75;
speedY = 0.25;
randomHeightInterval = 500;
randomTurnIntervaL = 3000;
damage = 20
angry = false

enemies_IDLE = [
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
]

enemies_TRANSITION = [
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
]

enemies_ANGRY = [
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
    'assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
]



    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.enemies_IDLE);
        this.loadImgCache(this.enemies_TRANSITION);
        this.loadImgCache(this.enemies_ANGRY);
        this.animateObject(this.enemies_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 1000) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }

    

   /**
     * This function reduces the Y-Coordinate and let the Enemy move up 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
    moveUp(speedY){
        clearInterval(this.resetIntervalY)
        this.resetIntervalY = setInterval(() => {
            this.y = this.y - speedY;
        }, 1000 / 60);
    }

    /**
     * This function raises the Y-Coordinate and let the Enemy move down 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
     moveDown(speedY){
        clearInterval(this.resetIntervalY)
        this.resetIntervalY = setInterval(() => {
            this.y = this.y + speedY;
        }, 1000 / 60);
    }


    /**
     * This Function calls the Enemy to move right
     * It clears the previous Interval, to turn directly
     * @param {Number} speed - The px-value
     */
     enemyRight(speedX){
        clearInterval(this.resetIntervalX)
        this.enemyMoveRight(speedX)
    }

    /**
     * This Function calls the Enemy to move left
     * It clears the previous Interval, to turn directly
     * 
     * @param {Number} speed - The px-value
     */
     enemyLeft(speedX){
        clearInterval(this.resetIntervalX)
        this.enemyMoveLeft(speedX)
    }
    
    /**
     * This function reduces the X-Coordinate and let the Enemy move left 
     * It sets the Image, according to the Boolean, to turn the Enemy to the correct direction
     * The Movement is set to 60 FPS
     * @param {*} speedX - The px-value 
     */
    enemyMoveLeft(speedX){
        this.resetIntervalX = setInterval(() => {
            this.x = this.x - speedX;
             this.mirrorImage = false
        }, 1000 / 60);
    }

    /**
     * This function increases the X-Coordinate and let the Enemy move right 
     * It sets the Image, according to the Boolean, to turn the Enemy to the correct direction
     * The Movement is set to 60 FPS
     * @param {*} speedX - The px-value 
     */
    enemyMoveRight(speedX){
         this.resetIntervalX = setInterval(() => {
            this.x = this.x + speedX;
            this.mirrorImage = true
        }, 1000 / 60);
    }
}
