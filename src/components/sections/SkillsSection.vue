<script setup lang="ts">
interface Skill {
  name: string
  icon: string
  color: string
}

const skills: Skill[] = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
  { name: 'TypeScript', icon: 'fab fa-typescript', color: '#3178C6' },
  { name: 'SASS/SCSS', icon: 'fab fa-sass', color: '#CC6699' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
  { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
  { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
]
</script>

<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title text-center">Mis <span class="text-accent">Habilidades</span></h2>

      <div class="skills__track-wrapper">
        <div class="skills__track">
          <!-- Double the loop for seamless scrolling effect -->
          <div v-for="(skill, index) in [...skills, ...skills]" :key="index" class="skill-card">
            <i :class="[skill.icon, 'skill-icon']" :style="{ color: skill.color }"></i>
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_skills.scss
</style>
