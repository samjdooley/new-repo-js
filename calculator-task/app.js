
const output = document.querySelector('#numbers');
const keys  = document.querySelector('#numbers-input');
const tempStorage = [];
const calcStorage = [];
// Calcstorage stores the numbers as an array within an array. You need to loop through twice.
// It also has whitespace so use this regex calc[0].replace(/\s/g,'')

keys.addEventListener('click', function (event) {
  if (event.target.id === 'clear') {
    output.innerHTML = '';
    while (calcStorage.length) {
      calcStorage.pop();
    }
  } 
  if (event.target.className === 'key operator' && event.target.id != '=') {
    calcStorage.push(parseInt(tempStorage.splice(-1)[0].replace(/ /g,'')));
    if(typeof calcStorage[1] != 'string') {calcStorage.splice(1)}
    output.innerHTML = event.target.innerText;
    calcStorage.push(event.target.innerText)
  }
  if (event.target.className === 'key number') {
    if (output.innerText === 'X' || output.innerText  === '%' || output.innerHTML === '-' || output.innerHTML === '+') {
      output.innerHTML = ''
    }
  output.innerHTML += event.target.textContent
  tempStorage.push(output.textContent);
  }
  if (event.target.id === '=') {
    calcStorage.push(parseInt(tempStorage.splice(-1)[0].replace(/ /g,'')));
    output.innerHTML =  operate(calcStorage[0], calcStorage[1], calcStorage[2]);
    while (calcStorage.length) {
      calcStorage.pop();
    }
    calcStorage.push(parseInt(output.innerHTML.replace(/ /g,'')))
  }
})

function operate(_a,_operator,_b) {
    if (_operator === '*' || _operator === 'x' || _operator === 'X') {
    return multiply(_a,_b)
    }
    if (_operator === '-') {
    return subtract(_a,_b)
    }
    if (_operator === '/' || _operator === '%' ) {
    return divide(_a, _b)
    }
    if (_operator === '+') {
    return add(_a, _b)
    }
}


function multiply(a,b) {
    return a * b;
  }
  
function subtract(a,b) {
    return a - b;
  }
  
function divide(a,b) {
    return a / b;
  }
  
function add(a,b) {
    return a + b;
  }
  
