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

//box que sigue el cursor


//detecta el mouse
function isMoving(){
    try{
        document.createEvent("TouchEvent");
        return true;
    } catch (e){
        return false;
    }
}

const move = (e) =>{
    try{
        //detecta la posicion del mouse
        var x = !isMoving() ? e.pageX : e.touches[0].pageX;
        var y = !isMoving() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){}
        mensaje.style.left = x - 30 + "px";
        mensaje.style.top = y - 30 + "px";

    };
document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move (e);
});

var x;
var y;
function position(event){
    var mensaje = document.getElementById('message');
	x = event.clientX;
	y = event.clientY;
    mensaje.style.left = x + "px";
    mensaje.style.top = y - 80 + "px";
}
window.addEventListener('mousemove', position);

function mostrarCuadro(){
    var mensaje = document.getElementById('message');
    mensaje.style.display = "flex"
    
}
function noMostrar(){
    var mensaje = document.getElementById('message');
    mensaje.style.display = "none";
}