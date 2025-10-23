class Background extends MoveableObjects {
  width = 1920;

  constructor(imgPath, x, y) {
    super();
    this.loadImg(imgPath);
    this.x = x;
    this.y = y;
    this.height = canvas.height;
  }
}
