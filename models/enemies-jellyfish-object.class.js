class Jellyfish extends Enemies{
damage = 40
type;
jellyfish_IDLE;
speedY = 0.6;
speedX = 0.25;

    constructor(path, type, x){
        super().loadImg(path);
        this.type = type;
        this.x = x
        this.buildJellyfish(this.type);
        this.loadImgCache(this.jellyfish_IDLE);
        this.animateObject(this.jellyfish_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 60;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(15, 5, 2, 1.5)
    }

    /**
     * This Function builds the Jellyfish-IDLE, according to its defined type
     * 
     * @param {Number} type - the defined type: (1,2,3,4) represents a specific color for the jellyfish
     *                         1: green Jellyfish
     *                         2: pink Jellyfish
     *                         3: lila Jellyfish, sets damage to 80 additionaly
     *                         4: yellow Jellyfish, sets damage to 80 additionaly
     */
    buildJellyfish(type){
        switch (type) {
            case 1:
        this.jellyfish_IDLE = this.buildJellyGreenIDLE();
        this.damage = 80
                break;
            case 2:
        this.jellyfish_IDLE = this.buildJellyPinkIDLE();
        this.damage = 80
                break;
            case 3:
        this.jellyfish_IDLE = this.buildJellyLilaIDLE();
                break;
            case 4:
        this.jellyfish_IDLE = this.buildJellyYellowIDLE();
                break;
            default:
                break;
        }
    }

    /**
     * This Function builds the IDLE-Array for Jellyfish, according to its defined type 1
     * 
     * @returns - returns lila Jellyfish Array
     */
    buildJellyLilaIDLE(){
      return [
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png`
      ]
    }

    /**
     * This Function builds the IDLE-Array for Jellyfish, according to its defined type 2
     * 
     * @returns - returns yellow Jellyfish Array
     */
    buildJellyYellowIDLE(){
      return [
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png`,
        `assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png`
      ]
    }

    /**
     * This Function builds the IDLE-Array for Jellyfish, according to its defined type 3
     * 
     * @returns - returns green Jellyfish Array
     */
    buildJellyGreenIDLE(){
      return [
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png`
      ]
    }

    /**
     * This Function builds the IDLE-Array for Jellyfish, according to its defined type 4
     * 
     * @returns - returns pink Jellyfish Array
     */
    buildJellyPinkIDLE(){
      return [
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png`,
        `assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png`
      ]
    }
}