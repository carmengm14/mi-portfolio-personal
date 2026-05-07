<template>
  <div>
    <div class="imgHeader">
      <img src="../assets/fotoHomePrincipal.png" alt="hero image" />

      <div class="textos">
        <p>Portfolio</p>
        <h1>CARMEN</h1>
        <h2>GARCÍA</h2>
      </div>
    </div>
    <div class="sobreMi">
      <div class="sobre-mi">
        <div class="header">
          <div>
            <p class="section-title  fade-element">Sobre mí</p>
            <h1 class="fade-element" style="margin-top: 0">Hola!</h1>
          </div>

          <!-- SVG derecha -->
          <div class="firma fade-element">
            <img src="../assets/cgm.svg" alt="">
          </div>
        </div>

        <div class="explicacionTextos  fade-element">
          <div class="izquierda  fade-element">
            <p>Soy Carmen García, una apasionada del mundo digital nacida y criada en Valencia. Desde siempre me ha
              llamado la atención la tecnología, lo que me llevó a estudiar dos grados en informática, el último
              especializado en desarrollo de aplicaciones web. Pero si algo cambió mi rumbo, fue la asignatura de
              diseño: ahí descubrí mi verdadera vocación.</p>
            <button class="btn-amarillo" @click="$router.push('/sobre-mi')">Conóceme más <span
                class="arrow">→</span></button>
          </div>

          <div class="derecha  fade-element">
            <p>Desde entonces, me he sumergido de lleno en el universo del diseño web, explorando UX/UI, accesibilidad y
              SEO, elementos clave para crear experiencias digitales que no solo sean visualmente atractivas, sino
              también funcionales e inclusivas. Esto me ha llevado a aprender y perfeccionar herramientas como
              Photoshop, Figma e Illustrator, que se han convertido en imprescindibles en mi día a día.</p>
          </div>
        </div>
      </div>
    </div>
    <ScrollPalabras />
    <div class="fotografiaSeccion  fade-element">
      <img src="../assets/fotoSeccionFotografiaHome.png" alt="" class="imagenSeccionFotografia">
      <h1 class="h1-amarillo tituloEncimaFoto fade-element">Fotografía</h1>
    </div>
    <div class="explicacionTextos fade-element fotografiaTextos">
      <div class="izquierda  fade-element">
        <p>Además del diseño, la fotografía es otra de mis grandes pasiones. Lo que empezó como un simple hobby en mi
          infancia, con el tiempo se transformó en algo mucho más serio. Ahora, no hay viaje ni proyecto en el que mi
          cámara y mis objetivos no sean parte esencial.</p>
      </div>

      <div class="derecha  fade-element">
        <p>Siempre estoy en constante aprendizaje, buscando mejorar y perfeccionar cada detalle en todo lo que hago.
          Porque para mí, el diseño y la fotografía no son solo trabajo, sino maneras de conectar con el mundo y dejar
          una huella creativa.</p>
      </div>
    </div>
    <GaleriaGridFotos :fotos="grid1" />

    <div class="proyectosDisenyoGrafico fade-element">
      <div class="cabeceraSeccionProyectos">
        <div class="titulos">
          <p class="section-title">Diseño Gráfico</p>
          <img src="../assets/disenyoUx.svg" alt="">
        </div>
        <div class="verMasLinks" style="margin: 1vh 0;">
          <button class="btn-amarillo" @click="$router.push('/trabajos')">Ver más trabajos <span
              class="arrow">→</span></button>
        </div>
      </div>
    </div>
    <ProyectosCarrusel :proyectos="proyectos" class="proyectosCarrusel fade-element" />

    <div class="desarrolloWebContenedor fade-element">
      <div class=" contenidoIzquierda fade-element">
        <p class="section-title  fade-element">Desarrollo web</p>
        <h1 class="fade-element" style="margin-top: 0">Front-end</h1>
        <p class="explicacionTextos">Creo sitios web competitivos, optimizados y fáciles de gestionar. Mi enfoque
          combina diseño atractivo,
          rendimiento y una estructura intuitiva para garantizar que cada proyecto destaque. Con optimización SEO,
          integración de herramientas avanzadas y personalización total, convierto ideas en experiencias digitales de
          alto nivel.</p>
      </div>
      <div class="imagenDerecha fade-element">
        <img class="imagenPortatil" src="../assets/mockUpDesarrolloWebPortatil.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import ScrollPalabras from '../components/ScrollPalabras.vue'
import GaleriaGridFotos from '../components/GaleriaGridFotos.vue'
import grids from '../data/imagenesGrid.json'
import ProyectosCarrusel from '../components/ProyectosCarrusel.vue'
import { proyectos } from "../data/proyectos"

