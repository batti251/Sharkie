class MoveableObjects{
img;
x = 0;
y = 0;
width = 200;
height = 200;


    getImg(path){
        this.img = new Image()
        this.img.src = path
    }
}