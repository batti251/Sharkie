class Combat {
  constructor(world) {
    this.world = world;
    this.enemyDetection();
    this.checkEnemyCollisions();
  }

  /**
   * This Function triggers the angry-state of the enemy, when character is detected
   * When triggered the enemy will move straight to the left (towards the character)
   *
   */
  enemyDetection() {
    clearInterval(this.detection);
    this.detection = setStoppableInterval(() => {
      this.world.level.enemies.forEach((enemie) => {
        if (this.world.character.isDetected(enemie) && !enemie.dead) {
          this.triggerAngryEnemy(enemie);
        }
      });
    }, 100);
  }

  /**
   * This Function calls the animateObject-Function from MoveableObjects
   * It checks if the enemie is angry, to trigger the angry-Animation
   * If the Enemy is a Pufferfish it let the Pufferfishes trigger the transformation Animation
   *
   * @param {*} enemie - The dedicated Object: Enemies
   */
  triggerAngryEnemy(enemie) {
    enemie.angry = true;
    enemie instanceof Pufferfish ? enemie.enemyDetectionAnimation() : "";
  }

  /**
   * This Function checks the Collision-forms from the character with an Enemy-Object with each iteration
   * This Function iterates each 100 miliseconds
   */
  checkEnemyCollisions() {
    clearInterval(this.collisionInterval);
    this.collisionInterval = setStoppableInterval(() => {
      this.world.level.enemies.forEach((object) => {
        this.characterHitsListener(object);
        this.characterDamageListener(object);
        this.checkEndbossCollisions(object);
      });
    }, 200);
  }

  /**
   * This Function indicates collision during characters slap-animation with the referenced object
   * It checks if character is inside the border of the referenced object
   * It checks if characters doesDamage is true, to indicate that the character is currently slapping
   * It checks if character hitted is false, to avoid multiple hits during one slap
   * It checks if the referenced object is not an instance of Endboss, to avoid damaging the boss with this function
   *
   * @param {*} object - the referenced object => enemies, except Boss
   */
  characterHitsListener(object) {
    if (
      this.world.character.abilities.isInsideSlapBorder(object) &&
      this.world.character.doesDamage &&
      !this.world.character.hitted &&
      !(object instanceof Endboss)
    ) {
      this.killEnemie(object);
    }
  }

  /**
   * This Function removes all dead enemies from the enemies-array
   * It filters the enemies-array, to keep only the enemies that are not dead
   * It is called after an enemy is hit by the character
   */
  killEnemie(object) {
    object.isDead = true;
    this.world.level.enemies = this.world.level.enemies.filter(
      (object) => !object.isDead
    );
  }

  /**
   * This Function indicates collision during characters slap-animation with the referenced object
   * @param {*} object - the referenced object => Boss only
   */
  checkEndbossCollisions(object) {
    if (
      this.world.character.abilities.isInsideSlapBorder(object) &&
      this.world.character.doesDamage &&
      !this.world.character.hitted &&
      object instanceof Endboss
    ) {
      object.bossDamage();
      if (object.life <= 0) {
        object.bossDieAnimation();
      }
    }
  }

  /**
   * This Function indicates collision with the referenced object
   * It checks if character is inside the border of the referenced object
   * It checks if characters life is above 0, to avoid further damage when life is 0 or below
   *
   * @param {*} object - the referenced object => enemy
   */
  characterDamageListener(object) {
    if (
      this.world.character.isInsideBorder(object) &&
      this.world.character.life > 0 &&
      !this.world.character.doesDamage
    ) {
      this.characterTakesDamage(object);
    }
    if (this.world.character.life <= 0) {
      this.world.gameDefeat();
    }
  }

  /**
   * This Function lets the character take damage from the referenced object
   * It calls the damage-Function from Character
   * It plays a specific hurt-sound, depending on the referenced object
   * It updates the healthbar after taking damage
   *
   * @param {*} object
   */
  characterTakesDamage(object) {
    this.world.character.damage(this.world.character, object);
    this.playHurtSound(object);
    this.world.character.takesDamage = true;
    this.world.healthbar.HealthbarListener(
      this.world.character.maxLife,
      this.world.character.life
    );
  }

  /**
   * This Function plays a specific hurt-sound, depending on the referenced object
   * When object is Jellyfish => play jellyHitAudio
   * When object is RegularEnemy => play regularHitAudio
   *
   * @param {*} object - the referenced object => enemies
   */
  playHurtSound(object) {
    object instanceof Jellyfish
      ? this.world.character.jellyHitAudio.play()
      : this.world.character.regularHitAudio.play();
  }
}
