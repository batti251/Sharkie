class Healthbar extends GameObjects{
x = 0;
y = -20;
width = 300;
height = 80;

healthbarCache = [
    'assets/img/4. Marcadores/green/Life/0_  copia 3.png',
    'assets/img/4. Marcadores/green/Life/20_ copia 4.png',
    'assets/img/4. Marcadores/green/Life/40_  copia 3.png',
    'assets/img/4. Marcadores/green/Life/60_  copia 3.png',
    'assets/img/4. Marcadores/green/Life/80_  copia 3.png',
    'assets/img/4. Marcadores/green/Life/100_  copia 2.png'
];
    constructor(path){
        super().loadImg(path);
        this.loadImgCache(this.healthbarCache)
    }



}