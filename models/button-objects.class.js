class Button extends menuBackground{
type = "start";
x = 200;
y = 300;
width = 200;
height = 50;
x2 = this.x + this.width;
y2 = this.y + this.height;

    constructor(path){
        super().loadImg(path)
        this.startGame();

    }

    /**
     * This Function starts the game, when Start-Button was clicked 
     * 
     */
    startGame(){
    document.addEventListener("mousedown",(event) => {
        if (this.isInHitbox(event.x , event.y)){
            world = new World(canvas, keyboard);
        }
    })
   }



}