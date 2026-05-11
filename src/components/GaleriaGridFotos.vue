<template>
  <div class="gridFotos">

    <div
      v-for="(foto, index) in fotos"
      :key="foto.src"
      class="foto"
      :class="foto.clase"
    >
      <img :src="foto.src" :alt="foto.alt" />
    </div>

  </div>
</template>
<script>
export default {
  name: "GaleriaGridFotos",
  props: {
    fotos: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>

/*GRID DE FOTOS*/
.gridFotos img {
  width: 100%;
  height: 70vh;
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
    .gridFotos {
    grid-template-columns: 1fr; 
    gap: 15px;
    margin-top: 5vh;
  }

  .gridFotos img {
    height: 35vh; 
    object-fit: cover;
  }
}

</style>