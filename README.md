# One Page Love - React + Tailwind CSS

Clon profesional de One Page Love construido con React, Vite y Tailwind CSS.

## 📁 Estructura del Proyecto

```
one-page-love/
├── public/                  # Archivos públicos estáticos
├── src/
│   ├── assets/             # Recursos estáticos
│   │   ├── images/         # Imágenes
│   │   └── icons/          # Iconos
│   ├── components/         # Componentes React
│   │   ├── common/         # Componentes reutilizables
│   │   │   ├── WebsiteCard.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── layout/         # Componentes de layout
│   │   │   └── Header.jsx
│   │   └── sections/       # Secciones de página
│   │       ├── HeroSection.jsx
│   │       ├── FeaturedSection.jsx
│   │       └── InspirationGrid.jsx
│   ├── constants/          # Constantes de la aplicación
│   │   ├── colors.js
│   │   └── index.js
│   ├── data/               # Datos estáticos
│   │   ├── navigationLinks.js
│   │   └── websiteShowcase.js
│   ├── hooks/              # Custom React Hooks
│   ├── pages/              # Páginas/Vistas
│   │   ├── Home.jsx
│   │   ├── Templates.jsx
│   │   ├── Resources.jsx
│   │   └── NotFound.jsx
│   ├── services/           # Servicios y API calls
│   ├── styles/             # Estilos globales
│   │   └── globals.css
│   ├── utils/              # Funciones auxiliares
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Instalación

```bash
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build

```bash
npm run build
```

## 📦 Preview Build

```bash
npm run preview
```

## 🎨 Características

- ✅ Diseño responsivo y moderno
- ✅ Componentes reutilizables y bien organizados
- ✅ Estructura de carpetas profesional y escalable
- ✅ Tailwind CSS para estilos
- ✅ React Router para navegación
- ✅ Página 404 personalizada
- ✅ Código limpio y mantenible
- ✅ Efecto de superposición en cards
- ✅ Paleta de colores consistente

## 🛠️ Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Routing
- **PostCSS** - Procesamiento de CSS

## 📝 Convenciones de Código

- Componentes en PascalCase
- Archivos de utilidades en camelCase
- Constantes en UPPER_SNAKE_CASE
- Carpetas en lowercase

## 🎯 Próximas Mejoras

- [ ] Agregar tests unitarios
- [ ] Implementar lazy loading de imágenes
- [ ] Agregar animaciones con Framer Motion
- [ ] Integrar CMS para contenido dinámico
- [ ] Agregar SEO metadata
- [ ] Implementar PWA

## 📄 Licencia

MIT
