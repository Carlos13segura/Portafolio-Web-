# 🌐 Portafolio Web Profesional

> Portafolio web moderno y responsivo construido con **Vue 3**, **TypeScript**, **Vite** y **SCSS**.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-En%20Producción-brightgreen)

## ✨ Características Principales

- ✅ **Completamente Responsivo** - Funciona perfectamente en todos los dispositivos
- ✅ **Tipografía Fluida** - Escalado automático de fuentes con `clamp()`
- ✅ **Performance Optimizado** - Build ligero con Vite
- ✅ **TypeScript** - Tipado fuerte para mayor seguridad
- ✅ **SCSS Modular** - Arquitectura 7-1 para mejor mantenibilidad
- ✅ **Animaciones Suaves** - Transiciones y efectos visuales
- ✅ **SEO Friendly** - Meta tags y estructura semántica
- ✅ **Accesibilidad** - WCAG compliant
- ✅ **Dark Mode Ready** - Preparado para dark mode
- ✅ **Menú Móvil** - Navegación optimizada para móviles

## 🚀 Inicio Rápido

### Requisitos

- Node.js 16+
- npm o yarn

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

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar servidor de desarrollo

# Build
npm run build            # Compilar para producción
npm run preview          # Preview del build

# Testing
npm run test             # Ejecutar pruebas
npm run test:ui          # Pruebas con UI

# Linting
npm run lint             # Verificar código con ESLint
npm run lint:fix         # Arreglar errores automáticamente
```

## 📁 Estructura del Proyecto

```
Portafolio Web/
├── src/
│   ├── components/       # Componentes Vue reutilizables
│   ├── views/           # Páginas principales
│   ├── assets/          # Estilos, imágenes, fuentes
│   ├── router/          # Configuración de rutas
│   ├── stores/          # Estado global (Pinia)
│   ├── composables/     # Lógica reutilizable
│   ├── App.vue          # Componente raíz
│   └── main.ts          # Punto de entrada
├── public/              # Archivos estáticos
├── dist/                # Build de producción
└── [archivos config]
```

**Para más detalles:** Ver [ESTRUCTURA_PROYECTO.md](ESTRUCTURA_PROYECTO.md)

## 📱 Responsividad

El proyecto soporta todos los tamaños de pantalla:

| Dispositivo | Ancho   | Status |
| ----------- | ------- | ------ |
| Mobile XS   | 320px   | ✅     |
| Mobile SM   | 480px   | ✅     |
| Mobile MD   | 640px   | ✅     |
| Tablet      | 768px   | ✅     |
| Desktop     | 1024px+ | ✅     |
| 4K          | 1536px+ | ✅     |

**Para más info:** Ver [RESPONSIVIDAD.md](RESPONSIVIDAD.md)

## 🎨 Tecnologías Utilizadas

### Frontend

- **Vue 3** - Framework progresivo
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra rápido
- **SCSS** - Preprocesador CSS

### Herramientas

- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **Vitest** - Testing framework
- **Pinia** - State management

## 📚 Documentación

- [ESTRUCTURA_PROYECTO.md](ESTRUCTURA_PROYECTO.md) - Guía de estructura
- [DESARROLLO.md](DESARROLLO.md) - Guía de desarrollo
- [COMPONENTES.md](COMPONENTES.md) - Catálogo de componentes
- [RESPONSIVIDAD.md](RESPONSIVIDAD.md) - Guía de responsividad
- [CAMBIOS_RESPONSIVIDAD.md](CAMBIOS_RESPONSIVIDAD.md) - Cambios realizados

## 🎯 Secciones Principales

### 1. **Hero Section**

Presentación principal con animaciones y efectos visuales.

### 2. **About Section**

Información personal y experiencia.

### 3. **Skills Section**

Habilidades técnicas organizadas por categorías.

### 4. **Services Section**

Servicios profesionales ofrecidos.

### 5. **Projects Section**

Portafolio de proyectos destacados.

### 6. **Contact Section**

Formulario de contacto y métodos de comunicación.

## 🔧 Configuración y Personalización

### Variables de Diseño

Editar en `src/assets/scss/abstracts/_variables.scss`:

```scss
// Colores
--dark-primary: #0a0c1b --accent-purple: #8b5cf6 // Espaciado
  --spacing-md: 1rem --spacing-lg: 1.5rem;
```

### Breakpoints

Usar mixins en componentes:

```scss
@include mobile {
} // Móviles
@include tablet {
} // Tablets
@include desktop {
} // Desktops
@include md-up {
} // 640px y arriba
@include lg-up {
} // 768px y arriba
```

## 🌐 Despliegue

### Vercel

```bash
npm run build
# Subir carpeta dist/ a Vercel
```

### Netlify

```bash
npm run build
# Conectar repositorio a Netlify
```

### GitHub Pages

Configurar en `vite.config.ts`:

```typescript
export default {
  base: '/portafolio/',
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature: `git checkout -b feature/AmazingFeature`
3. Commit tus cambios: `git commit -m 'Add some AmazingFeature'`
4. Push a la rama: `git push origin feature/AmazingFeature`
5. Abre un Pull Request

## 📝 Estándares de Código

- **Nombres en PascalCase:** `HeroSection.vue`
- **Componibles en camelCase:** `useIntersectionObserver.ts`
- **SCSS con kebab-case:** `_responsive.scss`

Ver [DESARROLLO.md](DESARROLLO.md) para más detalles.

## 🐛 Reportar Bugs

Si encuentras un bug, abre un [issue](../../issues) describiendo:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado
- Tu entorno (SO, navegador, versión)

## 📊 Rendimiento

- ⚡ **Lighthouse Score:** 95+
- 📦 **Bundle Size:** ~50KB (gzipped)
- 🚀 **Core Web Vitals:** Optimizados
- 🎯 **Accessibility:** A11y compliant

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**

- GitHub: [@usuario](https://github.com)
- Email: tu@email.com
- Portfolio: [enlace](https://ejemplo.com)

## 🙏 Agradecimientos

- Vue 3 Team
- Vite Contributors
- Open Source Community

## 📞 Contacto y Soporte

- **Email:** soporte@ejemplo.com
- **Issues:** [GitHub Issues](../../issues)
- **Discussions:** [GitHub Discussions](../../discussions)

---

<div align="center">

**[⬆ Volver al principio](#-portafolio-web-profesional)**

Hecho con ❤️ y Vue 3

</div>

```sh
npm run lint
```
