let intervalIds = [];
let timeoutIds = [];
let resumeTimeouts = [];
let resumeIntervals = [];
let i = 1;

/**
 * This Function opens the legal-notice-container
 * It generates via HTML-Template
 */
function openLegalNotice() {
  let legalContainer = document.getElementById("legal-notice-container");
  legalContainer.classList.remove("d-none");
  legalContainer.innerHTML = addLegalTextTemplate();
}

/**
 * This Function closes the legal-notice-container
 */
function closeLegalNotice() {
  let legalContainer = document.getElementById("legal-notice-container");
  legalContainer.classList.add("d-none");
  legalContainer.innerHTML = "";
}

/**
 * This Function listens to the click event
 * When the click event target the menu-background-id the legal-notice will be closed
 * This should enable closing the legal-notice, when clicking outside of the legal-notice-container
 */
document.addEventListener("click", (event) => {
  event.target.id == "menu-background" ? closeLegalNotice() : "";
});


/**
 * This Function starts the game from the menu
 * It hides all none game-relevant objects
 * It creates the first level (Instruction-Level)
 * It detects if the used device is a touchdevice, to set the touchpanel accordingly
 *
 */
function startGame() {
  removeButtons();
  removeMenu();
  world = new World(canvas, keyboard, 1, "boss");
  isMobileDevice();
}

/**
 * This Function checks if the current window supports touch-events
 * => touch device, like mobilephone, or tablet
 */
function isMobileDevice() {
  let mobileController = document.getElementById("panel");
  if (
    "ontouchstart" in window ||
    navigator.msMaxTouchPoints > 0 ||
    navigator.maxTouchPoints > 0
  ) {
    mobileController.classList.remove("d-none");
    console.log("touch");
  } else {
    mobileController.classList.add("d-none");
  }
}

/**
 * This Function hides all menu butttons
 * game-relevant buttons (=important) are visible on the screen
 */
function removeButtons() {
  let important = document.getElementsByClassName("game-relevant");
  let buttons = document.getElementsByTagName("button");
  [...buttons].forEach((btn) => btn.classList.add("d-none"));
  [...important].forEach((btn) => btn.classList.remove("d-none"));
}

/**
 * This Function hides the menu-background
 */
function removeMenu() {
  let menu = document.getElementById("menu-background");
  menu.classList.add("d-none");
}

/**
 * This Function hides the victory-screen
 */
function removeVictoryScreen() {
  let victory = document.getElementById("victory-screen");
  victory.classList.add("d-none");
}

/**
 * This Function hides the defeat-screen
 */
function removeDefeatScreen() {
  let defeat = document.getElementById("defeat-screen");
  defeat.classList.add("d-none");
}

/**
 * This Function toggles the visibility of the Continue-Button
 */
function toggleContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.toggle("d-none");
}

/**
 * This Function hides the continue-button
 */
function removeContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.add("d-none");
}

/**
 * This Function shows the continue-button
 */
function addContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.remove("d-none");
}

/**
 * This Function shows the try-again-button
 */
function addTryAgainButtton() {
  let tryAgainButton = document.getElementById("try-again");
  tryAgainButton.classList.remove("d-none");
}

/**
 * This Function hides the try-again-button
 */
function removeTryAgainButton() {
  let tryAgainButton = document.getElementById("try-again");
  tryAgainButton.classList.add("d-none");
}

/**
 * This Function restarts the current level
 * This Function is called during the defeat-screen
 */
function tryAgainLevel() {
  resetIntervalTimeouts();
  removeTryAgainButton();
  removeDefeatScreen();
  isMobileDevice();
  let addLevel = world.level.levelLength;
  let levelType = addLevel % 1 === 0 ? "boss" : "regular";
  world = new World(canvas, keyboard, addLevel, levelType);
}

/**
 * This Function starts the next Level, when the Next-Button was clicked successfully
 * It can only be clicked, when Level has been finished
 *
 */
function nextLevel() {
  resetIntervalTimeouts();
  removeContinueButton();
  removeVictoryScreen();
  isMobileDevice();
  let addLevel = (world.nextLevel ?? 0) + 1;
  let levelType = addLevel % 3 === 0 ? "boss" : "regular";
  world = new World(canvas, keyboard, addLevel, levelType);
}

/**
 * This Function toggles the Fullscreen-Mode of the Browser
 * If the Browser is in Fullscreen-Mode, it will be closed
 * If the Browser is not in Fullscreen-Mode, it will be opened
 *
 */
function toggleFullscreen() {
  !!document.fullscreenElement ? closeFullscreen() : openFullscreen();
}

/**
 * This Function opens the Browser in Fullscreen-Mode
 * Works for most browsers (Chrome, Firefox, Edge, Safari)
 * webkit and ms prefixes are for Safari and IE11
 */
function openFullscreen() {
  let page = document.documentElement;
  if (page.requestFullscreen) {
    page.requestFullscreen();
  } else if (page.webkitRequestFullscreen) {
    page.webkitRequestFullscreen();
  } else if (page.msRequestFullscreen) {
    page.msRequestFullscreen();
  }
}

/**
 * This Function closes  Fullscreen-Mode
 * Works for most browsers (Chrome, Firefox, Edge, Safari)
 * webkit and ms prefixes are for Safari and IE11
 */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

/**
 * This Function wether pauses or resumes the game, depending on the world.paused state
 */
function backToMenu() {
  pauseGame();
  window.location.href = "https://sebastian-buenz.developerakademie.net/Sharkie/index.html";
}

/**
 * This Function sets the changed sound value to the session storage
 *
 * @param {*} v - the set sound value between 0.01 - 1.00 => in 0.01 steps
 */
function setSessionVolume(v) {
  sessionStorage.setItem("volume", v);
}

/**
 * This Function pause the Game and stops Animation rendering
 * It sets the world.paused state to true
 */
function pauseGame() {
  world.paused = true;
  intervalIds.forEach(clearInterval);
  timeoutIds.forEach(clearTimeout);
}

/**
 * This Function shows the defeat, or victory-screen depending on the incident
 * @param {String} state - the dedicated incident: "victory" or "defeat"
 */
function triggerScreenOverlay(state) {
  let screen = document.getElementById(`${state}-screen`);
  let panel = document.getElementById("panel");
  screen.classList.remove("d-none");
  panel.classList.add("d-none");
}



/**
 * This function gives an intervalfunction an unique id
 * The id is pushed into the intervalIds-Array, to clear Intervals properly on levelend and pause
 * @param {*} fn - the function that is called in the interval-function
 * @param {*} time - set miliseconds of the interval-function
 * @returns - returns the unique id, to prevent interval stacking
 */
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
  resumeIntervals.push(id);
  return id;
}

/**
 * This function gives a timeoutfunction an unique id
 * The id is pushed into the timeoutIds-Array, to clear Timeouts properly on levelend and pause
 * @param {*} fn - the function that is called in the timeout-function
 * @param {*} time - set miliseconds of the timeout-function
 * @returns - returns the unique id, to prevent timeout stacking
 */
function setStoppableTimeout(fn, time) {
  let id = setTimeout(fn, time);
  timeoutIds.push(id);
  resumeTimeouts.push(id);
  return id;
}

/**
 * This Function resets all collected intervals and timeouts
 * It sets the Array-length to 0
 *
 */
function resetIntervalTimeouts() {
  intervalIds.forEach(clearInterval);
  timeoutIds.forEach(clearTimeout);
  intervalIds.length = 0;
  timeoutIds.length = 0;
}
