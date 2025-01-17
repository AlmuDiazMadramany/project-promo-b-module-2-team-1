// Coger los datos del HTML de SHARE
const comensales = document.querySelector('.recipe1_mainrecipe_dinersinput');
const imagen = document.querySelector('.recipe1_image');
const nombre = document.querySelector('.recipe1_mainrecipe_title');
const tiempo = document.querySelector('.recipe1_mainrecipe_timeinput');
const ingredientes = document.querySelector('.recipe2_ingredients_input');
const pasos = document.querySelector('.recipe2_steps_input');


let cardSharePage = '';
let idLS = '';


function renderCardSharePage() { // OK
    comensales.innerHTML = cardSharePage.field1;
    imagen.innerHTML = cardSharePage.field2;
    nombre.innerHTML = cardSharePage.field3;
    tiempo.innerHTML = cardSharePage.field4;
    ingredientes.innerHTML = cardSharePage.field5;
    pasos.innerHTML = cardSharePage.field6;
}


function loadFromLocalStorage(){
    savedData = localStorage.getItem("idCard");
     // coge el ID que está guardado en LS
    if (savedData !== null){
        const parsedData = JSON.parse(savedData);
        idLS = parsedData; // Asigna los datos parseados a la variable `idLS`
        console.log('Hay datos en el LS:', idLS);
        } else {
        console.log('No hay datos en el LS');
    }
}

/*
está cacheando y posteando una ID distinta de la que coge 
*/

function getDataFromApi(){
    loadFromLocalStorage();
    // fetch(`https://dev.adalab.es/api/info/${idLS}`)
    fetch('https://dev.adalab.es/api/info/17371241975427809') // prueba sin variable
        .then((response) => response.json())
        .then((info) => {
            console.log('Datos recogidos del API:', info);
            cardSharePage = info.data;
            console.log('Datos de cardSharePage:', cardSharePage);
            renderCardSharePage();
        });
}


getDataFromApi();