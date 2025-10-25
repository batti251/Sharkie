class Enemies extends MoveableObjects {
  currentImg = 0;
  speed = 0.25;
  speedX = 0.75;
  speedY = 0.25;
  damage;
  angry = false;
  coinToss;
  isMoving;
  lastIsMoving;

  /**
   * This Function calls Enemies (Minions) to move
   * If the Enemy gets angry-state the Movement is set to left, to try to hit the character
   * The Turning-direction is set randomly, until character detection
   * The Y-Coordinate is set randomly to vary the height-movement
   *
   * @param {Number} speedX - px-value for X-Coordinate
   * @param {Number} speedY - px-value for Y-Coordinate
   */
  enemyMinionMovement(speedX, speedY) {
    clearInterval(this.interval);
    this.interval = setStoppableInterval(() => {
      if (this.angry) {
        this.enemyLeft(2.5);
      }
    }, 100);
    this.randomTurn(speedX);
    this.setRandomCoordinateY(speedY);
  }

  /**
   * This Function wether let the Enemies move left, or right, depending on coinToss-Function
   * The Function is called every 2 seconds
   *
   * @param {*} speedX - px-value for X-Coordinate
   */
  randomTurn(speedX) {
    this.randomTurnInterval = setStoppableInterval(() => {
      this.coinToss = Math.random() * 1;
      if (this.coinToss > 0.5) {
        this.enemyLeft(speedX);
        return;
      } else {
        this.enemyRight(speedX);
        return;
      }
    }, 2000);
  }

  /**
   * This Function let the assigned Object move a random height up and down
   *
   * @param {Number} speedY - px-value for Y-Coordinate
   */
  setRandomCoordinateY(speedY) {
    this.randomCoordinateYInterval = setStoppableInterval(() => {
      setStoppableTimeout(() => {
        this.moveDown(speedY);
      }, Math.floor(Math.random() * 300) + 100);
      setStoppableTimeout(() => {
        this.moveUp(speedY);
      }, Math.floor(Math.random() * 300) + 100);
    }, 500);
  }

  /**
   * This function reduces the Y-Coordinate and let the Enemy move up
   * The Movement is set to 60 FPS
   *
   * @param {Number} speed - The px-value
   */
  moveUp(speedY) {
    clearInterval(this.resetIntervalY);
    this.resetIntervalY = setStoppableInterval(() => {
      if (this.y > -100) {
        this.y -= speedY;
      }
    }, 1000 / 60);
  }

  /**
   * This function raises the Y-Coordinate and let the Enemy move down
   * The Movement is set to 60 FPS
   *
   * @param {Number} speed - The px-value
   */
  moveDown(speedY) {
    clearInterval(this.resetIntervalY);
    this.resetIntervalY = setStoppableInterval(() => {
      if (this.y < 680) {
        this.y = this.y + speedY;
      }
    }, 1000 / 60);
  }

  /**
   * This Function calls the Enemy to move right
   * It clears the previous Interval, to turn directly
   * @param {Number} speed - The px-value
   */
  enemyRight(speedX) {
    clearInterval(this.resetIntervalX);
    this.enemyMoveRight(speedX);
  }

  /**
   * This Function calls the Enemy to move left
   * It clears the previous Interval, to turn directly
   *
   * @param {Number} speed - The px-value
   */
  enemyLeft(speedX) {
    clearInterval(this.resetIntervalX);
    this.enemyMoveLeft(speedX);
  }
}
