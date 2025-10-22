class Keyboard {
  UP = false;
  RIGHT = false;
  DOWN = false;
  LEFT = false;
  SPACE = false;
  ESC = false;
  ENTER = false;

  constructor() {
    this.setKeyNavigation();
  }

  /**
   * This Function sets additional KeyListeners, so the user has more usage-features when using the keyboard
   * Its currently set for starting the game, continue or try again a level, or go back to the menu
   *
   */
  setKeyNavigation() {
    this.escListener();
    this.enterLevelListener();
    this.enterGameStartListener();
  }

  /**
   * This Function allows the user go back to the menu, when pressed the escape-key
   * It works only, when the user is in a current game
   *
   */
  escListener() {
    let escInterval = setInterval(() => {
      if (this.ESC && world) {
        backToMenu();
        clearInterval(escInterval);
      }
    }, 1000 / 60);
  }

  /**
   * This Function allows the user to use the continue-/ tryAgain-button, when pressed the enter-key
   * It works only, when the user finished or defeated the level and the victory-/defeat-screen appears
   *
   */
  enterLevelListener() {
    let enterLevelInterval = setInterval(() => {
      if (this.ENTER && world?.paused) {
        world.levelFinished ? nextLevel() : tryAgainLevel();
      }
    }, 1000 / 60);
  }

  /**
   * This Function allows the user to start the game from the menu, when pressed the enter-key
   * It works only, when the user is in the menu
   *
   */
  enterGameStartListener() {
    let enterStartGameInterval = setInterval(() => {
      if (this.ENTER && !world) {
        startGame();
        clearInterval(enterStartGameInterval);
      }
    }, 1000 / 60);
  }
}
