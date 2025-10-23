class LevelInstruction extends Level {
  constructor(level) {
    super();
    this.levelLength = level;
    this.x = this.xStart + this.multiplicator;
    this.x1 = this.x1Start + this.multiplicator;
    this.generateLevelObjects(1);
  }
}
