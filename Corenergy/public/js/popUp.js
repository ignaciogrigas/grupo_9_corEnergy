let otherImages = document.querySelectorAll(".list_item")
let centralImage = document.querySelector("#central_img img")
console.log(centralImage);
for(let i= 0 ; i<otherImages.length ; i++){
    otherImages[i].addEventListener("click",function () {
        let source = otherImages[i].src
        console.log(source)
        centralImage.src = source
    })
}