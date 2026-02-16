<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  },
  { threshold: 0.2 },
)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <section class="about" id="about" ref="sectionRef">
    <div class="container">
      <!-- Text Content -->
      <div class="about__content" :class="{ 'is-visible': isVisible }">
        <div class="about__heading">
          <div class="line"></div>
          <h2>Sobre <span>Mí</span></h2>
        </div>

        <div class="about__text">
          <p>
            Soy un <strong>Desarrollador Frontend JR</strong> apasionado por construir sistemas
            robustos y experiencias de usuario fluidas. Mi enfoque combina la precisión técnica con
            un diseño intuitivo.
          </p>
          <p>
            Me especializo en el ecosistema de JavaScript moderno, creando soluciones escalables
            desde el frontend hasta la arquitectura del servidor.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="about__stats">
          <div class="stat-card">
            <span class="stat-number">2+</span>
            <span class="stat-label">Años de Exp.</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">10+</span>
            <span class="stat-label">Proyectos</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Compromiso</span>
          </div>
        </div>
      </div>

      <!-- Visual / Timeline -->
      <div class="about__visual" :class="{ 'is-visible': isVisible }">
        <div class="experience-card">
          <h3>Trayectoria</h3>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="timeline-content">
                <h4>Desarrollador Frontend</h4>
                <span class="role">Freelance</span>
                <p class="description">
                  Desarrollo de sitios web corporativos y SPAs utilizando Vue.js y Angular.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-server"></i>
              </div>
              <div class="timeline-content">
                <h4>Backend Learning</h4>
                <span class="role">Autodidacta</span>
                <p class="description">
                  Profundizando en Node.js, Express y bases de datos SQL/NoSQL.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="timeline-content">
                <h4>Formación Continua</h4>
                <span class="role">Cursos & Certificaciones</span>
                <p class="description">
                  Actualización constante en nuevas tecnologías y mejores prácticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_about.scss
</style>
