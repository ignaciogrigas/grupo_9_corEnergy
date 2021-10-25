const inputForm = document.getElementById("form_to_show")
const errorMsgCity = document.querySelector("#errorsFrontCity");
const errorMsgAddress = document.querySelector("#errorsFrontAddress");
const errorMsgZipcode = document.querySelector("#errorsFrontZipcode");

errorMsgCity.style.display = "none"
errorMsgAddress.style.display = "none"
errorMsgZipcode.style.display = "none"

let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
    if(input.getAttribute("type")!= "file"){
      input.onblur = (evento) =>{
        const target = evento.target;
        const name = target.getAttribute("name");
        const value = target.value;
        
        
        if(name == "city"){             
          if(value.length < 1){        
            errorMsgCity.style.display = "block"       
            errorMsgCity.innerHTML = "You must put a City"           
          }else{
            errorMsgCity.innerHTML = ""
          }
        }      
        if(name == "address"){                      
          if(value.length < 1){ 
            errorMsgAddress.style.display = "block"          
            errorMsgAddress.innerHTML = "You must put an Address"
          }else{
            errorMsgAddress.innerHTML = ""
          }
        }
        if(name == "zipcode"){ 
                     
            if(value.length != 4){ 
                errorMsgZipcode.style.display = "block"          
                errorMsgZipcode.innerHTML = "Zipcode must be 4 numbers"
                
            }else{
                errorMsgZipcode.innerHTML = ""              
            }
          }
      }
    }
}
);
