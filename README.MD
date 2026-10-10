# Landing de Paola Díaz — Clases particulares de Química

Sitio estático (HTML + CSS + JS), sin instalación ni base de datos.

## Estructura
```
index.html        Estructura y textos fijos (Sobre mí, Método, Preguntas)
css/styles.css    Estilos. Colores y fuentes: variables al inicio (:root)
js/config.js      DATOS EDITABLES: WhatsApp, precios, materias, zona, testimonios
js/main.js        Lógica (no hace falta tocarla)
assets/           paola.jpg y og-image.jpg
robots.txt, sitemap.xml   SEO
CHANGELOG.md      Historial de cambios
```

## 1. Personalizar (checklist)
1. **WhatsApp**: en `js/config.js`, `whatsapp: "5493811234567"` (54 + 9 + código de área sin 0 + número sin 15). Mientras tenga el número de ejemplo, los botones llevan al formulario.
2. **Correo** (opcional): completá `email`. Para recibir consultas sin abrir el correo del visitante, creá un formulario en formspree.io y pegá su URL en `formEndpoint`.
3. **Foto**: guardá `assets/paola.jpg` (vertical, ~800×1000, menos de 300 KB). Si no existe, se muestra el elemento «Pd».
4. **Precios**: en `servicios`, completá `precio` (ej. `"$ 15.000"`) y `detalle` (ej. `"por clase de 60 min"`). Vacío = «Consultar». Textos extra en `notaPrecios`.
5. **Materias, niveles y modalidades**: ajustalos a lo que Paola realmente dicta; borrá lo que no ofrezca.
6. **Zona presencial**: completá `zona.ciudad`, `zonas` y, opcionalmente, `mapaUrl`.
7. **Testimonios**: agregá solo opiniones reales y con permiso, con `autorizado: true`. Sin testimonios, la sección y su link de menú no se muestran.
8. **Preguntas frecuentes y textos fijos**: se editan directo en `index.html` (buscá `<details>`).
9. **Dominio**: buscá `TU-DOMINIO.com` en `index.html`, `robots.txt` y `sitemap.xml` y reemplazalo por el real.
10. **Imagen para compartir**: `assets/og-image.jpg` (1200×630).

Para ver qué falta, abrí el sitio, apretá F12 y mirá la consola: lista los pendientes de `config.js`.

## 2. Probar en tu computadora
Abrí `index.html` con doble clic. Probá en celular (o con F12 → modo dispositivo): menú, formulario y botón de WhatsApp.

## 3. Publicar
- **Netlify Drop** (más simple): entrá a app.netlify.com/drop y arrastrá la carpeta.
- **GitHub Pages**: subí la carpeta a un repositorio y activá Pages en Settings.
- **Hosting tradicional**: subí todo por FTP a `public_html`.
Luego conectá tu dominio desde el panel del servicio.

## 4. Después de publicar (SEO)
- Verificá el sitio en Google Search Console y enviá `sitemap.xml`.
- Creá el perfil de Google Business Profile si atiende en forma presencial.
- Usá el mismo nombre, zona y teléfono en redes e instagram.
- Revisá con PageSpeed Insights y comprimí las imágenes si es necesario.

## 5. Mantenimiento y mejoras futuras
- Guardá una copia (o usá Git) antes de cada cambio y anotá lo hecho en `CHANGELOG.md`.
- Para sumar un servicio o materia: copiá un bloque en `config.js`; no hace falta tocar el HTML.
- Para cambiar colores: variables en `:root` de `css/styles.css`.
- Ideas: agenda online (Calendly), blog con apuntes, descarga de guías gratuitas, estadísticas (Plausible o Google Analytics, con aviso de cookies si corresponde).
- Importante: no publicar testimonios inventados ni sin autorización.
