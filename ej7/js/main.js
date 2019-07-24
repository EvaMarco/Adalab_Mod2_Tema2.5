'use strict';

const button = document.querySelector('.btn');
const item1 = document.querySelector('.list_item1');
const item2 = document.querySelector('.list_item2');
const item3 = document.querySelector('.list_item3');

function toggle(event){
    console.log('Funciono :D');
    // const selected = event.currentTarget;
    const selected = event.target;
    const value = selected.innerHTML;
    button.classList.remove(`red`);
    button.classList.remove(`green`);
    button.classList.remove(`blue`);
    button.classList.remove(`btn1`);
    button.classList.add(`${value}`);
    console.log(event);
};

window.addEventListener('click', toggle);
// item1.addEventListener('click', toggle);
// item2.addEventListener('click', toggle);
// item3.addEventListener('click', toggle);
// button.addEventListener('click', toggle);