'use strict';

const scroll= document.querySelector('.container');

function bgcolor(){
    if(window.scrollY >= 250){
        scroll.classList.remove('container');
        scroll.classList.add('container250');
    }
    else{
        scroll.classList.remove('container250');
        scroll.classList.add('container');
    }
}

window.addEventListener('scroll', bgcolor);
