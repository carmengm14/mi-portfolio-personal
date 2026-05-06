<template>
    <div class="marquee">
  <div class="marquee-track">
    <h1>CSS ·</h1>
    <h1>HTML ·</h1>
    <h1>JS ·</h1>
    <h1>VUE ·</h1>
    <h1>TAILWIND ·</h1>
    <h1>WORDPRESS ·</h1>
    <h1>PHOTOSHOP ·</h1>
    <h1>LIGHTROOM ·</h1>
    <h1>ILLUSTRATOR ·</h1>
    <h1>FIGMA ·</h1>
    <h1>PREMIERE ·</h1>

    <!-- duplicado para efecto infinito -->
    <h1>CSS ·</h1>
    <h1>HTML ·</h1>
    <h1>JS ·</h1>
    <h1>VUE ·</h1>
    <h1>TAILWIND ·</h1>
    <h1>WORDPRESS ·</h1>
    <h1>PHOTOSHOP ·</h1>
    <h1>LIGHTROOM ·</h1>
    <h1>ILLUSTRATOR ·</h1>
    <h1>FIGMA ·</h1>
    <h1>PREMIERE ·</h1>
  </div>
</div>
</template>
<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  padding: 20px 0;
}
.marquee {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );

  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}
.marquee-track {
  display: flex;
  gap: 50px;
  width: max-content;
  animation: scroll 20s linear infinite;
}

/* estilo de palabras */
.marquee h1 {
  font-weight: bold;
  color: var(--text-h);
  letter-spacing: 2px;
}
h1{
  font-size: 45px !important;
  color: var(--accent) !important;
}

/* animación infinita */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>