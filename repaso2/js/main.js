'use strict';

const title = document.querySelector ('.title');
const btn = document.querySelector('.btn');

// Distintas maneras de escribir una función, todas funcionan igual.
// const paco2 = function () {
//     console.log('yupi');
// }

// function paco(){
//     console.log('yay');
// }

// btn.addEventListener('click', function () {
//     console.log('click');
// })
// btn.addEventListener('click', () => {
//     console.log('click');
// })
// btn.addEventListener('click', paco);

// Con esta función escribimos 'Something' en el título.
// function writeSomething (){
//     title.innerHTML = 'Something';
// }

// btn.addEventListener('click', writeSomething);


// Con esta función escribimos el texto del botón en el título. 

// function writeSomething (){
//     const text = btn.innerHTML;
//     title.innerHTML = text;
// }

// btn.addEventListener('click', writeSomething);

// Esta función hace lo mismo que la anterior pero nos da la información del evento en la consola. 

function writeSomething (event){
    console.log(event);
    console.log(event.currentTarget);
    const text = btn.innerHTML;
    title.innerHTML = text;
}

btn.addEventListener('click', writeSomething);