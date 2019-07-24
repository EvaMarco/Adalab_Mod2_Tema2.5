'use strict';

const result = document.querySelector ('.result');
const text= document.querySelector ('.text');

function write (event){
    const value = event.currentTarget.value;
    result.innerHTML = value;
}

text.addEventListener('keyup', write);