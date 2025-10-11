function toggleLegalNotice(){
    document.getElementById('legal-notice-container').classList.toggle('d-none')
}

function startGame() {
    removeButtons();
    removeMenu();
    world = new World(canvas, keyboard, 0);
}

function removeButtons(){
    let buttons = document.getElementsByTagName('button');
    [...buttons].forEach(btn => btn.classList.add('d-none'))
}

function removeMenu() {
    let menu = document.getElementById('menu-background')
    menu.classList.add('d-none')
}

function removeVictoryScreen() {
    let victory = document.getElementById('victory-screen')
    victory.classList.add('d-none')
}

function toggleContinueButton() {
    let continueButton = document.getElementById('continue')
    continueButton.classList.toggle('d-none')
}

function removeContinueButton() {
    let continueButton = document.getElementById('continue')
    continueButton.classList.add('d-none')
}

function addContinueButton() {
    let continueButton = document.getElementById('continue')
    continueButton.classList.remove('d-none')
}

function toggleTryAgainButtton() {
    let tryAgainButton = document.getElementById('try-again')
    tryAgainButton.classList.toggle('d-none')
}

function tryAgainLevel() {
    toggleTryAgainButtton()
    let addLevel = world.level.levelLength
    addLevel % 1 == 0 ? world = new World(canvas, keyboard, addLevel, "boss") : world = new World(canvas, keyboard, addLevel, "regular") 
}

/**
 * This Function starts the next Level, when the Next-Button was clicked successfully
 * It can only be clicked, when Level has been finished
 * 
 */
function nextLevel(){
    removeContinueButton()
    removeVictoryScreen()
    let addLevel = world.level.levelLength + 1
    addLevel % 1 == 0 ? world = new World(canvas, keyboard, addLevel, "boss") : world = new World(canvas, keyboard, addLevel, "regular") //auf 2/3 anpassen
}