'use strict';

const button = document.querySelector('.btn');

function toggle(event){
    button.classList.toggle('btn1');
    console.log(event);
};

button.addEventListener('click', toggle);
