var modalOpened = false;


const openModal = () => {
    const modal = document.getElementById("question");
    modal.classList.add("open");
}
const closeModal = () => {
    const modal = document.getElementById('question');
    modal.classList.remove("open");
}
const manageModal = () => {
    const modal = document.getElementById('question');
    if(modalOpened){
        closeModal();
    }else{
        openModal();
    }
    modalOpened = !modalOpened;
    console.log(correcta)
}

const openModalEnd = () => {
    const modal = document.getElementById("end");
    modal.classList.add("open");
}


const bubbles = () => {
    boton.classList.add("animate");
    setTimeout(() => {
        boton.classList.remove("animate");
    }, 1000)
}
const verde = () => {
    boton.classList.add("correcta");
    setTimeout(() => {
        boton.classList.remove("correcta");
    }, 1000)
}
const rojo = () => {
    boton.classList.add("incorrecta");
    setTimeout(() => {
        boton.classList.remove("incorrecta");
    }, 1000)
}

var puntos = 0, conta= 0, correctas = 0;
var preguntas1 = [
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
var preguntas2 = [
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
var preguntas3 = [

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
var preguntas4 = [
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

var materias = [preguntas1, preguntas2, preguntas3, preguntas4];
var materia
var correcta;
var index;

function mostrarpreguntas(id){
    document.getElementById(id).style.display = "none";
    if (id == "uno" || id == "dos" || id =="tres"|| id =="cuatro" || id == "cinco"){  
        //index = 0;
        materia = materias[0];
    }
    if (id == "seis" || id == "siete" || id =="ocho"|| id =="nueve" || id == "diez"){  
        materia = materias[1];
    }
    if (id == "once" || id == "doce" || id =="trece"|| id =="catorce" || id == "quince") {  
        materia = materias[2];
    }
    if (id == "dieciseis" || id == "diecisiete" || id =="dieciocho"|| id =="diecinueve" || id == "veinte"){  
        materia = materias[3];
    }
    if (id == "uno" || id == "seis" || id =="once"|| id =="dieciseis"){  
        index = 0;
    }
    if (id == "dos" || id == "siete" || id =="doce"|| id =="diecisiete"){  
        index = 1;
    }
    if (id == "tres" || id == "ocho" || id =="trece"|| id =="dieciocho") {  
        index = 2;
    }
    if (id == "cuatro" || id == "nueve" || id =="catorce"|| id =="diecinueve" ){  
        index = 3;
    }
    if (id == "cinco" || id == "diez" || id =="quince"|| id =="veinte" ){  
        index = 4;
    }
    console.log(index);
    var lista = [1,2,3,4];
    lista = lista.sort(function() {return Math.random() - 0.5});
    if(lista[0] == 1){ //respuesta correcta
        document.getElementById("resp1").textContent = materia[index].correcta;
        correcta =  lista[0];
    }
    if(lista[0] == 2){ 
        document.getElementById("resp2").textContent = materia[index].correcta;
        correcta = lista[0];
    }
    if(lista[0] == 3){
        document.getElementById("resp3").textContent = materia[index].correcta;
        correcta = lista[0];
    }
    if(lista[0] == 4){
        document.getElementById("resp4").textContent= materia[index].correcta;
        correcta = lista[0];
    }
    console.log(materia[index].correcta);

    if(lista[1] == 1){ //respuesta incorrecta 1
        document.getElementById("resp1").textContent = materia[index].incorrectas[0];
    }
    if(lista[1] == 2){
        document.getElementById("resp2").textContent = materia[index].incorrectas[0];
    }
    if(lista[1] == 3){
        document.getElementById("resp3").textContent = materia[index].incorrectas[0];
    }
    if(lista[1] == 4){
        document.getElementById("resp4").textContent = materia[index].incorrectas[0];
    }

    if(lista[2] == 1){ //respuesta incorrecta 2
        document.getElementById("resp1").textContent = materia[index].incorrectas[1];
    }
    if(lista[2] == 2){
        document.getElementById("resp2").textContent = materia[index].incorrectas[1];
    }
    if(lista[2] == 3){
        document.getElementById("resp3").textContent = materia[index].incorrectas[1];
    }
    if(lista[2] == 4){
        document.getElementById("resp4").textContent = materia[index].incorrectas[1];
    }

    if(lista[3] == 1){ //respuesta incorrecta 3
        document.getElementById("resp1").textContent = materia[index].incorrectas[2];
    }
    if(lista[3] == 2){
        document.getElementById("resp2").textContent = materia[index].incorrectas[2];
    }
    if(lista[3] == 3){
        document.getElementById("resp3").textContent = materia[index].incorrectas[2];
    }
    if(lista[3] == 4){
        document.getElementById("resp4").textContent = materia[index].incorrectas[2];
    }
    document.getElementById("pregunta").textContent = materia[index].contenido;

    console.log(materia[index].incorrectas[0]);
    console.log(materia[index].incorrectas[1]);
    console.log(materia[index].incorrectas[2]);
    conta++;
    console.log("conta: " . conta);
    manageModal();
}

var boton;


function respuestaCorrecta(id){
    boton = document.getElementById(id);
    if(correcta == 1 && id == "resp1"){
        puntos = puntos + parseInt(materia[index].pregunta, 10);
        verde();
        bubbles();
        correctas++;
    }
    else if (correcta == 2  && id == "resp2"){
        puntos = puntos + parseInt(materia[index].pregunta, 10);
        verde();
        bubbles();
        correctas++;
    }
    else if (correcta == 3  && id == "resp3"){
        puntos = puntos + parseInt(materia[index].pregunta, 10);
        verde();
        bubbles();
        correctas++;
    }
    else if (correcta == 4  && id == "resp4"){
        puntos = puntos + parseInt(materia[index].pregunta, 10);
        verde();
        bubbles();
        correctas++;
    }
    else{
        rojo();
    }
    document.getElementById('resp1').disabled = true;
    document.getElementById('resp2').disabled = true;
    document.getElementById('resp3').disabled = true;
    document.getElementById('resp4').disabled = true;
    console.log(puntos);
    setTimeout(() => {
        manageModal();
        document.getElementById('resp1').disabled = false;
        document.getElementById('resp2').disabled = false;
        document.getElementById('resp3').disabled = false;
        document.getElementById('resp4').disabled = false;
        if(conta >=10){
            document.getElementById('puntos').textContent = puntos;
            document.getElementById('correctas').textContent = "Preguntas correctas : " + correctas;
            openModalEnd();
        }
    }, 1000)

};


    


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }





