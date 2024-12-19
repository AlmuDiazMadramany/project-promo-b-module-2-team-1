const radio1 = document.querySelector (".js-radio-1");
const radio2 = document.querySelector (".js-radio-2");
const radio3 = document.querySelector (".js-radio-3");

const handleInputRadio = ()=>{
    sectionCard.classList.add("theme-1");
    sectionCard.classList.remove("theme-2", "theme-3");
}

radio1.addEventListener("input", handleInputRadio)