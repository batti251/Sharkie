function openLegalNotice() {
  let legalContainer = document.getElementById("legal-notice-container")
  legalContainer.classList.remove('d-none')
  legalContainer.innerHTML = addLegalTextTemplate()
}

function closeLegalNotice(){
  let legalContainer = document.getElementById("legal-notice-container")
  legalContainer.classList.add('d-none')
  legalContainer.innerHTML = ""
}

document.addEventListener('click', (event) => {
  event.target.id == 'menu-background' ?  closeLegalNotice() : ""
  
})

function addLegalTextTemplate(){
   return `
     <div id="legal-notice-header" class="legal-notice-closebar"><div class="d-flex"></div><button class="btn-close"  onclick="closeLegalNotice()">X</button></div>
       <div iD="legal-notice-textarea" class="legal-notice-text">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 DDG</p><p>Sebastian Bünz<br> 
            <br> 
            Hönscheidstraße 15<br> 
            53773 Hennef <br> 
            </p><p> <strong>Vertreten durch: </strong><br>
            Sebastian Bünz<br>
            </p><p><strong>Kontakt:</strong> <br>
            Telefon: 0151-68155087<br>
            E-Mail: <a href='mailto:bastibuenz25@gmail.com'>bastibuenz25@gmail.com</a></br></p><p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
            Erstellt mit dem <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator</a> von WebsiteWissen.com, dem Ratgeber für <a href="https://websitewissen.com/website-erstellen" rel="dofollow">Website-Erstellung</a>, <a href="https://websitewissen.com/homepage-baukasten-vergleich" rel="dofollow">Homepage-Baukästen</a> und <a href="https://websitewissen.com/shopsysteme-vergleich" rel="dofollow">Shopsysteme</a>. Rechtstext von der <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach</a>. 
           </div>
            `
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
    console.log("touch");
    
  } else {
    mobileController.classList.add("d-none");
  }
}

function removeButtons() {
  let important = document.getElementsByClassName('game-relevant')
  let buttons = document.getElementsByTagName("button");
  [...buttons].forEach((btn) => btn.classList.add("d-none"));
  [...important].forEach((btn) => btn.classList.remove("d-none"));
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
  resetIntervalTimeouts()
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
  resetIntervalTimeouts()
  removeContinueButton();
  removeVictoryScreen();
  isMobileDevice();
  let addLevel = (world.nextLevel ?? 0) + 1;
  let levelType = addLevel % 1 === 0 ? "boss" : "regular";
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

/**
 * This Function wether pauses or resumes the game, depending on the world.paused state
 */
function backToMenu(){
  console.log(canvas);
  pauseGame();
  console.log(canvas);
  console.log(window);
  
  window.location.href = "/index.html"
}


/**
 * This Function pause the Game and stops Animation rendering
 * It sets the world.paused state to true
 */
function pauseGame(){
  world.paused = true
  world.stopAnimationLoop()
  intervalIds.forEach(clearInterval)
  timeoutIds.forEach(clearTimeout)
}

let intervalIds = []
let timeoutIds = []
let resumeTimeouts = []
let resumeIntervals = []
let i = 1

/**
 * This function gives an intervalfunction an unique id
 * The id is pushed into the intervalIds-Array, to clear Intervals properly on levelend and pause
 * @param {*} fn - the function that is called in the interval-function
 * @param {*} time - set miliseconds of the interval-function
 * @returns - returns the unique id, to prevent interval stacking
 */
function setStoppableInterval(fn, time){
  let id = setInterval(fn, time);
  intervalIds.push(id)
  resumeIntervals.push(id)
  return id
}

/**
 * This function gives a timeoutfunction an unique id
 * The id is pushed into the timeoutIds-Array, to clear Timeouts properly on levelend and pause
 * @param {*} fn - the function that is called in the timeout-function
 * @param {*} time - set miliseconds of the timeout-function
 * @returns - returns the unique id, to prevent timeout stacking
 */
function setStoppableTimeout(fn, time){
  let id = setTimeout(fn, time);
  timeoutIds.push(id)
  resumeTimeouts.push(id)
  return id
}

/**
 * This Function resets all collected intervals and timeouts
 * It sets the Array-length to 0
 * 
 */
function resetIntervalTimeouts(){
    intervalIds.forEach(clearInterval)
  timeoutIds.forEach(clearTimeout)
  intervalIds.length = 0;
  timeoutIds.length  = 0;
}