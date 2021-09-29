const inputForm = document.getElementById("formSingUp")
const errorMsgName = document.querySelector("#errorsFrontName");
const errorMsgSurname = document.querySelector("#errorsFrontSurname");
const errorMsgEmail = document.querySelector("#errorsFrontEmail");
const errorMsgPass = document.querySelector("#errorsFrontPass");
const errorMsgConfPass = document.querySelector("#errorsFrontConfPass");
const errorsFrontImg = document.querySelector("#errorsFrontImg");

errorMsgName.style.display = "none"
errorMsgSurname.style.display = "none"
errorMsgEmail.style.display = "none"
errorMsgPass.style.display = "none"
errorMsgConfPass.style.display = "none"
errorsFrontImg.style.display = "none"

let inputs = Array.from(inputForm.elements).filter(elemento => elemento.getAttribute("type") != undefined)

inputs.forEach(input => {
  if(input.getAttribute("type")!= "file"){
    input.onblur = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const value = target.value;

      //Name Validation
      if(name == "name"){
        const regexName =/^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;//Validacion de minimo 2 caracteres en Regex
        if(!regexName.test(value)){ 
          errorMsgName.style.display = "block"        
          errorMsgName.innerHTML = "Not a valid name"        
        }else{          
          errorMsgName.style.display = "none"
        }
      }

      //Surname validation
      if(name == "surname"){
        const regexSurame =/^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if(!regexSurame.test(value)){   
          errorMsgSurname.style.display = "block"      
          errorMsgSurname.innerHTML = "Not a valid surname"        
        }else{          
          errorMsgSurname.innerHTML = ""
        }
      }

      //Email Validation
      if(name == "email"){
        const regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!regexEmail.test(String(value).toLocaleLowerCase())){
          errorMsgEmail.style.display = "block"         
          errorMsgEmail.innerHTML = "That's not a valid email"
        }else{          
          errorMsgEmail.innerHTML = ""
        }
      }

      //Pass Validation
      if(name == "password"){
          const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!regexPass.test(value)){ 
          errorMsgPass.style.display = "block"         
          errorMsgPass.innerHTML = "Minimum 8 characters, at least one letter and one number"
        }else{        
          errorMsgPass.innerHTML = ""
        }
      }

      //ConfPass Validation
      if(name == "conf_password"){
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const confPassword = inputs.find(input => input.getAttribute("name") == "password")        
      if(value != confPassword.value){        
        errorMsgConfPass.style.display = "block"  
        errorMsgConfPass.innerHTML = "Password must match"     
      }else{        
        errorMsgConfPass.innerHTML = "Ready to go =)"
      }
    }
     //ConfPass Image Extension
  //     if(name == "file"){  
  //     const files = target.files
  //     const imgFormat = ["jpg","jpeg", "png", "gif"]            
  //     if(!imgFormat.includes(files)){        
  //       errorsFrontImg.style.display = "block"
  //       errorsFrontImg.innerHTML = "Image must be jpg, jpeg, pnp or gif"     
  //   }else{        
  //     errorMsgConfPass.innerHTML = "Ready to go =)"
  //   }
  // }

    }
    
    //Img Validation
  } else{
    input.onchange = (evento) =>{
      const target = evento.target;
      const name = target.getAttribute("name");
      const imgPreview = document.getElementById("avatar")
      const imgFormat = ["jpg","jpeg", "png", "gif"]

      if(name == "profileImage"){
        const files = target.files 
        const fileExt = files[0].name.split(".").pop()               
        if(files.length > 0){
          imgPreview.src = URL.createObjectURL(files[0])          
        }
        if(!imgFormat.includes(fileExt)){           
        errorsFrontImg.style.display = "block"
        errorsFrontImg.innerHTML = "Image must be jpg, jpeg, pnp or gif"
      }else{        
        errorsFrontImg.innerHTML = ""
      }


      }
    }
  }

})