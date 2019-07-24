'use strict';

const text= document.querySelector('.text');

function lorem(){
    text.innerHTML += text.innerHTML;
};

text.addEventListener('mouseover', lorem);
