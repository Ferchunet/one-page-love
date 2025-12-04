# 📂 Estructura del Proyecto - One Page Love

## 🎯 Organización Profesional

Este proyecto sigue las mejores prácticas de arquitectura React para aplicaciones escalables.

## 📁 Árbol de Directorios

```
one-page-love/
│
├── 📂 public/                      # Archivos estáticos públicos
│
├── 📂 src/
│   │
│   ├── 📂 assets/                  # Recursos multimedia
│   │   ├── 📂 icons/              # Iconos SVG/PNG
│   │   └── 📂 images/             # Imágenes del sitio
│   │
│   ├── 📂 components/              # Componentes React
│   │   │
│   │   ├── 📂 common/             # Componentes reutilizables
│   │   │   ├── WebsiteCard.jsx   # Tarjeta de website
│   │   │   └── SearchBar.jsx     # Barra de búsqueda
│   │   │
│   │   ├── 📂 layout/             # Componentes de estructura
│   │   │   └── Header.jsx        # Encabezado principal
│   │   │
│   │   ├── 📂 sections/           # Secciones de página
│   │   │   ├── HeroSection.jsx   # Sección hero
│   │   │   ├── FeaturedSection.jsx
│   │   │   └── InspirationGrid.jsx
│   │   │
│   │   └── index.js               # Barrel exports
│   │
│   ├── 📂 constants/               # Constantes globales
│   │   ├── colors.js              # Paleta de colores
│   │   └── index.js               # Exports centralizados
│   │
│   ├── 📂 data/                    # Datos estáticos/mock
│   │   ├── navigationLinks.js     # Links de navegación
│   │   └── websiteShowcase.js     # Datos de websites
│   │
│   ├── 📂 hooks/                   # Custom React Hooks
│   │   └── .gitkeep               # (Listo para usar)
│   │
│   ├── 📂 pages/                   # Páginas/Rutas
│   │   ├── Home.jsx               # Página principal
│   │   ├── Templates.jsx          # Página de templates
│   │   ├── Resources.jsx          # Página de recursos
│   │   ├── NotFound.jsx           # Página 404
│   │   └── index.js               # Barrel exports
│   │
│   ├── 📂 services/                # API y servicios externos
│   │   └── .gitkeep               # (Listo para usar)
│   │
│   ├── 📂 styles/                  # Estilos globales
│   │   └── globals.css            # CSS global + Tailwind
│   │
│   ├── 📂 utils/                   # Funciones auxiliares
│   │   ├── formatDate.js          # Utilidades de fecha
│   │   └── index.js               # Exports centralizados
│   │
│   ├── App.jsx                     # Componente raíz
│   └── main.jsx                    # Entry point
│
├── .gitignore                      # Archivos ignorados por Git
├── index.html                      # HTML base
├── package.json                    # Dependencies
├── postcss.config.js              # PostCSS config
├── tailwind.config.js             # Tailwind config
├── vite.config.js                 # Vite config
├── README.md                       # Documentación principal
└── STRUCTURE.md                    # Este archivo
```

## 🎨 Convenciones de Nomenclatura

### Archivos y Carpetas
- **Componentes**: `PascalCase.jsx` (ej: `WebsiteCard.jsx`)
- **Utilidades**: `camelCase.js` (ej: `formatDate.js`)
- **Constantes**: `camelCase.js` con exports en `UPPER_SNAKE_CASE`
- **Carpetas**: `lowercase` (ej: `components/`, `utils/`)

### Imports
```javascript
// ✅ Usando barrel exports
import { Header } from '@/components'
import { Home, NotFound } from '@/pages'

// ✅ Imports directos cuando sea necesario
import { COLORS } from '@/constants'
```

## 📦 Organización por Tipo

### 1. **Components** (`/components`)
Todos los componentes React organizados por función:
- **common**: Componentes pequeños y reutilizables
- **layout**: Estructura de página (Header, Footer, etc.)
- **sections**: Secciones grandes de página

### 2. **Pages** (`/pages`)
Componentes de nivel de ruta que representan páginas completas.

### 3. **Data** (`/data`)
Datos mock y estáticos. En producción se reemplazaría por llamadas a API.

### 4. **Constants** (`/constants`)
Valores constantes como colores, configuraciones, etc.

### 5. **Utils** (`/utils`)
Funciones auxiliares puras y reutilizables.

### 6. **Hooks** (`/hooks`)
Custom React Hooks para lógica reutilizable.

### 7. **Services** (`/services`)
Lógica de comunicación con APIs y servicios externos.

### 8. **Assets** (`/assets`)
Recursos multimedia (imágenes, iconos, fuentes).

### 9. **Styles** (`/styles`)
Estilos globales y configuración de Tailwind.

## 🚀 Beneficios de esta Estructura

✅ **Escalabilidad**: Fácil agregar nuevas funcionalidades
✅ **Mantenibilidad**: Código organizado y predecible
✅ **Colaboración**: Estructura clara para equipos
✅ **Testing**: Fácil de probar componentes aislados
✅ **Performance**: Code splitting y lazy loading simplificados
✅ **DX**: Mejor experiencia de desarrollo

## 📝 Próximos Pasos Sugeridos

1. Agregar tests en `__tests__/` paralelo a cada carpeta
2. Implementar lazy loading de páginas
3. Agregar más custom hooks reutilizables
4. Crear servicios para APIs reales
5. Implementar sistema de theming
6. Agregar Storybook para documentar componentes

## 🎯 Estándares de Código

- Usar **named exports** para componentes reutilizables
- Usar **default exports** para páginas y componentes únicos
- Incluir PropTypes o TypeScript para type safety
- Mantener componentes pequeños y con una sola responsabilidad
- Extraer lógica compleja a custom hooks
- Documentar componentes complejos con JSDoc

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2025

