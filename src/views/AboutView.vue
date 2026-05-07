<template>
  <div style="margin-top: 10vh;">
    <p>HOLA ABOUT</p>
    <div class="fade-element" v-fade
      style="align-content: center; display:flex; flex-flow: column wrap ; margin: 5vh auto; align-items: center">
      <h1>Mis viajes</h1>
      <img width="70%" src="../assets/mapa.svg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutView",
  components: {
  },

  data() {
    return {
      observer: null,
    }
  },

  mounted() {
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
};
</script>
