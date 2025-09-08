class GameObjects{
img;
imgCache = {};
x ;
y ;
width;
height;
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
     * This Function gets the canvas-width depending on its current viewport & calculates the factor for the actual x & y position
     * 
     * @returns - an object with the scaled x- & y-factor
     *            This Factor is needed to multiply it with the mouse.event.client-coordinates
     */
    getCanvasPosition(){
        this.canvasPosition = canvas.getBoundingClientRect()
        this.scaledX = canvas.width  / this.canvasPosition.width;
        this.scaledY = canvas.height / this.canvasPosition.height;
        return {x: this.scaledX, y: this.scaledY}
    }
}