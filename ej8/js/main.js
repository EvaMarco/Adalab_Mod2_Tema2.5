'use strict';

const button1= document.querySelector('.btn_1');
const button2= document.querySelector('.btn_2');
const button3= document.querySelector('.btn_3');
const button4= document.querySelector('.btn_4');
const button5= document.querySelector('.btn_5');

function bgcolor(event){
    button1.classList.remove('btn1');
    button2.classList.remove('btn1');
    button3.classList.remove('btn1');
    button4.classList.remove('btn1');
    button5.classList.remove('btn1');
    const selectedButton = event.target;
    selectedButton.classList.toggle('btn1');
};

document.addEventListener('click', bgcolor);