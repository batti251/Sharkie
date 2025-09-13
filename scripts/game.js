let world;
let menu;
let keyboard = new Keyboard();
/**
 * This function initializes the Canvas-Screen
 * 
 */
function init() {
    const canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    /* menu = new Menu(canvas) */
}


document.addEventListener("keydown",(event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) {
    case "ArrowUp":
    case "w":
      keyboard.UP = true;
      break;
    case "ArrowLeft":
    case "a":
      keyboard.LEFT = true;
      break;
    case "ArrowRight":
    case "d":
      keyboard.RIGHT = true;
      break;
    case "ArrowDown": 
    case "s":
      keyboard.DOWN = true;
      break;
    case " ":
      keyboard.SPACE = true;
      break;

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) {
    case "ArrowUp":
    case "w":
      keyboard.UP = false;
      break;
    case "ArrowLeft":
    case "a":
      keyboard.LEFT = false;
      break;
    case "ArrowRight":
    case "d":
      keyboard.RIGHT = false;
      break;
    case "ArrowDown":
    case "s":
      keyboard.DOWN = false;
      break;
    case " ":
      keyboard.SPACE = false;
      break;

    default:
      break;
  }
});