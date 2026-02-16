<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    submitStatus.value = 'success'
    formData.value = { name: '', email: '', subject: '', message: '' }
    
    setTimeout(() => {
      submitStatus.value = 'idle'
    }, 5000)
  }, 1500)
}
</script>

<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contáct<span class="text-highlight">ame</span></h2>
        <p class="section-subtitle">¿Tienes un proyecto en mente? Hablemos.</p>
      </div>
      
      <div class="contact__wrapper">
        <!-- Info Column -->
        <div class="contact__info">
          <h3>Información de Contacto</h3>
          <p>
            Estoy disponible para trabajos freelance y colaboraciones. 
            ¡Conectemos y creemos algo increíble juntos!
          </p>
          
          <div class="info-item">
            <div class="icon-box">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="details">
              <span class="label">Email</span>
              <a href="mailto:seguraflorescarlosmanuel24@gmail.com" class="value">seguraflorescarlosmanuel@gmail.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="details">
              <span class="label">Ubicación</span>
              <span class="value">Puebla, México</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box">
              <i class="fas fa-share-alt"></i>
            </div>
            <div class="details">
              <span class="label">Sígueme</span>
              <div class="social-links" style="display:flex; gap:1rem; margin-top:0.5rem;">
                 <a href="https://github.com/Carlos13segura" target="_blank" style="color:var(--gray-400); font-size:1.2rem;"><i class="fab fa-github"></i></a>
                 <a href="https://www.linkedin.com/in/carlos-segura-118760324/" target="_blank" style="color:var(--gray-400); font-size:1.2rem;"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="contact__form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required
                placeholder="Nombre"
              >
            </div>

            <div class="form-group">
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required
                placeholder="Email"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                required
                placeholder="Asunto"
              >
            </div>

            <div class="form-group">
              <textarea 
                id="message" 
                rows="4" 
                v-model="formData.message" 
                required
                placeholder="Mensaje"
              ></textarea>
            </div>

            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Enviar Mensaje <i class="fas fa-paper-plane"></i></span>
              <span v-else><i class="fas fa-spinner fa-spin"></i> Enviando...</span>
            </button>
            
            <div v-if="submitStatus === 'success'" class="alert success" style="margin-top:1rem; color: #4ade80;">
              <i class="fas fa-check-circle"></i> Mensaje enviado con éxito.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Styles moved to src/assets/scss/components/_contact.scss
</style>
