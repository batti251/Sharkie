class Coinbar extends GameObjects{
x = 350;
y = -20;
width = 300;
height = 80;

coinbarCache = [
    '/assets/img/4. Marcadores/green/Coin/0_  copia 4.png',
    '/assets/img/4. Marcadores/green/Coin/20_  copia 2.png',
    '/assets/img/4. Marcadores/green/Coin/40_  copia 4.png',
    '/assets/img/4. Marcadores/green/Coin/60_  copia 4.png',
    '/assets/img/4. Marcadores/green/Coin/80_  copia 4.png',
    '/assets/img/4. Marcadores/green/Coin/100_ copia 4.png'
];
    constructor(path){
        super().loadImg(path);
        /* this.loadImgCache(this.healthbarCache) */
    }

    /**
     * This Function updates the character Healthbar depending on it's percentual Life
     * 
     * @param {*} maxLife - Objects max Life 
     * @param {*} currentLife - Objects current Life 
     */
    updatehealthbar(maxLife, currentLife){
        let healthbarIndicator = currentLife / maxLife
        if (healthbarIndicator <= 0.8) {
            this.loadImg(this.healthbarCache[4])
        } if (healthbarIndicator <= 0.60) {
            this.loadImg(this.healthbarCache[3])
        } if (healthbarIndicator <= 0.40) {
            this.loadImg(this.healthbarCache[2])
        } if (healthbarIndicator <= 0.20) {
            this.loadImg(this.healthbarCache[1])
        } if (healthbarIndicator <= 0) {
            this.loadImg(this.healthbarCache[0])
            this.deadAnimation();
        }
    }

    deadAnimation(){
        console.log(("dead"));
        
    }

}