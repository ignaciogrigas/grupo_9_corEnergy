const incButton = document.getElementsByClassName("fas fa-angle-up") 
const decButton = document.getElementsByClassName("fas fa-angle-down")
let quantityInputs = document.getElementsByClassName("input_quantity")
let quantityInputsFake = document.getElementsByClassName("quantity")



//Funcion de aumento del precio de cada producto
const priceIncrement = function(newValueP,itemPriceP, i){
    let total = newValueP * parseInt(itemPriceP)
    if(total >=itemPriceP){
    return document.getElementById("item-price-" + i).innerText =  total
}else{
    return document.getElementById("item-price-" + i).innerText =  itemPriceP
}

}

//Funcion de aumento del precio total
function calcularTotal(){
    let prices = document.querySelectorAll(".item-price")         
    let totalPrice = document.querySelector("#total_price_data")
        cartTotal= 0
        for (let i = 0 ; i< prices.length ; i++){
            cartTotal= cartTotal + (parseInt(prices[i].innerText))
        }
        totalPrice.value= "$"+cartTotal}
    for ( let i = 0 ; i<quantityInputs.length;i++){
        quantityInputs[i].value = quantityInputsFake[i].value
}


//Incremento de producto
for(let i = 0; i < incButton.length; i++){
    let button = incButton[i];
    calcularTotal()
    button.addEventListener("click", function(event){
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
        let itemPrice = document.getElementById("unit-price-" + i).innerText                
        priceIncrement(newValue,itemPrice, i)
        calcularTotal()
                    
        for ( let i = 0 ; i<quantityInputs.length;i++){
            quantityInputs[i].value = quantityInputsFake[i].value
        }
      })      
    }

// decremento de producto    
for(let i = 0; i < decButton.length; i++){
    let button = decButton[i];
    calcularTotal()
    button.addEventListener("click", function(event){
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) - 1;
        if(newValue >=1){
            input.value = newValue
        }else{
            input.value = 1
        }
        let itemPrice = document.getElementById("unit-price-" + i).innerText        
        priceIncrement(newValue,itemPrice, i)
        calcularTotal()
        for ( let i = 0 ; i<quantityInputs.length;i++){
            quantityInputs[i].value = quantityInputsFake[i].value
        }     
    })        
}
