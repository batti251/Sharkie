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
        this.getCanvasPosition();
        this.nextLevel()
    }

    /**
     * This Function starts the next Level, when the Next-Button was clicked successfully
     * It can only be clicked, when Level has been finished
     * 
     */
    nextLevel(){
         this.scaledMouseEvent = this.getCanvasPosition();
        canvas.addEventListener("mousedown", (event) => {
            this.mouseX = this.scaledMouseEvent.x * event.clientX;
            this.mouseY = this.scaledMouseEvent.y * event.clientY;
             if (this.isInHitbox(this.mouseX , this.mouseY) && world?.nextLevelButton) {
                this.addLevel = world.level.levelLength + 1
                this.addLevel % 1 == 0 ? world = new World(canvas, keyboard, this.addLevel, "boss") : world = new World(canvas, keyboard, this.addLevel, "regular") //auf 2/3 anpassen
             }
        }) 
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