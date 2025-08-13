let world;


/**
 * This function initializes the Canvas-Screen
 * 
 */
function init() {
    const canvas = document.getElementById('canvas');
    world =  new World(canvas);
}