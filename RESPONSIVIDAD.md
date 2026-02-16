# Guía de Responsividad - Portafolio Web

## 📱 Breakpoints Disponibles

El proyecto utiliza breakpoints mobile-first para una mejor adaptabilidad:

| Nombre           | Ancho Mínimo | Ancho Máximo | Mixins Disponibles                   |
| ---------------- | ------------ | ------------ | ------------------------------------ |
| Extra Small (XS) | 320px        | 479px        | `@include xs-only`                   |
| Small (SM)       | 480px        | 639px        | `@include sm-only`, `@include sm-up` |
| Medium (MD)      | 640px        | 767px        | `@include md-only`, `@include md-up` |
| Large (LG)       | 768px        | 1023px       | `@include lg-only`, `@include lg-up` |
| Extra Large (XL) | 1024px       | 1279px       | `@include xl-up`                     |
| 2XL              | 1280px       | 1535px       | -                                    |
| 3XL              | 1536px+      | -            | `@include wide`                      |

## 🎯 Mixins de Media Queries

### Nuevos Mixins (Mobile-First)

```scss
// XS: Solo móviles muy pequeños (hasta 479px)
@include xs-only {
}

// SM: Pequeños (480px - 639px)
@include sm-only {
}
@include sm-up {
} // 480px y arriba

// MD: Medianos (640px - 767px)
@include md-only {
}
@include md-up {
} // 640px y arriba

// LG: Tabletas/Pequeños desktops (768px - 1023px)
@include lg-only {
}
@include lg-up {
} // 768px y arriba

// XL: Desktops (1024px+)
@include xl-up {
}

// Wide: Desktops grandes (1440px+)
@include wide {
}
```

### Mixins Heredados (Compatibilidad)

```scss
@include mobile {
} // Hasta 768px
@include tablet {
} // 769px - 1024px
@include desktop {
} // 1025px+
```

### Mixins de Dispositivo

```scss
// Orientación
@include landscape {
} // Dispositivos en orientación horizontal
@include portrait {
} // Dispositivos en orientación vertical

// Tipo de puntero
@include touch-device {
} // Dispositivos táctiles
@include retina {
} // Pantallas de alta DPI
```

## 🔤 Tipografía Responsiva

El proyecto utiliza **fluid typography** con `clamp()`:

```css
/* Automáticamente se ajusta entre el mínimo y máximo */
h1 {
  font-size: clamp(1.75rem, 8vw, 4.5rem);
}
h2 {
  font-size: clamp(1.5rem, 6vw, 2.5rem);
}
p {
  font-size: clamp(0.875rem, 2.5vw, 1rem);
}
```

### Clases de Utilidad de Texto

```html
<p class="text-sm">Texto pequeño</p>
<p class="text-base">Texto base</p>
<p class="text-lg">Texto grande</p>
<p class="text-xl">Texto extra grande</p>
```

## 📦 Clases de Utilidad Responsivas

### Contenedores

```html
<!-- Contenedor con padding responsivo -->
<div class="container">...</div>

<!-- Sección con padding responsivo -->
<section class="section">...</section>
```

### Grid Responsivos

```html
<!-- Grid automático que se adapta (auto-fit) -->
<div class="grid grid--auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 2 columnas en desktop, 1 en móvil -->
<div class="grid grid--2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 3 columnas en desktop, 2 en tablet, 1 en móvil -->
<div class="grid grid--3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 4 columnas en desktop, 2 en tablet, 1 en móvil -->
<div class="grid grid--4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### Espaciado Responsivo

```html
<!-- Gap responsivo entre items -->
<div class="flex gap-sm">...</div>
<div class="flex gap-md">...</div>
<div class="flex gap-lg">...</div>
<div class="flex gap-xl">...</div>

<!-- Padding responsivo -->
<div class="p-responsive">...</div>

<!-- Margin responsivo -->
<div class="m-responsive">...</div>
```

### Ocultar/Mostrar por Dispositivo

```html
<!-- Ocultar en móvil, mostrar en desktop -->
<div class="hide-mobile">Desktop only</div>

<!-- Mostrar solo en móvil -->
<div class="show-mobile">Mobile only</div>

<!-- Ocultar en tablet -->
<div class="hide-tablet">No tablet</div>
```

### Alineación de Texto

```html
<!-- Centro en móvil, alineado normal en desktop -->
<p class="text-center-mobile">Contenido</p>

<!-- Izquierda en desktop -->
<p class="text-left-desktop">Contenido</p>
```

## 🎨 Ejemplos Prácticos

### Componente Responsivo con Tipografía Fluida

```vue
<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Mi Portafolio</h1>
      <p class="subtitle">Desarrollo web moderno y responsivo</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

.subtitle {
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  color: var(--gray-400);
}
</style>
```

### Grid Responsivo

```vue
<template>
  <div class="grid grid--3">
    <div v-for="project in projects" :key="project.id" class="project-card">
      <img :src="project.image" alt="project" class="img-responsive" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  padding: var(--spacing-md);

  @include md-up {
    padding: var(--spacing-lg);
  }

  @include lg-up {
    padding: var(--spacing-xl);
  }
}
</style>
```

## 📐 Variables CSS Disponibles

```css
/* Espaciado */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;

/* Colores */
--dark-primary: #0a0c1b;
--accent-purple: #8b5cf6;
--white: #ffffff;

/* Sombras */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Transiciones */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

## ♿ Accesibilidad Responsiva

El proyecto incluye optimizaciones para:

### Movimiento Reducido

Usuarios que prefieren `prefers-reduced-motion: reduce` tendrán animaciones desactivadas automáticamente.

### Dispositivos Táctiles

- Botones y enlaces tienen un tamaño mínimo de 48px (recomendación de Apple)
- Sin `hover` efectos en dispositivos táctiles
- Tap highlight color removido

### Notches y Safe Areas

Soporta `env(safe-area-inset-*)` para dispositivos con notch:

```scss
@supports (padding: max(0px)) {
  body {
    padding-left: max(var(--spacing-md), env(safe-area-inset-left));
    padding-right: max(var(--spacing-md), env(safe-area-inset-right));
  }
}
```

## 📱 Pruebas Recomendadas

Prueba el sitio en estos dispositivos/tamaños:

- **XS**: iPhone 12 mini (375px)
- **SM**: iPhone 12/13 (390px)
- **MD**: iPhone 12 Plus (428px)
- **LG**: iPad (768px)
- **XL**: iPad Pro (1024px)
- **2XL**: Laptop (1280px)
- **3XL**: 4K Display (1536px+)

## 🛠️ Herramientas Útiles

### Chrome DevTools

1. Presiona `F12`
2. Click en icono de dispositivo (Ctrl+Shift+M)
3. Selecciona "Responsive" para pruebas personalizadas

### Pruebas en Vivo

El servidor de desarrollo se ejecuta en:

- Local: `http://localhost:5174/`
- Network: Accesible desde otros dispositivos en la red

## 📚 Referencias

- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Can I Use: clamp()](https://caniuse.com/css-math-functions)
- [Web.dev: Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
