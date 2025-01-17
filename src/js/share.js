
function loadFromLocalStorage (){
    const savedData = JSON.parse (localStorage.getItem("cardData"));
    if (savedData !== null){
        const parsedData = JSON.parse (savedData);
        data = parsedData;
        render();
    }
}

// loadFromLocalStorage ();



//función que cambie el estilo del diseño con 3 condicionales. field2 de card

//función para pintar mientras se escribe los datos en html
// function renderCard () {
//     comensales.innerHTML = card.field1; 
//     nombre.innerHTML = card.field3; 
//     tiempo.innerHTML = card.field4; 
//     ingredientes.innerHTML = card.field5;
//     pasos.innerHTML = card.field6;
//     imagen.src = card.photo;
//     console.log("FUNCIÓN RENDERCARD");
//     renderDesign();
// }

// renderCard();

//Identificamos los elementos de la preview


let cardSharePage ={};


function getDataFromApi() {
    const idLS = localStorage.getItem ("idCard");
    fetch (`https://dev.adalab.es/api/info/${idLS}`)
        .then((resp) => resp.json())
        .then((info) => {
            cardSharePage = info.data;
            console.log(cardSharePage);
            renderCardSharePage();
        });
}

function renderCardSharePage() { // OK
    comensales.innerHTML = cardSharePage.field1;
    nombre.innerHTML = cardSharePage.field3;
    tiempo.innerHTML = cardSharePage.field4;
    ingredientes.innerHTML = cardSharePage.field5;
    pasos.innerHTML = cardSharePage.field6;
    console.log("render card in share page");
}