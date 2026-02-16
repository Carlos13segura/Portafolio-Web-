# 🚀 Guía de Desarrollo - Portafolio Web

## 📋 Tabla de Contenidos

1. [Configuración Inicial](#configuración-inicial)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Comandos Disponibles](#comandos-disponibles)
4. [Estándares de Código](#estándares-de-código)
5. [Cómo Contribuir](#cómo-contribuir)
6. [Solución de Problemas](#solución-de-problemas)

## ⚙️ Configuración Inicial

### Requisitos

- Node.js 16+ o superior
- npm o yarn
- VS Code (recomendado)

### Instalación

```bash
# 1. Clonar el repositorio
git clone <tu-repo>
cd "Portafolio Web"

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:5174/
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── views/              # Páginas principales
├── assets/             # Estilos, imágenes, fuentes
├── router/             # Configuración de rutas
├── stores/             # Estado global (Pinia)
├── composables/        # Lógica reutilizable
├── App.vue             # Componente raíz
└── main.ts             # Punto de entrada
```

## 🎯 Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Ejecutar pruebas
npm run test
npm run test:ui

# Linting de código
npm run lint
```

## 📝 Estándares de Código

### 1. Nombres de Archivos

**Componentes Vue:**

```
✅ HeroSection.vue       (PascalCase)
❌ hero-section.vue      (kebab-case)
❌ heroSection.vue       (camelCase)
```

**Composables:**

```
✅ useIntersectionObserver.ts
❌ use-intersection-observer.ts
❌ UseIntersectionObserver.ts
```

**Archivos SCSS:**

```
✅ _responsive.scss
❌ responsive.scss
❌ _Responsive.scss
```

### 2. Estructura de Componentes

```vue
<template>
  <!-- HTML aquí -->
</template>

<script setup lang="ts">
// TypeScript aquí
</script>

<style scoped lang="scss">
// SCSS aquí
</style>
```

### 3. Orden de Propiedades SCSS

```scss
// 1. Variables y mixins
$color: var(--accent-purple);

// 2. Propiedades de posición
.element {
  position: relative;
  top: 0;
  left: 0;
}

// 3. Display y modelo de caja
.element {
  display: flex;
  width: 100%;
  padding: var(--spacing-md);
  margin: 0;
}

// 4. Tipografía
.element {
  font-family: $font-primary;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.6;
}

// 5. Colores y estilos visuales
.element {
  color: $color-text;
  background: $color-primary;
  border: 1px solid $color-accent;
}

// 6. Transiciones y transformaciones
.element {
  transition: all $transition-base;
  transform: translateX(0);
}

// 7. Media queries
@include md-up {
  .element {
    font-size: 2rem;
  }
}

// 8. Estados (hover, active, etc)
.element:hover {
  transform: translateY(-5px);
}
```

## 🎨 Sistema de Diseño

### Colores

```scss
$color-primary: var(--dark-primary); // #0a0c1b
$color-accent: var(--accent-purple); // #8b5cf6
$color-text: var(--white); // #ffffff
$color-text-muted: var(--gray-400); // #9ca3af
```

### Tipografía

```scss
$font-primary: 'Syne', sans-serif; // Títulos
$font-secondary: 'Inter', sans-serif; // Cuerpo
```

### Espaciado

```scss
--spacing-xs: 0.25rem (4px) --spacing-sm: 0.5rem (8px) --spacing-md: 1rem (16px)
  --spacing-lg: 1.5rem (24px) --spacing-xl: 2rem (32px) --spacing-2xl: 3rem (48px);
```

### Breakpoints

```scss
xs: 320px    - Extra pequeño
sm: 480px    - Pequeño
md: 640px    - Mediano
lg: 768px    - Grande (tablet)
xl: 1024px   - Extra grande
2xl: 1280px  - Desktop
3xl: 1536px  - Desktop 4K
```

## 🔄 Flujo de Trabajo

### Crear un Nuevo Componente

```bash
# 1. Crear archivo en src/components/sections/
src/components/sections/NewSection.vue

# 2. Crear archivo de estilos
src/assets/scss/components/_new-section.scss

# 3. Importar estilos en main.scss
@import 'components/new-section';

# 4. Usar en la aplicación
<NewSection />
```

### Template de Componente

```vue
<template>
  <section class="new-section">
    <div class="container">
      <!-- Contenido -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Lógica de inicialización
})
</script>

<style scoped lang="scss">
.new-section {
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

## ✅ Checklist Antes de Hacer Commit

- [ ] El código cumple con ESLint
- [ ] Prettier ha formateado el código
- [ ] No hay errores de TypeScript
- [ ] Los componentes son responsivos
- [ ] Las clases SCSS siguen convenciones
- [ ] El proyecto compila sin errores
- [ ] Las pruebas pasan (si aplica)

## 🐛 Solución de Problemas

### Error: "Expected '}'"

```
❌ Problema: Archivo SCSS sin cerrar bloques
✅ Solución: Verificar que todos los { tienen su }
```

### Error: "Undefined variable"

```
❌ Problema: Variable no importada o no definida
✅ Solución: Asegurar que _variables.scss esté importado primero
```

### Styles no se aplican

```
❌ Problema: Falta scoped en <style>
✅ Solución: Agregar scoped: <style scoped lang="scss">
```

### Puerto 5173 en uso

```bash
# Usar otro puerto
npm run dev -- --port 5174
```

## 📚 Recursos Útiles

- [Documentación de Vue 3](https://vuejs.org/)
- [Documentación de Vite](https://vitejs.dev/)
- [SASS Documentation](https://sass-lang.com/)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 🤝 Cómo Contribuir

1. Crea una rama para tu feature: `git checkout -b feature/nueva-seccion`
2. Haz cambios y sigue los estándares
3. Commit con mensajes claros: `git commit -m "feat: agregar nueva sección"`
4. Push a la rama: `git push origin feature/nueva-seccion`
5. Abre un Pull Request

## 📧 Contacto y Soporte

Si tienes preguntas, abre un issue o contacta al equipo de desarrollo.

---

**Última actualización:** 11 de febrero de 2026
