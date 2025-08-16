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
        this.animate(this.enemies_IDLE)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 1000) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        this.height = this.width;
    }

    /**
     * This Function moves the Enemies from right to left
     * The Y-Coordinate is set randomly to vary the height-movement
     * 
     * @param {Number} speedX - px-value for X-Coordinate 
     * @param {Number} speedY - px-value for Y-Coordinate 
     */
    enemyMinionMovement(speedX, speedY){
        this.moveLeft(speedX);
        this.setRandomCoordinateY(speedY);
    }


    /**
     * This Function let the assigned Object move a random height up and down 
     * 
     * @param {Number} speedY - px-value for Y-Coordinate
     */
    setRandomCoordinateY(speedY){
         setInterval(() => {
            setTimeout(() => {
                this.moveDown(speedY);
            }, Math.floor(Math.random() * 300 ) + 100);
            
            setTimeout(() => {
                this.moveTop(speedY);
            }, Math.floor(Math.random() * 300 ) + 100);
        }, this.randomHeightInterval);
    }
}