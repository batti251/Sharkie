class Enemies extends MoveableObjects{
currentImg = 5
enemies_IDLE = [
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '/assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
]



    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.enemies_IDLE);
        this.animate(this.enemies_IDLE)
        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * 480);
        this.width = Math.floor(Math.random() * 50) + 40;
        this.height = this.width;
    }

}