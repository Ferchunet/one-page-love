# 🚀 Guía de Despliegue a GitHub Pages

## 📋 Pasos para Subir el Proyecto

### 1. Inicializar Git (si no lo has hecho)

```bash
git init
git add .
git commit -m "Initial commit: One Page Love clone"
```

### 2. Conectar con GitHub

```bash
git remote add origin https://github.com/Ferchunet/one-page-love.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio: https://github.com/Ferchunet/one-page-love
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona: **GitHub Actions**
5. ¡Listo! El workflow se ejecutará automáticamente

### 4. Ver tu Sitio

Una vez que el workflow termine (tarda 1-2 minutos):

🌐 **Tu sitio estará disponible en:**
```
https://ferchunet.github.io/one-page-love/
```

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios y los subas:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

El sitio se actualizará automáticamente en 1-2 minutos.

## ✅ Verificación

Después del primer push:

1. Ve a la pestaña **Actions** en GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando aparezca el check verde ✅, tu sitio está listo
4. Click en el link del deployment para verlo

## 🛠️ Comandos Útiles

### Desarrollo Local
```bash
npm run dev
```
Abre: http://localhost:5173

### Build Local (para probar)
```bash
npm run build
npm run preview
```

### Ver el Build
```bash
npm run build
```
Los archivos se generan en `/dist`

## 📱 Compartir con el Reclutador

Envíale este link:
```
https://ferchunet.github.io/one-page-love/
```

También puedes compartir el repositorio:
```
https://github.com/Ferchunet/one-page-love
```

## 🎯 Checklist Final

- [ ] Código subido a GitHub
- [ ] GitHub Pages configurado en Settings
- [ ] Workflow ejecutado exitosamente
- [ ] Sitio accesible en la URL
- [ ] Probado en móvil y desktop
- [ ] Todos los links funcionan
- [ ] Imágenes se cargan correctamente

## 💡 Tips

1. **Primera vez puede tardar más**: El primer deployment tarda 2-3 minutos
2. **Caché del navegador**: Si no ves cambios, presiona Ctrl+Shift+R
3. **Ver logs**: En Actions > Click en el workflow > Ver detalles
4. **Errores**: Si falla, revisa los logs en la pestaña Actions

## 🎨 Personalización

Si quieres cambiar la URL base, edita `vite.config.js`:

```javascript
export default defineConfig({
  base: '/nombre-de-tu-repo/',
  // ...
})
```

---

**¡Éxito con tu prueba técnica!** 🚀

