var mover = document.getElementById('materias');//Esta es la sección que contiene las tarjetas
var anchoTarjeta = document.getElementById('ancho').clientWidth; //Obtengo el ancho de la tarjeta principal que en realidad es el mismo para las tres
var buttonLeft = document.getElementById('back');//traigo los botones al script
var buttonRight = document.getElementById('adelan');

console.log(anchoTarjeta); //Muestra el ancho en px de la tarjeta 


checkButtonsNecesity();
mover.scroll(anchoTarjeta, 0); /*haciendo un scroll a la tarjeta de en medio que sería la principal o la "recomendada"*/

function scrollRightNx() {
    buttonLeft.style.display = ""
    buttonLeft.style.cursor = "pointer";
    mover.scroll(mover.scrollLeft + anchoTarjeta/4, 0);/*Obtiene la posicion del scroll de la seccion y le suma el ancho de la tarjeta para ir a la siguiente*/
    console.log(mover.scrollLeft); //Muestra en consola la posicion del scroll
    if(mover.scrollWidth == 0){
        buttonRight.style.opacity = 0
    } 
}

function scrollLeftNx() {
    mover.scroll(mover.scrollLeft - anchoTarjeta/4, 0);
    console.log(mover.scrollLeft);
    if(mover.scrollLeft == 0){
        
        buttonLeft.style.display = "block"
        buttonLeft.style.cursor = "default";
    } //Muestra en consola la posicion del scroll

}