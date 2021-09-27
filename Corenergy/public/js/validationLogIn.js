const inputForm = document.getElementById("formLogIn")
const errorMsg = document.querySelector("#errorsFront");

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
          errorMsg.innerHTML = "That's not a valid email"
        }else{          
          errorMsg.innerHTML = "Keep going"
        }//chau keep
      }
      if(name == "password"){
          const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!regexPass.test(value)){          
          errorMsg.innerHTML = "Minimum 8 characters, at least one letter and one number"
        }else{        
          errorMsg.innerHTML = "Keep going"
        }//chau keep
      }
    }}});
    
  

