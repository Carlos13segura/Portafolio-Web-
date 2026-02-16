<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavBar from '@/components/layout/TheNavBar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <TheNavBar />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style lang="scss">
/* Global styles are imported in main.ts */
main {
  padding-top: 80px; /* Space for fixed navbar */
  min-height: 100vh;
}
</style>
