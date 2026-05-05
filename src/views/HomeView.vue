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
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
body{
  padding-top: 80px;
}
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
.textos p {
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

/*TABLET AJUSTES*/
@media (max-width: 900px) {
  
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
}
</style>