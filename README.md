<div align="center">

# Gaba Pedreira · Reel de dirección de arte

**Idea, dirección creativa y desarrollo web por [Leonardo Pedreira](https://www.linkedin.com/in/leonardo-pedreira/)**

Un portfolio editorial para una directora de arte premiada en Cannes Lions, The One Show y The Clio Awards,
construido con IA aplicada: Cursor y un sistema de skills propias.

`IA aplicada` · `Cursor` · `Astro` · `TypeScript` · `MDX` · `CSS moderno` · `Sitio estático`

</div>

---

## Sobre el proyecto

Es un proyecto personal y sin fines de lucro. Nació con un objetivo simple: crear una web de punta a punta y probar nuevas tecnologías en un caso real.

El caso es Gaba Pedreira, directora de arte en Montevideo. Su trabajo vive en Behance, un archivo completo pero difícil de recorrer para alguien que tiene dos minutos. Este sitio hace lo contrario: **una edición, no un archivo**. Pocas piezas, contadas desde la idea, con el rol y los créditos a la vista.

El sitio queda como portfolio: el de Gaba como directora de arte y el mío como muestra de lo que puedo construir.

## La idea es mía

El concepto creativo nace completamente de mí. La IA no definió la idea: la ejecutó bajo mi dirección.

- **Papel y tinta.** La interfaz funciona como un impreso. El único color que aparece es el que trae cada caso: el rojo de una camiseta, la tinta de un diario, el fondo de una ilustración.
- **Una vida que camina.** En *Acerca*, Gaba recorre su propia historia de niña, joven y adulta, pasando por los lugares donde estudió y trabajó, hasta la directora de arte de hoy.
- **Un estudio sobre la mesa.** En la portada, sus ilustraciones aparecen como recortes sueltos que se pueden empujar, arrastrar o mover con el teclado.
- **Premios sin muro de logos.** Cada galardón es una insignia tipográfica propia, con laureles, distinción, festival, categoría y año.

## IA aplicada

Más que conocer las herramientas, el proyecto muestra cómo las apliqué para producir un resultado de calidad.

**Dirigir agentes como a un equipo.** Desarrollé el sitio en Cursor, trabajando con agentes de IA. Cada pedido pasó de una idea a un cambio concreto, con alcance acotado y revisión de mi parte antes de aceptarlo.

**Un sistema de skills propias.** Diseñé múltiples skills que le dan al agente el criterio del proyecto, para que cada sesión trabaje con las mismas reglas sin tener que repetirlas. Son privadas y no forman parte de este repositorio.

**Proceso antes que código.** El sitio arrancó con un proceso documentado y trabajado con IA: research de referentes, dirección creativa, especificación funcional y técnica, y una revisión go / no-go.

**Ilustración generativa con dirección de arte.** Los personajes del recorrido se generaron con IA a partir de un autorretrato ilustrado de Gaba como referencia de estilo y de fotos suyas como referencia de identidad. El mismo personaje se mantiene reconocible en cuatro edades, con correcciones dirigidas de pose y mirada. Los pasos de cada etapa se prepararon con un script propio. Los logos de las instituciones son los oficiales, sin generarlos ni redibujarlos.

**Controles que no dependen de la memoria del modelo.** Un chequeo automático valida la arquitectura, las rutas y las dependencias antes de cerrar cada cambio. Si falla, el cambio no está terminado.

**Criterio humano en el circuito.** La IA propone y yo decido. Cada cambio visible se revisa en el navegador, con teclado y en ancho de teléfono.

### Habilidades aplicadas

- Diseño de contexto e instrucciones reutilizables para agentes de IA.
- Orquestación de agentes en un flujo de desarrollo real.
- Generación de imágenes con IA preservando identidad y estilo.
- Dirección creativa y de arte sobre resultados generados.
- Revisión y control de calidad del código asistido por IA.
- Desarrollo front-end, accesibilidad y SEO técnico.

## Buenas prácticas

Revisadas en las 10 rutas del sitio, en escritorio y en ancho de teléfono.

- **Arquitectura:** sitio 100 % estático, límites escritos y verificados de forma automática, contenido en MDX validado con un schema tipado.
- **Código:** TypeScript estricto sin errores, build sin advertencias y sin librerías de UI ni de animación. Todo el JavaScript del sitio pesa unos 5 KB.
- **Accesibilidad:** navegación por teclado con foco visible, link para saltar al contenido, textos alternativos y un contraste de 9,9 a 1 que supera el nivel AAA. Con movimiento reducido, el sitio queda quieto y sigue completo.
- **SEO:** título y canónico únicos por página, Open Graph, sitemap y una imagen propia para compartir cada caso.
- **Rendimiento:** miniaturas responsive en WebP, videos que solo se descargan cuando alguien les da play y fuentes autoalojadas.
- **Privacidad:** sin formularios, sin analytics y sin cookies. Solo se guarda la preferencia de idioma.
- **Bilingüe sin librerías:** un selector ES / EN traduce la interfaz y las etiquetas accesibles, y recuerda la elección.

## Stack

| Capa | Elección |
| --- | --- |
| Entorno de desarrollo | Cursor, con agentes y skills propias |
| Framework | Astro 7, con salida estática |
| Contenido | Un archivo MDX por caso, validado con un schema |
| Estilos | CSS propio, con animaciones guiadas por el scroll |
| Tipografía | Anybody y Newsreader, autoalojadas |
| Lenguaje | TypeScript |

## Ver el proyecto en local

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

Requiere Node.js 22. El sitio queda en `http://localhost:4321`.

## Créditos

- **Idea, dirección creativa y desarrollo web:** Leonardo Pedreira.
- **Trabajo, campañas e ilustraciones originales:** Gaba Pedreira y los equipos acreditados en cada caso.

Las campañas y los logos de las instituciones pertenecen a sus respectivos titulares y se muestran con fines de portfolio. Las tipografías Anybody y Newsreader se distribuyen bajo la SIL Open Font License.

## Licencia

**© 2026 Leonardo Pedreira. Todos los derechos reservados.**

Este repositorio es público para mostrar el trabajo, no para reutilizarlo. No se autoriza copiar, modificar, distribuir ni usar su código o contenido sin permiso escrito. Ver [LICENSE](LICENSE).

---

<div align="center">

¿Te interesa el proyecto o querés trabajar juntos? Escribime por [LinkedIn](https://www.linkedin.com/in/leonardo-pedreira/).

</div>
