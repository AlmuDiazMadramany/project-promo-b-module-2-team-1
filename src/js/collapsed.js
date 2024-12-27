//collapsed de los formularios
//clase collapsed en layout create
const design = document.querySelector(".js-design");
const description = document.querySelector(".js-description");
const btnDesign = document.querySelector(".js-btn-design");
const btnDescription = document.querySelector(".js-btn-description");

function handleClickDesign (ev) {
    ev.preventDefault();
    design.classList.remove(".collapsed");
}

function handleClickDescription (ev) {
    ev.preventDefault();    
    description.classList.remove(".collapsed");
}


btnDesign.addEventListener("click", handleClickDesign);
btnDescription.addEventListener("click", handleClickDescription);

// function showNewCatForm() {
//     newForm.classList.remove("collapsed");
// }

// function hideNewCatForm() {
//   newForm.classList.add("collapsed");
// }

// function handleClickNewCatForm (event) {
//   event.preventDefault();
//   if (newForm.classList.contains("collapsed")){
//     showNewCatForm()

//    } else {
//     hideNewCatForm()
//    };

// };

// buttonAdd.addEventListener("click", handleClickNewCatForm);

// buttonCancel.addEventListener("click", () => {
//   newForm.classList.add("collapsed");
//   formCats.reset()});