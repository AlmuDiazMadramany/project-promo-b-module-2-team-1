const btnCreate = document.querySelector (".js-btn")

function handleCreate (ev){
    ev.preventDefault ();
    console.log ('Data', data);
    localStorage.setItem("cardData", JSON.stringify(data));
    
    fetch ("https://dev.adalab.es/api/info/data",{
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"},
        //se tiene que poner siempre que utilizemos el metodo tipo POST
    })
        .then((resp)=> resp.json())
        .then((responseData) => {
            if(responseData.success){
                localStorage.setItem("idCard", responseData.infoID);
                console.log ("Tarjeta creada correctamente")
            } else {
                console.log("Error al hacer POST");
            }
            });
        };

btnCreate.addEventListener ("click", handleCreate);