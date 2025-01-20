'use strict';

// Declaramos el objeto, compatible con la API
let data = {
    field1: 0, // número de comensales 
    field2: 'fondo-oscuro', // diseño de tarjeta. Por defecto guarda este valor.
    field3: '', // nombre de la receta (string)
    field4: '', // tiempo de preparación
    field5: '', // ingredientes
    field6: '', // pasos
    field7: '', //
    photo: '', // imagen receta
}


// Identificamos el formulario y sus elementos
const form = document.querySelector('.js-form');
const comensales = document.querySelector('.recipe1_mainrecipe_dinersinput');
const imagen = document.querySelector('.recipe1_image');
const nombre = document.querySelector('.recipe1_mainrecipe_title');
const tiempo = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientes = document.querySelector('.recipe2_ingredients_input');
const pasos = document.querySelector('.recipe2_steps_input');


// Textos de ejemplo
const placeholders = {
    field1: '3 personas',
    field3: 'Título de la receta',
    field4: '50 minutos',
    field5: 'Ejemplo: 2 pechugas de pollo. 1 pimiento rojo. 1 calabacín.1 zanahoria. 1 diente de ajo. 2 cucharadas de aceite de oliva. Sal y pimienta al gusto.',
    field6: 'Ejemplo: 1. Lavar y cortar las verduras en tiras finas Picar el ajo finamente. Sazona las pechugas de pollo con sal y pimienta. 2. En una sartén grande, calentar 1 cucharada de aceite de oliva a fuego medio. Añade las verduras y el ajo, y saltea durante 5-7 minutos hasta que estén tiernas pero crujientes. Retira y reserva. 3. En la misma sartén, añade la otra cucharada de aceite y cocina las pechugas de pollo a fuego medio-alto durante 4-5 minutos por cada lado, o hasta que estén doradas y bien cocidas por dentro. 4. Devuelve las verduras a la sartén con el pollo para calentarlas ligeramente y mezclar los sabores. 5. Sirve y disfruta. Coloca el pollo en un plato, acompáñalo con las verduras y sirve caliente.',
};


// Definimos la función de renderizado (placeholders es el ejemplo)
function render() {
    comensales.innerHTML = data.field1 || placeholders.field1;
    nombre.innerHTML = data.field3 || placeholders.field3;
    tiempo.innerHTML = data.field4 || placeholders.field4;
    ingredientes.innerHTML = data.field5 || placeholders.field5;
    pasos.innerHTML = data.field6 || placeholders.field6;
}


// Recogemos los valores de los inputs y renderizamos en la preview en tiempo real
function handleForm(event) {
    const id = event.target.id;
    const value = event.target.value;
    data[id] = value; // metemos en el objeto data la info de todos los campos de la receta que lanzamos a la API
    render();
}


// Llamamos a la función que actualiza la preview
form.addEventListener('input', handleForm);