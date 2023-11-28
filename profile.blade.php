<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="{{('css/profile.css')}}">
    <link rel="stylesheet" href="{{('scss/profile.css')}}">

</head>
<body class="fondo" onmousemove="position(event);">
    <div class="blur" style="text-align: center;">
        
        
                <div class="Rectángulo_1">
                    <a class="uwu" href="{{route('main2')}}">
                      <svg id="atras" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                      </svg>
                    </a>
                    <div id="info">
                        <img src="{{('Images/Usuario_icono.png')}}" id="foto" alt="">
                        <div id="nombre">
                            <p>Nombre</p>
                        </div>
                        <div id="nombreUs">
                            <p class="ingresao">
                              <?php echo(Session::get('nombre')) ?>
                            </p>
                        </div>
                        <div id="matricula">
                            <p>Matricula</p>
                        </div>
                        <div id="matriculaUs">
                            <p class="ingresao">
                              <?php echo(Session::get('matricula')) ?>
                            </p>
                        </div>
                        <div id="logout">
                            <button type="button" onclick="location.href='{{route('logOut')}}'">
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
                              <a href="{{route('classForm')}}">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0f1953" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M9 12h6" />
                                <path d="M12 9v6" />
                              </svg>
                              </a>
                            </li>
                            @foreach($classes as $class)
                              <form method="POST" id="form{{ $class->idClase }}" action="{{route('CreateMateriales')}}">
                                @csrf 
                                <input type="hidden" name="idClase" id="idClase{{ $class->idClase }}" value="{{ $class->idClase }}">
                                  <button type="submit" class="materia" id="button{{ $class->idClase }}" onmouseenter="mostrarCuadro()" onmouseleave="noMostrar()">
                                      <p id="idClase{{ $class->idClase }}">{{ $class->idClase }}</p>
                                      <p id="mat{{ $class->idClase }}" >{{ $class->NomClase }}</p>
                                      <p id="prof{{ $class->idClase }}">{{ $class->Usuario->Nombre . " " . $class->Usuario->Apellido }}</p>
                                      <p id="acumlab{{ $class->idClase }}">Puntos: </p>
                                      <p id="acum{{ $class->idClase }}">{{ $class->puntaje }}</p>
                                  </button>
                              </form>
                            @endforeach
                        </ul>
                    </div>
                    @if(Session::get('tipo')==1)
                      <p id="awardtag">Premios</p>
                      <div class="premios">
                        <ul class="tabla">
                          <li class="table-header">
                            <div class="col col-1">ID</div>
                            <div class="col col-2">Premio</div>
                            <div class="col col-3">Materia</div>
                            <div class="col col-4">Profesor</div>
                          </li>
                          @foreach($premios as $premio)
                            <li class="table-row">
                            <div class="col col-1" data-label="ID">{{$premio->Premio->idPremio}}</div>
                            <div class="col col-2" data-label="Premio">{{$premio->Premio->Premio}}</div>
                            <div class="col col-3" data-label="Materia">{{$premio->Premio->Recompensas->Clase->NomClase}}</div>
                            <div class="col col-4" data-label="Profesor">{{$premio->Premio->Recompensas->Clase->Usuario->Nombre}}</div>
                            </li>
                          @endforeach
                        </ul>
                      </div>
                    @endif
                </div>
                
        
    </div>
    <div id="message">
      <p>Haz clic para editar la clase</p>
    </div>
    <script src="{{('js/profile.js')}}"></script>
</body>
</html>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
