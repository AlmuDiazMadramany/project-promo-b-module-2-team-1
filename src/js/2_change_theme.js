const radio1 = document.querySelector (".js-radio-1");
const radio2 = document.querySelector (".js-radio-2");
const radio3 = document.querySelector (".js-radio-3");
const sectionCard = document.querySelector (".js-sectionCard");

const handleInputRadio1 = ()=>{
    sectionCard.classList.add("theme-1");
    sectionCard.classList.remove("theme-2", "theme-3");
}

radio1.addEventListener("click", handleInputRadio1);


const handleInputRadio2 = ()=>{
    sectionCard.classList.add("theme-2");
    sectionCard.classList.remove("theme-3", "theme-1");
}

radio2.addEventListener("click", handleInputRadio2);

const handleInputRadio3 = ()=>{
    sectionCard.classList.add("theme-3");
    sectionCard.classList.remove("theme-1", "theme-2");
}

radio3.addEventListener("click", handleInputRadio3);