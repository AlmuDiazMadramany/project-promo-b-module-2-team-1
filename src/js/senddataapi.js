const btnCreate = document.querySelector (".js-btn")

  
function handleCreate (ev){
    ev.preventDefault ();
    console.log (data);
    fetch ("https://dev.adalab.es/api/info/data",{
        method: 'POST', 
        body: JSON.stringify (data),
        headers: {"Content-type": "application/json"},
        //se tiene que poner siempre que utilizemos el metodo tipo POST
    })
        .then((resp)=> resp.json())
        .then((data) => {
            if(data.success){
                localStorage.setItem("idCard", data.infoID);
            } else {
            // pte innerHTML: poner mensaje error
            }
            });
        };

btnCreate.addEventListener ("click", handleCreate);