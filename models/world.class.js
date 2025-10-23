class World {
  character = new Character("assets/img/1.Sharkie/1.IDLE/1.png", 0, 0, this);
  canvas;
  ctx;
  cameraX = 300;
  keyboard;
  healthbar = new Healthbar("assets/img/4. Marcadores/green/Life/100_  copia 2.png",this);
  coinbar = new Coinbar("assets/img/4. Marcadores/green/Coin/0_  copia 4.png");
  poisonbar = new Poisonbar("assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",this);
  instruction = new Instruction("assets/img/6.Botones/Instructions 4.png");
  combat = new Combat(this);

  constructor(canvas, keyboard, nextLevel, levelType) {
    this.nextLevel = nextLevel;
    this.ctx = canvas.getContext("2d");
    this.setLevel(nextLevel,levelType)
    this.keyboard = keyboard;
    this.setWorld();
    this.setLevelEnd();
    this.finishedLevel();
    this.finishedBossLevel();
    this.endbossAttack();
    this.draw();
  }

  setLevel(nextLevel,levelType){
    if (nextLevel == 0 ) {
      this.level = new LevelInstruction(this.nextLevel)
      return
    } else levelType == "boss" ? (this.level = new LevelEndBoss(this.nextLevel)) : (this.level = new LevelRegular(this.nextLevel))
  }

  /**
   * This Function triggers the game defeat, when characters life is 0 or below
   * It sets the keyboard to null, to avoid further movements
   * It calls the sharkieDieAnimation-Function from Character
   * It calls the showDefeatScreen-Function from World after short delay
   */
  gameDefeat() {
    this.character.sharkieDieAnimation();
    this.showDefeatScreen();
  }

  /**
   *This Function defines level-settings for the border and the end of the level
   */
  setLevelEnd() {
    this.levelType = this.level.constructor;
    this.levelEnd = this.level.x - canvas.width -20;
    this.levelBorder = this.level.x - canvas.width -20;
  }

  /**
   * This Function checks, if the defined finish-Border is passed
   * @returns - Boolean, returns true, when the character is atleast at the same x-coordinate as the levelEnd or beyond
   */
  levelIsFinished() {
    return this.character.x >= this.levelEnd;
  }

  /**
   * This Function sets the end of the regular-level
   *
   */
  finishedLevel() {
    let finishInterval = setStoppableInterval(() => {
      if (this.levelIsFinished() && (this.levelType == LevelRegular || this.levelType == LevelInstruction )) {
        this.showVictoryScreen();
        clearInterval(finishInterval);
      }
    }, 200);
  }

  /**
   * This Function shows the Defeat Screen, when the level was failed
   * It shows the Try-Again-Button, to restart the current level
   */
  showDefeatScreen() {
    this.stopLoop = true
    this.levelFinished = false;
    triggerScreenOverlay("defeat");
    this.level.defeatAudio.play();
    let showButtonTimeout = setStoppableTimeout(() => {
      addTryAgainButtton();
      clearTimeout(showButtonTimeout);
      pauseGame();
    }, 1000);
  }

  /**
   * This Function shows the Victory Screen, when the level was done successfuly
   * It shows the Continue-Button to enter the next level
   * It denies the keyboard-functions to prevent further character-movement
   */
  showVictoryScreen() {
    this.stopLoop = true
    this.levelFinished = true;
    triggerScreenOverlay("victory")
    pauseGame();
    this.level.victoryAudio.play();
    let showButtonTimeout = setStoppableTimeout(() => {
      addContinueButton();
      clearTimeout(showButtonTimeout);
    }, 1000);
  }

  /**
   * This Function sets the end of the boss-level
   *
   */
  finishedBossLevel() {
    this.spawnBoss();
    this.defeatBoss();
  }

  /**
   * This Function listens, to spawn the boss when character passes the level-border
   */
  spawnBoss() {
    let boss = this.level.enemies.filter((enemie) => enemie.boss);
    let bossInterval = setStoppableInterval(() => {
      if (this.levelIsFinished() && this.levelType == LevelEndBoss) {
        boss[0].bossSpawn();
        clearInterval(bossInterval);
      }
    }, 200);
  }

  /**
   * This Function listens, if the boss was defeated
   * It shows the Victory-Screen, on success
   */
  defeatBoss() {
    let killedBossInterval = setStoppableInterval(() => {
      this.levelIsFinished();
      if (this.level.bossFinished) {
        clearInterval(killedBossInterval);
        this.showVictoryScreen();
      }
    }, 200);
  }

  /**
   * This Function calls the Boss-Attack, if the Attack is not on Cooldown
   */
  endbossAttack() {
    setStoppableInterval(() => {
      this.level.enemies.forEach((object) => {
        if (
          object instanceof Endboss &&
          object.angry &&
          !object.bossAttackOnCooldown
        ) {
          object.bossAttack();
        }
      });
    }, 300);
  }

  setWorld() {
    this.character.world = this;
  }

  /**
   * This Function loads the game-UI
   *
   */
  draw() {
    this.drawCanvas();
    this.ctx.translate(this.cameraX, 0);
    this.drawObjects();
    this.bubble ? this.addImgObjectToMap(this.bubble) : "";
    this.ctx.translate(-this.cameraX, 0);
    this.drawHUD();
    this.nextLevel == 0 ? this.addImgObjectToMap(this.instruction) : "";
    if (this.stopLoop) {
        this.stopAnimationLoop()
      } else {
      this.imgAnimationLoop();
      }
  }


  /**
   * This function draws all Objects, that move relative to the camera
   *  => Background, collectibles, enemies, character
   *
   */
  drawObjects() {
    this.addImgObjectsToMap(this.level.background);
    this.addImgObjectsToMap(this.level.coins);
    this.addImgObjectsToMap(this.level.poison);
    this.addImgObjectsToMap(this.level.enemies);
    this.addImgObjectToMap(this.character);
  }

  /**
   * This Function draws all Objects, that don't move relative to the camera
   *  => Health-, Coin-, Poisonbar
   *
   */
  drawHUD() {
    this.addImgObjectToMap(this.healthbar);
    this.addImgObjectToMap(this.coinbar);
    this.addImgObjectToMap(this.poisonbar);
  }

  /**
   * This Function refreshes the Canvas on each frame
   *
   */
  drawCanvas() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the Canvas on the current frame
    this.ctx.fillStyle = "black"; //background-color
    this.ctx.fillRect(0, 0, canvas.width, canvas.height); // adds x, y, width and height to the canvas + fillstyle
  }

  /**
   * This function draws a single Image to the Canvas
   *
   * @param {Object} object - The Object Source
   *
   * It draws depending on the objects: img, x-coordinate, y-coordinate, width and height
   */
  addImgObjectToMap(object) {
    if (!object) {
      return;
    }
    if (object.mirrorImage) {
      this.ctx.save();
      this.ctx.translate(object.width, 0);
      this.ctx.scale(-1, 1);
      object.x = object.x * -1;
    }
     this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "black";
    this.ctx.strokeRect(
      object.x + object.hitboxX,
      object.y + object.hitboxY,
      object.hitboxWidth,
      object.hitboxHeight
    );
    
    this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    if (object.mirrorImage) {
      object.x = object.x * -1;
      this.ctx.restore();
    }
  }
  /**
   * This Function iterates through an Array and draws an Image-Layer for each Element in it
   *
   * @param {Array} objectArray - Array with all new called Objects
   */
  addImgObjectsToMap(objectArray) {
    objectArray.forEach((object) => {
      this.addImgObjectToMap(object);
    });
  }

  /**
   * This Function repeats the draw()-function
   * It is called, until the level is finished
   */
  imgAnimationLoop() {
    let self = this;
      this.instance = requestAnimationFrame(() => {
      self.draw();
    });
  }

 /**
     * This Function stops the imgAnimationLoop
     * It is called, when the level is finished
     */
  stopAnimationLoop(){
     cancelAnimationFrame(this.instance);
}
}
