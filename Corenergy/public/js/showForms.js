let formToShow = document.querySelector("#form_to_show")
let plus = document.querySelector("#show_form")
let formToShow1 = document.querySelector("#form_to_show1")
let plus1 = document.querySelector("#show_form1")
let error = document.querySelectorAll(".error")
window.addEventListener("load",function () {
    if(error.length>0){
        formToShow.style.display = "flex";
        formToShow1.style.display = "flex";
    }
})
plus.addEventListener("click",function() {
    if(formToShow.style.display = "none"){
        formToShow.style.display = "flex"
    }else {
        formToShow.style.display="none"
    }
})
plus1.addEventListener("click",function() {
    if(formToShow1.style.display = "none"){
        formToShow1.style.display = "flex"
    }else {
        formToShow1.style.display="none"
    }
})
