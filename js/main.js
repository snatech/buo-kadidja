
const btnHamberger = document.getElementById("hamberger")
const fermer = document.getElementById("fermer")
const menu = document.getElementById("menu")

btnHamberger.addEventListener("click", ()=>{
    menu.classList.add("active")
})


fermer.addEventListener("click", ()=>{
    menu.classList.remove("active")
})



