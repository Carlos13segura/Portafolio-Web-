# 📖 Guía Rápida de Referencia

## 🚀 Comandos de Inicio

```bash
npm install        # Instalar dependencias
npm run dev        # Iniciar desarrollo (http://localhost:5174/)
npm run build      # Build para producción
npm run lint       # Verificar código
```

---

## 📁 Dónde Poner Cada Cosa

### Componentes Vue

```
src/components/
├── layout/          → TheNavBar.vue, TheFooter.vue
├── sections/        → HeroSection.vue, AboutSection.vue, etc
├── common/          → Componentes reutilizables pequeños
└── icons/           → Componentes de iconos
```

### Estilos SCSS

```
src/assets/scss/
├── main.scss                 → Importar todo aquí
├── config/                   → Configuración responsiva
├── abstracts/                → Variables y mixins
├── base/                     → Reset y tipografía
├── utilities/                → Clases de utilidad
└── components/               → Estilos de componentes
```

### TypeScript

```
src/
├── composables/     → Funciones reutilizables (useXxx.ts)
├── stores/          → Estado global (Pinia)
└── router/          → Rutas de la aplicación
```

---

## 🎨 Colores del Proyecto

```scss
$color-primary: #0a0c1b      // Fondo principal
$color-accent: #8b5cf6       // Morado (acento)
$color-text: #ffffff         // Texto blanco
$color-text-muted: #9ca3af   // Gris
```

---

## 📐 Breakpoints

```scss
@include xs-only // 320px - 479px  (móviles pequeños)
  @include sm-up // 480px+         (móviles medianos)
  @include md-up // 640px+         (tablets)
  @include lg-up // 768px+         (tablets grandes)
  @include xl-up // 1024px+        (desktops)
  @include wide; // 1440px+        (desktops grandes)
```

---

## 🔤 Tipografía

```scss
// Fuentes
$font-primary: 'Syne'        // Títulos
$font-secondary: 'Inter'     // Cuerpo

// Tamaños responsivos
h1 { font-size: clamp(1.75rem, 8vw, 4.5rem); }
h2 { font-size: clamp(1.5rem, 6vw, 2.5rem); }
p  { font-size: clamp(0.875rem, 2.5vw, 1rem); }

// Clases de utilidad
.text-sm       // Texto pequeño
.text-base     // Texto base
.text-lg       // Texto grande
.text-xl       // Texto extra grande
```

---

## 🎯 Utilidades Responsivas

### Grids

```html
<div class="grid grid--2">
  <!-- 2 columnas -->
  <div class="grid grid--3">
    <!-- 3 columnas -->
    <div class="grid grid--4">
      <!-- 4 columnas -->
      <div class="grid grid--auto"><!-- Auto (masonry) --></div>
    </div>
  </div>
</div>
```

### Espaciado

```html
<div class="gap-sm">
  <!-- Separación pequeña -->
  <div class="gap-md">
    <!-- Separación media -->
    <div class="gap-lg">
      <!-- Separación grande -->
      <div class="gap-xl"><!-- Separación extra grande --></div>
    </div>
  </div>
</div>
```

### Visibilidad

```html
<div class="hide-mobile">
  <!-- Ocultar en móvil -->
  <div class="show-mobile">
    <!-- Mostrar solo en móvil -->
    <div class="hide-tablet"><!-- Ocultar en tablet --></div>
  </div>
</div>
```

### Padding/Margin

```html
<div class="p-responsive">
  <!-- Padding responsivo -->
  <div class="m-responsive"><!-- Margin responsivo --></div>
</div>
```

---

## 🧩 Plantilla de Componente

```vue
<template>
  <section class="my-component">
    <div class="container">
      <!-- Contenido aquí -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped lang="scss">
.my-component {
  padding: var(--spacing-2xl) 0;

  @include mobile {
    padding: var(--spacing-lg) 0;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}
</style>
```

---

## 🎨 Variables Útiles

### Espaciado

```scss
--spacing-xs: 0.25rem (4px) --spacing-sm: 0.5rem (8px) --spacing-md: 1rem (16px)
  --spacing-lg: 1.5rem (24px) --spacing-xl: 2rem (32px) --spacing-2xl: 3rem (48px);
```

### Sombras

```scss
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05) --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1) --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Transiciones

```scss
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1) --transition-base: 300ms
  cubic-bezier(0.4, 0, 0.2, 1) --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Border Radius

```scss
--radius-sm: 0.375rem --radius-md: 0.5rem --radius-lg: 1rem --radius-full: 9999px;
```

---

## 🎭 Mixins SCSS Útiles

### Flexbox

```scss
@include flex-center; // Flex centrado
```

### Posicionamiento

```scss
@include absolute-center; // Centrado absoluto
```

### Tipografía

```scss
@include gradient-text($color1, $color2); // Texto degradado
@include neon-text($color); // Texto neón
```

### Efectos Visuales

```scss
@include glass-morphism; // Cristal
@include glass-morphism-dark; // Cristal oscuro
@include neon-box($color); // Caja con brillo
```

### Animaciones

```scss
@include card-hover; // Efecto hover de card
@include animate-in; // Animación de entrada
```

---

## 📋 Importar en Componentes

### Vue 3 Imports

```typescript
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

onMounted(() => {
  console.log('Component mounted!')
})
```

### Composables

```typescript
import { useComponentName } from '@/composables/useComponentName'

const { data, loading } = useComponentName()
```

### Stores (Pinia)

```typescript
import { useMainStore } from '@/stores/main'

const store = useMainStore()
```

---

## 🔄 Flujo de Trabajo Típico

### 1️⃣ Crear Componente

```bash
touch src/components/sections/NewComponent.vue
```

### 2️⃣ Crear Estilos

```bash
touch src/assets/scss/components/_new-component.scss
```

### 3️⃣ Importar en main.scss

```scss
@import 'components/new-component';
```

### 4️⃣ Usar en App.vue

```vue
<NewComponent />
```

---

## ✅ Checklist Pre-Commit

- [ ] ESLint sin errores: `npm run lint`
- [ ] Sin console.log
- [ ] Código responsivo
- [ ] SCSS correcto
- [ ] TypeScript sin errores
- [ ] Componente en carpeta correcta

---

## 🐛 Errores Comunes

| Error                | Solución                            |
| -------------------- | ----------------------------------- |
| `Expected "}"`       | Revisar cierre de bloques SCSS      |
| `Undefined variable` | Importar `_variables.scss` primero  |
| `Styles no aplican`  | Añadir `scoped` en `<style scoped>` |
| `Puerto en uso`      | `npm run dev -- --port 5175`        |

---

## 📚 Documentos de Referencia

- [ESTRUCTURA_PROYECTO.md](ESTRUCTURA_PROYECTO.md) - Organización
- [DESARROLLO.md](DESARROLLO.md) - Guía detallada
- [COMPONENTES.md](COMPONENTES.md) - Catálogo
- [RESPONSIVIDAD.md](RESPONSIVIDAD.md) - Responsive

---

**Última actualización:** 11 de febrero de 2026
