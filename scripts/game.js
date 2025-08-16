let world;


/**
 * This function initializes the Canvas-Screen
 * 
 */
function init() {
    const canvas = document.getElementById('canvas');
    world =  new World(canvas);
}


document.addEventListener("keydown",(event) => {
    console.log(event.keyCode);

})