

function navbar() {
    return `
<div class="sticky-top navbar navbar-dark bg-dark navbar-static-top navbar-expand-md">
<button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">☰</button>
<a class="navbar-brand" href="https://implanchihuahua.org/">
    <img src="img/IMPLAN05.png" height="40" alt="IMPLAN Chihuahua">
</a>
<div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">NOSOTROS</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="Mision.html" target="_self">MISIÓN/VISIÓN</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/Consejo.html" target="_self">CONSEJO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/EquipoTecnico.html" target="_self">EQUIPO TÉCNICO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/Practicantes.html" target="_self">RESIDENCIAS PROFESIONALES</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </li>
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">CHIHUAHUA</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">ÁMBITO</li>
                            <li><a href="https://implanchihuahua.org/Entorno.html#AmbitoRegional" target="_self">REGIONAL</a>
                            </li>
                            <li class="disabled"><a href="https://implanchihuahua.org/Entorno.html#AmbitoMunicipal" target="_self">MUNICIPAL</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">ENTORNO</li>
                            <li><a href="https://implanchihuahua.org/Entorno.html#AmbitoEconomico" target="_self">ECONÓMICO</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Entorno.html#AmbitoUrbano" target="_self">URBANO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </li>
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">PROYECTOS</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-3 dropdown-item bg-light">
                        <ul>
                            <li class="dropdown-header">SOCIALES</li>
                            <li><a href="https://implanchihuahua.org/Cajita.html">CAJITA</a>
                            </li>
                            <li class="disabled"><a href="https://implanchihuahua.org/ForoFCCUU.html">FORO FCCUU</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/ForoCiudades.html">FORO 1.2019</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/ForoFCCUU2020.html"> FORO DE CIUDADES 2020</a>
                            </li>

                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">URBANOS</li>
                            <li><a href="https://implanchihuahua.org/Proyecto1.html" target="_self">PLAZA DE ARMAS</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto3.html" target="_self">PEATONALIZACIÓN CALLE MORELOS</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto2.html" target="_self">AV. VENUSTIANO CARRANZA</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto4.html" target="_self">PARQUE LERDO</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto5.html" target="_self">CORREDOR ESCULTÓRICO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item bg-light">
                        <ul>
                            <li class="dropdown-header">URBANOS</li>
                            <li><a href="https://implanchihuahua.org/Proyecto7.html" target="_self">PARQUE EL REJÓN</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto8.html" target="_self">EDIFICIO DEL REAL</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto9.html" target="_self">CENTRO HISTÓRICO</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto10.html" target="_self">QUINTA TOUCHE</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/Proyecto11.html" target="_self">PARQUE EL ENCINO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">CENTRO DE ESTUDIOS</li>
                            <li><a href="https://implanchihuahua.org/EstudioCE2.html">GUÍA METODOLÓGICA</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE3.html">INDICADORES</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE1.html" target="_self">MODELOS DE DENSIFICACIÓN</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE7.html" target="_self">COSTO CIUDAD</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE8.html" target="_self">APROVECHAMIENTO PARA LA REFORMA ENERGÉTICA</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE4.html" target="_self">ESTADO DEL ARTE EN MATERIA DEL AGUA</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE10.html" target="_self">VALORACIÓN DE SERVICIOS AMBIENTALES ANVA Y PE</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE11.html" target="_self">COSTO CIUDAD, Aproximación a los costos de la infraestructura</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE5.html" target="_self">ESTUDIO ZONAS DE VALOR AMBIENTAL</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE9.html" target="_self">INCENTIVOS URBANOS</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE12.html" target="_self">ACTUALIZACIÓN DEL MACROMODELO</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/EstudioCE13.html" target="_self">PSAMUS</a></li> 
                            <li><a href="https://implanchihuahua.org/EstudioCE14.html" target="_self">ESTUDIO DE MERCADO DE VIVIENDA</a></li>                                                                      
                            <li class="divider"></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </li>
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">PDU2040</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">TEMAS ESTRATÉGICOS</li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Poblacion" target="_self">POBLACIÓN</a>
                            </li>
                            <li class="disabled"><a href="https://implanchihuahua.org/PDU2040.html#Soporte" target="_self">ECONOMÍA</a>
                            </li>

                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">TEMAS ESTRATÉGICOS</li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Marco" target="_self">MARCO</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Equipamiento" target="_self">EQUIPAMIENTO</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">TEMAS ESTRATÉGICOS</li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Movilidad" target="_self">MOVILIDAD</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Infraestructura" target="_self">INFRAESTRUCTURA</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li class="dropdown-header">TEMAS ESTRATÉGICOS</li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Medio" target="_self">AMBIENTE</a>
                            </li>
                            <li><a href="https://implanchihuahua.org/PDU2040.html#Medio" target="_self">ARCHIVOS DESCARGABLES PDU 2040
            </a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </li>
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">DATOS ABIERTOS</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/Descargables.html" target="_self">BUSCAR</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/Descargables_EP.html" target="_self">PLANES Y PROGRAMAS</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-3 dropdown-item  bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/Descargables_DA.html" target="_self">CARTOGRAFÍA</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                </div>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://implanchihuahua.org/Licitaciones.html" target="_self">LICITACIONES</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://implanchihuahua.org/Directorio.html" target="_self">DIRECTORIO</a>
        </li>
        <li class="dropdown menu-large nav-item"> <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">RENDICIÓN DE CUENTAS</a>
            <ul class="dropdown-menu megamenu">
                <div class="row">
                    <li class="col-md-4 dropdown-item bg-light">
                        <ul>
                            <li>
                                <a href="https://www.plataformadetransparencia.org.mx/" target="_blank">TRANSPARENCIA</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-4 dropdown-item bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/CuentaPublica.html" target="_self">CUENTA PÚBLICA</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>
                    <li class="col-md-4 dropdown-item bg-light">
                        <ul>
                            <li><a href="https://implanchihuahua.org/IMPLAN-Datos/pdf/Resolucion-Exp-ICHITAIPRR05662021.pdf" target="_self">Cumplimiento a resolución ICHITAIP/RR-566/2021</a>
                            </li>
                            <li class="divider"></li>
                        </ul>
                    </li>                            
                </div>
            </ul>
        </li>
         <li class="nav-item" style="background-color:darkmagenta;">
            <a class="nav-link" href="http://ovie.mpiochih.gob.mx/" target="_blank">OVIE</a>
        </li>
        <li class="nav-item"> 
            <a class="nav-link" href="http://ovie.mpiochih.gob.mx/" target="_blank"></a>
        </li>                   
        <li class="nav-item" style="background-color:#d11586;">
            <a class="nav-link" href="http://siee.mpiochih.gob.mx/iclusterchih/" target="_blank">SIEE Chihuahua</a>
        </li>                             
    
        <li class="nav-item">
            <a class="nav-link" href="https://implanchihuahua.org/Dictamenes.html" target="_self">DICTÁMENES </a>
        </li>   
    </ul>
</div>
</div>  
    `;
}

