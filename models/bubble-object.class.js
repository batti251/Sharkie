class Bubble extends MoveableObjects{
height = 50;
width = 50;
bubble_Array = ['assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png']


    constructor(path, character){
        super().loadImg(path);
        console.log(character);
        
        this.character = character
        this.x = this.character.x + this.character.hitboxWidth
        this.y = this.character.y + this.character.hitboxHeight;
        this.loadImgCache(this.bubble_Array);
        
        
    }
}