let radios =  document.getElementsByName("choice")
let stars =  document.getElementsByName("star")
window.addEventListener("load",function () {
    for(let g =0 ;g<stars.length;g++){
    stars[g].labels[1].style.display="none"
    }
})
for(let i = 0 ;  i<radios.length;i++){
    radios[i].addEventListener("click",function(){
        for(let j = 0 ;  j<radios.length;j++){
            if(radios[j].checked){
                radios[j].labels[0].style.backgroundColor="#69E4B9"
                radios[j].labels[0].style.color="white"
            }else if (!radios[j].checked){
                radios[j].labels[0].style.backgroundColor="white"
                radios[j].labels[0].style.color="#4D5867"
            }
        }
    })
}
for(let i = 0 ;  i<stars.length;i++){
    stars[i].addEventListener("click",function(){
        for(let j = 0 ;  j<stars.length;j++){
            if(stars[j].checked){
                stars[j].labels[0].style.display="none"
                stars[j].labels[1].style.display="block"
                console.log(stars[j].labels[1])
            }else if (!stars[j].checked){
                stars[j].labels[1].style.display="none"
                stars[j].labels[0].style.display="block"
            }
        }
    })
}
