let categorySelector = document.querySelector("#category")
let weightsSubCategories = document.querySelector("#choice_weights")
let elasticBandsSubCategories = document.querySelector("#choice_elasticBands")
let matsSubCategories = document.querySelector("#choice_mats")
let subcategoires =  document.getElementsByName("choice")
window.addEventListener("load",function(){
    console.log(categorySelector.selectedIndex)
    if (this.selectedIndex == 1){
        weightsSubCategories.style.display = "flex"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "none"
    } else if (this.selectedIndex == 3) {
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "flex"
        matsSubCategories.style.display = "none"
    } else if (this.selectedIndex == 4 ){
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "flex"
    } else if(this.selectedIndex == 2){
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "none"
    }
})
categorySelector.addEventListener("change",function(){
    if (this.selectedIndex == 1){
        weightsSubCategories.style.display = "flex"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "none"
    } else if (this.selectedIndex == 3) {
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "flex"
        matsSubCategories.style.display = "none"
    } else if (this.selectedIndex == 4 ){
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "flex"
    } else if(this.selectedIndex == 2){
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "none"
    }
})
for(let i = 0 ;  i<subcategoires.length;i++){
    subcategoires[i].addEventListener("click",function(){
            if(subcategoires[i].checked){
                subcategoires[i].labels[0].style.backgroundColor="#69E4B9"
                subcategoires[i].labels[0].style.color="white"
            }else if (!subcategoires[i].checked){
                subcategoires[i].labels[0].style.backgroundColor="white"
                subcategoires[i].labels[0].style.color="#4D5867"
            }
    })
}       

