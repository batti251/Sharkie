class LevelInstruction extends Level {
  constructor(level) {
    super();
    this.levelLength = level;
    this.x = this.xStart + this.multiplicator;
    this.x1 = this.x1Start + this.multiplicator;
    this.generateLevelObjects(1);
    this.generateInstructionJellyfish()
    this.generateInstructionPufferfish()
    this.generateInstructionPoison()
  }



   /**
   * This Function generates the Pufferfishes for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Pufferfish
   * This properties are only set in Instruction-level
   */
  generateInstructionPufferfish() {
    for (let index = 0; index < 2; index++) {
      this.setRandomTypes();
      this.setRandomPosition();
      this.enemies.push(new Pufferfish(`assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`,this.randomPufferType,this.randomXPosition,false
        )
      );
    }
  }

  /**
   * This Function generates the Jellyfishes for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Jellyfish
   * This properties are only set in Instruction-level
   */
  generateInstructionJellyfish() {
    for (let index = 0; index < 2; index++) {
      this.setRandomTypes();
      this.setRandomPosition();
      this.enemies.push(new Jellyfish(`assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png`,this.randomJellyType,this.randomXPosition, false)
      );
    }
  }

    /**
   * This Function generates the collectible Poisons for the Level, according to Factor: Level-length * enemyMultiplicator
   * It generates for each iteration 1 Poison
   * This properties are only set in Instruction-level
   */
  generateInstructionPoison() {
    for (let index = 0; index < 2; index++) {
      this.setRandomPosition();
      this.poison.push(
        new POISONS(`assets/img/4. Marcadores/Posión/Animada/1.png`,500)
      );
    }
  }


}
