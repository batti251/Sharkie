class Pufferfish extends Enemies {
damage = 20
type;
pufferfish_IDLE;
pufferfish_TRANSITION;
pufferfish_ANGRY;


    constructor(path, type, x){
        super().loadImg(path);
        this.type = type;
        this.x = x
        
        this.buildPufferfish(this.type);
        this.loadPufferfishImgCache();
        this.animateObject(this.pufferfish_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }

    /**
     * This Function calls all loadImgCache-Functions for predefined pufferfish-type
     * 
     */
    loadPufferfishImgCache(){
        this.loadImgCache(this.pufferfish_IDLE);
        this.loadImgCache(this.pufferfish_TRANSITION);
        this.loadImgCache(this.pufferfish_ANGRY);
    }

    /**
     * This Function updates all the pufferfish Arrays, according to its defined type
     * 
     * @param {Number} type - the defined type: (1,2,3) represents a specific color for the bubblefish
     *                         1: green Pufferfish
     *                         2: pink Pufferfish
     *                         3: red Pufferfish
     */
    buildPufferfish(type){
        this.pufferfish_IDLE = this.buildPufferIDLE(type);
        this.pufferfish_TRANSITION = this.buildPufferTRANSITION(type);
        this.pufferfish_ANGRY = this.buildPufferANGRY(type);  
        }


    /**
     * This Function builds the IDLE-Array for Pufferfish, according to its defined type
     * 
     * @param {Number} type - the defined type: (1,2,3) represents a specific color for the bubblefish
     *                         1: green Pufferfish
     *                         2: pink Pufferfish
     *                         3: red Pufferfish
     * @returns - returns new IDLE Array for Img-Cache
     */
    buildPufferIDLE(type){
    return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${type}.swim1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${type}.swim2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${type}.swim3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${type}.swim4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${type}.swim5.png`
        ]
    }


    /**
     * This Function builds the TRANSITION-Array for Pufferfish, according to its defined type
     * 
     * @param {Number} type - the defined type: (1,2,3) represents a specific color for the bubblefish
     *                         1: green Pufferfish
     *                         2: pink Pufferfish
     *                         3: red Pufferfish
     * @returns - returns new TRANSITION Array for Img-Cache
     */
    buildPufferTRANSITION(type){
        return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${type}.transition1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${type}.transition2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${type}.transition3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${type}.transition4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${type}.transition5.png`
        ]
    }
    
    /**
     * This Function builds the ANGRY-Array for Pufferfish, according to its defined type
     * 
     * @param {Number} type - the defined type: (1,2,3) represents a specific color for the bubblefish
     *                         1: green Pufferfish
     *                         2: pink Pufferfish
     *                         3: red Pufferfish
     * @returns - returns new ANGRY Array for Img-Cache
     */
    buildPufferANGRY(type){
        return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${type}.bubbleswim1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${type}.bubbleswim2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${type}.bubbleswim3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${type}.bubbleswim4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${type}.bubbleswim5.png`
        ]
    }



    /**
     * This Function updates the pufferfish Animation from IDLE mode to ANGRY mode
     * It lets the pufferfishe puff
     * 
     */
    enemyDetectionAnimation(enemie){
        clearTimeout(this.enemyDetector)
            this.enemyDetector = setTimeout(() => {
                     this.animateObjectSprite(this.pufferfish_TRANSITION, 100);
                       setTimeout(() => {
                        enemie.animateObjectSprite(this.pufferfish_ANGRY, 200);
                    }, 100);
            }, 200);
    }

    /**
     * This Function turns puffed pufferfish back into unpuffed state.
     * 
     */
    enemyIdleState(){
        this.animateObjectSprite(this.pufferfish_IDLE, 200)
    }
}