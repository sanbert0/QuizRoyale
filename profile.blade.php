<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="{{('css/profile.css')}}">
    <link rel="stylesheet" href="{{('scss/profile.css')}}">

</head>
<body class="fondo">
    <div class="blur" style="text-align: center;">
        
        <form name="frm" id="frm" >
                <div class="Rectángulo_1">
                    <svg id="atras" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                      </svg>
                    <div id="info">
                        <img src="{{('Images/Usuario_icono.png')}}" id="foto" alt="">
                        <div id="nombre">
                            <p>Nombre</p>
                        </div>
                        <div id="nombreUs">
                            <p class="ingresao">
                                Nombre completo
                            </p>
                        </div>
                        <div id="matricula">
                            <p>Matricula</p>
                        </div>
                        <div id="matriculaUs">
                            <p class="ingresao">
                                Matriculilla
                            </p>
                        </div>
                        <div id="logout">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="80" height="80" viewBox="0 0 24 24" stroke-width="2" stroke="#D6023F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                                    <path d="M12 4l0 8" />
                                  </svg>
                            </button>
                            <p style="font-size: 1rem; cursor:default">Cerrar Sesión</p>
                        </div>
                    </div>
                    <p id="classtag">Clases</p>
                    <div class="class">
                      
                      <svg id="adelan" onclick="scrollRightNx();" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                      </svg>

                      <svg id="back" onclick="scrollLeftNx();" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                      </svg>

                      
                        <ul class="tablilla" name="tablilla" id="materias">
                            <li id="mas">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0f1953" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M9 12h6" />
                                <path d="M12 9v6" />
                              </svg>
                            </li>
                            @foreach ()
                            <li class=" materia">
                                <p id="id">ID</p>
                                <p id="mat">Clase</p>
                                <p id="prof">Profesor</p>
                                <p id="acumlab">Puntos: </p>
                                <p id="acum">00000</p>
                            </li>
                            @endforeach
                            <!--
                            <li class=" materia">
                              <p id="id">ID</p>
                              <p id="mat">Clase</p>
                              <p id="prof">Profesor</p>
                              <p id="acumlab">Puntos: </p>
                              <p id="acum">00000</p>
                            </li>
                            <li class=" materia">
                                <p id="id">ID</p>
                                <p id="mat">Clase</p>
                                <p id="prof">Profesor</p>
                                <p id="acumlab">Puntos: </p>
                                <p id="acum">00000</p>
                            </li>
                            <li class=" materia">
                                <p id="id">ID</p>
                                <p id="mat">Clase</p>
                                <p id="prof">Profesor</p>
                                <p id="acumlab">Puntos: </p>
                                <p id="acum">00000</p>
                          </li>-->
                        </ul>
                    </div>
                    
                    <p id="awardtag">Premios</p>
                    <div class="premios">
                        <ul class="tabla">
                          <li class="table-header">
                            <div class="col col-1">ID</div>
                            <div class="col col-2">Premio</div>
                            <div class="col col-3">Materia</div>
                            <div class="col col-4">Profesor</div>
                          </li>
                          @foreach()
                          <li class="table-row">
                            <div class="col col-1" data-label="ID">42235</div>
                            <div class="col col-2" data-label="Premio">Titulo universitario</div>
                            <div class="col col-3" data-label="Materia">Quien sabe</div>
                            <div class="col col-4" data-label="Profesor">el rector</div>
                          </li>
                          @endforeach
                          <!--
                          <li class="table-row">
                            <div class="col col-1" data-label="ID">42235</div>
                            <div class="col col-2" data-label="Premio">Titulo universitario</div>
                            <div class="col col-3" data-label="Materia">Quien sabe</div>
                            <div class="col col-4" data-label="Profesor">el rector</div>
                          </li>
                          <li class="table-row">
                            <div class="col col-1" data-label="ID">42235</div>
                            <div class="col col-2" data-label="Premio">Titulo universitario</div>
                            <div class="col col-3" data-label="Materia">Quien sabe</div>
                            <div class="col col-4" data-label="Profesor">el rector</div>
                          </li>
                          <li class="table-row">
                            <div class="col col-1" data-label="ID">42235</div>
                            <div class="col col-2" data-label="Premio">Titulo universitario</div>
                            <div class="col col-3" data-label="Materia">Quien sabe</div>
                            <div class="col col-4" data-label="Profesor">el rector</div>
                          </li>-->
                        </ul>
                      </div>
                      
                </div>
                
        </form>
    </div>
</body>
<script src="{{('js/profile.js')}}"></script>
</html>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">