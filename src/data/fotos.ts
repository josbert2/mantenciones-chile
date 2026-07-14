/**
 * Fotos auto-hospedadas en /public/fotos (WebP, 800w y 1600w).
 *
 * OJO: son fotos de stock genéricas. Varias NO representan bien el servicio
 * (ver comentarios abajo). Reemplazar por fotos reales de Más de Chile en
 * cuanto estén disponibles: basta con sobrescribir el archivo en /public/fotos
 * manteniendo el nombre.
 */
export type Foto =
  | "gasfiteria-llave"
  | "gasfiteria-caneria"
  | "carpinteria-atornillado"
  | "electricidad-enchufe"
  | "limpieza-piso"
  | "instalacion-repisa"
  | "reparacion-taladro"
  | "instalacion-montaje"
  | "terreno-cuadrilla";

/** Devuelve la ruta de la foto en el ancho pedido. */
export const foto = (nombre: string, ancho: 800 | 1600 = 800): string =>
  `/fotos/${nombre}-${ancho}.webp`;
