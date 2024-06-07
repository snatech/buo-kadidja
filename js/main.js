
const btnHamberger = document.getElementById("hamberger")
// const produits =document.querySelectorAll(".produits")
const fermer = document.getElementById("fermer")
const menu = document.getElementById("menu")
var dernierProduit=produits[6]
var premierProduit=produits[0]


btnHamberger.addEventListener("click", ()=>{
    menu.classList.add("active")
})

fermer.addEventListener("click", ()=>{
    menu.classList.remove("active")
})

function decalage_vers_la_fin(produit,n){
    // le premier devient le dernier
    produit.style.transform = "translateX("+(dernierProduit.getBoundingClientRect().x+10)+"px)"
    dernierProduit = produit
    premierProduit=produits[(n+1)%7]
    // equation pour trouver le premier produit apres le decalage
        // (n+1)%7
    // premierProduit = produit[n+1]
    // for (let i = n; i < produits.length; i++) {
    //     const element = produits[i];
    // }
}

function decalage_vers_le_debut(produit,n){
    // le premier devient le dernier
    // produit.style.transform = "translateX("+(premierProduit.getBoundingClientRect().x-10)+"px)"
    // premierProduit=produit
    
    // equation pour trouver le dernier produit apres le decalage
        // ((n-1)+7)%7

    dernierProduit=produits[((n-1)+7)%7]
    console.log(produit,dernierProduit)

    // premierProduit = produit
    // for (let i = n; i < produits.length; i++) {
    //     const element = produits[i];
    // }
}

function suivant(){
    var i=0;
    produits.forEach((produit)=>{
        produit.setAttribute("position",((produit.getAttribute("position")-1)+7)%7)
        i++
    })
    miseAJourDesPositionsDesProduits()
}

function miseAJourDesPositionsDesProduits(){
    produits.forEach((produit)=>{
        produit.style.transform = "translateX("+listePositionsX[produit.getAttribute("position")]+"px)"
    })
}

function precedent(){
    var i=0;
    produits.forEach((produit)=>{
        console.log(produit, parseInt(produit.getAttribute("position")),parseInt(produit.getAttribute("position"))+1,61%7,(parseInt(produit.getAttribute("position"))+1)%7)
        produit.setAttribute("position", (parseInt(produit.getAttribute("position"))+1)%7)
        i++
    })
    miseAJourDesPositionsDesProduits()
}


