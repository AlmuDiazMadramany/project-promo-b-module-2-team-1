'use strict';

//File js usado para añadir evento en el botón de "generar" y un efecto hidden (css) en los iconos.

const btnGenerate = document.querySelector('.js-btn');
const iconRedes = document.querySelector('.js-icon');

btnGenerate.addEventListener('click', () => {iconRedes.classList.toggle('hidden')
});