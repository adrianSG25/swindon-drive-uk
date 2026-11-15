# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5, CSS3, Vanilla ES Modules (PWA ready for GitHub Pages)

## Users

Candidata hispanohablante en Reino Unido con el examen teórico (Theory Test) ya aprobado que se prepara para el examen práctico de conducir de la DVSA en el **Swindon Driving Test Centre (1 Fenn Close, Peatmoor, Swindon, SN5 5BL)** desde el teléfono móvil.

## Product Purpose

Proporcionar una guía móvil bilingüe (inglés y español) rápida y práctica para estudiar y practicar en carretera las rutas reales más habituales del examen práctico en Swindon, anticipar sus puntos negros ("pilladas" de examinadores y rotondas en espiral), consultar vídeos reales de instructores en YouTube y abrir cada ruta paso a paso directamente en Google Maps.

## Positioning

A diferencia de aplicaciones genéricas de UK test routes de pago o blogs solo en inglés con listas estáticas, esta PWA ofrece una experiencia mobile-native pensada específicamente para el contexto de Swindon: terminología exacta del examinador DVSA en inglés acompañada de su explicación práctica en español, enlaces directos a Google Maps con waypoints verificados y vídeos reales de recorridos locales.

## Operating Context

- Uso principal en **teléfono móvil** (en casa repasando vídeos/tips o dentro del coche en modo pasajero/parado antes de empezar una práctica).
- Preparación centrada exclusivamente en el **Practical Driving Test** (el Theory Test ya está superado).
- Alojamiento estático sin backend en **GitHub Pages**, instalable como PWA en pantalla de inicio (iOS Safari / Android Chrome).

## Capabilities and Constraints

- Selector bilingüe instantáneo: **EN + ES** simultáneo (por defecto), solo **EN** o solo **ES**.
- 6 rutas completas alrededor de Swindon con salida y llegada en `1 Fenn Close, SN5 5BL`, botón directo a **Google Maps Directions** y checklist local de rutas practicadas guardado en `localStorage`.
- 8 puntos negros (*hotspots*) con ubicación en Google Maps, diagramas vectoriales tácticos (espirales y *Magic Roundabout*) y pilladas reales de suspenso directo (*serious faults*) vs faltas leves (*minor faults*).
- Galería con los 9 vídeos reales verificados de rutas en Swindon con reproducción *click-to-play* bajo demanda (`youtube-nocookie.com`) y enlace directo a la app de YouTube y su ruta en Google Maps.
- Kit práctico post-teórico: frases exactas del examinador en Swindon, preguntas oficiales *Show Me / Tell Me* y guía de las 4 maniobras DVSA + conducción independiente con Sat-Nav TomTom.
- Sin dependencias de compilación ni secretos en cliente.

## Evidence on Hand

- Dirección verificada del centro DVSA: `1 Fenn Close, Peatmoor, Swindon, Wiltshire, SN5 5BL`.
- 9 vídeos de YouTube verificados mediante `oEmbed` (Elvis Kyei, Swindon Driving Lessons, ShimranTravel) cubriendo The Meads, Mannington, Bruce Street Bridges, Nine Elms, Purton y Magic Roundabout.
- Waypoints reales de carreteras de Swindon validados para URLs universales de Google Maps.

## Product Principles

1. **Legibilidad inmediata bajo luz de coche o noche**: contraste alto, tipografía clara y modo oscuro seleccionable.
2. **Inglés del examinador + claridad en español**: nunca traducir señales o comandos oficiales sin mostrar la frase inglesa original que se oirá el día del examen.
3. **Cero fricción móvil**: un toque para abrir Google Maps, un toque para cargar vídeo bajo demanda, sin menús profundos ni modales bloqueantes.
4. **Honestidad de datos**: la DVSA no publica rutas fijas oficiales; la app deja claro que las rutas modelan patrones reales recurrentes de examinadores locales.
