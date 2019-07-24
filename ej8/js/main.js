'use strict';

const button1= document.querySelector('.btn_1');
const button2= document.querySelector('.btn_2');
const button3= document.querySelector('.btn_3');
const button4= document.querySelector('.btn_4');
const button5= document.querySelector('.btn_5');

function bgcolor(event){
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle('btn1');
};

button1.addEventListener('click', bgcolor);
button2.addEventListener('click', bgcolor);
button3.addEventListener('click', bgcolor);
button4.addEventListener('click', bgcolor);
button5.addEventListener('click', bgcolor);
git push -u origin master