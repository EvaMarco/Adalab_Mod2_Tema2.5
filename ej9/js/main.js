'use strict';

const teachers = document.querySelector('.teachers');
const teacher1 = teachers.querySelector('.teacher--isra');
const add1 = teacher1.querySelector('.favorite');
const teacher2 = teachers.querySelector('.teacher--tuerto');
const add2 = teacher2.querySelector('.favorite');
const teacher3 = teachers.querySelector('.teacher--nasi');
const add3 = teacher3.querySelector('.favorite');

function addFavorite(event){
    const selected = event.currentTarget;
    if (selected.classList.contains('teacher--isra')){
        if(add1.innerHTML === 'Añadir'){
            add1.innerHTML = 'Quitar';
        }
        else{
            add1.innerHTML = 'Añadir';
        }
    }
    else if(selected.classList.contains('teacher--tuerto')){
        if(add2.innerHTML === 'Añadir'){
            add2.innerHTML = 'Quitar';
        }
        else{
            add2.innerHTML = 'Añadir';
        }
    }
    else{
        if(add3.innerHTML === 'Añadir'){
            add3.innerHTML = 'Quitar';
        }
        else{
            add3.innerHTML = 'Añadir';
        }
    };
    selected.classList.toggle('teacher--selected');
}

teacher1.addEventListener('click', addFavorite);
teacher2.addEventListener('click', addFavorite);
teacher3.addEventListener('click', addFavorite);