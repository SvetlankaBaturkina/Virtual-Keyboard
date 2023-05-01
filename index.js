// Объект для смены языка клавиатуры 
const i18Obj = {
   'en': {
         '`': '`',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'backspace': 'backspace',
         'tab': 'tab',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'q': 'q',
         'w': 'w',
         'e': 'e',
         'r': 'r',
         't': 't',
         'y': 'y',
         'u': 'u',
         'i': 'i',
         'o': 'o',
         'p': 'p',
         '[': '[',
         ']': ']',
         '\\': '\\',
         'delete': 'delete',
         'caps lock': 'caps lock',
         'a': 'a',
         's': 's',
         'd': 'd',
         'f': 'f',
         'g': 'g',
         'h': 'h',
         'j': 'j',
         'k': 'k',
         'l': 'l',
         ';': ';',
         "'": "'",
         'enter': 'enter',
         'shift': 'shift',
         'z': 'z',
         'x': 'x',
         'c': 'c',
         'v': 'v',
         'b': 'b',
         'n': 'n',
         'm': 'm',
         ',': ',',
         '.': '.',
         '/': '/',
         'up': 'up',
         'ru': 'ru',
         'ctrl': 'ctrl',
         'win': 'win',
         'alt': 'alt',
         'space': 'space',
         'left': 'left',
         'down': 'down',
         'right': 'right',
       },
   'encapslock': {
         '`': '`',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'backspace': 'backspace',
         'tab': 'tab',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'q': 'Q',
         'w': 'W',
         'e': 'E',
         'r': 'R',
         't': 'T',
         'y': 'Y',
         'u': 'U',
         'i': 'I',
         'o': 'O',
         'p': 'P',
         '[': '[',
         ']': ']',
         '\\': '\\',
         'delete': 'delete',
         'caps lock': 'caps lock',
         'a': 'A',
         's': 'S',
         'd': 'D',
         'f': 'F',
         'g': 'G',
         'h': 'H',
         'j': 'J',
         'k': 'K',
         'l': 'L',
         ';': ';',
         "'": "'",
         'enter': 'enter',
         'shift': 'shift',
         'z': 'Z',
         'x': 'X',
         'c': 'C',
         'v': 'V',
         'b': 'B',
         'n': 'N',
         'm': 'M',
         ',': ',',
         '.': '.',
         '/': '/',
         'ru': 'ru',
         'ctrl': 'ctrl',
         'win': 'win',
         'alt': 'alt',
         'space': 'space',
         
       },
       'enshift': {
         '`': '~',
         '1': '!',
         '2': '@',
         '3': '#',
         '4': '$',
         '5': '%',
         '6': '^',
         '7': '&',
         '8': '*',
         '9': '(',
         '0': ')',
         '-': '_',
         '=': '+',
         'backspace': 'backspace',
         'tab': 'tab',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'q': 'Q',
         'w': 'W',
         'e': 'E',
         'r': 'R',
         't': 'T',
         'y': 'Y',
         'u': 'U',
         'i': 'I',
         'o': 'O',
         'p': 'P',
         '[': '{',
         ']': '}',
         '\\': '|',
         'delete': 'delete',
         'caps lock': 'caps lock',
         'a': 'A',
         's': 'S',
         'd': 'D',
         'f': 'F',
         'g': 'G',
         'h': 'H',
         'j': 'J',
         'k': 'K',
         'l': 'L',
         ';': ':',
         "'": '"',
         'enter': 'enter',
         'shift': 'shift',
         'z': 'Z',
         'x': 'X',
         'c': 'C',
         'v': 'V',
         'b': 'B',
         'n': 'N',
         'm': 'M',
         ',': '<',
         '.': '>',
         '/': '?',
         'ru': 'ru',
         'ctrl': 'ctrl',
         'win': 'win',
         'alt': 'alt',
         'space': 'space',
         
       }, 
       'ru': {
         '`': 'ё',
         '1': '1',
         '2': '2',
         '3': '3',
         '4': '4',
         '5': '5',
         '6': '6',
         '7': '7',
         '8': '8',
         '9': '9',
         '0': '0',
         '-': '-',
         '=': '=',
         'backspace': 'backspace',
         'tab': 'tab',
         'q': 'й',
         'w': 'ц',
         'e': 'у',
         'r': 'к',
         't': 'е',
         'y': 'н',
         'u': 'г',
         'i': 'ш',
         'o': 'щ',
         'p': 'з',
         '[': 'х',
         ']': 'ъ',
         'delete': 'delete',
         'slash': 'slash',
         'caps lock': 'caps lock',
         'a': 'ф',
         's': 'ы',
         'd': 'в',
         'f': 'а',
         'g': 'п',
         'h': 'р',
         'j': 'о',
         'k': 'л',
         'l': 'д',
         ';': 'ж',
         "'": "э",
         'enter': 'enter',
         'shift': 'shift',
         'z': 'я',
         'x': 'ч',
         'c': 'с',
         'v': 'м',
         'b': 'и',
         'n': 'т',
         'm': 'ь',
         ',': 'б',
         '.': 'ю',
         '/': '.',
         'up': 'up',
         'ctrl': 'ctrl',
         'win': 'win',
         'alt': 'alt',
         'space': " ",
         'left': 'left',
         'down': 'down',
         'right': 'right',
       }
};

