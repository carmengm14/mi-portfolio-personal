<template>
    <div class="carousel-wrapper">

        <!-- Flecha izquierda -->
        <button class="nav left" @click="prev">
            <svg viewBox="0 0 24 24" class="icon">
                <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
        </button>

        <!-- Carrusel -->
        <div class="carousel">
            <div class="slide" v-for="proyecto in proyectos" :key="proyecto.id" @click="goToProject(proyecto.ruta)">

                <!-- IMAGEN -->
                <div class="img-wrapper">
                    <img :src="getImage(proyecto.imagen)" />

                    <!-- overlay degradado -->
                    <div class="overlay"></div>

                    <!-- TAGS -->
                    <div class="tags">
                        <span v-for="cat in proyecto.categoria" :key="cat" class="tag" :class="cat.toLowerCase()">
                            <span class="dot"></span>
                            {{ cat }}
                        </span>
                    </div>
                </div>

                <!-- TITULO -->
                <div class="info">
                    <h2>
                        <span class="arrow">
                            <svg class="arrow" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        {{ proyecto.titulo }}
                    </h2>

                    <p>
                        {{ truncate(proyecto.contenido[0].descripcion || 'NADA', 180) }}
                    </p>
                </div>

            </div>
        </div>

        <!-- Flecha derecha -->
        <button class="nav right" @click="next">
            <svg viewBox="0 0 24 24" class="icon">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
        </button>

    </div>
</template>

<script>
export default {
    props: {
        proyectos: Array
    },

    methods: {
        getImage(img) {
            return new URL(`../assets/proyectos/${img}`, import.meta.url).href
        },

        truncate(text, max) {
            return text.length > max ? text.slice(0, max) + "..." : text
        },

        goToProject(ruta) {
            this.$router.push(ruta)
        },

        next() {
            this.$el.querySelector(".carousel").scrollBy({ left: 400, behavior: "smooth" })
        },

        prev() {
            this.$el.querySelector(".carousel").scrollBy({ left: -400, behavior: "smooth" })
        }
    }
}
</script>

<style scoped>
.carousel-wrapper {
    margin: 5vh auto;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 30px;
}

.slide {
    min-width: 320px;
    cursor: pointer;
}

/* IMAGEN 4:5 */
.img-wrapper {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    height: 60vh;
    width: 22vw;
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* DEGRADADO */
.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7));
}

/* TAGS */
.tags {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    font-family: var(--font-mono);
    font-size: 12px;
    color: white;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 4px 10px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: blink 1.5s infinite;
}

.branding .dot {
    background: #55ff00;
}

.diseño .dot {
    background: #ffffff;
}

.fotografía .dot {
    background: #ffc800;
}

.web .dot {
    background: #0062ff;
}

.UX-UI .dot {
    background: white;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

/* TITULO */
.info h2 {
    color: var(--accent);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    font-size: 3vh;
}

.arrow {
    height: 4vh;
    margin: 0px;
    color: var(--accent);
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.slide:hover .arrow {
    transform: translateX(4px);
}

/* DESCRIPCION */
.info p {
    font-family: var(--font-body);
    opacity: 0.8;
    width: 80%;
}

/* NAV */
.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--accent);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--accent);
    z-index: 20;
}

.nav:hover {
    background: var(--accent);
    color: black;
    transform: translateY(-50%) scale(1.1);
}

.icon {
    width: 22px;
    height: 22px;
}

.left {
    left: 0px;
}

.right {
    right: 0px;
}

/* ========================= */
/* 📱 MOBILE FIXES SOLO AQUÍ */
/* ========================= */

@media (max-width: 1000px) {

    /* carrusel tipo swipe real */
    .carousel {
        gap: 0;
        scroll-snap-type: x mandatory;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;

        scrollbar-width: none;
    }

    .carousel::-webkit-scrollbar {
        display: none;
    }

    .slide {
        min-width: 100vw;
        scroll-snap-align: start;
    }

    /* IMAGEN estable (IMPORTANTE) */
    .img-wrapper {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 5;
    }

    /* título más compacto */
    .info h2 {
        font-size: 2vh;
    }

    /* tags sin romper layout */
    .tags {
        max-width: 90%;
        flex-wrap: wrap;
    }

    .tag {
        font-size: 11px;
        padding: 3px 8px;
    }

    /* botones más discretos */
    .nav {
        width: 36px;
        height: 36px;
    }

    .icon {
        width: 16px;
        height: 16px;
    }

    .left {
        left: 5px;
    }

    .right {
        right: 5px;
    }

}
</style>