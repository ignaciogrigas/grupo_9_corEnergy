let under30 = document.querySelector("#btnunder_30")
let from60to30 = document.querySelector("#btn30_to_60")
let from60andAbove = document.querySelector("#btn60_and_above")
let products= document.querySelectorAll("#product_article")
under30.addEventListener("click",function() {
    products.forEach(product =>{
        product.style.display ="block"
        let price = product.querySelector(".price")
        let slicedPrice=price.innerText.slice(1)
        if(parseInt(slicedPrice) > 30){
            product.style.display ="none"
        }
    })
})
from60to30.addEventListener("click",function() {//no funca
    products.forEach(product =>{
        product.style.display ="block"
        let price = product.querySelector(".price")
        let slicedPrice=price.innerText.slice(1)
        if(parseInt(slicedPrice) > 60 && parseInt(slicedPrice) < 30){
            product.style.display ="none"
        }
    })
})
from60andAbove.addEventListener("click",function() {
    products.forEach(product =>{
        product.style.display ="block"
        let price = product.querySelector(".price")
        let slicedPrice=price.innerText.slice(1)
        if(parseInt(slicedPrice) < 60){
            product.style.display ="none"
        }
    })
})
