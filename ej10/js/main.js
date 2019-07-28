'use strict';


const button= document.querySelector('.btn');
const text= document.querySelector('.text');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function addList(){
    text.innerHTML = `
    <ul class="list">
        <li class="list__item item1"> ${inception}</li>
        <li class="list__item item2"> ${theButterFlyEffect}</li>
        <li class="list__item item3"> ${eternalSunshineOfTheSM}</li>
        <li class="list__item item4"> ${blueVelvet}</li>
        <li class="list__item item5"> ${split}</li>
    </ul>
    `;
    text.classList.add('resultado');
    const list = document.querySelector('.list');
    const item1 = list.querySelector('.item1');
    const item2 = list.querySelector('.item2');
    const item3 = list.querySelector('.item3');
    const item4 = list.querySelector('.item4');
    const item5 = list.querySelector('.item5');

    function tell(event){
        const selected = event.currentTarget
        console.log(selected.innerHTML);
    }

    item1.addEventListener('click', tell);
    item2.addEventListener('click', tell);
    item3.addEventListener('click', tell);
    item4.addEventListener('click', tell);
    item5.addEventListener('click', tell);
};

button.addEventListener('click', addList);
