

function navbar() {
  return `
    <div class="container-fluid bg-terrain">
    <br />
    <div class="row">
      <div class="col-sm-6"></div>
      <div class="col-sm-4 text-right d-lg-block d-none">
        <script
          async
          src="https://cse.google.com/cse.js?cx=014259653855378612527:y7exrn7ypkq"
        ></script>
        <div class="gcse-search"></div>
      </div>
      <div class="col-sm-2 text-right">
        <a
          href="https://www.facebook.com/Implan-Chihuahua-108606468095094"
          target="_blank"
          ><span style="font-size: 32px; color: rgb(251, 174, 65)"
            ><i class="fab fa-facebook-square"></i></span
        ></a>
        <!--<a href="https://twitter.com/IMPLANChih?s=08" target="_blank"><span style="font-size: 32px; color: rgb(251, 174, 65);"><i class="fab fa-twitter"></i></span></a>-->
        <a href="https://www.instagram.com/implanchihuahua/" target="_blank"
          ><span style="font-size: 32px; color: rgb(251, 174, 65)"
            ><i class="fab fa-instagram"></i></span
        ></a>
        <a
          href="https://www.youtube.com/channel/UCOVGOuYfPdbttVLNz0yjGSg"
          target="_blank"
          ><span style="font-size: 32px; color: rgb(251, 174, 65)"
            ><i class="fab fa-youtube"></i></span
        ></a>
      </div>
    </div>
  </div>
  <nav class="sticky-top navbar navbar-dark bg-dark navbar-static-top navbar-expand-md">
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target=".navbar-collapse"
    >
      ☰
    </button>
    <a class="navbar-brand" href="/">
      <img src="img/IMPLAN05.png" height="40" alt="IMPLAN Chihuahua" />
    </a>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="dropdown menu-large nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"
            >NOSOTROS</a
          >
          <ul class="dropdown-menu megamenu">
            <div class="row">
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="Mision.html" target="_self">MISIÓN/VISIÓN</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="Consejo.html" target="_self">CONSEJO</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a href="EquipoTecnico.html" target="_self">EQUIPO TÉCNICO</a>
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a href="Practicantes.html" target="_self">PRÁCTICAS PROFESIONALES/SERVICIO SOCIAL</a>
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
            </div>
          </ul>
        </li>

        <li class="dropdown menu-large nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"
            >PROYECTOS</a
          >
          <ul class="dropdown-menu megamenu proyectos-container">
            <div class="row">
              <li class="col-md-3 dropdown-item bg-light proyectos-section">
                <ul>
                  <li class="dropdown-header">SOCIALES</li>
                  <li>
                    <a href="Cajita.html">CAJITA</a>
                  </li>
                  <li class="disabled">
                    <a href="ForoFCCUU.html"
                      >FORO FCCUU</a
                    >
                  </li>
                  <li>
                    <a href="ForoCiudades.html"
                      >FORO 1.2019</a
                    >
                  </li>
                  <li>
                    <a href="ForoFCCUU2020.html">
                      FORO DE CIUDADES 2020</a
                    >
                  </li>
  
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light proyectos-section">
                <ul>
                  <li class="dropdown-header">URBANOS</li>
                            <li><a href="/PlazaDeArmas.html" target="_self">PLAZA DE ARMAS</a>
                            </li>
                            <li><a href="/CalleMorelos.html" target="_self">PEATONALIZACIÓN CALLE MORELOS</a>
                            </li>
                           
                             <li><a href="/VenustianoCarranza.html" target="_self">AV. VENUSTIANO CARRANZA</a>
                            </li>
                             <li><a href="/EstudioCruceSeguros.html" target="_self">CRUCEROS SEGUROS</a>
                            </li>
                  <li>
                    <a
                      href="ParqueLerdo.html"
                      target="_self"
                      >PARQUE LERDO</a
                    >
                  </li>
                  <li>
                    <a
                      href="CorredorEscultorico.html"
                      target="_self"
                      >CORREDOR ESCULTÓRICO</a
                    >
                  </li>
                  <li>
                    <a
                      href="ParqueRejon.html"
                      target="_self"
                      >PARQUE EL REJÓN</a
                    >
                  </li>
                  <li>
                    <a
                      href="EdificioDelReal.html"
                      target="_self"
                      >EDIFICIO DEL REAL</a
                    >
                  </li>
                  <li>
                    <a
                      href="CentroHistorico.html"
                      target="_self"
                      >CENTRO HISTÓRICO</a
                    >
                  </li>
                  <li>
                    <a
                      href="QuintaTouche.html"
                      target="_self"
                      >QUINTA TOUCHE</a
                    >
                  </li>
                  <li>
                    <a
                      href="ParqueEncino.html"
                      target="_self"
                      >PARQUE EL ENCINO</a
                    >
                  </li>                  
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light proyectos-section">
                <ul>
                  <li class="dropdown-header">CENTRO DE ESTUDIOS</li>
                  <li>
                    <a
                      href="EstudioDefinicionIncentivosUrbanos.html"
                      target="_self"
                      >INCENTIVOS URBANOS</a
                    >
                  </li>
                  <li>
                    <a
                      href="EstudioMultimodal.html"
                      target="_self"
                      >ACTUALIZACIÓN DEL MACROMODELO</a
                    >
                  </li>
                  <li>
                    <a
                      href="PSAMUS.html"
                      target="_self"
                      >GOBERNANZA DEL PSAMUS</a
                    >
                  </li>
                  <li class="divider">
                    <a
                      href="EstudioVivienda.html"
                      target="_self"
                      >ESTUDIO DE MERCADO DE VIVIENDA</a
                    >
                  </li>
                  <li class="divider">
                                      <a
                      href="EstudioPoliticas.html"
                      target="_self"
                      >ESTUDIO PARA EL DISEÑO DE POLÍTICAS PÚBLICAS </a
                    >
                  </li>
                  <li class="divider">
                    <a
                      href="EstudioLuisHAlvarez.html"
                      target="_self"
                      >ESTUDIO LUIS H. ÁLVAREZ </a
                  >
                  </li>    
                  <li class="divider">
                  <a
                    href="EstudioReservasIndustriales.html"
                    target="_self"
                    >ESTUDIO DE RESERVAS INDUSTRIALES </a
                >
                </li>
                <li class="divider">
                <a
                  href="ViviendaInformal.html"
                  target="_self"
                  >VIVIENDA INFORMAL </a
              >
              </li> 
                              <li class="divider">
                <a
                  href="EstudioEPMH.html"
                  target="_self"
                  >ESTUDIOS BASE - PLAN MUNICIPAL HÍDRICO</a
              >
                                <li>
                    <a
                      href="InsumosAtlasMunicipalRiesgos.html"
                      target="_self"
                      >INSUMOS PARA ATLAS DE RIESGOS</a
                    >
                  </li>
                  <li>
                    <a
                      href="EstudioInsumosHidricaMunicipal.html"
                      target="_self"
                      >INSUMOS PARA LA PLANEACIÓN HÍDRICA MUNICIPAL</a
                    >
                  </li>
              </li> 
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light proyectos-section">
                <ul>
                  <li class="dropdown-header">CENTRO DE ESTUDIOS</li>
                  <li>
                    <a href="GuiaMetodologica.html"
                      >GUÍA METODOLÓGICA</a
                    >
                  </li>
                  <li>
                    <a href="IndicadoresDesarrolloSostenible.html"
                      >INDICADORES</a
                    >
                  </li>
                  <li>
                    <a
                      href="EstudioModelosDensificacion.html"
                      target="_self"
                      >MODELOS DE DENSIFICACIÓN</a
                    >
                  </li>
                  <li>
                    <a
                      href="CostoCiudad.html"
                      target="_self"
                      >COSTO CIUDAD</a
                    >
                  </li>
                  <li>
                    <a
                      href="ReformaEnergetica.html"
                      target="_self"
                      >APROVECHAMIENTO PARA LA REFORMA ENERGÉTICA</a
                    >
                  </li>
                  <li>
                    <a
                      href="EstadoDelArteAgua.html"
                      target="_self"
                      >ESTADO DEL ARTE EN MATERIA DEL AGUA</a
                    >
                  </li>
                  <li>
                    <a
                      href="ValoracionAnva.html"
                      target="_self"
                      >VALORACIÓN DE SERVICIOS AMBIENTALES ANVA Y PE</a
                    >
                  </li>
                  <li>
                    <a
                      href="CostoCiudadAproximacionCostos.html"
                      target="_self"
                      >COSTO CIUDAD, Aproximación a los costos de la
                      infraestructura</a
                    >
                  </li>
                  <li>
                    <a
                      href="EstudiosAmbientales.html"
                      target="_self"
                      >ESTUDIO ZONAS DE VALOR AMBIENTAL</a
                    >
                  </li>
                  <li>
                    <a
                      href="MesaDeLosCaballos.html"
                      target="_self"
                      >ESTUDIO AMBIENTAL MESA DE LOS CABALLOS</a
                    >
                  </li>

                                               
                </ul>
              </li>
            </div>
          </ul>
        </li>
        <li class="dropdown menu-large nav-item">
          <a
            href="PDU2040.html"
            class="nav-link"
            targe="_self">
              PDU2040
          </a>
        </li>
        <li class="dropdown menu-large nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"
            >DATOS ABIERTOS</a
          >
          <ul class="dropdown-menu megamenu">
            <div class="row">
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="Descargables.html"
                      target="_self"
                      >BUSCAR</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="Descargables_EP.html"
                      target="_self"
                      >PLANES Y PROGRAMAS</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="Descargables_DA.html"
                      target="_self"
                      >CARTOGRAFÍA</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
            </div>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="Licitaciones.html"
            target="_self"
            >LICITACIONES</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="Directorio.html"
            target="_self"
            >DIRECTORIO</a
          >
        </li>
        <li class="dropdown menu-large nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"
            >RENDICIÓN DE CUENTAS</a
          >
          <ul class="dropdown-menu megamenu">
            <div class="row">
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="general/pdf/PADA2025_IMPLAN.pdf"
                      target="_blank"
                      >PADA 2025</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="CuentaPublica.html"
                      target="_self"
                      >CUENTA PÚBLICA</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li>
                    <a
                      href="general/pdf/Resolucion-Exp-ICHITAIPRR05662021.pdf"
                      target="_self"
                      >Cumplimiento a resolución ICHITAIP/RR-566/2021</a
                    >
                  </li>
                  <li class="divider"></li>
                </ul>
              </li>
            </div>
          </ul>
        </li>
        <li class="nav-item" style="background-color: darkmagenta">
          <a class="nav-link" href="http://ovie.mpiochih.gob.mx/" target="_blank"
            >OVIE</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="http://ovie.mpiochih.gob.mx/"
            target="_blank"
          ></a>
        </li>
        <li class="nav-item" style="background-color: #d11586">
          <a
            class="nav-link"
            href="http://siee.mpiochih.gob.mx/iclusterchih/"
            target="_blank"
            >SIEE Chihuahua</a
          >
        </li>
        <li class="dropdown menu-large nav-item">
        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">DICTAMENES</a>
        <ul class="dropdown-menu megamenu">
          <div class="row">
            <li class="col-md-3 dropdown-item bg-light">
              <ul>
                <li>
                  <a href="Dictamenes.html" target="_self">MODIFICACIONES AL PDUCP</a>
                </li>
                <li class="divider"></li>
              </ul>
            </li>
            <li class="col-md-3 dropdown-item bg-light">
              <ul>
                <li>
                  <a href="CiudadCercanaSolicitudes.html" target="_self">SOLICITUDES DE CIUDAD CERCANA</a>
                </li>
                <li class="divider"></li>
              </ul>
            </li>
          </div>
        </ul>
      </li>
      <li class="nav-item" style="background-color: #fcae41">
        <a
          class="nav-link"
          style="color: var(--dark) !important;"
          href="https://editorial.implanchihuahua.org"
          target="_blank"
          >EDITORIAL</a
        >
      </li>
      <li class="dropdown menu-large nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"
            >TRANSPARENCIA</a
          >
          <ul class="dropdown-menu megamenu">
            <div class="row">
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="/transparencia/AVISOS_PRIVACIDAD_2026.rar" target="_blank">AVISOS DE PRIVACIDAD</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
               <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="/transparencia/Tabla de Aplicabilidad IMPLAN.pdf" target="_blank">TABLA DE APLICABILIDAD</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="https://ichitaip.org.mx/redireccion/?so=1555" target="_blank">OBLIGACIONES DE TRANSPARENCIA</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="https://www.plataformadetransparencia.org.mx/Inicio" target="_blank">SOLICITUDES DE ACCESO A LA INFORMACIÓN</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
              <li class="col-md-3 dropdown-item bg-light">
                <ul>
                  <li><a href="UnidadTransparencia.html" target="_blank">UNIDAD DE TRANSPARENCIA</a></li>
                  <li class="divider"></li>
                </ul>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </nav>  
    `;
}

