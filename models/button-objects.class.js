class menuObj extends menuBackground{
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
       /*  this.startGame(); */
        this.centralObj(width)
        this.getCanvasMousePosition()
    }

    getCanvasMousePosition(){
        this.canvasPosition = canvas.getBoundingClientRect()
        console.log(this.canvasPosition);
        this.scaledX = canvas.width  / this.canvasPosition.width;
        this.scaledY = canvas.height / this.canvasPosition.height;
        console.log(canvas);
        console.log(this.scaledX);

    }

    /**
     * This Function starts the game, when Start-Button was clicked 
     * 
     */
    startGame(){
    canvas.addEventListener("mousedown",(event) => {
        if (this.isInHitbox(event.x , event.y) && this.type == "button"){
            world = new World(canvas, keyboard);

    console.log("start"

);
        }
    })
   }

   centralObj(width){
    if (this.centered == "center") {
        this.x = (canvas.width - width) / 2
    } else return
   }

       /**
     * This Function sets indication, wether a menu-object was hitted within its defined Hitbox
     * 
     * @param {*} mouseX - x-coordinate from the mouseclick 
     * @param {*} mouseY - y-coordinate from the mouseclick
     * @returns - returns true or false -state for startGame-indication
     */
    isInHitbox(mouseX, mouseY){
        
        return mouseX > this.x && mouseX < this.x2 && mouseY > this.y && mouseY < this.y2;
   }


}