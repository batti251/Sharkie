class menuBackground extends GameObjects{
x = 0;
y = 0;
width = canvas.width;
height = canvas.height;
    constructor(path){
        super().loadImg(path);
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