export default {
  name: "HomeView",
  components: {
    ScrollPalabras,
    GaleriaGridFotos,
    ProyectosCarrusel
  },

  data() {
    return {
      observer: null,
      grid1: [],
      proyectos: []
    }
  },

  mounted() {
    this.proyectos = proyectos
    const basePath = '../assets/fotosGridHome/'

    this.grid1 = grids.grid1.map(foto => {
      return {
        ...foto,
        src: new URL(basePath + foto.src, import.meta.url).href
      }
    })

    // IntersectionObserver
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            this.observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    this.observeElements()
  },

  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  },

  methods: {
    observeElements() {
      const elements = this.$el.querySelectorAll(".fade-element")
      elements.forEach(el => this.observer.observe(el))
    }
  }
}
</script>

<style scoped>
.sobreMi {
  padding: 80px;
}

/*SECCION HEADER*/
.imgHeader {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.imgHeader img {
  width: 100%;
  height: 105%;
  object-fit: cover;
}

/* TEXTO RESPONSIVE Y FLEXIBLE */
.textos {
  position: absolute;
  right: clamp(20px, 8vw, 300px);
  bottom: clamp(60px, 15vh, 550px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

/* PORTFOLIO TEXT */
.textos p,
.section-title {
  margin: 0;
  font-size: clamp(25px, 2vw, 32px);
  color: var(--accent);
  font-family: var(--font-mono);
  font-style: normal;
}

/* NOMBRE */
.textos h1 {
  margin: 0;
  font-size: clamp(60px, 6vw, 74px);
  line-height: 1;
  font-weight: 400;
}

/* APELLIDO */
.textos h2 {
  margin: 0;
  font-size: clamp(45px, 4vw, 50px);
  line-height: 1;
  font-weight: 900;
}


/*SECCION SOBRE MI*/
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.sobre-mi {
  width: 50%;
  margin: 10vh auto;
}

.section-title {
  color: var(--accent);
  font-size: 24px;
  margin-bottom: 10px;
}

/* SVG derecha */
.firma svg {
  width: 120px;
}

/* TEXTO EN DOS COLUMNAS */
.explicacionTextos {
  display: flex;
  gap: 80px;
  margin-top: 10px;
  font-size: clamp(17px, 2vw, 23px);
  font-weight: bold;
}

.izquierda,
.derecha {
  flex: 1;
}

.izquierda {
  display: flex;
  flex-direction: column;
}

.izquierda p {
  margin-bottom: 30px;
}

/*SECCION FOTOGRAFIA*/
.fotografiaSeccion {
  margin-top: 10vh;
  position: relative;
}

.imagenSeccionFotografia {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.tituloEncimaFoto {
  font-size: 15vh;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%) rotate(8deg);
  text-align: center;
  white-space: nowrap;
}

.fotografiaTextos {
  width: 50%;
  margin: 0vh auto;
}


/*SECCION TRABAJOS*/
.proyectosDisenyoGrafico {
  width: 50%;
  margin: 10vh auto;
}

.cabeceraSeccionProyectos {
  display: flex;
  display: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.proyectosCarrusel {
  width: 90%;
  background: radial-gradient(circle, rgb(58, 75, 104) 0%, rgba(31, 41, 55, 1) 35%);
}

/*DESARROLLO FRONT-END SECCION*/
.desarrolloWebContenedor {
  width: 80%;
  margin: 10vh auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 900px) {
    width: 95%;
  }

}

.contenidoIzquierda {
  width: 30%;

  @media (max-width: 900px) {
    width: 95%;
  }
}

.imagenDerecha {
  width: 50%;

  @media (max-width: 900px) {
    width: 95%;
  }
}

.imagenDerecha img {
  width: 100%;
}

/*TABLET AJUSTES*/
@media (max-width: 900px) {
  .sobre-mi {
    width: 100%;
    margin: 10px;
  }

  .fotografiaSeccion {
    margin-top: 2vh;
  }

  .imagenSeccionFotografia {
    height: 50vh;
  }

  .tituloEncimaFoto {
    font-size: 5vh;
  }

  .proyectosDisenyoGrafico {
    width: 89%;
  }
}

/* MÓVIL AJUSTES */
@media (max-width: 768px) {
  .imgHeader {
    margin-top: 0;
    height: 50vh;
  }

  .textos {
    right: 100px;
    bottom: 80px;
    align-items: flex-end;
  }

  .sobre-mi {
    width: 100%;
  }

  .firma {
    width: 150px;
  }

  .explicacionTextos {
    flex-direction: column;
    gap: 15px;
  }

  /* IMPORTANTE: mantenemos flex */
  .izquierda {
    display: flex;
    flex-direction: column;
  }

  /* Orden correcto */
  .izquierda p {
    order: 1;
  }

  .derecha {
    order: 2;
  }

  .izquierda button {
    order: 3;
  }


}
</style>