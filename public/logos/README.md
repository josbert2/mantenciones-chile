# Logos de clientes

Dejá acá los logos de la cartera de clientes. El componente `Clientes.astro`
los detecta automáticamente al hacer build: si el archivo existe muestra el
logo, si no existe cae al nombre en texto (sin romper nada).

## Formato

- **SVG** (ideal, escala perfecto) → también acepta `.png` o `.webp`
- Fondo transparente
- Preferentemente en **una sola tinta** (negro o gris): el ticker les aplica
  escala de grises y opacidad, y los pasa a color al hacer hover
- Alto útil: ~44px (el slot es de 180×44, con `object-fit: contain`)

## Nombres de archivo esperados

| Cliente       | Archivo              |
| ------------- | -------------------- |
| Jumbo         | `jumbo.svg`          |
| Unimarc       | `unimarc.svg`        |
| Santa Isabel  | `santa-isabel.svg`   |
| Alvi          | `alvi.svg`           |
| Mayorista 10  | `mayorista-10.svg`   |
| Cencosud      | `cencosud.svg`       |
| KFC           | `kfc.svg`            |
| Wendy's       | `wendys.svg`         |
| China Wok     | `china-wok.svg`      |
| Tarragona     | `tarragona.svg`      |
| Spid          | `spid.svg`           |

## Ojo

Son marcas de terceros. Confirmá con el cliente que tiene autorización para
mostrarlas en el sitio (es habitual entre proveedor y cliente, pero conviene
tenerlo por escrito).
