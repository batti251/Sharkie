class POISONS extends MoveableObjects{
currentImg = 0;
width = 80;
height = 95;


poison_IDLE = [
    'assets/img/4. Marcadores/Posión/Animada/1.png',
    'assets/img/4. Marcadores/Posión/Animada/2.png',
    'assets/img/4. Marcadores/Posión/Animada/3.png',
    'assets/img/4. Marcadores/Posión/Animada/4.png',
    'assets/img/4. Marcadores/Posión/Animada/5.png',
    'assets/img/4. Marcadores/Posión/Animada/6.png',
    'assets/img/4. Marcadores/Posión/Animada/7.png',
    'assets/img/4. Marcadores/Posión/Animada/8.png'
]

    constructor(imgPath, x){
        super().loadImg(imgPath);
        this.x = x
        this.loadImgCache(this.poison_IDLE);
        this.animateObject(this.poison_IDLE, 220);
        this.y = Math.floor(Math.random() * 200) + 200;
        this.setHitbox(18, 45, 2, 2);
        this.poisonAudio = new Audio('audio/poison-collect.wav');
    }


}