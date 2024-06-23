
const btnHamberger = document.getElementById("hamberger")
// const produits =document.querySelectorAll(".produits")
const fermer = document.getElementById("fermer")
const menu = document.getElementById("menu")


btnHamberger.addEventListener("click", ()=>{
    menu.classList.add("active")
})

fermer.addEventListener("click", ()=>{
    menu.classList.remove("active")
})

function suivant(){
    var i=0;
    produits.forEach((produit)=>{
        produit.setAttribute("position",((produit.getAttribute("position")-1)+7)%7)
        i++
    })
    miseAJourDesPositionsDesProduitsEnFonctionDeAttributPosition()
}

function precedent(){
    var i=0;
    produits.forEach((produit)=>{
        console.log(produit, parseInt(produit.getAttribute("position")),parseInt(produit.getAttribute("position"))+1,61%7,(parseInt(produit.getAttribute("position"))+1)%7)
        produit.setAttribute("position", (parseInt(produit.getAttribute("position"))+1)%7)
        i++
    })
    miseAJourDesPositionsDesProduitsEnFonctionDeAttributPosition()
}


function miseAJourDesPositionsDesProduitsEnFonctionDeAttributPosition(){
    produits.forEach((produit)=>{
        produit.style.transform = "translateX("+listePositionsX[produit.getAttribute("position")]+"px)"
    })
}


