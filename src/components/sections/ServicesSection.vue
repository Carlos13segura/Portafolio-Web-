<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Service {
  title: string
  description: string
  icon: string
  color: string
}

const services: Service[] = [
  {
    title: 'Páginas Web',
    description: 'Diseño y desarrollo de sitios web modernos, responsivos y optimizados para SEO.',
    icon: 'fab fa-html5',
    color: '#e34c26'
  },
  {
    title: 'Invitaciones Digitales',
    description: 'Creación de invitaciones digitales interactivas para eventos especiales.',
    icon: 'fab fa-css3-alt',
    color: '#264de4'
  },
  {
    title: 'Menús Digitales',
    description: 'Desarrollo de menús digitales interactivos para restaurantes y cafeterías.',
    icon: 'fab fa-js',
    color: '#f0db4f'
  },
  {
    title: 'Portafolios Web',
    description: 'Creación de portafolios profesionales para mostrar tu trabajo y habilidades.',
    icon: 'fab fa-bootstrap',
    color: '#7952b3'
  },
  {
    title: 'Tarjetas de Presentación',
    description: 'Diseño de tarjetas de presentación digitales e impresas para profesionales.',
    icon: 'fab fa-figma',
    color: '#f24e1e'
  },
  {
    title: 'E-commerce',
    description: 'Desarrollo de tiendas en línea para vender tus productos o servicios.',
    icon: 'fas fa-shopping-cart',
    color: '#42b883'
  }
]

const servicesSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    })
  }, { threshold: 0.1 })

  if (servicesSection.value) {
    observer.observe(servicesSection.value)
  }
})
</script>

<template>
  <section class="services" id="services" ref="servicesSection">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Mis <span class="text-gradient">Servicios</span></h2>
        <p class="section-subtitle">
          Soluciones digitales a medida para potenciar tu presencia en línea.
        </p>
      </div>
      
      <div class="services__grid">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="service-card"
          :class="{ 'is-visible': isVisible }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Decorators -->
          <div class="service-blob top-right"></div>
          <div class="service-blob bottom-left"></div>

          <div class="icon-wrapper">
            <i :class="service.icon"></i>
          </div>
          
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            
            <a href="#contact" class="read-more">
              Solicitar Info <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_services.scss
</style>
