class Enemies extends MoveableObjects{
currentImg = 0
speedX = 0.25;
speedY = 0.25;
randomHeightInterval = 500;
enemies_IDLE = [
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
]



    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.enemies_IDLE);
        this.animateObject(this.enemies_IDLE)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 1000) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        this.height = this.width;
    }

   /**
     * This function reduces the Y-Coordinate and let the Enemy move up 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
    moveUp(speed){
        setInterval(() => {
            this.y = this.y - speed;
        }, 1000 / 60);
    }

    /**
     * This function raises the Y-Coordinate and let the Enemy move down 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
     moveDown(speed){
        setInterval(() => {
            this.y = this.y + speed;
        }, 1000 / 60);
    }


    /**
     * This function raises the X-Coordinate and let the Enemy move right 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
     moveRight(speed){
        setInterval(() => {
            this.x = this.x + speed;
        }, 1000 / 60);
    }

    /**
     * This function reduces the X-Coordinate and let the Enemy move left 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
     moveLeft(speed){
        setInterval(() => {
            this.x = this.x - speed;
        }, 1000 / 60);
    }
    
}
