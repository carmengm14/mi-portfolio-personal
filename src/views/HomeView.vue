<template>
  <div>
    <div class="imgHeader">
      <img src="../assets/Rectangle 1.png" alt="hero image" />

      <div class="textos">
        <p>Portfolio</p>
        <h1>CARMEN</h1>
        <h2>GARCÍA</h2>
      </div>
    </div>
    <div class="body">
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
            <button class="btn-amarillo" @click="$router.push('/sobre-mi')">Conóceme más   <span class="arrow">→</span></button>
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
.body {
  padding: 80px;
}

/*SECCION HEADER*/
.imgHeader {
  margin-top: -70px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
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
  margin: 0 auto;
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

/* NO se monte el botón */
.izquierda {
  display: flex;
  flex-direction: column;
}

.izquierda p {
  margin-bottom: 30px;
}

/*TABLET AJUSTES*/
@media (max-width: 900px) {
  .sobre-mi {
    width: 100%;
  }
}

/* MÓVIL AJUSTES */
@media (max-width: 768px) {
  .imgHeader {
    margin-top: 0;
  }

  .textos {
    right: 100px;
    bottom: 280px;
    align-items: flex-end;
  }

  .sobre-mi {
    width: 100%;
  }
  .firma {
    width: 150px;
  }

  .explicacionTextos {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .izquierda {
    order: 1;
    margin: 0px;
  }

  .derecha {
    order: 2;
    margin: 0px;
  }

  /* botón pasa al final */
  .izquierda button {
    order: 3;
  }

  /* importante para que funcione el order */
  .izquierda {
    display: contents;
  }
}
</style>