function footer() {
  return `
    <footer class="blockquote mb-0" style="background-color: rgb(251, 174, 65)">
    <div class="row ml-0 mr-0">
      <div class="col-sm-3 pt-5">
        <img
          src="img/IMPLAN_B.png"
          alt="Municipio Chihuahua"
          width="145"
          height="125"
        />
      </div>
      <div class="col-sm-3 pt-5">
        <p class="text-center">
          <a
            href="https://tramitesenlineacuu.mpiochih.gob.mx/web/inicioWebc.do?opcion=noreg"
            class="trans"
            target="_blank"
            >Trámites municipales</a
          >
        </p>
        <p class="text-center">
          <a
            href="PreguntasFrecuentes.html"
            class="trans"
            >Preguntas Frecuentes</a
          >
        </p>
        <p class="text-center">
          <a
            href="https://mailserver.mpiochih.gob.mx/owa"
            class="trans"
            target="_blank"
            >WebMail</a
          >
        </p>
      </div>
      <div class="col-sm-3 pt-5">
        <h5 class="text-center text-white">Síguenos en redes sociales</h5>
        <p class="text-center">
          <a
            href="https://www.facebook.com/Implan-Chihuahua-108606468095094"
            target="_blank"
            ><span class="text-white" style="font-size: 40px"
              ><i class="fab fa-facebook"></i></span
          ></a>
          <a
            href="https://twitter.com/IMPLANChih?s=08"
            class="trans"
            target="_blank"
            ><span class="text-white" style="font-size: 40px"
              ><i class="fab fa-twitter"></i></span
          ></a>
          <a
            href="https://www.instagram.com/implanchihuahua/"
            class="trans"
            target="_blank"
            ><span class="text-white" style="font-size: 40px"
              ><i class="fab fa-instagram"></i></span
          ></a>
          <a
            href="https://www.youtube.com/channel/UCOVGOuYfPdbttVLNz0yjGSg"
            class="trans"
            target="_blank"
            ><span class="text-white" style="font-size: 40px"
              ><i class="fab fa-youtube"></i></span
          ></a>
        </p>
      </div>
      <div class="col-sm-3 pt-5">
        <img src="img/premioOX.png" alt="premioOX" />
        <p class="text-white text-center">
          <a href="http://www.editorialox.com/" class="trans" target="_blank"
            ><small>Web premiada con el Premio Internacional OX</small></a
          >
        </p>
      </div>
    </div>
    <div class="clearfix bg-secondary p-2">
      <span class="float-left text-white"
        ><small
          >C. Victoria No. 14, 6° Piso, Col. Centro. C.P. 31000 Chihuahua, Chih.
          México. Horario de 8:30 a 16:00 horas de lunes a viernes. (614)
          2004820.</small
        ></span
      >
      <a
        class="trans"
        href="IMPLAN-Datos/pdf/AVISO-INTEGRAL-19072022.pdf"
        target="_blank"
        ><span class="float-right text-white"
          ><small>Aviso de Privacidad Integral </small></span
        ></a
      ><br /><a
        class="trans"
        href="IMPLAN-Datos/pdf/AVISO-SIMPLIFICADO-19072022.pdf"
        target="_blank"
        ><span class="float-right text-white"
          ><small>Aviso de Privacidad Simplificado</small></span
        ></a
      >
      <br>
    <a
      class="trans"
      href="general/pdf/avisos/aviso-comision-ejecutiva.pdf"
      target="_blank"
      title="Aviso de Privacidad Simplificado e Integral para Selección de la Comisión Ejecutiva"
    >
      <span class="float-right text-white">
        <small>Aviso de privacidad – Comisión Ejecutiva</small>
      </span>
    </a>

    <br />

    <a
      class="trans"
      href="general/pdf/avisos/aviso-presidencia-consejo.pdf"
      target="_blank"
      title="Aviso de Privacidad Simplificado e Integral para Selección de Titular de la Presidencia del Consejo"
    >
      <span class="float-right text-white">
        <small>Aviso de privacidad – Presidencia del Consejo</small>
      </span>
    </a>
    </div>
  </footer>`;
}
