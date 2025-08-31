class Pufferfish extends Enemies {
damage = 20
type;
pufferfish_IDLE;
pufferfish_TRANSITION;
pufferfish_ANGRY;


    constructor(path, type){
        super().loadImg(path);
        this.type = type
        this.buildPufferfish();
        this.loadPufferfishImgCache();
        this.animateObject(this.pufferfish_IDLE, 100)
        this.enemyMinionMovement(this.speedX, this.speedY);
        this.x = Math.floor(Math.random() * 1000) + 200;
        this.y = Math.floor(Math.random() * 200) + 200;
        this.width = Math.floor(Math.random() * 50) + 40;
        /* this.speedX = Math.floor(Math.random() * 2) + this.speedX; */
        this.height = this.width;
        this.setHitbox(0, 4.5, 1.1, 1.5)
    }

    /**
     * This Function calls all loadImgCache-Functions
     * 
     */
    loadPufferfishImgCache(){
        this.loadImgCache(this.pufferfish_IDLE);
        this.loadImgCache(this.pufferfish_TRANSITION);
        this.loadImgCache(this.pufferfish_ANGRY);
    }

    /**
     * This Function updates all the pufferfish Arrays, according to its defined type
     * the defined type: (1,2,3) represents a specific color for the bubblefish
     * 
     */
    buildPufferfish(){
        this.pufferfish_IDLE = this.buildIDLE()
        this.pufferfish_TRANSITION = this.buildTRANSITION();
        this.pufferfish_ANGRY = this.buildANGRY();
    }
    /**
     * This Function updates the IDLE-Arrays image paths, according to the defined type
     * the defined type: (1,2,3) represents a specific color for the bubblefish
     * 
     * @returns - returns new IDLE-Arrray image-paths
     */
    buildIDLE(){
    return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.type}.swim1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.type}.swim2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.type}.swim3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.type}.swim4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${this.type}.swim5.png`
        ]
    }

    /**
     * This Function updates the TRANSITION-Arrays image paths, according to the defined type
     * the defined type: (1,2,3) represents a specific color for the bubblefish
     * 
     * @returns - returns new TRANSITION-Arrray image-paths
     */
    buildTRANSITION(){
        return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.type}.transition1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.type}.transition2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.type}.transition3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.type}.transition4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/${this.type}.transition5.png`
        ]
    }

    /**
     * This Function updates the ANGRY-Arrays image paths, according to the defined type
     * the defined type: (1,2,3) represents a specific color for the bubblefish
     * 
     * @returns - returns new ANGRY-Arrray image-paths
     */
    buildANGRY(){
        return [
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.type}.bubbleswim1.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.type}.bubbleswim2.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.type}.bubbleswim3.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.type}.bubbleswim4.png`,
    `assets/img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/${this.type}.bubbleswim5.png`
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