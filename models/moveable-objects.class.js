class MoveableObjects extends GameObjects{
width = 200;
height = 200;
speed = 0.25;
speedY;
speedX;
mirrorImage;
coinToss;
resetIntervalX;
resetIntervalY;
maxLife;
life;

     /**
     * This Function calls the Objects Animations
     * If the Array contains 'Sharkie', Movement-Animation is called seperately
     * 
     * @param {Array} sprites - Array of image-paths
     */
    animateObject(sprites){
        if (sprites.some(element => element.includes('Sharkie'))) {
        this.animateCharacterMovement();
        }
        this.animateObjectSprite(sprites);
    }
        
    /**
     * This Function sets the active Character Movement to 60 FPS
     * 
     */
    animateCharacterMovement(){
        setInterval(() => {
        this.moveCharacter(this.world.keyboard);
        }, 1000 / 60);
    }

    /**
     * This Function updates the displayed image in each iteration
     * The Iteration is done every 100 miliseconds per frame
     * Its done for Character, Enemies and Collectables
     * 
     * @param {Array} sprites - Array of image-paths
     */
    animateObjectSprite(sprites){
         setInterval(() => {
            let i = this.currentImg % sprites.length;
            let path = sprites[i];
            this.img = this.imgCache[path];
            this.currentImg++
        }, 100)
    }

    /**
     * This Function calls the actual Moveset from the Character
     * 
     * @param {object} key - Object with the listened Keyboard Keys
     */
    moveCharacter(key){
        this.moveUp(this.speedY,key);
        this.moveDown(this.speedY,key);
        this.moveRight(this.speedX,key);
        this.moveLeft(this.speedX,key);
    }
    
    /**
     * This Function calls Enemies (Minions) to move
     * The Turning-direction is set randomly, until character detection
     * The Y-Coordinate is set randomly to vary the height-movement
     * 
     * @param {Number} speedX - px-value for X-Coordinate 
     * @param {Number} speedY - px-value for Y-Coordinate 
     */
    enemyMinionMovement(speedX, speedY){
        this.randomTurn(speedX)
        this.setRandomCoordinateY(speedY);
        // Function for character detection
    }

    /**
     * This Function wether let the Enemies move left, or right, depending on coinToss-Function
     * The Function is called every 2 seconds 
     * 
     * @param {*} speedX - px-value for X-Coordinate 
     */
    randomTurn(speedX){
        setInterval(() => {
        this.coinToss = Math.random() * 1;
        if (this.coinToss > 0.5) {
                this.enemyLeft(speedX);
                return
        } else {
            this.enemyRight(speedX)
            return
        }}, 2000);
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
                this.moveUp(speedY);
            }, Math.floor(Math.random() * 300 ) + 100);
        }, this.randomHeightInterval);
    }

    /**
     * This function reduces the Y-Coordinate and let the Object move up 
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
    moveUp(speed, key){
        if (key.UP == true && this.y > -60) {
            this.y = this.y - speed;
        }
    }
    /**
     * This function raises the Y-Coordinate and let the Object move down 
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveDown(speed, key){
        if (key.DOWN == true && this.y < 300) {
             this.y = this.y + speed;
        }
    }

    /**
     * This function raises the X-Coordinate and let the Object move right 
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveRight(speed, key){
        if (key.RIGHT == true) {
            this.x = this.x + speed;
            this.world.cameraX = -this.x;
            this.mirrorImage = false;
        }
    }

    /**
     * This function reduces the X-Coordinate and let the Object move left 
     * 
     * @param {Number} speed - The px-value
     * @param {Object} key - Object with the listened Keyboard Keys
     */
     moveLeft(speed, key){
        if (key.LEFT == true && this.x > -300) {
            this.x = this.x - speed;
            this.world.cameraX = -this.x;
            this.mirrorImage = true;
        }
    }

    /**
     * This Function sets the Hitbox of the Objects, scaled by any size
     * 
     * @param {Number} hitboxX - X-Position of the Objects Hitbox
     * @param {Number} hitboxY - Y-Position of the Objects Hitbox 
     * @param {Number} hitboxWidth - Width of the Objects Hitbox
     * @param {Number} hitboxHeight - Height of the Objects Hitbox
     */
    setHitbox(hitboxX, hitboxY, hitboxWidth, hitboxHeight){
        this.hitboxX = hitboxX;
        this.hitboxY = hitboxY;
        this.hitboxWidth = this.width / hitboxWidth;
        this.hitboxHeight = this.height / hitboxHeight;
    }

    /**
     * This Function checks, if the character is colliding with a dedicated Object
     * 
     * 
     * @param {Object} mo - The dedicated Object: Enemies
     * @returns - returns true, to indicate a Collision, returns false if no Collision is detected
     */
    isInsideBorder(object){
        return this.x + this.hitboxX + this.hitboxWidth> object.x &&
        this.x + this.hitboxX < object.x + object.hitboxWidth &&
        this.y + this.hitboxY + this.hitboxHeight > object.y &&
        this.y + this.hitboxY < object.y + object.hitboxHeight;
    }
 
    /**
     * This Function decreases the targets life by 20
     * 
     * @param {Object} object - The Target that takes the Damage
     */
    damage(object){
        object.life = object.life - 20
        if (object.life <= 0) {
            console.log("tot");
            
        }
    }
}
