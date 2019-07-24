'use strict';


const button= document.querySelector('.btn');
const text= document.querySelector('.text');

function hola(){
    text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió`;
    text.classList.add('resultado');
};

button.addEventListener('click', hola);
