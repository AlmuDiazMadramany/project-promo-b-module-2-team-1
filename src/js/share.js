'use strict';

// Coger los datos del HTML de SHARE // OK
const comensalesShare = document.querySelector('.recipe1_mainrecipe_dinersinput');
const imagenShare = document.querySelector('.recipe1_image');
const nombreShare = document.querySelector('.recipe1_mainrecipe_title');
const tiempoShare = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientesShare = document.querySelector('.recipe2_ingredients_input');
const pasosShare = document.querySelector('.recipe2_steps_input');
const sectionCardShare = document.querySelector (".js-sectionCard");


let cardSharePage = '';  // OK



function renderCardSharePage() { // OK
    comensalesShare.innerHTML = cardSharePage.field1;
    imagenShare.innerHTML = cardSharePage.field2;
    nombreShare.innerHTML = cardSharePage.field3;
    tiempoShare.innerHTML = cardSharePage.field4;
    ingredientesShare.innerHTML = cardSharePage.field5;
    pasosShare.innerHTML = cardSharePage.field6;
}

function renderDesign() {  // OK
    if (cardSharePage.field2 === "vintage") {
        sectionCardShare.classList.add("theme-1");
    } else if (cardSharePage.field2 === "bordeado") {
        sectionCardShare.classList.add("theme-2");
    } else {
        sectionCardShare.classList.add("theme-3");
    };
};


// const idLS = localStorage.getItem("idCard");
// fetch(`https://dev.adalab.es/api/info/${idLS}`)
//         .then((response) => response.json())
//         .then((info) => {
//             console.log('Datos recogidos del API:', info);
//             cardSharePage = info.data;
//             console.log('Datos de cardSharePage:', cardSharePage);
//             renderCardSharePage();
//             renderDesign();
//         });


let idLS = '';

function loadFromLocalStorage(){
    idLS = localStorage.getItem("idCard");
     // coge el ID que está guardado en LS
    if (idLS !== null){
        // const parsedData = JSON.parse(idLS);
        // idLS = parsedData; // Asigna los datos parseados a la variable `idLS`
        console.log('Hay datos en el LS:', idLS);
        } else {
        console.log('No hay datos en el LS');
    }
}

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

getDataFromApi();