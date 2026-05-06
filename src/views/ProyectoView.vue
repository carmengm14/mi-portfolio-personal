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

                <!-- GALERIA -->
                <GaleriaGridFotos
                    v-if="block.tipo === 'galeria'"
                    :fotos="getGrid(block.fotos)"
                />

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
    color: white;
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

    @media (max-width: 1000px) {
        font-size: 40px;
    }
}

.subtitulos:hover {
    color: var(--accent)
}

/* TEXTO */
.textos {
    margin: 0 !important;
    line-height: 1.6;
    width: 100%;
}
</style>