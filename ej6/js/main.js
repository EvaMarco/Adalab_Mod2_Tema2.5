'use strict';

const input = document.querySelector('.texto');
const result = document.querySelector('.result');

function writeInstant(event) {
  console.log(event.currentTarget);
  const inputValue = event.currentTarget.value;
  result.innerHTML = inputValue;

}

input.addEventListener('keyup', writeInstant);