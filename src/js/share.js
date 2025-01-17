//función que cambie el estilo del diseño con 3 condicionales. field2 de card
// function renderDesign () {
//     if (card.field2 === "vintage") {
//         sectionCard.classList.add("theme-1");
//     } else if (card.field2 === "bordeado") {
//         sectionCard.classList.add("theme-2");
//     } else {
//         sectionCard.classList.add("theme-3");
//     };
//     console.log("FUNCIÓN RENDERDESIGN");
// };

// función para pintar mientras se escribe los datos en html
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

// Identificamos los elementos de la preview


// let cardSharePage ={};

// function renderCardSharePage() { // OK
//     comensales.innerHTML = data.field1;

//     nombre.innerHTML = data.field3;
//     tiempo.innerHTML = data.field4;
//     ingredientes.innerHTML = data.field5;
//     pasos.innerHTML = data.field6;
//     console.log("render card in share page");
// }

// function getDataFromApi() {
//     const idLS = localStorage.getItem ("idCard");
//     fetch (`https://dev.adalab.es/api/info/${idLS}`)
//         .then((resp) => resp.json())
//         .then((info) => {
//             cardSharePage = info.data;
//             console.log(cardSharePage);
//             renderCardSharePage()();
//         });
// }

// getDataFromApi();

// está ejectuando al arrancar la página lo que hay guardado en el LS
