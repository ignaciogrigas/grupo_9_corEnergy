const inputForm = document.getElementById("formCreateP")
const errorMsgCreatePImg = document.querySelector("#errorsFrontCreatePImg");
const errorMsgCreatePName = document.querySelector("#errorsFrontCreatePName");
const errorMsgCreatePDesc = document.querySelector("#errorsFrontCreatePDesc");

errorMsgCreatePImg.style.display = "none"
errorMsgCreatePName.style.display = "none"
errorMsgCreatePDesc.style.display = "none"

let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
  if(input.getAttribute("type")!= "file"){
    input.onblur = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const value = target.value;
      
      if(name == "productName"){ 
        if(name.value.length < 4){        
          errorMsgCreatePName.style.display = "block"       
          errorMsgCreatePName.innerHTML = "Pruduct name should be longer"
        }else{
          errorMsgCreatePName.innerHTML = ""
        }
      }      
      if(name == "description"){          
        if(name.value.length < 20){ 
          errorMsgCreatePDesc.style.display = "block"          
          errorMsgCreatePDesc.innerHTML = "At least 20 characters"
        }else{
          errorMsgCreatePDesc.innerHTML = ""
        }
      }
    }
}else{
        input.onchange = (evento) =>{
          const target = evento.target;
          const name = target.getAttribute("name");
          const imgPreview = document.getElementById("CreatePImg")
    
          if(name == "productImages"){
            const files = target.files        
            if(files.length > 0){
              imgPreview.src = URL.createObjectURL(files[0]);
              
            }
          }
        }
      }
    
    })