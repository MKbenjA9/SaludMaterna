# Idioma del Cuidado

Prototipo intercultural de salud materna en Chile, basado en el HTML original facilitado por su autor. Incluye portada, perfiles gestante y profesional, diez países seleccionables, seis fichas del catálogo original, diccionario, información de la red de salud y proyección de fotografías de apoyo.

## Desarrollo

Requiere Node.js 18 o posterior.

```sh
npm ci
npm run build
npm start
```

Abrir http://127.0.0.1:4173. Los estilos compilados y las fotografías se incluyen en el repositorio. Tipografías e iconos se cargan desde Google Fonts y cdnjs.

## GitHub Pages

Publicar desde la rama `main`, carpeta raíz `/`. No requiere un servidor de aplicaciones ni un build en GitHub. Tras modificar clases de Tailwind, ejecutar `npm run build` y guardar también `assets/styles.css`.

## Alcance

Se conserva el contenido del prototipo entregado; no constituye una validación clínica o lingüística. Los países sin fichas muestran un estado vacío. Las imágenes son fotografías de Unsplash utilizadas en el original, no ilustraciones clínicas específicas. Antes de utilizar la herramienta en atención real se requiere revisión de sus contenidos por profesionales y mediadores interculturales.
