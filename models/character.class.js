class Character extends MoveableObjects{
currentImg = 0
sprites_IDLE = [
    'assets/img/1.Sharkie/1.IDLE/1.png',
    'assets/img/1.Sharkie/1.IDLE/2.png',
    'assets/img/1.Sharkie/1.IDLE/3.png',
    'assets/img/1.Sharkie/1.IDLE/4.png',
    'assets/img/1.Sharkie/1.IDLE/5.png',
    'assets/img/1.Sharkie/1.IDLE/6.png',
    'assets/img/1.Sharkie/1.IDLE/7.png',
    'assets/img/1.Sharkie/1.IDLE/8.png',
    'assets/img/1.Sharkie/1.IDLE/9.png',
    'assets/img/1.Sharkie/1.IDLE/10.png',
    'assets/img/1.Sharkie/1.IDLE/11.png',
    'assets/img/1.Sharkie/1.IDLE/12.png',
    'assets/img/1.Sharkie/1.IDLE/13.png',
    'assets/img/1.Sharkie/1.IDLE/14.png',
    'assets/img/1.Sharkie/1.IDLE/15.png',
    'assets/img/1.Sharkie/1.IDLE/16.png',
    'assets/img/1.Sharkie/1.IDLE/17.png',
    'assets/img/1.Sharkie/1.IDLE/18.png'
]
    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.sprites_IDLE)
        this.animate()
    }

    /**
     * This Function iterates through an image-Array and pupdates the displayed image.
     * It loops through the Array until it reaches the last index.
     * The Iteration is done every 100 miliseconds per frame
     * 
     */
    animate(){
        setInterval(() => {
            let i = this.currentImg % this.sprites_IDLE.length;
            let path = this.sprites_IDLE[i];
            this.img = this.imgCache[path];
            this.currentImg++
        }, 100)
    }
}