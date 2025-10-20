class LevelEndBoss extends Level{

        constructor(level){
        super();
        this.levelLength = level;
        this.x = this.xStart + this.multiplicator
        this.x1 = this.x1Start  + this.multiplicator;
        this.generateLevelObjects();
        this.generateEndboss()
    }

    generateEndboss(x){
    this.enemies.push(new Endboss('assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png', x));
     }

    }