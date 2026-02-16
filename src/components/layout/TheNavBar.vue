<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// closeMenu removed

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

interface MenuItem {
  name: string
  href: string
}

const menuItems = ref<MenuItem[]>([
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
])

const scrollToTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__container">
      <a href="#" class="navbar__brand" @click.prevent="scrollToTop">
        Carlos <span class="text-accent">Segura</span>
      </a>

      <div class="navbar__actions">
        <!-- Desktop Menu -->
        <ul class="navbar__menu desktop-only">
          <li v-for="item in menuItems" :key="item.name" class="navbar__item">
            <a :href="item.href" class="navbar__link">{{ item.name }}</a>
          </li>
        </ul>

        <!-- Theme Toggle -->
        <div class="theme-switch-wrapper">
          <label class="theme-switch" for="themeToggle">
            <input
              type="checkbox"
              id="themeToggle"
              :checked="themeStore.theme === 'light'"
              @change="themeStore.toggleTheme"
            />
            <span class="slider">
              <i class="fas fa-sun sun"></i>
              <i class="fas fa-moon moon"></i>
            </span>
          </label>
        </div>

        <!-- Mobile Toggle -->
        <button
          class="navbar__toggler mobile-only"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <div class="hamburger" :class="{ 'is-active': isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
        <div class="mobile-menu__content">
          <ul class="mobile-menu__list">
            <li v-for="item in menuItems" :key="item.name" class="mobile-menu__item">
              <a :href="item.href" class="mobile-menu__link" @click="toggleMenu">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_navbar.scss
</style>
