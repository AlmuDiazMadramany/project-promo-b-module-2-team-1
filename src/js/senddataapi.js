const btnCreate = document.querySelector (".js-btn");

// Al clicar en Generate, 
function handleCreate(ev){
    ev.preventDefault();
    console.log('Data', data); // Loguea lo que hemos guardado en data (para la API)
    // localStorage.setItem("cardData", JSON.stringify(data));
    fetch ("https://dev.adalab.es/api/info/data",{
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"},
        //se tiene que poner siempre que utilizemos el metodo tipo POST
    })
        .then((resp)=> resp.json())
        .then((responseData) => {
            if(responseData.success){
                localStorage.setItem("idCard", responseData.infoID); // mete en el LS el ID que ha generado la API
                console.log ("Éxito al hacer el POST")
            } else {
                console.log("Error al hacer POST");
            }
            });
        };

btnCreate.addEventListener ("click", handleCreate);