//File js usado para añadir evento en el botón de "generar" y un efecto hidde en los iconos.

const btnRedes = document.querySelector('.js-btn');
const iconRedes = document.querySelector('.js-icon');

btnRedes.addEventListener('click', () => {iconRedes.classList.toggle('hidden')
});
