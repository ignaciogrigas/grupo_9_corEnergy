let sortBySelector = document.querySelector("#sort_by")
//let products= document.querySelectorAll("#product_article")

sortBySelector.addEventListener("change", function(){
    if(this.value == "low_to_high"){
    /*function compare(a,b) {
        console.log(parseInt(a.querySelector(".price").innerText.slice(1)))
        if(parseInt(a.querySelector(".price").innerText.slice(1)) < parseInt(b.querySelector(".price").innerText.slice(1))){
            return -1
        }
        if (parseInt(a.querySelector(".price").innerText.slice(1)) > parseInt(b.querySelector(".price").innerText.slice(1))){
            return 1
        }
        return 0
        
    }*/
    products.sort((a,b)=>parseInt(a.querySelector(".price").innerText.slice(1)) < parseInt(b.querySelector(".price").innerText.slice(1))? 1 :parseInt(a.querySelector(".price").innerText.slice(1)) > parseInt(b.querySelector(".price").innerText.slice(1))?-1:0)
    /*}else if(this.value == "high_to_low"){

    }*/
}})
/*const array = [75, 19, 10, 90, 2555, 110];

array.sort(compare)

function compare(a, b) {
//-1, "a" se situaría en un indice menor a "b"
//0, no cambia nada
//1, "b" se situaría en un indice menor a "a"
return a - b
}
console.log(array);


// los ordena de mayor a menor en este caso

/*const array = [75, 19, 10, 90, 25, 110];

array.sort(compare)

function compare(a, b) {
return b - a
}
console.log(array);*/