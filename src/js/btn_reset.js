'use strict'

const resetBtn = document.querySelector('.js-btnreset');
const myForm = document.querySelector('.js-form');
const myCard = document.querySelector('.js-sectionCard');//no se como resetear la tarjeta

//Añadimos evento al boton
resetBtn.addEventListener('click', () =>{
    //restablecemos el form
    myForm.reset();
    myCard.reset();
    console.log("formulario reseteado");

});