class Level1 {

levelLength;
amountEnemies;
amountCoins;
amountPoisons;
xStart = -300;
x1Start = 479;
multiplicator = 1559;        

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
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${2}.swim1.png`,2),
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${2}.swim1.png`,2),
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${3}.swim1.png`,3),
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${3}.swim1.png`,3),
  new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${3}.swim1.png`,3),
  new Jellyfish(`assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,4)
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



    generateEnemies(){
      enemyStack = [
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/${1}.swim1.png`,1),
        new Jellyfish('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png'),
        new Jellyfish('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png'),
        new Jellyfish('assets/img/2.Enemy/2 Jelly fish/Regular dangerous/Yellow 1.png'),
        new Jellyfish('assets/img/2.Enemy/2 Jelly fish/Regular dangerous/Lila 1.png')
      ];
    }
}