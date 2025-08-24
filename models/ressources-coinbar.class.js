class Coinbar extends GameObjects{
x = 350;
y = -20;
width = 300;
height = 80;
max = 10;
coinCount = [];

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
     * This Function updates the character Coinbar
     * It pushes all collected coins into an array-collector 
     * 
     * @param {Object} coin - the collected coin-object
     */
    fillCoinbar(coin){
        this.coinCount.push(coin)
        coin.x = -1000;
        coin.y = -1000;
        this.updateCoinbar()
    }

    /**
     * This Function updates the Coinbar, depending on the current amount of collected coins
     * 
     */
    updateCoinbar(){
        if (this.coinCount.length >= 2) {
                this.loadImg('/assets/img/4. Marcadores/green/Coin/20_  copia 2.png');
        }
         if (this.coinCount.length >= 4) {
                this.loadImg('/assets/img/4. Marcadores/green/Coin/40_  copia 4.png');
        }
           if (this.coinCount.length >= 6) {
                this.loadImg('/assets/img/4. Marcadores/green/Coin/60_  copia 4.png');
        }
         if (this.coinCount.length >= 8) {
                this.loadImg('/assets/img/4. Marcadores/green/Coin/80_  copia 4.png');
        }
         if (this.coinCount.length >= 10) {
                this.loadImg('/assets/img/4. Marcadores/green/Coin/100_ copia 4.png');
        }

    }



}