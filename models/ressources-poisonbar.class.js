class Poisonbar extends GameObjects{
x = 650;
y = -20;
width = 300;
height = 80;
max = 10;
poisonCount = [];

poisonCache = [
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
     * This Function updates the character Poisonbar
     * It pushes all collected poison-potions into an array-collector  
     * 
     * @param {Object} poison - the collected poison-object
     */
    fillPoisonbar(poison){
        this.poisonCount.push(poison)
        poison.x = -1000;
        poison.y = -1000;
        this.updatePoisonbar()
        
    }

    /**
     * This Function updates the Coinbar, depending on the current amount of collected coins
     * 
     */
    updatePoisonbar(){
        if (this.poisonCount.length >= 2) {
                this.loadImg('/assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png');
        }
         if (this.poisonCount.length >= 4) {
                this.loadImg('/assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png');
        }
           if (this.poisonCount.length >= 6) {
                this.loadImg('/assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png');
        }
         if (this.poisonCount.length >= 8) {
                this.loadImg('/assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png');
        }
         if (this.poisonCount.length >= 10) {
                this.loadImg('/assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png');
        }

    }

}