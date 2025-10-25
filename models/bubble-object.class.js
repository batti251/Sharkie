class Bubble extends MoveableObjects {
  height = 50;
  width = 50;
  bubble_Array = ["assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];
  bubbleSpawns = true;

  constructor(path, character) {
    super();
    this.loadImg(path);
    this.loadImgCache(this.bubble_Array);
    this.character = character;
    this.x = this.character.x + this.character.hitboxWidth + this.character.hitboxX;
    this.y = this.character.y + this.character.hitboxHeight + this.character.hitboxY / 2;
    this.findNearestBubbleTarget();
    this.enemyMoveRight(3);
  }

  /**
   * This function sets the bubbleTarget-Interval to find and aim to the nearest Target
   * bubbleSpawn acts as Guard Clause to ensure bubble was spawned properly 
   * 
   */
  findNearestBubbleTarget() {
    clearInterval(this.targetInterval);
    this.targetInterval = setStoppableInterval(() => {
      if (!this.bubbleSpawns) return;
      this.shortestDistance = Infinity;
      this.character.world.level.enemies.forEach((object) => {
        this.updateNearestTarget(object);
      });
      this.updateBubbleTargeting();
    }, 30);
  }

  /**
   * This Function updates the nearest Target for the Bubble
   * It calculates the distance from the bubble to all Jellyfishes and the Endboss
   * Its based on the Euclidean distance
   * If the distance is shorter than the previous shortest distance, it updates the nearestObject to this dedicated object => nearestObject
   * The nearestObject is needed for the updateBubbleTargeting-Function
   *
   * @param {*} object - the dedicated enemy
   */
  updateNearestTarget(object) {
    if (!object.dead && !(object instanceof Pufferfish)) {
      this.nearestTargetX = object?.x + object?.hitboxWidth - this.x;
      this.nearestTargetY = object?.y + object?.hitboxY - this.y;
      this.nearestTargetXY = Math.sqrt(
        this.nearestTargetX * this.nearestTargetX +
          this.nearestTargetY * this.nearestTargetY);
      if (this.nearestTargetXY < this.shortestDistance) {
        this.shortestDistance = this.nearestTargetXY;
        this.nearestObject = object;
      }
    } 
  }

  /**
   * This Function updates the Bubble-Targeting
   * It calculates the direction to the nearest target
   * If the bubble is not yet close enough to the target, the bubble moves towards the target
   * If the bubble reaches the target, it triggers the collision function
   *
   */
  updateBubbleTargeting() {
    this.calculateBubbleDirection();
    if (this.x > this.nearestObject.x + this.hitRadius) {
      this.bubblePops = true
      this.character.world.bubbles = this.character.world.bubbles.filter((bubble) => bubble.bubblePops != true);
      return;
    } else if (this.distance > this.hitRadius) {
      this.moveBubbleToTarget();
    } else {
      this.collideBubbleWithTarget(this.nearestObject);
    }
  }

  /**
   * This Function calculates the vector-direction from the bubble to the nearest target
   * It calculates the distance from the bubble to the nearest target
   * It sets the hitRadius and speed for the bubble
   */
  calculateBubbleDirection() {
    this.dx = this.nearestObject.x - this.x;
    this.dy = this.nearestObject.y + this.nearestObject.hitboxY - this.y;
    this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    this.hitRadius = 40;
    this.speed = 8;
  }

  /**
   * This Function moves the bubble towards the nearest target
   * It calculates the movement distance based on the bubble speed and the remaining distance to the target
   *
   */
  moveBubbleToTarget() {
    let moveDist = Math.min(this.speed, this.distance);
    this.x += (this.dx / this.distance) * moveDist;
    this.y += (this.dy / this.distance) * moveDist;
  }

  /**
   * This Function handles the collision between the bubble and the nearest target
   * It sets the nearest target as dead and triggers its death animation
   * If the nearestObject is the Endboss, dead-status is passed, to allow multiple bubble hits.
   * It also sets the Status-Flag bubblePops true, to filter the Bubble out of the bubbles-array
   *
   */
  collideBubbleWithTarget() {
    this.bubblePops = true
    this.nearestObject instanceof Jellyfish? this.nearestObject.dead = true : "";
    this.nearestObject instanceof Endboss ? this.nearestObject.bossDamage() : this.nearestObject.jellyfishDeadAnimation()
    this.x = this.nearestObject.x;
    this.y = this.nearestObject.y;
    this.bubbleSpawns = false
    this.character.world.bubbles = this.character.world.bubbles.filter((bubble) => bubble.bubblePops != true);
    clearInterval(this.targetInterval)
  }
}
