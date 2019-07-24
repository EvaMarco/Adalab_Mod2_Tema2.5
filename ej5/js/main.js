'use strict';

const background= document.querySelector('.page__main');

function bgcolor(event){
    console.log(event);   
    if(event.key === 'r'){
        background.classList.remove('purple');
        background.classList.add('red');
    }
    else if (event.key === 'm'){
        background.classList.remove('red');
        background.classList.add('purple');
    }
    else{
        console.log(event);
    }
};

document.addEventListener('keyup', bgcolor);
