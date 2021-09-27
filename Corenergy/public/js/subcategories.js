let categorySelector = document.querySelector("#category")
let weightsSubCategories = document.querySelector("#choice_weights")
let elasticBandsSubCategories = document.querySelector("#choice_elasticBands")
let matsSubCategories = document.querySelector("#choice_mats")
categorySelector.addEventListener("change",function(){
    if (this.value == 1){
        weightsSubCategories.style.display = "flex"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "none"
    } else if ( this.value == 3) {
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "flex"
        matsSubCategories.style.display = "none"
    } else if (this.value == 4 ){
        weightsSubCategories.style.display = "none"
        elasticBandsSubCategories.style.display = "none"
        matsSubCategories.style.display = "flex"
    }
})//Como hago para que aparezca en el edit directo cuando ya esta puesto el valor,probe con oad y nada
    let checkboxes =  document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => 
        checkbox.addEventListener("change",function(){
            if(this.checked){
                this.display="block"
            }
        })
        )//no sale!

    /*let labels = document.getElementsByTagName('label')
    for (var checkbox in subCategoriesChecked ){
        labels.forEach(function(label){
            if (label.htmlFor == checkbox.id)
            {label.style.backgroundColor = "#69E4B9";
            label.style.color = "white"}
        })
    }*/
        

