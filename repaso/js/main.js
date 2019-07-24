'use strict';

const title = document.querySelector ('.title');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');

function writeSomething (event){
    const text = event.currentTarget.innerHTML;
    title.innerHTML = text;
    if(event.currentTarget.classList.contains('btnclick')){
        event.currentTarget.classList.remove('btnclick');
    }
    else{
        event.currentTarget.classList.add('btnclick');
    }
}

btn1.addEventListener('click', writeSomething);
btn2.addEventListener('click', writeSomething);
btn3.addEventListener('click', writeSomething);
btn4.addEventListener('click', writeSomething);
btn5.addEventListener('click', writeSomething);
btn6.addEventListener('click', writeSomething);
btn7.addEventListener('click', writeSomething);
btn8.addEventListener('click', writeSomething);