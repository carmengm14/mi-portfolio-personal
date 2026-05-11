<template>
  <div>

    <nav class="navbar">

      <!-- IZQUIERDA -->
      <router-link to="/"><img class="logo" src="../../public/logo.svg" alt="logo" /></router-link>

      <!-- CENTRO -->
      <ul class="paginas desktop">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre-mi">Sobre mí</router-link></li>
        <li><router-link to="/trabajos">Mis trabajos</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>

      <!-- DERECHA (SOCIALS + HAMBURGER) -->
      <div class="rightSide">

        <div class="socials desktop">
          <a href="https://www.linkedin.com/in/carmen-garcia-monreal/" target="_blank">
            <svg height="1.5vh" width="1.5vw" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 382 382" xml:space="preserve" fill="#fff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path style="fill:#ffffff;"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z">
                </path>
              </g>
            </svg> </a>

          <a href="https://www.instagram.com/carmengarciafotografia/" target="_blank">
            <svg height="1.5vh" width="1.5vw" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 551.034 551.034" xml:space="preserve" fill="#fff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="XMLID_13_">
                  <linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517"
                    y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style="stop-color:#ffffff"></stop>
                    <stop offset="0.3" style="stop-color:#ffffff"></stop>
                    <stop offset="0.6" style="stop-color:#ffffff"></stop>
                    <stop offset="1" style="stop-color:#ffffff"></stop>
                  </linearGradient>
                  <path id="XMLID_17_" style="fill:url(#XMLID_2_);"
                    d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z">
                  </path>
                  <linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517"
                    y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style="stop-color:#ffffff"></stop>
                    <stop offset="0.3" style="stop-color:#ffffff"></stop>
                    <stop offset="0.6" style="stop-color:#ffffff"></stop>
                    <stop offset="1" style="stop-color:#ffffff"></stop>
                  </linearGradient>
                  <path id="XMLID_81_" style="fill:url(#XMLID_3_);"
                    d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z">
                  </path>
                  <linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306"
                    y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style="stop-color:#ffffff"></stop>
                    <stop offset="0.3" style="stop-color:#ffffff"></stop>
                    <stop offset="0.6" style="stop-color:#ffffff"></stop>
                    <stop offset="1" style="stop-color:#ffffff"></stop>
                  </linearGradient>
                  <circle id="XMLID_83_" style="fill:url(#XMLID_4_);" cx="418.306" cy="134.072" r="34.149"></circle>
                </g>
              </g>
            </svg>
          </a>
          <a href="https://www.github.com/carmengm14/" target="_blank">
            <svg width="1.5vw" height="1.5vh" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#ffffff]</title>
                <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#ffffff]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>

        <!-- HAMBURGER -->
        <div class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = true">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>

    <!-- OVERLAY MENU -->
    <div class="overlay" :class="{ active: menuOpen }">

      <div class="close" @click="menuOpen = false">✕</div>

      <div class="menuContent">

        <img class="menuLogo" src="../../public/logo.svg" alt="logo" />

        <ul class="menuLinks">
          <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
          <li><router-link to="/sobre-mi" @click="menuOpen = false">Sobre mí</router-link></li>
          <li><router-link to="/trabajos" @click="menuOpen = false">Mis trabajos</router-link></li>
          <li><router-link to="/contacto" @click="menuOpen = false">Contacto</router-link></li>
        </ul>

        <!-- REDES -->
        <div class="socials">

          <a href="https://www.linkedin.com/in/carmen-garcia-monreal/" target="_blank">
            <svg height="1.5vh" width="1.5vw" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 382 382" xml:space="preserve" fill="#000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path style="fill:#000;"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z">
                </path>
              </g>
            </svg>
          </a>

          <a href="https://www.instagram.com/carmengarciafotografia/" target="_blank">
            <svg viewBox="0 0 551.034 551.034" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
    c0,90.516,73.64,164.156,164.156,164.156h222.722
    c90.516,0,164.156-73.64,164.156-164.156V164.156
    C551.033,73.64,477.393,0,386.878,0z

    M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
    c-60.045,0-108.722-48.677-108.722-108.722V164.156
    c0-60.046,48.677-108.722,108.722-108.722h222.722
    c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878z" />

              <path fill="#000" d="M275.517,133C196.933,133,133,196.933,133,275.516
    s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516
    S354.101,133,275.517,133z

    M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
    s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083
    C362.6,323.611,323.611,362.6,275.517,362.6z" />

              <circle fill="#000" cx="418.306" cy="134.072" r="34.149" />
            </svg>
          </a>
          <a href="https://www.github.com/carmengm14/" target="_blank">
            <svg width="1.5vw" height="1.5vh" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#000]</title>
                <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#000]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>

        </div>

      </div>

      <div class="footer">
        2026 © Carmen García Monreal
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style scoped>
/* ================= NAVBAR ================= */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  box-sizing: border-box;
  z-index: 10000;
}

.logo {
  height: 50px;
}

.paginas {
  display: flex;
  gap: 30px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  color: white;
  list-style: none;
}

.paginas a {
  color: white;
  text-decoration: none;
}

.paginas a:hover {
  color: var(--accent)
}

.paginas a.router-link-exact-active {
  color: var(--accent);
  text-decoration: underline;
}

/* ================= HAMBURGER ================= */

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 10001;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: var(--accent);
  transition: 0.3s ease;
}

/* animación a X */
.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ================= OVERLAY ================= */

.overlay {
  position: fixed;
  inset: 0;
  background: var(--accent);
  transform: translateX(100%);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 99999;
}

.overlay.active {
  transform: translateX(0);
}

/* CLOSE */
.close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  color: black;
  z-index: 100000;
}

/* ================= MENU CONTENT ================= */

.menuContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  transition-delay: 0.1s;
}

.overlay.active .menuContent {
  opacity: 1;
  transform: translateY(0);
}

.menuLogo {
  height: 60px;
  margin-bottom: 40px;
}

.menuLinks {
  list-style: none;
  text-align: center;
  padding: 0;
}

.menuLinks li {
  margin: 15px 0;
  font-size: 22px;
}

.menuLinks a {
  color: black;
  text-decoration: none;
}

.menuLinks a.router-link-exact-active {
  text-decoration: underline;
}

.menuLinks a:hover {
  background: black;
  padding: 5px 5px;
  color: var(--accent);
}

.menuLogo {
  height: 60px;
  margin-bottom: 40px;
  filter: brightness(0);
  /* 🔥 lo vuelve negro */
}

/* ================= SOCIALS ================= */

.socials {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

/* ICONOS */
.socials a {
  color: white;
  /* desktop default */
  transition: color 0.3s ease;
}

.socials svg {
  width: 24px;
  height: 24px;
  display: block;
}

/* hover desktop */
.socials a:hover {
  color: var(--accent);
}

.overlay .socials svg {
  filter: brightness(0);
}
.rightSide .socials.desktop a {
  display: inline-flex;
  transition: transform 0.3s ease;
}

.rightSide .socials.desktop a:hover {
  transform: translateY(-2px);
}
.rightSide .socials.desktop a:hover svg * {
  fill: var(--accent) !important;
}
.rightSide .socials.desktop a:hover svg path,
.rightSide .socials.desktop a:hover svg circle {
  fill: var(--accent);
}

.rightSide .socials.desktop svg {
  transition: fill 0.3s ease;
}


/* ================= FOOTER ================= */

.footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: black;
  /* 🔥 negro */
  text-align: center;
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {

  .desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  /* iconos móviles negros */
  .socials a {
    color: black;
  }

  .socials a:hover {
    color: black;
  }
}
</style>