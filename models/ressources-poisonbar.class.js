class Poisonbar extends GameObjects{
x = 650;
y = -20;
width = 300;
height = 80;
maxPoison;
poisonCount = [];
collectedPoisonPercentage;
poisonbarCache = [
    'assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
    'assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
    'assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
    'assets/img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
    'assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
    'assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png'
];
    constructor(path, world){
        super().loadImg(path);
        this.loadImgCache(this.poisonbarCache)
        this.world = world
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
        this.maxPoison = world.level.poison.length
        this.collectedPoisonPercentage = this.poisonCount.length / this.maxPoison
        if (this.collectedPoisonPercentage == 0) {
            this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png')
        }
        if (this.collectedPoisonPercentage >= 0.2) {
                this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png');
        }
         if (this.collectedPoisonPercentage >= 0.4) {
                this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png');
        }
           if (this.collectedPoisonPercentage >= 0.6) {
                this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png');
        }
         if (this.collectedPoisonPercentage >= 0.8) {
                this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png');
        }
         if (this.collectedPoisonPercentage >= 1) {
                this.loadImg('assets/img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png');
        }

    }

}