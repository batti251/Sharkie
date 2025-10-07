class menuObj extends GameObjects{
type
x = 200;
y = 300;
x2;
y2;
width ;
height ;


    constructor(path, x, y, width, height, type, centered){
        super().loadImg(path)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.centered = centered
        this.x2 = this.x + this.width;
        this.y2 = this.y + this.height;
        this.centralObj(width)
    }


   /**
    * This Function formats the addressed object in central position to the canvas
    * 
    * @param {*} width - referenced object - width
    */
    centralObj(width){
        if (this.centered == "center") {
            this.x = (canvas.width - width) / 2
        }
    }
}