const inputForm = document.getElementById("formLogIn")
const errorMsgUser = document.querySelector("#errorsFrontUser");
const errorMsgPass = document.querySelector("#errorsFrontPass");

errorMsgUser.style.display = "none"
errorMsgPass.style.display = "none"

let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
  if(input.getAttribute("type")!= "file"){
    input.onblur = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const value = target.value;
      
      if(name == "email"){
        const regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!regexEmail.test(String(value).toLocaleLowerCase())){  
          errorMsgUser.style.display = "block"       
          errorMsgUser.innerHTML = "That's not a valid email"
        }else{
          errorMsgUser.innerHTML = ""
        }
      }
      if(name == "password"){
          const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!regexPass.test(value)){ 
          errorMsgPass.style.display = "block"          
          errorMsgPass.innerHTML = "Minimum 8 characters, at least one letter and one number"
        }else{
          errorMsgPass.innerHTML = ""
        }
      }
    }}});
    
  

