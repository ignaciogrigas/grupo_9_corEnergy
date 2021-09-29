let formToShow2 = document.querySelector("#form_to_show2")
let plus2 = document.querySelector("#show_form2")
window.addEventListener("load",function () {
    if(error.length>0){
        formToShow2.style.display = "flex";
    }
})
plus2.addEventListener("click",function() {
    if(formToShow2.style.display = "none"){
        formToShow2.style.display = "flex"
    }else {
        formToShow2.style.display="none"
    }
})
