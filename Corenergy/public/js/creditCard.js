const inputForm = document.getElementById("form_to_show1")
const errorMsgCard = document.querySelector("#errorsFrontCard");
const errorMsgSecode = document.querySelector("#errorsFrontSecode");


errorMsgCard.style.display = "none"
errorMsgSecode.style.display = "none"


let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
    if(input.getAttribute("type")!= "file"){
      input.onblur = (evento) =>{
        const target = evento.target;
        const name = target.getAttribute("name");
        const value = target.value;
        
        
        if(name == "creditcard"){ 
            console.log(value, "value")
          if(value.length != 16){        
            errorMsgCard.style.display = "block"       
            errorMsgCard.innerHTML = "You have to put 16 numbers"            
          }else{
            errorMsgCard.innerHTML = ""
          }
        }      
        if(name == "secode"){                      
          if(value.length < 3 || value.length > 4){ 
            errorMsgSecode.style.display = "block"          
            errorMsgSecode.innerHTML = "Invalid security code"
          }else{
            errorMsgSecode.innerHTML = ""
          }
        }        
      }
    }
}
);
