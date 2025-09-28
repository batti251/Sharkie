class LevelRegular extends Level{


    
    constructor(level){
        super();
        this.levelLength = 1;
        this.x = this.xStart + this.multiplicator
        this.x1 = this.x1Start  + this.multiplicator;
        this.generateLevelObjects();
    }

}