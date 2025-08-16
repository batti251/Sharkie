class Background extends MoveableObjects{
width = 760;
height = 480;

    constructor(imgPath, x, y){
        super().loadImg(imgPath);
        this.x = x;
        this.y = y;
    }


}