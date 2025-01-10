const btnCreate = document.querySelector (".js-btn")
const dataAPI ={
    field1: "3", 
    field2: '1', 
    field3: '2', 
    field4: '3', 
    field5: '4', 
    field6: '5', 
    field7: '', 
    photo: 'https://pucheromix.b-cdn.net/wp-content/uploads/2023/04/bechamel-casera.jpg', 
};
  
function handleCreate (ev){
    ev.preventDefault ();
    console.log (dataAPI);
    fetch ("https://dev.adalab.es/api/info/data",{
        method: 'POST', 
        body: JSON.stringify (dataAPI),
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