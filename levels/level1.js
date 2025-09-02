class Level1 {

levelLength;
amountEnemies;
amountCoins;
amountPoisons;
xStart = -300;
x1Start = 479;
multiplicator = 1559;    
enemyMultiplicator = 5;    


background = [
  new Background('assets/img/3. Background/Layers/5. Water/L1.png', this.xStart, 0),
  new Background('assets/img/3. Background/Layers/4.Fondo 2/L1.png', this.xStart, 0),
  new Background('assets/img/3. Background/Layers/3.Fondo 1/L1.png', this.xStart, 0),
  new Background('assets/img/3. Background/Layers/2. Floor/L1.png', this.xStart, 0),
  new Background('assets/img/3. Background/Layers/1. Light/1.png', this.xStart, 0),
  new Background('assets/img/3. Background/Layers/5. Water/L2.png', this.x1Start, 0),
  new Background('assets/img/3. Background/Layers/4.Fondo 2/L2.png', this.x1Start, 0),
  new Background('assets/img/3. Background/Layers/3.Fondo 1/L2.png', this.x1Start, 0),
  new Background('assets/img/3. Background/Layers/2. Floor/L2.png',this.x1Start, 0),
  new Background('assets/img/3. Background/Layers/1. Light/2.png', this.x1Start, 0),
];

enemies = [

];


coins = [
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
  new COINS ('assets/img/4. Marcadores/1. Coins/1.png'),
];

poison = [
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png'),
  new POISONS ('assets/img/4. Marcadores/Posión/Animada/1.png')
]


    constructor(level){
        this.levelLength = level;
        this.x = this.xStart + this.multiplicator
        this.x1 = this.x1Start  + this.multiplicator;
        this.generateBackground();
        this.generateEnemies();
    }

    /**
     * This Function generates the Background for the level
     * Depending on the defined level-length the amount of background-frames will be lined up next to each other
     * 
     */
    generateBackground(){
        for (let index = 0; index < this.levelLength; index++) {
               this.backgroundTemplate =    [
                    new Background('assets/img/3. Background/Layers/5. Water/L1.png', this.x, 0),
                    new Background('assets/img/3. Background/Layers/4.Fondo 2/L1.png', this.x, 0),
                    new Background('assets/img/3. Background/Layers/3.Fondo 1/L1.png', this.x, 0),
                    new Background('assets/img/3. Background/Layers/2. Floor/L1.png', this.x, 0),
                    new Background('assets/img/3. Background/Layers/1. Light/1.png', this.x, 0),
                    new Background('assets/img/3. Background/Layers/5. Water/L2.png', this.x1, 0),
                    new Background('assets/img/3. Background/Layers/4.Fondo 2/L2.png', this.x1, 0),
                    new Background('assets/img/3. Background/Layers/3.Fondo 1/L2.png', this.x1, 0),
                    new Background('assets/img/3. Background/Layers/2. Floor/L2.png',this.x1, 0),
                    new Background('assets/img/3. Background/Layers/1. Light/2.png', this.x1, 0),
                ]
             this.backgroundTemplate.forEach(layer => this.background.push(layer))
             this.increaseBackgroundX()
        }
    }

    /**
     * This Function increases x-coordinate of both background-frames, to enable a fluent background-generation 
     * 
     */
    increaseBackgroundX(){
        this.x = this.x += this.multiplicator
        this.x1 = this.x1 += this.multiplicator;
    }

    /**
     * This Function generates Enemies for the Level, according to Factor: Level-length * enemyMultiplicator
     * It generates for each iteration 1 Pufferfish & 1 Jellyfish 
     * 
     */
    generateEnemies(){
      this.enemyArray = (this.levelLength*this.enemyMultiplicator)
        for (let index = 0; index < this.enemyArray; index++) {
        this.setRandomTypes();
        this.enemyTemplate = [
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`,this.randomPufferType),
        new Jellyfish(`assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,this.randomJellyType),
      ];
      this.enemyTemplate.forEach(layer => this.enemies.push(layer))
      }
    }

    /**
     * This Function sets a random Number-type-indicator for Jelly- and Pufferfish
     * For Jellyfish between 1-4 ; for Pufferfiish bettween 1-3
     * 
     */
    setRandomTypes(){
        this.randomJellyType = Math.floor(Math.random()*4)+1;
        this.randomPufferType = Math.floor(Math.random()*3)+1;
    }

}

