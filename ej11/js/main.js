'use strict';

const link1 = document.querySelector('.nav__link1');
const link2 = document.querySelector('.nav__link2');
const link3 = document.querySelector('.nav__link3');

function ignore (event){
    event.preventDefault()
}

link1.addEventListener('click', ignore);
link2.addEventListener('click', ignore);
link3.addEventListener('click', ignore);