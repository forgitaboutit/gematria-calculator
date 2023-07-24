window.onload = function(event) {

  let calculateButton = document.querySelector('#calculate-button');

  let calculateValue = function() {

    let textInputBox = document.querySelector('#text-input-box');
    let inputString = textInputBox.value;
    let lettersArray = inputString.split('');
    let simpleGematriaValue = 0;

    for(let ctr = 0; ctr < lettersArray.length; ctr++) {
      
      simpleGematriaValue += getSimpleGematriaValue(lettersArray[ctr]);
    }

    let outputValueCtr = document.querySelector('#output-value');
    outputValueCtr.innerHTML = simpleGematriaValue;
  }

  calculateButton.addEventListener('click', calculateValue);

  // Make it so that Enter key can submit string for calculation
  let textInputBox = document.querySelector('#text-input-box');

  textInputBox.addEventListener('keyup', function(event) {

    if(event.code === 'Enter')
    {
      event.preventDefault();
      calculateValue();
    }
  });
};

function getSimpleGematriaValue(letter) {
  
  let mappings = {
    'A':1,
    'B':2,
    'C':3,
    'D':4,
    'E':5,
    'F':6,
    'G':7,
    'H':8,
    'I':9,
    'J':10,
    'K':11,
    'L':12,
    'M':13,
    'N':14,
    'O':15,
    'P':16,
    'Q':17,
    'R':18,
    'S':19,
    'T':20,
    'U':21,
    'V':22,
    'W':23,
    'X':24,
    'Y':25,
    'Z':26
  };

  let value = mappings[letter.toUpperCase()];

  return typeof value === 'undefined' ? 0 : value;
}
