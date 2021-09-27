const inputForm = document.getElementById("formSingUp")
const errorMsg = document.querySelector(".errorsFront");

let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
  if(input.getAttribute("type")!= "file"){
    input.onblur = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const value = target.value;

      if(name == "name"){
        const regexName =/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
        if(!regexName.test(value)){         
          errorMsg.innerHTML = "Full name required"
        }else{          
          errorMsg.innerHTML = "Keep going"
        }
      }
      if(name == "email"){
        const regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!regexEmail.test(String(value).toLocaleLowerCase())){         
          errorMsg.innerHTML = "That's not a valid email"
        }else{          
          errorMsg.innerHTML = "Keep going"
        }
      }
      if(name == "password"){
          const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!regexPass.test(value)){          
          errorMsg.innerHTML = "Minimum 8 characters, at least one letter and one number"
        }else{        
          errorMsg.innerHTML = "Keep going"
        }
      }
      if(name == "conf_password"){
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const confPassword = inputs.find(input => input.getAttribute("name") == "password")
        console.log(confPassword.value, "confpassword aca")
      if(value != confPassword.value){          
        errorMsg.innerHTML = "Password must match"     
      }else{        
        errorMsg.innerHTML = "Ready to go =)"
      }
    }
    }
    
  } else{
    input.onchange = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const imgPreview = document.getElementById("avatar")

      if(name == "profileImage"){
        const files = target.files        
        if(files.length > 0){
          imgPreview.src = URL.createObjectURL(files[0]);
          
        }else{

        }
      }
    }
  }

})