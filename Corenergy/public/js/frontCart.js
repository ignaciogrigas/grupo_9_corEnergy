function increase_by_one(field) {
 nr = parseInt(field.value);
 field.value = nr + 1;
}
 
function decrease_by_one(field) {
 nr = parseInt(field.value);
 if (nr > 0) {
   if( (nr - 1) > 0) {
    field.value = nr - 1;
   }
 }
}
let counter = document.querySelectorAll(".quantity");
let up = document.querySelectorAll(".fa-angle-up");
let down = document.querySelectorAll(".fa-angle-down");
//ambas lo hacen apenas carga la pagina y dps no me deja hacerlo mas
for( let i = 0 ; i<counter.length;i++){
  up[i].addEventListener("click",increase_by_one(counter[i]))
}
for( let i = 0 ; i<counter.length;i++){
  down[i].addEventListener("click",decrease_by_one(counter[i]))
}