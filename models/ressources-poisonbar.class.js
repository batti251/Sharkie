class Poisonbar extends GameObjects{
x = 650;
y = -20;
width = 300;
height = 80;

coinbarCache = [
    '/assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
    '/assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
    '/assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
    '/assets/img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
    '/assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
    '/assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png'
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