let keys = [
    
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "delete",
        "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
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
   input.setAttribute("wrap", "hard");
    input.setAttribute("cols", "50");
    input.setAttribute("row", "5");

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

    button.setAttribute("id", button.innerHTML);

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
 if (button.innerText === "delete") {
   button.innerText = "delete";
   button.classList.add('keyboard-button_delete');
}
 if (button.innerText === "capslock") {
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
 // Добавление attributes кнопкам клавиатуры для capslock
 button.setAttribute("data-i18", button.innerHTML);
 
}
};

createKeys();

let buttonKey = document.querySelectorAll('.keyboard-button');
const allElenemtData = document.querySelectorAll('[data-i18]');
let textareaString = "";

document.addEventListener('mousedown', e => {
    if (e.target.classList.contains("keyboard-button")) {
        activeElement();
         e.target.classList.add('keyboard-button_animate');
      if (e.target.innerText === "backspace") {
         textareaString = input.value; 
        input.value = textareaString;
        input.value  = textareaString.substring(0, textareaString.length - 1);
        textareaString = input.value;

      } else if (e.target.innerText === "enter") {
         input.value = textareaString + '\r\n'; 
         textareaString = input.value;

      } else if (e.target.innerText === "tab") {
         input.value = textareaString + '    '; 
         textareaString = input.value;

      } else if (e.target.innerText === "caps lock") {
         for (let i=0; i<keys.length; i++) {
            buttonKey[i].classList.toggle('caps_lock');
            input.value = textareaString + ''; 
            textareaString = input.value;
         }
         if (e.target.classList.contains('caps_lock')) {
            allElenemtData.forEach((element) => {
               element.textContent = i18Obj.encapslock[element.dataset.i18];
         })} else {
            allElenemtData.forEach((element) => {
               element.textContent = i18Obj.en[element.dataset.i18];
            });
         }
      } else if (e.target.innerText === "space") {
         input.value = textareaString + ' '; 
         textareaString = input.value;

      } else if (e.target.innerText === "ctrl" || e.target.innerText === "win" || e.target.innerText === "alt") {
         input.value = textareaString + ''; 
         textareaString = input.value;

      } else if (e.target.innerText === "shift") {
         allElenemtData.forEach((element) => {
         element.textContent = i18Obj.enshift[element.dataset.i18];
         });
          
      }  else if (e.target.classList.contains('keyboard-button_up')) {
         input.value = textareaString + "↑"; 
         textareaString = input.value;

      } else if (e.target.classList.contains('keyboard-button_down')) {
         input.value = textareaString + "↓"; 
         textareaString = input.value;

      } else if (e.target.classList.contains('keyboard-button_left')) {
         input.value = textareaString + "←"; 
         textareaString = input.value;

      } else if (e.target.classList.contains('keyboard-button_right')) {
         input.value = textareaString + "→"; 
         textareaString = input.value;

      } else if (e.target.classList.contains('keyboard-button_slash')) {
         input.value = textareaString + '\\'; 
         textareaString = input.value;

      } else if (e.target.classList.contains('keyboard-button_delete')) {
         console.log(1);
         input.value = textareaString.substring(-1, textareaString.length - 1);; 
         textareaString = input.value;

      } else  {
            input.value = textareaString + e.target.innerHTML;
            textareaString = input.value;
      }
      }
    });


function activeElement() {
   buttonKey.forEach(buttonKey => {
      buttonKey.classList.remove('keyboard-button_active');
      buttonKey.classList.remove('keyboard-button_animate');
   });
};

document.addEventListener('keydown', function(event) {
   console.log(event.key);
   let activeButton = document.getElementById(event.key.toLowerCase());
   activeElement();
   console.log(activeButton);
   activeButton.classList.add('keyboard-button_animate');
      if (event.key === "Backspace") {
         input.value = textareaString.substring(0, textareaString.length - 1);
      }
       else if (event.key === "Tab") {
         input.value = textareaString + "    ";
         textareaString = input.value;
      } 
      else if (event.key === "\\") {
         input.value = textareaString + "\\";
         textareaString = input.value;
      } 
      else if (event.key === "Delete") {
         input.value = textareaString.substring(0, textareaString.length - 1);
         textareaString = input.value;
      } 
      else if (event.key === "CapsLock") {
         input.value = textareaString + "";
         textareaString = input.value;
         for (let i=0; i<keys.length; i++) {
            buttonKey[i].classList.toggle('caps_lock');
            
         }
         if (activeButton.classList.contains('caps_lock')) {
            allElenemtData.forEach((element) => {
               element.textContent = i18Obj.encapslock[element.dataset.i18];
               console.log(element.textContent);
            })
         } else {
            allElenemtData.forEach((element) => {
               element.textContent = i18Obj.en[element.dataset.i18];
            })
         }
      }
      else {
         input.value = textareaString + event.key;
         console.log(input.value);
         textareaString = input.value;
}
});

document.addEventListener('mouseup', e => {
   activeElement();
   if (e.target.innerText === "shift") {
      allElenemtData.forEach((element) => {
         console.log(e.target);
         element.textContent = i18Obj.en[element.dataset.i18];
      })
   }
      
});




   

   
  