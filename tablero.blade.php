<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeopardy!</title>
    <link rel="stylesheet" href="{{asset('css/tablero.css')}}">
</head>

<body class="fondo">
    <p id="tem1">Tema 1</p>
    <p id="tem2">Tema 2</p>
    <p id="tem3">Tema 3</p>
    <p id="tem4">Tema 4</p>
    <div class="circul">
        <img src="{{asset('Images/Usuario_icono.png')}}" class="imag">
    </div>
    <div class="circur">
        
    </div>
    <div class="circdl">
        
    </div>
    <div class="circdr">
        
    </div>
    <a class="rectangulo" id="uno" onclick="mostrarpreguntas('uno');">
        100
    </a>
    <a class="rectangulo" id="dos" onclick="mostrarpreguntas('dos');">
        200
    </a>
    <a class="rectangulo" id="tres" onclick="mostrarpreguntas('tres');">
        300
    </a>
    <a class="rectangulo" id="cuatro" onclick="mostrarpreguntas('cuatro');">
        400
    </a>
    <a class="rectangulo" id="cinco" onclick="mostrarpreguntas('cinco');">
        500
    </a>
    <a class="rectangulo" id="seis" onclick="mostrarpreguntas('seis');">
        100
    </a>
    <a class="rectangulo" id="siete" onclick="mostrarpreguntas('siete');">
        200
    </a>
    <a class="rectangulo" id="ocho" onclick="mostrarpreguntas('ocho');">
        300
    </a>
    <a class="rectangulo" id="nueve" onclick="mostrarpreguntas('nueve');">
        400
    </a>
    <a class="rectangulo" id="diez" onclick="mostrarpreguntas('diez');">
        500
    </a>
    <a class="rectangulo" id="once" onclick="mostrarpreguntas('once');">
        100
    </a>
    <a class="rectangulo" id="doce" onclick="mostrarpreguntas('doce');">
        200
    </a>
    <a class="rectangulo" id="trece" onclick="mostrarpreguntas('trece');">
        300
    </a>
    <a class="rectangulo" id="catorce" onclick="mostrarpreguntas('catorce');">
        400
    </a>
    <a class="rectangulo" id="quince" onclick="mostrarpreguntas('quince');">
        500
    </a>
    <a class="rectangulo" id="dieciseis" onclick="mostrarpreguntas('dieciseis');">
        100
    </a>
    <a class="rectangulo" id="diecisiete" onclick="mostrarpreguntas('diecisiete');">
        200
    </a>
    <a class="rectangulo" id="dieciocho" onclick="mostrarpreguntas('dieciocho');">
        300
    </a>
    <a class="rectangulo" id="diecinueve" onclick="mostrarpreguntas('diecinueve');">
        400
    </a>
    <a class="rectangulo" id="veinte" onclick="mostrarpreguntas('veinte');">
        500
    </a>
    <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div >
    <div id="question">
        <div id="pregunta">
            Pregunta
        </div>
        <button id="resp1" class="respuesta" onclick="respuestaCorrecta('resp1')">
            uwu
        </button>
        <button id="resp2" class="respuesta" onclick="respuestaCorrecta('resp2')">
            owo
        </button>
        <button id="resp3" class="respuesta" onclick="respuestaCorrecta('resp3')">
            ewe
        </button>
        <button id="resp4" class="respuesta" onclick="respuestaCorrecta('resp4')">
            nwn
        </button>
    </div>
    <div id="end">
        <form action="">
            <div>
                <p style="color: aliceblue; text-shadow: #0a0045 0 0 10px; font-size: 1.5rem;"> Resumen del juego</p>
                <p >Puntaje : <a id="puntos"></a> </p>
                <input type="hidden" value="" id="puntos" name="puntaje">
                <p id="correctas">Preguntas correctas :</p>
                <button id="ok"> Ok </button>
            </div>
            
        </form>
        
    </div>
</body>
</html>
<script src="{{asset('js/tablero.js')}}"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">