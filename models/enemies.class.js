class Enemies extends MoveableObjects{
currentImg = 0
speedX = 0.75;
speedY = 0.25;
randomHeightInterval = 500;
randomTurnIntervaL = 3000;
damage;
angry = false


   /**
     * This function reduces the Y-Coordinate and let the Enemy move up 
     * The Movement is set to 60 FPS
     * 
     * @param {Number} speed - The px-value
     */
    moveUp(speedY){
        clearInterval(this.resetIntervalY)
        this.resetIntervalY = setInterval(() => {
            if (this.y > 20) {
            this.y = this.y - speedY;
            }
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
            if (this.y < 400) {
            this.y = this.y + speedY;
            }
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
