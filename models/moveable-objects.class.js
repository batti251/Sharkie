class MoveableObjects{
img;
imgCache = {};
x = 0;
y = 0;
width = 200;
height = 200;
speed = 0.25;
keyboard;
    /**
     * This Function loads a single image and sets it as the current imge of this object
     * 
     * @param {String} path - The given path to an image (.png)
     */
    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This Function preloads images and stores them in the object imgCache
     * 
     * @param {Array} sprites - Array of image-paths
     */
    loadImgCache(sprites){
       sprites.forEach((sprite) => {
        let imgFrame = new Image();
        imgFrame.src = sprite;
        this.imgCache[sprite] = imgFrame;
        
       });
    }

    /**
     * This Function iterates through an image-Array and updates the displayed image.
     * It loops through the Array until it reaches the last index.
     * The Iteration is done every 100 miliseconds per frame
     * 
     */
    animate(sprites){
        setInterval(() => {
            let i = this.currentImg % sprites.length;
            let path = sprites[i];
            this.img = this.imgCache[path];
            this.currentImg++
        }, 100)
    }


    /**
     * This function reduces the Y-Coordinate and let the Object move up 
     * 
     * @param {Number} speed - The px-value
     */
    moveTop(speed){
        setInterval(() => {
            this.y = this.y - speed;
        }, 1000 / 60);
    }

    /**
     * This function raises the Y-Coordinate and let the Object move down 
     * 
     * @param {Number} speed - The px-value
     */
     moveDown(speed){
        setInterval(() => {
            this.y = this.y + speed;
        }, 1000 / 60);
    }


    /**
     * This function raises the X-Coordinate and let the Object move right 
     * 
     * @param {Number} speed - The px-value
     */
     moveRight(speed){
        setInterval(() => {
            this.x = this.x + speed;
        }, 1000 / 60);
    }

    /**
     * This function reduces the X-Coordinate and let the Object move left 
     * 
     * @param {Number} speed - The px-value
     */
     moveLeft(speed){
        setInterval(() => {
            this.x = this.x - speed;
        }, 1000 / 60);
    }

    
}