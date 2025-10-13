class World {
character = new Character('assets/img/1.Sharkie/1.IDLE/1.png', 0, 0)
canvas;
ctx;
cameraX = 0;
keyboard;
healthbar = new Healthbar('assets/img/4. Marcadores/green/Life/100_  copia 2.png');
coinbar = new Coinbar('assets/img/4. Marcadores/green/Coin/0_  copia 4.png');
poisonbar = new Poisonbar('assets/img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png')
instruction = new Instruction('assets/img/6.Botones/Instructions 4.png');
levelFinished;


  constructor(canvas, keyboard, nextLevel, levelType) {
    console.log("Level: " + nextLevel);
    this.nextLevel = nextLevel
    this.ctx = canvas.getContext("2d");
    levelType == "boss" ? this.level = new LevelEndBoss(this.nextLevel) : this.level = new LevelRegular(this.nextLevel);
    this.draw(this.nextLevel);
    this.keyboard = keyboard
    this.setWorld();
    this.enemyDetection();
    this.checkEnemyCollisions();
    this.checkCollectiblesCollisions();
    this.setLevelEnd()
    this.finishedLevel();
    this.finishedBossLevel();
    this.findNearestBubbleTarget();
    this.endbossAttack()
  }


findNearestBubbleTarget() {
  clearInterval(this.targetInterval);
  this.targetInterval = setInterval(() => {
    if (!this.bubble) return;
    this.shortestDistance = Infinity;
    this.level.enemies.forEach(object => {
      this.updateNearestTarget(object)
    });
    this.updateBubbleTargeting()
  }, 30);
}

  updateNearestTarget(object){
      if (!object.dead && object instanceof Jellyfish) {
        this.nearestTargetX = object.x - this.bubble.x;
        this.nearestTargetY = object.y - this.bubble.y;
        this.nearestTargetXY = Math.sqrt(this.nearestTargetX * this.nearestTargetX + this.nearestTargetY * this.nearestTargetY);
        if (this.nearestTargetXY < this.shortestDistance) {
          this.shortestDistance = this.nearestTargetXY;
          this.nearestObject = object;
        }
      }
  }

updateBubbleTargeting(){
     this.calculateBubbleDirection(this.nearestObject);
      if (this.bubble.x  > this.nearestObject.x + this.hitRadius) {
        return 
      }
      else if (this.distance > this.hitRadius) {
       this.moveBubbleToTarget();
      } else {
        this.collideBubbleWithTarget(this.nearestObject);
      }
}

calculateBubbleDirection(){
      this.dx = this.nearestObject.x - this.bubble.x;
      this.dy = this.nearestObject.y - this.bubble.y;
      this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
      this.hitRadius = 40;
      this.speed = 8;
}


moveBubbleToTarget(){
      let moveDist = Math.min(this.speed, this.distance);
      this.bubble.x += (this.dx / this.distance) * moveDist;
      this.bubble.y += (this.dy / this.distance) * moveDist;
}

collideBubbleWithTarget(){
      this.nearestObject.dead = true
      this.nearestObject.jellyfishDeadAnimation()
      this.bubble.x = this.nearestObject.x;
      this.bubble.y = this.nearestObject.y;
      delete this.bubble 
}

  /**
   *This Function defines level-settings for the border and the end of the level
  */
  setLevelEnd(){
      this.levelType = this.level.constructor
      this.levelEnd = this.level.x - 1940
      this.levelBorder = this.level.x - 1940
  }

  /**
   * This Function checks, if the defined finish-Border is passed
   * @returns - Boolean, returns true, when the character is atleast at the same x-coordinate as the levelEnd or beyond
   */
  levelIsFinished(){
    return this.character.x >= this.levelEnd
  }

  /**
   * This Function sets the end of the regular-level
   * 
   */
  finishedLevel(){
    this.finishLevelInterval = setInterval(() => {
      this.levelIsFinished()
      if (this.levelIsFinished() && this.levelType == LevelRegular) {
         clearInterval(this.finishLevelInterval)
         this.levelFinished = true
      this.showVictoryScreen();
      } 
      }, 200);

    }


  showDefeatScreen(){
       let defeat = document.getElementById('defeat-screen')
       let panel = document.getElementById('panel')
       defeat.classList.remove('d-none')
       panel.classList.add('d-none')
       this.keyboard = null
       this.clearAllIntervals()
      setTimeout(() => {
       toggleTryAgainButtton()
      }, 1000);
  }

  /**
   * This Function shows the Victory Screen, when the level is done successfuly
   * It shows the Continue-Button to enter the next level
   * It denies the keyboard-functions to prevent further character-movement
   */
  showVictoryScreen(){
       let victory = document.getElementById('victory-screen')
       let panel = document.getElementById('panel')
       victory.classList.remove('d-none')
       panel.classList.add('d-none')
       this.keyboard = null
       this.clearAllIntervals()
      setTimeout(() => {
       addContinueButton()
      }, 1000);
  }

  /**
   * This Function sets the end of the boss-level
   * 
   */
  finishedBossLevel(){
    this.spawnBoss();
    this.defeatBoss();
  }

  /**
   * This Function listens, to spawn the boss when character passes the level-border
   */
  spawnBoss(){
      this.spawnBossInterval = setInterval(() => {
         if (this.levelIsFinished() && this.levelType == LevelEndBoss) {
          world.level.bossSpawn();
          clearInterval(this.spawnBossInterval)
        } 
      }, 200);
  }

  /**
   * This Function listens, if the boss was defeated
   * It shows the Victory-Screen, on success
   */
  defeatBoss(){
    this.finishBossLevelInterval =  setInterval(() => {
      this.levelIsFinished()
      if (this.level.bossFinished){
        clearInterval(this.finishBossLevelInterval)
        this.showVictoryScreen();
      }
    }, 200);
  }

      
  /**
   * This Function detects collision from the character with the collectibles
   * If a collision is detected, it calls the fill-bar-function
   * 
   */
  checkCollectiblesCollisions(){
    clearInterval(this.coinsInterval)
    clearInterval(this.poisonInterval)
    this. coinsInterval = setInterval(() => {
      this.level.coins.forEach(coin => {
        if (this.character.isInsideBorder(coin) && this.character.canCollect) {
            this.coinbar.fillCoinbar(coin);
            }
           })
    }, 200);
    this.poisonInterval = setInterval(() => {
      this.level.poison.forEach(poison => {
        if (this.character.isInsideBorder(poison)) {
            this.poisonbar.fillPoisonbar(poison);
           }
           })
    }, 200);
  }

    /**
     * This Function triggers the angry-state of all enemies, when character is detected
     * This Function let the Pufferfishes trigger the transformation Animation
     * They will move straight to the left, when triggered
     * 
     */
    enemyDetection(){
      clearInterval(this.detection)
       this.detection = setInterval(() => {
            this.level.enemies.forEach(enemie => {
            if (this.character.isDetected(enemie) && !enemie.angry && enemie instanceof Enemies){
              enemie instanceof Pufferfish? enemie.enemyDetectionAnimation(enemie): "";
              enemie.angry = true;
            } 
          });
        }, 100);
    }

  /**
   * This Function checks the Collision-forms from the character with an Enemy-Object with each iteration
   * This Function iterates each 100 miliseconds
   */
  checkEnemyCollisions(){
    clearInterval(this.collisionInterval)
    this.collisionInterval = setInterval(() => {
      this.level.enemies.forEach(object => {
        this.characterHitsEnemy(object);
        this.characterTakesDamage(object)
        this.checkEndbossCollisions(object)
      });
    },200);
  }


  /**
   * This Function indicates collision during characters slap-animation with the referenced object
   * @param {*} object - the referenced object => Boss only
   */
    checkEndbossCollisions(object){
        if (this.character.isInsideSlapBorder(object) && this.character.doesDamage && !this.character.hitted && (object instanceof Endboss)) {
            object.bossDamage()
             if (object.life <= 0) {
               object.bossDieAnimation()
                }
              }  
    }

  /**
   * This Function indicates collision during characters slap-animation with the referenced object
   * @param {*} object - the referenced object => enemies, except Boss
   */
  characterHitsEnemy(object){
      if (this.character.isInsideSlapBorder(object) && this.character.doesDamage && !this.character.hitted && !(object instanceof Endboss)) {
          object.x = -1000
          } 
    }

  /**
   * This Function indicates collision with the referenced object, when the character is not attacking
   * @param {*} object - the referenced object => enemy 
   */
  characterTakesDamage(object){
   if(this.character.isInsideBorder(object) && this.character.life > 0){
        this.character.damage(this.character,object);
      object instanceof Jellyfish ? this.character.jellyHitAudio.play() : this.character.regularHitAudio.play();
        this.healthbar.updatehealthbar(this.character.maxLife, this.character.life);
        }
          if (this.character.life <=0) {
            this.keyboard = null
            this.character.sharkieDieAnimation();
            this.showDefeatScreen();
          }
      }

/**
 * This Function calls the Boss-Attack, if the Attack is not on Cooldown
 */
  endbossAttack(){
    setInterval(() => {
      this.level.enemies.forEach(object => {
        if ((object instanceof Endboss) && object.angry && !object.bossAttackOnCooldown){
          object.bossAttack()
        }
      })
    }, 300);
  }

  setWorld(){
    this.character.world = this
  }

    /**
     * This Function loads the game-UI
     * 
     */
    draw(level) {
      this.drawCanvas()
      this.ctx.translate(this.cameraX, 0) 
      this.drawObjects(level);
      if (this.character.shotBubble) {
      this.addImgObjectToMap(this.bubble)
      }
      this.ctx.translate(-this.cameraX, 0) 
      this.drawHUD();
      this.nextLevel == 0? this.addImgObjectToMap(this.instruction):"";
      if (this.levelFinished) {
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
     drawObjects(level){
        this.addImgObjectsToMap(this.level.background)
        this.addImgObjectsToMap(this.level.coins);
        this.addImgObjectsToMap(this.level.poison);
        this.addImgObjectsToMap(this.level.enemies)
        this.addImgObjectToMap(this.character)

    }


    /**
     * This Function draws all Objects, that don't move relative to the camera
     *  => Health-, Coin-, Poisonbar
     * 
     */
     drawHUD(){
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
    addImgObjectToMap(object){
      if (!object) {
        return
      }
      if (object.mirrorImage) {
            this.ctx.save()
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
      }
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(object.x +object.hitboxX, object.y + object.hitboxY, object.hitboxWidth, object.hitboxHeight);
            //this.ctx.strokeRect(object.x, object.y, object.hitboxWidth, object.hitboxHeight);
      this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
        if (object.mirrorImage) {
              object.x = object.x * -1;
              this.ctx.restore()
      }
    }
    /**
     * This Function iterates through an Array and draws an Image-Layer for each Element in it
     * 
     * @param {Array} objectArray - Array with all new called Objects 
     */
    addImgObjectsToMap(objectArray){
      objectArray.forEach(object => {
        this.addImgObjectToMap(object);
      });
    }


    /**
     * This Function repeats the draw()-function
     * It is called, until the level is finished
     */
    imgAnimationLoop(){
     let self = this;
     this.instance = requestAnimationFrame(() => {self.draw()});
    }

    /**
     * This Function stops the imgAnimationLoop
     * It is called, when the level is finished
     */
    stopAnimationLoop(){
     cancelAnimationFrame(this.instance);
}


  clearAllWorldIntervals(){
    clearInterval(this.collisionInterval)
    clearInterval(this.coinsInterval)
    clearInterval(this.poisonInterval)
    clearInterval(this.detection)
    clearInterval(this.finishLevelInterval)
    clearInterval(this.targetInterval)
    clearInterval(this.spawnBossInterval)
    clearInterval(this.finishBossLevelInterval)
  }

  clearAllIntervals(){
    this.clearAllWorldIntervals()
    this.character.clearCharacterIntervals()
    this.level.enemies?.forEach(e => e.clearAllEnemieIntervals?.());
    this.level.enemies?.forEach(e => e.clearBossIntervalls?.());
  }



  
}