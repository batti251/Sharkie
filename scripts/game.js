let world;
let menu;
let keyboard = new Keyboard();
/**
 * This function initializes the Canvas-Screen
 * 
 */
function init() {
    const canvas = document.getElementById('canvas');
    //world = new World(canvas, keyboard, 0);
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
    case "q":
      keyboard.Q = true;
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
    case "q":
      keyboard.Q = false;
      break;
    default:
      break;
  }
});

function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}

let panel = document.getElementById('panel')
let pad = document.getElementById('joystick')
let stick = document.getElementById('stick')
let slapButton = document.getElementById('finslap')
let shootButton = document.getElementById('bubbleshoot')
let padCenterCoordinate = {x: 0 , y: 0}
panel.addEventListener("touchstart", handleStart);
panel.addEventListener("touchend", handleEnd);
/*pad.addEventListener("touchcancel", handleCancel);*/
panel.addEventListener("touchmove", handleMove); 
const ongoingTouches = [];

/**
 *  This Function is called, when the user puts the finger on the screen initialy
 * @param {Event} event - the triggered Touch Event 
 */
function handleStart(event) {
  event.preventDefault();
  const touches = event.changedTouches;
   for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];
    if (touch.target.id == 'joystick') {
      ongoingTouches.push(copyTouch(touch));
      calcCenter()
    }
    if (touch.target.id == 'finslap') {
      ongoingTouches.push(copyTouch(touch));
      keyboard.SPACE = true
    }
    if (touch.target.id =='bubbleshoot') {
      ongoingTouches.push(copyTouch(touch));
      keyboard.Q = true
    }
  }
}

/**
 * This Function calculates the middle-coordinates of the joystick-element, in relation to the screen-size
 */
function calcCenter() {
      const rect = pad.getBoundingClientRect()
      padCenterCoordinate.x = rect.left + window.scrollX + rect.width / 2;
      padCenterCoordinate.y = rect.top  + window.scrollY + rect.height / 2;
}

const padRADIUS = 50; 
const DEADZONE = 14
/**
 *  This Function is called, when the user moves the finger over the screen, while touching event is active
 * @param {Event} event - the triggered Touch Event 
 */
function handleMove(event) {
  event.preventDefault();
  const touches = event.changedTouches;
for (let index = 0; index < touches.length; index++) {
  const t = touches[index]
  if (t.target.id == 'joystick') {
    padMoveCharacter(t)
}
 if (t.target.id == 'finslap') {
      keyboard.SPACE = true
    }
  if (t.target.id =='bubbleshoot') {
      keyboard.Q = true
    }
}}

/**
 * This Function calls the character-movement, when using the trackpad
 * 
 * @param {*} t - the current touch-event
 */
function padMoveCharacter(t){
  let dx = t.pageX - padCenterCoordinate.x;
  let dy = t.pageY - padCenterCoordinate.y;
  let clamped = clampToRadius(dx, dy)
  stick.style.transform = `translate(calc(-50% + ${clamped.dx}px) , calc(-50% + ${clamped.dy}px))`
  setKeyboardDirection(dx, dy)
}


/**
 * This function triggers defined keyboard-keys, accordingly to the coordinate the stick is pushed
 * Both coordinates must pass the defined DEADZONE, before a key is set true
 * 
 * @param {*} dx - current x-coordinate, the stick is pushed
 * @param {*} dy - current y-coordinate, the stick is pushed
 */
function setKeyboardDirection(dx, dy) {
  keyboard.LEFT  = dx < -DEADZONE;
  keyboard.RIGHT = dx >  DEADZONE;
  keyboard.UP    = dy < -DEADZONE;
  keyboard.DOWN  = dy >  DEADZONE;
}


/**
 * This Function limits the dx and dy coordinate from the stick to the defined padRADIUS
 * It prevents the stick from fading out of the pad
 * 
 * @param {*} dx - the current stick x coordinate (center of the element)
 * @param {*} dy - the current stick y coordinate (center of the element)
 * @returns - new object with updated dx and dy coordinate multiplicated with the defined
 */
function clampToRadius(dx, dy) {
  const len = Math.hypot(dx, dy);
  const s = len > padRADIUS ? padRADIUS / len : 1;
  return { dx: dx * s, dy: dy * s };
}

/**
 * This Function is called, when the user lifts the finger from the screen
 * This Function resets the stick and ability-keys, when the touch-event ends
 * @param {Event} event - the triggered Touch Event 
 */
function handleEnd(event) {
  event.preventDefault()
  const touches = event.changedTouches;
  for (const touch of touches) {
      if (touch.target.id == 'joystick') {
      centerStick()
  }}
  keyboard.SPACE = false
  keyboard.Q = false
}

/**
 * This Function moves the stick back to it's neutral position
 * It sets all keyboard-keys to false, to let the character stop
 */
function centerStick() {
  stick.style.transform = 'translate(-50%,-50%)'
  keyboard.LEFT = keyboard.RIGHT = keyboard.UP = keyboard.DOWN = false
}
