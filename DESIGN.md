# Design System — Swindon Drive Pass UK

## Mode & Aesthetic Direction

- **Mode**: `Operate` (herramienta táctica de consulta en movimiento y estudio rápido en móvil).
- **World**: **UK DVSA & Highway Code Tactical Companion**. Inspirado en la señalización vial británica de Margaret Calvert (precisión tipográfica, códigos de color reglamentarios del Reino Unido, legibilidad instantánea a golpe de vista).

## Color Palette

### Light Mode (Default — visibilidad diurna dentro del coche)
- `--bg-canvas`: `#F4F5F0` (papel cartográfico cálido mate)
- `--bg-surface`: `#FFFFFF` (superficie de tarjetas y paneles)
- `--bg-subtle`: `#EAECE4` (superficie secundaria para controles y bloques de código/citas)
- `--text-primary`: `#111820`
- `--text-secondary`: `#3D4852`
- `--uk-blue`: `#005EA5` (azul autopista UK / acciones principales y pestaña activa)
- `--uk-green`: `#006837` (verde carretera primaria UK / rutas completadas y confirmaciones)
- `--uk-red`: `#C81E1E` (rojo señal reglamentaria / *Serious Fault* y señal STOP)
- `--uk-amber`: `#B45309` (ámbar precaución / advertencias de carril y *Minor Fault*)
- `--border-color`: `#D5D9CE`

### Dark Mode (Prácticas de tarde/noche en UK)
- `--bg-canvas`: `#0D1218`
- `--bg-surface`: `#151D26`
- `--bg-subtle`: `#1E2936`
- `--text-primary`: `#F1F5F8`
- `--text-secondary`: `#A3B3C2`
- `--uk-blue`: `#3898EC`
- `--uk-green`: `#10B981`
- `--uk-red`: `#F05252`
- `--uk-amber`: `#F59E0B`
- `--border-color`: `#283545`

## Typography

- **UI & Prose**: `'Albert Sans'`, `system-ui, -apple-system, sans-serif` (escala fija en `rem`, medida cómoda para lectura móvil).
- **Data, Postcodes, Speed Limits & Distances**: `'JetBrains Mono'`, `ui-monospace, monospace` con `font-variant-numeric: tabular-nums`.

## Component & Craft Rules

- **Elevation**: declarada una única vez por elemento mediante borde nítido (`1px solid var(--border-color)`), `border-radius: 14px` en tarjetas y `999px` en chips/píldoras de control; prohibido combinar borde de `1px` con sombra difusa (*ghost card*) o bordes laterales gruesos coloreados (`border-left` > 1px).
- **No eyebrows / no emojis as UI icons**: los encabezados llevan el peso por sí mismos sin etiquetas ALL-CAPS encima; toda la iconografía usa SVG lineales consistentes (`stroke-width="2"`).
- **Signature Moves**:
  1. Señales circulares británicas de límite de velocidad (`20`, `30`, `40`, `50`, `60`, `70`) y señal octogonal `STOP` renderizadas fielmente con las proporciones del *Highway Code*.
  2. Diagramas vectoriales interactivos de rotondas en espiral (*The Meads / Mannington / Bruce Street*) y esquema de doble anillo de *The Magic Roundabout*.
- **Mobile-Native Baseline**: `100dvh`, `viewport-fit=cover`, `env(safe-area-inset-*)`, `-webkit-tap-highlight-color: transparent`, `overscroll-behavior: none`, `font-size: 16px` en inputs y `:hover` encapsulado en `@media (hover: hover) and (pointer: fine)`.
