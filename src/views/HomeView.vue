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
          <div class="firma  fade-element">
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
    <div class="gridFotos">

      <div class="foto grande">
        <img src="../assets/fotosGridHome/foto1.jpg" />
      </div>

      <div class="foto">
        <img src="../assets/fotosGridHome/foto2.jpg" />
      </div>

      <div class="foto">
        <img src="../assets/fotosGridHome/foto3.jpg" />
      </div>

      <div class="foto">
        <img src="../assets/fotosGridHome/foto4.jpg" />
      </div>

    </div>
  </div>
</template>

<script>
import ScrollPalabras from '../components/ScrollPalabras.vue'
export default {
  name: "HomeView",
  components: {
    ScrollPalabras,
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observeElements();
  },

  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  },

  methods: {
    observeElements() {
      const elements = this.$el.querySelectorAll(".fade-element");

      elements.forEach((el) => {
        this.observer.observe(el);
      });
    },
  },
};
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

/*GRID DE FOTOS*/
.gridFotos img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1) brightness(0.9);
  transition: filter 0.4s ease, transform 0.4s ease;
}

.gridFotos img:hover {
  filter: grayscale(0%);
  cursor:grab;
}

.gridFotos {
  margin-top: 10vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.grande {
  grid-row: span 2;
}

.horizontal {
  grid-column: span 2;
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

  /*GRID DE FOTOS*/
  .gridFotos {
    grid-template-columns: repeat(2, 1fr);
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