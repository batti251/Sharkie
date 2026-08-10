class GameObjects {
  img;
  imgCache = {};
  x;
  y;
  width;
  height;
  
  /**
   * This Function loads a single image and sets it as the current imge of this object
   *
   * @param {String} path - The given path to an image (.png)
   */
  loadImg(path) {
    this.img = AssetLoader.loadImage(path);
  }

  /**
   * This Function preloads images and stores them in the object imgCache
   *
   * @param {Array} sprites - Array of image-paths
   */
  loadImgCache(sprites) {
    sprites.forEach((sprite) => {
      this.imgCache[sprite] = AssetLoader.loadImage(sprite);
    });
}

  /**
   * This Function updates the current Image
   * It loads the path from the objects imgCache
   * 
   * @param {Array} statusbarCache - the imgCache of the dedicated statusbar-object
   * @param {Number} percentage - number to index this.img
   */
  updateImg(statusbarCache, percentage){
    let index = statusbarCache[percentage];
    this.img = this.imgCache[index]
  }
}
