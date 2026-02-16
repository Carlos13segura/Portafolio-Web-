<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="hero" id="home">
    <!-- Background element managed by SCSS pseudo-elements -->
    
    <div class="container">
      <!-- Left Content -->
      <div class="hero__content">
        <div class="hero-badge">
          <span class="dot"></span>
          Disponible para trabajar
        </div>

        <h1 class="title">
          <span>Creando</span>
          <span>Experiencias</span>
          <span class="text-highlight" data-text="Digitales.">Digitales.</span>
        </h1>

        <p class="subtitle">
          Diseño y desarrollo soluciones web que fusionan creatividad y funcionalidad 
          para transformar ideas en productos excepcionales.
        </p>

        <div class="cta-group">
          <a href="#contact" class="btn btn--primary">
            Inicia un Proyecto <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#projects" class="btn btn--outline">
            Ver Portafolio <i class="fas fa-code"></i>
          </a>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="hero__visual">
        <div class="image-wrapper">
          <img src="https://placehold.co/600x600/10121b/FFFFFF?text=CS" alt="Carlos Segura" class="hero-image">
          
          <!-- Floating Icons -->
          <div class="floating-icon icon-1">
            <i class="fab fa-vuejs"></i>
          </div>
          <div class="floating-icon icon-2">
            <i class="fab fa-sass"></i>
          </div>
          <div class="floating-icon icon-3">
            <i class="fas fa-layer-group"></i>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <a href="#about" class="scroll-down">
        <div class="mouse"></div>
        <span>Scroll</span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_hero.scss
</style>
