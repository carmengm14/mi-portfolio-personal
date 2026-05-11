<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
      rel="stylesheet">
    <link rel="stylesheet" href="../src/style.css">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
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
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    observeElements() {
      const elements = document.querySelectorAll(".fade-element");

      elements.forEach((el) => {
        if (!el.classList.contains("visible")) {
          this.observer.observe(el);
        }
      });
    },
  },
};
</script>

<style>
/*ANIMACIONES DE ELEMENTOS*/
/* estado inicial */
.fade-element {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

/* cuando aparece */
.fade-element.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
