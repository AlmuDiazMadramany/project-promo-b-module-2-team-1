// Espera que el documento este cargado
document.addEventListener('DOMContentLoaded', function() {
    // Botones para mostrar o esconder las secciones
    const descriptionBtn = document.querySelector('.js-btn-description');
    const designBtn = document.querySelector('.js-btn-design');

    // Selecciones a mostrar o esconder
    const descriptionSection = document.querySelector('.js-description');
    const designSection = document.querySelector('.js-design');

    // Función que alterna la clase 'collapsed' en la sección
    function toggleSection(section) {
        section.classList.toggle('collapsed');
    }

    descriptionBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        toggleSection(descriptionSection); // Alterna la visibilidad de la sección
    });

    designBtn.addEventListener('click', function(event) {
        event.preventDefault();
        toggleSection(designSection);
    });
});
