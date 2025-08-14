class MoveableObjects{
img;
imgCache = {};
x = 0;
y = 0;
width = 200;
height = 200;

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
     * This Function preloads images and stores them in the object imgCahce
     * 
     * @param {Array} sprites - This is an Array of image-paths
     */
    loadImgCache(sprites){
       sprites.forEach((sprite) => {
        let imgFrame = new Image();
        imgFrame.src = sprite;
        this.imgCache[sprite] = imgFrame;
        
       });
    }
}