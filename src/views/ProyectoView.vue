<template>
  <div v-if="proyecto">

    <h1>{{ proyecto.titulo }}</h1>

    <img :src="img" />

    <p>{{ proyecto.descripcion }}</p>

  </div>
</template>

<script>
import proyectos from "../data/proyectos.json"

export default {
  data() {
    return {
      proyecto: null,
      img: ""
    }
  },

  mounted() {
    const id = this.$route.params.id
    this.proyecto = proyectos.find(p => p.id === id)

    if (this.proyecto) {
      this.img = new URL(`../assets/proyectos/${this.proyecto.imagen}`, import.meta.url).href
    }
  }
}
</script>