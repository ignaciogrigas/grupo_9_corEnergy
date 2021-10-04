const incButton = document.getElementsByClassName("fas fa-angle-up") 
const decButton = document.getElementsByClassName("fas fa-angle-down")
let quantityInputs = document.getElementsByClassName("quantity_inputs")

for(let i = 0; i < incButton.length; i++){
    let button = incButton[i];
    button.addEventListener("click", function(event){
        let buttonClicked = event.target;
        let input = buttonClicked.parentElement.children[1];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) + 1;
        input.value = newValue;
      })
    }
    for(let i = 0; i < decButton.length; i++){
        let button = decButton[i];
        button.addEventListener("click", function(event){
            let buttonClicked = event.target;
            let input = buttonClicked.parentElement.children[1];
            let inputValue = input.value;
            let newValue = parseInt(inputValue) - 1;
            if(newValue >=0){
                input.value = newValue
    
            }else{
                input.value = 0
    
            }        
        })
    }
console.log("holis", quantityInputs);