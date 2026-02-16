# 📁 Estructura del Proyecto - Portafolio Web

## Estructura Propuesta (Reorganizada)

```
Portafolio Web/
│
├── 📄 Archivos de Configuración (Raíz)
│   ├── index.html                    # Punto de entrada HTML
│   ├── package.json                  # Dependencias del proyecto
│   ├── tsconfig.json                 # Configuración TypeScript
│   ├── tsconfig.app.json             # TS para la aplicación
│   ├── tsconfig.node.json            # TS para herramientas
│   ├── tsconfig.vitest.json          # TS para pruebas
│   ├── vite.config.ts                # Configuración de Vite
│   ├── vitest.config.ts              # Configuración de pruebas
│   ├── eslint.config.ts              # Linting de código
│   ├── .prettierrc.json              # Formato de código
│   ├── .editorconfig                 # Configuración del editor
│   ├── .gitignore                    # Archivos ignorados por Git
│   ├── .gitattributes                # Atributos de Git
│   └── .oxlintrc.json                # Configuración de oxlint
│
├── 📄 Documentación
│   ├── README.md                     # Documentación principal
│   ├── RESPONSIVIDAD.md              # Guía de responsividad
│   └── CAMBIOS_RESPONSIVIDAD.md      # Cambios realizados
│
├── 📁 public/                        # Archivos estáticos
│   └── favicon.ico
│
├── 📁 src/                           # Código fuente principal
│   ├── main.ts                       # Punto de entrada
│   ├── App.vue                       # Componente raíz
│   ├── env.d.ts                      # Tipos de TypeScript
│   │
│   ├── 📁 assets/                    # Recursos (CSS, SCSS, imágenes)
│   │   ├── 📁 scss/                  # Estilos SCSS
│   │   │   ├── main.scss             # Archivo principal de estilos
│   │   │   ├── 📁 config/            # Configuración global
│   │   │   │   └── _responsive-config.scss
│   │   │   ├── 📁 abstracts/         # Variables, mixins, funciones
│   │   │   │   ├── _variables.scss
│   │   │   │   └── _mixins.scss
│   │   │   ├── 📁 base/              # Estilos base y reset
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _typography.scss
│   │   │   ├── 📁 utilities/         # Clases de utilidad
│   │   │   │   └── _responsive.scss
│   │   │   └── 📁 components/        # Estilos de componentes
│   │   │       ├── _navbar.scss
│   │   │       ├── _hero.scss
│   │   │       ├── _about.scss
│   │   │       ├── _skills.scss
│   │   │       ├── _services.scss
│   │   │       ├── _projects.scss
│   │   │       ├── _contact.scss
│   │   │       └── _footer.scss
│   │   ├── 📁 images/                # Imágenes del proyecto
│   │   ├── logo.svg                  # Logo
│   │   └── favicon.ico
│   │
│   ├── 📁 components/                # Componentes Vue reutilizables
│   │   ├── 📁 layout/                # Componentes de layout
│   │   │   ├── TheNavBar.vue
│   │   │   └── TheFooter.vue
│   │   ├── 📁 sections/              # Secciones principales
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── SkillsSection.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── 📁 common/                # Componentes comunes
│   │   │   └── (Botones, Cards, etc)
│   │   ├── 📁 icons/                 # Componentes de iconos
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   └── IconTooling.vue
│   │   └── 📁 __tests__/             # Pruebas de componentes
│   │
│   ├── 📁 views/                     # Páginas/Vistas (Vue Router)
│   │   └── HomeView.vue
│   │
│   ├── 📁 router/                    # Configuración de rutas
│   │   └── index.ts
│   │
│   ├── 📁 stores/                    # Estado global (Pinia)
│   │   ├── counter.ts
│   │   └── theme.ts
│   │
│   └── 📁 composables/               # Composables de Vue 3
│       └── useIntersectionObserver.ts
│
├── 📁 .vscode/                       # Configuración VS Code
│   └── (extensiones, snippets, etc)
│
├── 📁 dist/                          # Build de producción (generado)
│
└── 📁 node_modules/                  # Dependencias (generado)
```

## 📊 Resumen de Carpetas

| Carpeta            | Propósito                         |
| ------------------ | --------------------------------- |
| `src/`             | Código fuente principal           |
| `src/components/`  | Componentes Vue reutilizables     |
| `src/views/`       | Páginas completas                 |
| `src/assets/`      | Recursos (CSS, imágenes, fuentes) |
| `src/router/`      | Configuración de rutas            |
| `src/stores/`      | Estado global (Pinia)             |
| `src/composables/` | Lógica reutilizable               |
| `public/`          | Archivos estáticos públicos       |
| `dist/`            | Build de producción               |

## 🗂️ Estructura SCSS (Detallada)

Seguimos la metodología **7-1** mejorada:

```
src/assets/scss/
├── main.scss                 # Archivo de entrada (importa todo)
│
├── config/
│   └── _responsive-config.scss       # Variables CSS, media queries
│
├── abstracts/
│   ├── _variables.scss       # Variables SCSS y CSS
│   └── _mixins.scss          # Mixins y funciones SCSS
│
├── base/
│   ├── _reset.scss           # Reset CSS global
│   └── _typography.scss      # Tipografía base
│
├── utilities/
│   └── _responsive.scss      # Clases de utilidad responsivas
│
└── components/
    ├── _navbar.scss          # Estilos de navbar
    ├── _hero.scss            # Estilos de hero
    ├── _about.scss           # Estilos de about
    ├── _skills.scss          # Estilos de skills
    ├── _services.scss        # Estilos de services
    ├── _projects.scss        # Estilos de projects
    ├── _contact.scss         # Estilos de contact
    └── _footer.scss          # Estilos de footer
```

## 🎯 Ventajas de Esta Estructura

✅ **Clara y Escalable** - Fácil agregar nuevos componentes
✅ **Separación de Responsabilidades** - Cada carpeta tiene un propósito
✅ **Fácil Mantenimiento** - Código organizado y modular
✅ **Reutilizable** - Componentes independientes
✅ **Profesional** - Sigue estándares de la industria
✅ **Responsive** - Todo optimizado para todos los dispositivos

## 📝 Convenciones de Nombres

### Archivos Vue

- `PascalCase` para nombres de componentes: `HeroSection.vue`, `TheNavBar.vue`
- `Lowercase` para nombres de vistas: `homeView.vue`

### Archivos SCSS

- Usa `_prefix` para archivos parciales
- `kebab-case` para nombres: `_responsive-config.scss`

### Archivos TypeScript

- `camelCase` para funciones: `useIntersectionObserver.ts`
- `PascalCase` para clases
- `SCREAMING_SNAKE_CASE` para constantes

## 🚀 Próximos Pasos

1. ✅ Estructura organizacional implementada
2. ⏳ Agregar guías de contribución (CONTRIBUTING.md)
3. ⏳ Agregar guía de desarrollo (DEVELOPMENT.md)
4. ⏳ Implementar naming conventions
5. ⏳ Agregar pruebas unitarias

---

**Estructura documentada y lista para producción** 📦
