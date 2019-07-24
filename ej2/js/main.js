'use strict';

const button= document.querySelector('.btn');
const input= document.querySelector('#name');
const text= document.querySelector('.text');

function hola(){
    const inputValue= input.value;
    text.innerHTML = `Hola ${inputValue}, Mira la consola para ver el resultado.`;
    text.classList.add('resultado');
    console.log(`Hola, ${inputValue}.`);
};

button.addEventListener('click', hola);
