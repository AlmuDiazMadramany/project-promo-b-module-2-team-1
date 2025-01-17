const card = {
    field1: '3 personas',
    field2: 'fondo-oscuro',
    field3: 'Título de la receta',
    field4: '50 minutos',
    field5: 'Ejemplo: 2 pechugas de pollo. 1 pimiento rojo. 1 calabacín.1 zanahoria. 1 diente de ajo. 2 cucharadas de aceite de oliva. Sal y pimienta al gusto.',
    field6: 'Ejemplo: 1. Lavar y cortar las verduras en tiras finas Picar el ajo finamente. Sazona las pechugas de pollo con sal y pimienta. 2. En una sartén grande, calentar 1 cucharada de aceite de oliva a fuego medio. Añade las verduras y el ajo, y saltea durante 5-7 minutos hasta que estén tiernas pero crujientes. Retira y reserva. 3. En la misma sartén, añade la otra cucharada de aceite y cocina las pechugas de pollo a fuego medio-alto durante 4-5 minutos por cada lado, o hasta que estén doradas y bien cocidas por dentro. 4. Devuelve las verduras a la sartén con el pollo para calentarlas ligeramente y mezclar los sabores. 5. Sirve y disfruta. Coloca el pollo en un plato, acompáñalo con las verduras y sirve caliente.',
    field7: '', 
    photo: 'https://pucheromix.b-cdn.net/wp-content/uploads/2023/04/bechamel-casera.jpg', // imagen receta
};

const comensales = document.querySelector('.recipe1_mainrecipe_dinersinput');
// const design = document.querySelector('');
const nombre = document.querySelector('.recipe1_mainrecipe_title');
const tiempo = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientes = document.querySelector('.recipe2_ingredients_input');
const pasos = document.querySelector('.recipe2_steps_input');
const imagen = document.querySelector('.recipe1_image');
const sectionCard = document.querySelector (".js-sectionCard");



//función que cambie el estilo del diseño con 3 condicionales. field2 de card
function renderDesign () {
    if (card.field2 === "vintage") {
        sectionCard.classList.add("theme-1");
    } else if (card.field2 === "bordeado") {
        sectionCard.classList.add("theme-2");
    } else {
        sectionCard.classList.add("theme-3");
    };
};

// función para pintar los datos en html
function renderCard () {
    comensales.innerHTML = card.field1; 
    nombre.innerHTML = card.field3; 
    tiempo.innerHTML = card.field4; 
    ingredientes.innerHTML = card.field5;
    pasos.innerHTML = card.field6;
    imagen.src = card.photo;

    renderDesign();
}

renderCard();

let card ={};
const idLS = localStorage.getItem ("idCard");
fetch (`https://dev.adalab.es/api/info/${idLS}`)
    .then((resp) => resp.json())
    .then((info) => {
        card= info.data;
    });

