const keys = [
    
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "slash", "delete",
        "caps_lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift", "up", "ru",
        "ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right"
          
];

let h1 = document.createElement('h1');
    h1.innerText = 'Virtual Keyboard';
    h1.classList.add('keyboard-title');
    document.body.append(h1);

let input = document.createElement('textarea');
    document.body.append(input);
    input.classList.add('keyboard-input');

let container = document.createElement('div');
    container.classList.add('keyboard-container');
let wrapper = document.createElement('div');
    wrapper.classList.add('keyboard-wrapper');
    document.body.append(container);  
    container.appendChild(wrapper);  

function createKeys() {
        
   for (let i=0; i<keys.length; i++) {
    let button = document.createElement('button');
    button.classList.add('keyboard-button');
    wrapper.appendChild(button);
    
    button.innerText = keys[i];

if (button.innerText === "`") {
    button.classList.add('keyboard-button_backquote');
     }
if (button.innerText === "slash") {
    button.innerText = "";
    button.classList.add('keyboard-button_slash');
 }
 if (button.innerText === "backspace") {
    button.classList.add('keyboard-button_backspace');
 }
 if (button.innerText === "tab") {
    button.classList.add('keyboard-button_tab');
 }
 if (button.innerText === "slash") {
    button.innerText = "";
    button.classList.add('keyboard-button_slash');
 }
 if (button.innerText === "caps_lock") {
    button.innerText = "caps lock";
    button.classList.add('keyboard-button_capslock');
 }
 if (button.innerText === "enter") {
    button.classList.add('keyboard-button_enter');
 }
 if (button.innerText === "shift") {
    button.classList.add('keyboard-button_shift');
 }
 if (button.innerText === "ctrl") {
    button.classList.add('keyboard-button_ctrl');
 }
 if (button.innerText === "space") {
    button.classList.add('keyboard-button_space');
 }
 if (button.innerText === "up") {
    button.innerText = "";
    button.classList.add('keyboard-button_up');
 }
 if (button.innerText === "left") {
    button.innerText = "";
    button.classList.add('keyboard-button_left');
 }
 if (button.innerText === "down") {
    button.innerText = "";
    button.classList.add('keyboard-button_down');
 }
 if (button.innerText === "right") {
    button.innerText = "";
    button.classList.add('keyboard-button_right');
 }
}

};

createKeys();