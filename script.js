function toggleLegalNotice(){
    document.getElementById('legal-notice-container').classList.toggle('d-none')
}

function startGame() {
    removeButtons();
    world = new World(canvas, keyboard, 0);
}

function removeButtons(){
    let buttons = document.getElementsByTagName('button');
    [...buttons].forEach(btn => btn.classList.toggle('d-none'))
}