function footer() {
    
    return `
    <blockquote class="blockquote mb-0" style="background-color:rgb(251, 174, 65);">
    <div class="row ml-0 mr-0">
        <div class="col-sm-3 pt-5">
            <img src="img/IMPLAN_B.png" alt="Municipio Chihuahua" width="145" height="125">
        </div>
        <div class="col-sm-3 pt-5">
            <p class="text-center"><a href="http://www.municipiochihuahua.gob.mx/Servicios/Tramites?buscar=dep:Direcci%C3%B3n%20de%20Desarrollo%20Urbano%20y%20Ecolog%C3%ADa" class="trans" target="_blank">Trámites municipales</a></p>
            <p class="text-center"><a href="https://implanchihuahua.org/PreguntasFrecuentes.html" class="trans">Preguntas Frecuentes</a></p>
            <p class="text-center"><a href="https://mailserver.mpiochih.gob.mx/owa" class="trans" target="_blank">WebMail</a></p>
        </div>
        <div class="col-sm-3 pt-5">
            <h5 class="text-center text-white">Síguenos en redes sociales</h5>
            <p class="text-center">
                <a href="https://www.facebook.com/Implan-Chihuahua-108606468095094" target="_blank"><span class="text-white" style="font-size: 40px;"><i class="fab fa-facebook"></i></span></a>
                <a href="https://twitter.com/IMPLANChih?s=08" class="trans" target="_blank"><span class="text-white" style="font-size: 40px;"><i class="fab fa-twitter"></i></span></a>
                <a href="https://www.instagram.com/implanchihuahua/" class="trans" target="_blank"><span class="text-white" style="font-size: 40px;"><i class="fab fa-instagram"></i></span></a>
                <a href="https://www.youtube.com/channel/UCOVGOuYfPdbttVLNz0yjGSg" class="trans" target="_blank"><span class="text-white" style="font-size: 40px;"><i class="fab fa-youtube"></i></span></a>
            </p>
        </div>
        <div class="col-sm-3 pt-5">
            <img src="img/premioOX.png" alt="premioOX">
            <p class="text-white text-center"><a href="http://www.editorialox.com/" class="trans" target="_blank"><small>Web premiada con el Premio Internacional OX</small></a></p>
        </div>
    </div>
    <div class="clearfix bg-secondary p-2">
        <span class="float-left text-white"><small>C. Victoria No. 14, 6° Piso, Col. Centro. C.P. 31000   Chihuahua, Chih. México.   Horario de 8:30 a 16:00 horas de lunes a viernes. (614) 2004820.</small></span>
        <a class="trans" href="https://implanchihuahua.org/IMPLAN-Datos/pdf/AVISO-INTEGRAL-19072022.pdf" target="_blank"><span class="float-right text-white"><small>Aviso de Privacidad Integral   </small></span></a><br><a class="trans" href="https://implanchihuahua.org/IMPLAN-Datos/pdf/AVISO-SIMPLIFICADO-19072022.pdf" target="_blank"><span class="float-right text-white"><small>Aviso de Privacidad Simplificado</small></span></a>
    </div>
</blockquote>
    `;
}