function toggleLegalNotice() {
  document.getElementById("legal-notice-container").classList.toggle("d-none");
}

function startGame() {
  removeButtons();
  removeMenu();
  world = new World(canvas, keyboard, 0);
  isMobileDevice();
}

function isMobileDevice() {
  let mobileController = document.getElementById("panel");
  if (
    "ontouchstart" in window ||
    navigator.msMaxTouchPoints > 0 ||
    navigator.maxTouchPoints > 0
  ) {
    mobileController.classList.remove("d-none");
  } else {
    mobileController.classList.add("d-none");
  }
}

function removeButtons() {
  let buttons = document.getElementsByTagName("button");
  let trackpad = [...buttons].filter(
    (id) => id.parentElement.parentElement.className == "trackpad"
  );
  [...buttons].forEach((btn) => btn.classList.add("d-none"));
  trackpad.forEach((btn) => btn.classList.remove("d-none"));
}

function removeMenu() {
  let menu = document.getElementById("menu-background");
  menu.classList.add("d-none");
}

function removeVictoryScreen() {
  let victory = document.getElementById("victory-screen");
  victory.classList.add("d-none");
}

function removeDefeatScreen() {
  let defeat = document.getElementById("defeat-screen");
  defeat.classList.add("d-none");
}

function toggleContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.toggle("d-none");
}

function removeContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.add("d-none");
}

function addContinueButton() {
  let continueButton = document.getElementById("continue");
  continueButton.classList.remove("d-none");
}

function addTryAgainButtton() {
  let tryAgainButton = document.getElementById("try-again");
  tryAgainButton.classList.remove("d-none");
}

function removeTryAgainButton() {
  let tryAgainButton = document.getElementById("try-again");
  tryAgainButton.classList.add("d-none");
}

function tryAgainLevel() {
  removeTryAgainButton();
  removeDefeatScreen();
  isMobileDevice();
  let addLevel = world.level.levelLength;
  let levelType = addLevel % 3 === 0 ? "boss" : "regular";

  world.stopAnimationLoop();
  world = new World(canvas, keyboard, addLevel, levelType);
}

/**
 * This Function starts the next Level, when the Next-Button was clicked successfully
 * It can only be clicked, when Level has been finished
 *
 */
function nextLevel() {
  removeContinueButton();
  removeVictoryScreen();
  isMobileDevice();
  let addLevel = (world.nextLevel ?? 0) + 1;
  let levelType = addLevel % 3 === 0 ? "boss" : "regular";
  world.stopAnimationLoop();
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
    /* Safari */
    page.webkitRequestFullscreen();
  } else if (page.msRequestFullscreen) {
    /* IE11 */
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
