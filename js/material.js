let preguntas = [
    {
        pregunta: "100",
        contenido: "Pregunta #1",
        correcta: "Respuesta correcta",
        incorrectas: ["Respuesta incorrecta 1", "Respuesta incorrecta 2", "Respuesta incorrecta 3"]
    },
    {
        pregunta: "200",
        contenido: "Pregunta #2",
        correcta: "Respuesta correcta",
        incorrectas: ["Respuesta incorrecta 1", "Respuesta incorrecta 2", "Respuesta incorrecta 3"]
    },
    {
        pregunta: "300",
        contenido: "Pregunta #3",
        correcta: "Respuesta correcta",
        incorrectas: ["Respuesta incorrecta 1", "Respuesta incorrecta 2", "Respuesta incorrecta 3"]
    },
    {
        pregunta: "400",
        contenido: "Pregunta #4",
        correcta: "Respuesta correcta",
        incorrectas: ["Respuesta incorrecta 1", "Respuesta incorrecta 2", "Respuesta incorrecta 3"]
    },
    {
        pregunta: "500",
        contenido: "Pregunta #5",
        correcta: "Respuesta correcta",
        incorrectas: ["Respuesta incorrecta 1", "Respuesta incorrecta 2", "Respuesta incorrecta 3"]
    },

]
var i = 0;
function forward() {
    console.log("funcionando");
    capturar(i);
    if (i < 4)
        i ++;
    else
        i = 0;
    console.log(i)
    cambiar(i);

}
function backward() {
    capturar(i);
    if (i > 0)
        i --;
    else
        i = 4;
    cambiar(i);
    
}
function  cambiar(i) {
    document.getElementById("puntos").innerHTML=preguntas[i].pregunta;
    document.getElementById("preg1").placeholder=preguntas[i].contenido;
    document.getElementById("respi1").placeholder=preguntas[i].correcta;
    document.getElementById("respi2").placeholder=preguntas[i].incorrectas[0];
    document.getElementById("respi3").placeholder=preguntas[i].incorrectas[1];
    document.getElementById("respi4").placeholder=preguntas[i].incorrectas[2];
    console.log(preguntas[i].contenido);
}
function capturar(i){
    if (document.getElementById("preg1").value != "")
        preguntas[i].contenido =  document.getElementById("preg1").value;
    if (document.getElementById("respi1").value != "")
        preguntas[i].correcta =  document.getElementById("respi1").value;
    if (document.getElementById("respi2").value != "")
        preguntas[i].incorrectas[0] =  document.getElementById("respi2").value;
    if (document.getElementById("respi3").value != "")
        preguntas[i].incorrectas[1] =  document.getElementById("respi3").value;
        if (document.getElementById("respi4").value != "")
        preguntas[i].incorrectas[2] =  document.getElementById("respi4").value;
        document.getElementById("preg1").value = "";
        document.getElementById("respi1").value = "";
        document.getElementById("respi2").value = "";
        document.getElementById("respi3").value = "";
        document.getElementById("respi4").value = "";
}
 


