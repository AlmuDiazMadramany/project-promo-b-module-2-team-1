'use strict';

// Coger los datos del HTML de Share
const comensalesShare = document.querySelector('.recipe1_mainrecipe_dinersinput');
const imagenShare = document.querySelector('.recipe1_image');
const nombreShare = document.querySelector('.recipe1_mainrecipe_title');
const tiempoShare = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientesShare = document.querySelector('.recipe2_ingredients_input');
const pasosShare = document.querySelector('.recipe2_steps_input');
const sectionCardShare = document.querySelector (".js-sectionCard");


let cardSharePage = {};
let idLS = '';


// Renderizar los campos y la imagen
function renderCardSharePage() {
    comensalesShare.innerHTML = cardSharePage.field1;
    imagenShare.src = cardSharePage.photo;
    nombreShare.innerHTML = cardSharePage.field3;
    tiempoShare.innerHTML = cardSharePage.field4;
    ingredientesShare.innerHTML = cardSharePage.field5;
    pasosShare.innerHTML = cardSharePage.field6;
}


// Aplicar el diseño de la tarjeta
function renderDesign() {
    if (cardSharePage.field2 === "vintage") {
        sectionCardShare.classList.add("theme-1");
    } else if (cardSharePage.field2 === "bordeado") {
        sectionCardShare.classList.add("theme-2");
    } else {
        sectionCardShare.classList.add("theme-3");
    };
};


// Recoger el ID de LS
function loadFromLocalStorage(){
    idLS = localStorage.getItem("idCard");
     // coge el ID que está guardado en LS
    if (idLS !== null){
        console.log('Hay datos en el LS:', idLS);
        } else {
        console.log('No hay datos en el LS');
    }
}


// Con el ID, buscar la tarjeta en el API
function getDataFromApi(){
    loadFromLocalStorage();
    fetch(`https://dev.adalab.es/api/info/${idLS}`)
        .then((response) => response.json())
        .then((info) => {
            console.log('Datos recogidos del API:', info);
            cardSharePage = info.data;
            console.log('Datos de cardSharePage:', cardSharePage);
            renderCardSharePage();
            renderDesign();
        });
}


// Montar la tarjeta
getDataFromApi();