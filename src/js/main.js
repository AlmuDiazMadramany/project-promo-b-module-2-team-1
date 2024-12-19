'use strict';
import "./2_change_theme.js"

// Declaramos el objeto, compatible con la API
const data = {
    field1: 0, // número de comensales 
    field2: '', // diseño de tarjeta OJO: 3 INPUTS, 1 X DISEÑO
    field3: '', // nombre de la receta (string)
    field4: '', // tiempo de preparación
    field5: '', // ingredientes
    field6: '', // pasos
    field7: '', //
    photo: '', // imagen receta
}

// Identificamos el formulario
const form = document.querySelector('.js-form');


// Identificamos los elementos de la preview
const comensales = document.querySelector('.recipe1_mainrecipe_dinersinput');
// const design = document.querySelector('');
const nombre = document.querySelector('.recipe1_mainrecipe_title');
const tiempo = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientes = document.querySelector('.recipe2_ingredients_input');
const pasos = document.querySelector('.recipe2_steps_input');
// const imagen = document.querySelector('.recipe1_image');


// Definimos la función de renderizado
function render() {
    comensales.innerHTML = data.field1;
    nombre.innerHTML = data.field3;
    tiempo.innerHTML = data.field4;
    ingredientes.innerHTML = data.field5;
    pasos.innerHTML = data.field6;
}

// Definimos la función manejadora de eventos
function handleForm(event) {
    const id = event.target.id;
    const value = event.target.value;
    data[id] = value;
    console.log(data);
    render();
}

// Llamamos a la función que actualiza la preview
form.addEventListener('input', handleForm);