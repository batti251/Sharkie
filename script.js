function toggleLegalNotice(){
    document.getElementById('legal-notice-container').classList.toggle('d-none')
}

function startGame() {
    world = new World(canvas, keyboard, 0);
}