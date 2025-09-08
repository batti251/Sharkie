class Background extends MoveableObjects{
width = 780;


    constructor(imgPath, x, y){
        super().loadImg(imgPath);
        this.x = x;
        this.y = y;
        this.height = canvas.height
    }


}