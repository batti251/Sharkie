class Bubble extends MoveableObjects {
  height = 50;
  width = 50;

  bubble_Array = ["assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];

  constructor(path, character) {
    super().loadImg(path);
    this.character = character;
    this.x =
      this.character.x + this.character.hitboxWidth + this.character.hitboxX;
    this.y =
      this.character.y +
      this.character.hitboxHeight +
      this.character.hitboxY / 2;
    this.loadImgCache(this.bubble_Array);
    this.findNearestBubbleTarget();
    this.enemyMoveRight(3); //rename
  }

  /**
   * This function sets the bubbleTarget-Interval to find and aim to the nearest Target
   */
  findNearestBubbleTarget() {
    clearInterval(this.targetInterval);
    this.targetInterval = setStoppableInterval(() => {
      if (!world.bubble) return;
      this.shortestDistance = Infinity;
      this.character.world.level.enemies.forEach((object) => {
        this.updateNearestTarget(object);
      });
      this.updateBubbleTargeting();
    }, 30);
  }

  /**
   * This Function updates the nearest Target for the Bubble
   * It calculates the distance from the bubble to each Jellyfish
   * Its based on the Euclidean distance
   * If the distance is shorter than the previous shortest distance, it updates the nearestObject to this dedicated object => nearestObject
   * The nearestObject is needed for the updateBubbleTargeting-Function
   *
   * @param {*} object - the dedicated enemy
   */
  updateNearestTarget(object) {
    if (!object.dead && object instanceof Jellyfish) {
      this.nearestTargetX = object?.x - this.x;
      this.nearestTargetY = object?.y - this.y;
      this.nearestTargetXY = Math.sqrt(
        this.nearestTargetX * this.nearestTargetX +
          this.nearestTargetY * this.nearestTargetY
      );
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
    this.calculateBubbleDirection(this.nearestObject);
    if (this.x > this.nearestObject.x + this.hitRadius) {
      //delete bubble here
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
    this.dy = this.nearestObject.y - this.y;
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
   * It moves the bubble to the target's position and then deletes the bubble
   *
   */
  collideBubbleWithTarget() {
    this.nearestObject.dead = true;
    this.nearestObject.jellyfishDeadAnimation();
    this.x = this.nearestObject.x;
    this.y = this.nearestObject.y;
    delete world.bubble;
  }
}
