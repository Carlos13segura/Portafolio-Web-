# 🧩 Guía de Componentes - Portafolio Web

## 📚 Componentes Disponibles

### Layout Components

#### TheNavBar.vue

**Ubicación:** `src/components/layout/TheNavBar.vue`

Barra de navegación responsiva con menú móvil.

```vue
<template>
  <TheNavBar />
</template>

<script setup>
import TheNavBar from '@/components/layout/TheNavBar.vue'
</script>
```

**Features:**

- ✅ Menú móvil con hamburger
- ✅ Navegación responsiva
- ✅ Scrolled state animado
- ✅ Links suave a secciones

---

#### TheFooter.vue

**Ubicación:** `src/components/layout/TheFooter.vue`

Pie de página del sitio.

```vue
<TheFooter />
```

---

### Sections (Componentes Principales)

#### HeroSection.vue

**Ubicación:** `src/components/sections/HeroSection.vue`

Sección principal con presentación personal.

**Props:**

```typescript
interface Props {
  // Sin props requeridas
}
```

**Features:**

- ✅ Tipografía fluida responsiva
- ✅ Animaciones de entrada
- ✅ Background gradiente animado
- ✅ Grid pattern overlay
- ✅ CTA buttons

**Uso:**

```vue
<HeroSection />
```

---

#### AboutSection.vue

**Ubicación:** `src/components/sections/AboutSection.vue`

Sección de información personal.

**Características:**

- ✅ Descripción personal
- ✅ Lista de habilidades blandas
- ✅ Animated cards
- ✅ Responsivo

---

#### SkillsSection.vue

**Ubicación:** `src/components/sections/SkillsSection.vue`

Sección de habilidades técnicas.

**Features:**

- ✅ Grid de habilidades
- ✅ Categorización (Frontend, Backend, Tools)
- ✅ Hover effects
- ✅ Responsivo

---

#### ServicesSection.vue

**Ubicación:** `src/components/sections/ServicesSection.vue`

Sección de servicios ofrecidos.

**Features:**

- ✅ Cards de servicios
- ✅ Iconos
- ✅ Descripciones
- ✅ Glass morphism effects

---

#### ProjectsSection.vue

**Ubicación:** `src/components/sections/ProjectsSection.vue`

Sección de proyectos destacados.

**Features:**

- ✅ Grid de proyectos
- ✅ Imágenes con hover
- ✅ Descripción y tecnologías
- ✅ Links a proyectos

---

#### ContactSection.vue

**Ubicación:** `src/components/sections/ContactSection.vue`

Sección de contacto.

**Features:**

- ✅ Formulario de contacto
- ✅ Validación
- ✅ Métodos de contacto
- ✅ Redes sociales

---

### Icon Components

Located in `src/components/icons/`

- `IconCommunity.vue`
- `IconDocumentation.vue`
- `IconEcosystem.vue`
- `IconSupport.vue`
- `IconTooling.vue`

**Uso:**

```vue
<IconCommunity />
<IconDocumentation />
```

---

## 🎨 Utilidades Responsivas

### Grid Classes

```html
<!-- Auto-fit grid -->
<div class="grid grid--auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 2 columns -->
<div class="grid grid--2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 3 columns -->
<div class="grid grid--3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 4 columns -->
<div class="grid grid--4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### Spacing Classes

```html
<div class="gap-sm">Spacing pequeño</div>
<div class="gap-md">Spacing medio</div>
<div class="gap-lg">Spacing grande</div>
<div class="gap-xl">Spacing extra grande</div>
```

### Visibility Classes

```html
<!-- Hide on mobile -->
<div class="hide-mobile">Desktop only</div>

<!-- Show only on mobile -->
<div class="show-mobile">Mobile only</div>

<!-- Hide on tablet -->
<div class="hide-tablet">No tablet</div>
```

### Typography Classes

```html
<p class="text-sm">Texto pequeño</p>
<p class="text-base">Texto base</p>
<p class="text-lg">Texto grande</p>
<p class="text-xl">Texto extra grande</p>
```

---

## 🎯 Patrones de Componentes

### Pattern: Section Wrapper

Todos los componentes de sección siguen este patrón:

```vue
<template>
  <section class="section-name">
    <div class="container">
      <div class="section-name__content">
        <!-- Contenido -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-name {
  padding: var(--spacing-2xl) 0;
  background-color: $color-primary;

  @include mobile {
    padding: var(--spacing-lg) 0;
  }
}

.container {
  @include container;
}
</style>
```

### Pattern: Responsive Grid

```vue
<template>
  <div class="grid grid--3">
    <div v-for="item in items" :key="item.id" class="grid-item">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  id: number
  name: string
}

const items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]
</script>

<style scoped lang="scss">
.grid-item {
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: all $transition-base;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
}
</style>
```

### Pattern: Composable Hook

```typescript
// src/composables/useComponentName.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useComponentName() {
  const isActive = ref(false)

  onMounted(() => {
    // Inicialización
  })

  onUnmounted(() => {
    // Limpieza
  })

  return {
    isActive,
  }
}
```

---

## 🚀 Crear un Nuevo Componente

### Step 1: Crear archivo Vue

```bash
touch src/components/sections/NewFeature.vue
```

### Step 2: Crear estilos SCSS

```bash
touch src/assets/scss/components/_new-feature.scss
```

### Step 3: Importar en main.scss

```scss
// En src/assets/scss/main.scss
@import 'components/new-feature';
```

### Step 4: Estructura base

```vue
<template>
  <section class="new-feature">
    <div class="container">
      <h2>Nueva Feature</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([])
</script>

<style scoped lang="scss">
.new-feature {
  padding: var(--spacing-2xl) 0;

  @include mobile {
    padding: var(--spacing-lg) 0;
  }
}

h2 {
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  margin-bottom: var(--spacing-lg);
  color: $color-text;
}
</style>
```

---

## 📋 Checklist de Componentes

Antes de marcar un componente como listo:

- [ ] Tiene un nombre descriptivo en PascalCase
- [ ] Está en la carpeta correcta
- [ ] Tiene archivo SCSS correspondiente
- [ ] El SCSS está importado en main.scss
- [ ] Es responsive (mobile, tablet, desktop)
- [ ] Tiene documentación (comentarios en el código)
- [ ] Las transiciones son suaves
- [ ] El código sigue las convenciones
- [ ] No tiene console.log sin propósito
- [ ] Las props están tipiadas

---

## 🎭 Estados de Componentes

Todos los componentes deben soportar estos estados:

```scss
// Normal
.component {
}

// Hover (desktop)
@media (hover: hover) {
  .component:hover {
  }
}

// Active
.component.active {
}

// Disabled
.component:disabled,
.component[disabled] {
}

// Mobile
@include mobile {
  .component {
  }
}
```

---

## 🔗 Relaciones de Componentes

```
App.vue
├── TheNavBar
├── HeroSection
├── AboutSection
├── SkillsSection
├── ServicesSection
├── ProjectsSection
├── ContactSection
└── TheFooter
```

---

**Guía de componentes actualizada** ✅
