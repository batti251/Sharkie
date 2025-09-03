class menuBackground extends GameObjects{
x = 0;
y = 0;
width = canvas.width;
height = canvas.height;
    constructor(path){
        super().loadImg(path);
        this.startGame();
    }

   startGame(){
    document.addEventListener("mousedown",(event) => {
        console.log("clicked");
        console.log(event);
        
    /* world = new World(canvas, keyboard); */
   
    })
   }
}