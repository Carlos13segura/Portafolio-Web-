<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Brand -->
      <div class="footer__brand">
        <a href="#" class="footer-logo">Carlos <span class="text-accent">Segura</span></a>
        <p class="footer-tagline">Construyendo el futuro digital, un pixel a la vez.</p>
      </div>

      <!-- Navigation -->
      <nav class="footer__nav">
        <a href="#about" class="footer-link">Sobre Mí</a>
        <a href="#services" class="footer-link">Servicios</a>
        <a href="#projects" class="footer-link">Proyectos</a>
        <a href="#contact" class="footer-link">Contacto</a>
      </nav>

      <!-- Social -->
      <div class="footer__social">
        <a
          href="https://github.com/Carlos13segura"
          target="_blank"
          class="social-link"
          aria-label="Github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-segura-118760324/"
          target="_blank"
          class="social-link"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:seguraflorescarlosmanuel24@gmail.com"
          class="social-link"
          aria-label="Email"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <!-- Copyright -->
      <div class="footer__copyright">
        <p>&copy; {{ currentYear }} Carlos Segura. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_footer.scss
</style>
