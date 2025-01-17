'use strict'

// ELEMENTOS HTML
const resetBtn = document.querySelector('.js-btnreset');
const myForm = document.querySelector('.js-form');
const myCard = document.querySelector('.js-sectionCard');

// FUNCIÓN VACIAR FORMULARIO
resetBtn.addEventListener('click', () =>{
    location.reload();
});