let burguerMenu = document.querySelector(".fa-bars");
 let navBar = document.querySelector("#nav_products")
let logInInfo = document.querySelector("#nav_products #log_in_mobile")

 burguerMenu.addEventListener("click",function(){
     if ( navBar.style.display === "none"){
        logInInfo.style.display="block"
        navBar.style.display="flex"
        /*navBar.style.justifyContent= "center";
        navBar.style.alignItems= "center";
        navBar.style.flexFlow= "row wrap";
        navBar.style.paddingTop= "2vw";*/
     } else {
        logInInfo.style.display="none"
        navBar.style.display="none"
     }
    
 })