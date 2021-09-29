let prices = document.querySelectorAll(".item-price")
let quantities = document.querySelectorAll(".quantity")
let totalPrice = document.querySelector("#total_price_data")
 cartTotal= 0
 for (let i = 0 ; i< prices.length ; i++){
     cartTotal= cartTotal + (parseInt(prices[i].innerText.slice(1))*parseInt(quantities[i].value))
 }
 totalPrice.value= "$"+cartTotal