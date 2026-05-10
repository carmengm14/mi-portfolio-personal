<template>
    <div class="project" v-if="proyecto">


        <div v-for="(block, i) in proyecto.contenido" :key="i">

            <!-- HERO -->
            <div v-if="block.tipo === 'hero'" class="hero">
                <img class="imgCabecera" :src="getImage(block.imagen)" />
                <h1>{{ proyecto.titulo }}</h1>
            </div>

            <div class="contenidoTrabajos">

                <!-- TITULO -->
                <h2 class="subtitulos" v-if="block.tipo === 'titulo'">
                    {{ block.valor }}
                </h2>

                <!-- TEXTO -->
                <p class="textos" v-if="block.tipo === 'texto'">
                    {{ block.valor }}
                </p>

                <!-- IMAGEN -->
                <img v-if="block.tipo === 'imagen'" :src="getImage(block.valor)" />

                <!-- LINKS / BOTONES -->
                <div v-if="block.tipo === 'links'" class="links">
                    <a v-for="(btn, i) in block.botones" :key="i" :href="btn.url" target="_blank" class="link-btn">
                        <span class="icon">
                            <svg v-if="btn.tipo === 'github'" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.66-.22.66-.48v-1.68c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.55 2.3 1.1 2.86.84.09-.66.34-1.1.62-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.21 2.46.1 2.72.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.07.35.31.66.92.66 1.85v2.74c0 .27.16.58.67.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                                    fill="currentColor" />
                            </svg>

                            <svg v-if="btn.tipo === 'play'" viewBox="0 0 24 24" fill="none">
                                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                            </svg>
                        </span>

                        {{ btn.texto }}
                    </a>
                </div>

                <!-- GALERIA -->
                <GaleriaGridFotos v-if="block.tipo === 'galeria'" :fotos="getGrid(block.fotos)" />

            </div>

        </div>

        <div class="btnAtras">
            <div class="back-link" @click="$router.back()">
                <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" />
                </svg>
                <span>Volver atrás</span>
            </div>
        </div>

    </div>
</template>
<script>
import { proyectos } from "../data/proyectos"
import GaleriaGridFotos from "../components/GaleriaGridFotos.vue"
import grids from "../data/imagenesGrid.json"

export default {
    components: {
        GaleriaGridFotos
    },

    computed: {
        proyecto() {
            return proyectos.find(
                p => p.id === this.$route.params.id
            )
        }
    },

    methods: {
        getImage(img) {
            return new URL(`../assets/proyectos/${img}`, import.meta.url).href
        },

        getGrid(name) {
            return grids[name] || []
        }
    }
}
</script>

<style scoped>
.btnAtras {
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: all 0.3s ease;
}

.arrow-icon {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
}

.back-link:hover .arrow-icon {
    transform: translateX(-6px);
}

.back-link:hover {
    opacity: 0.8;
}

.contenidoTrabajos {
    margin: 5vh auto;
    width: min(900px, 90%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 24px;
}

/* HERO */
.hero {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(31, 41, 55, 0) 0%, rgba(31, 41, 55, 1) 91%);
    z-index: 1;
}

.hero h1 {
    position: relative;
    z-index: 2;
    color: var(--bg);
    background-color: var(--accent);
    padding: 20px 5vh;
}

.imgCabecera {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

/* TITULOS */
.subtitulos {
    font-size: 2.5vw;
    line-height: 0.2;
    margin: 0 !important;
    width: 100%;
    color: var(--accent);

    @media (max-width: 1000px) {
        font-size: 40px;
    }
}

.subtitulos:hover {
    color: white;
}

/* TEXTO */
.textos {
    margin: 0 !important;
    line-height: 1.6;
    width: 100%;
    white-space: pre-line;
}

img {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: cover;
}

.links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
}

.link-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    color: var(--accent);
    text-decoration: none;
    border: 1px solid var(--accent);
    padding: 8px 20px;
    text-underline-offset: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.link-btn:hover {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    background-color: var(--accent);
    color: var(--bg);
    text-decoration: none;
    border: 1px solid var(--accent);    
}

.link-btn .icon {
    width: 16px;
    height: 16px;
    display: flex;
}

.link-btn svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}

/* hover moderno */
.link-btn:hover {
    opacity: 0.8;
}

.link-btn:hover svg {
    transform: translateX(4px);
}
</style>