<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: 'Héroes del Silencio',
    description: 'Una aplicación web responsiva con funcionalidades modernas.',
    image: 'https://www.laizquierdadiario.com/IMG/arton195430.jpg?1619609359',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Carlos13segura/heoresdelsilencio',
    demo: 'https://heoresdelsilencio-awlrqaq9m.vercel.app/',
  },
  {
    title: 'A Luxury Hotels',
    description: 'Sitio web de hotel con sistema de reservas y galería de imágenes.',
    // Using placeholder as local image might not work without setup
    image: 'https://placehold.co/600x400/222/FFF?text=A+Luxury+Hotels',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Carlos13segura/Hotel',
    demo: 'https://carlos13segura.github.io/Hotel/',
  },
  {
    title: 'BUNBURY',
    description: 'Sitio web dedicado a la discografía y trayectoria del artista.',
    image: 'https://cdn.aragonmusical.com/wp-content/uploads/2019/05/Bunbury-California-Live.jpg',
    tags: ['Bootstrap', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Carlos13segura/Discografia-bunbury',
    demo: 'https://carlos13segura.github.io/Discografia-bunbury/',
  },
  {
    title: 'ronaldo',
    description: 'Una página web dedicada a la carrera y logros de Cristiano Ronaldo.',
    image:
      'https://static.foxdeportes.com/2021/08/cristiano-ronaldo-grita-de-emocion-en-old-trafford-manchester-united-rts.jpg',
    tags: ['vue js', 'SCSS'],
    github: 'https://github.com/Carlos13segura/Ronaldo',
    demo: 'https://carlos13segura.github.io/Ronaldo/',
  },
  {
    title: 'Volkswagen Golf2026',
    description: 'Sitio web de presentación del modelo Volkswagen Golf 2026.',
    image:
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcYl5-8-YEspoIwPIUvWOFonnawSfkAKOzj-Jm6XviLUhf1Uys9HLARXllYm6ek_qDoy1gFOagLpjuvtFE_lihvfQRsnVWv-hKbGNt1c65HEM88Yt_aCniNygdM-Kk64zxl_j0_n5o2GlNJgQyhtIJSvKRyf2DQo2SfQ44DM5blp11i_eqLanM?key=Wc_mFkIIcDP5iSFpvnB0tw',
    tags: ['Angular', 'SASS', 'TypeScript'],
    github: 'https://github.com/Carlos13segura/GTI-2026',
    demo: 'https://gti-2026.vercel.app/',
  },
]

const projectsSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 },
  )

  if (projectsSection.value) {
    observer.observe(projectsSection.value)
  }
})
</script>

<template>
  <section class="projects" id="projects" ref="projectsSection">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Mis <span class="text-outline" data-text="Proyectos">Proyectos</span>
        </h2>
      </div>

      <div class="projects__grid">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          :class="{ 'is-visible': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Image Layer -->
          <div class="project-card__image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-img" loading="lazy" />

            <!-- Hover Overlay -->
            <div class="project-overlay">
              <div class="overlay-content">
                <div class="btn-group">
                  <a :href="project.github" target="_blank" class="btn-icon" aria-label="Github">
                    <i class="fab fa-github"></i>
                  </a>
                  <a :href="project.demo" target="_blank" class="btn-icon" aria-label="Demo">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Visible Info Bar -->
            <div class="project-card__info">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_projects.scss
</style>
