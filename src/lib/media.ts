// Base para servir media (videos) desde un CDN externo.
//
// Si PUBLIC_MEDIA_URL está definida (ej. el bucket R2), los assets se
// sirven desde ahí. Si no, caen a rutas locales de /public — así el
// sitio sigue funcionando en desarrollo sin depender del CDN.
const BASE = (import.meta.env.PUBLIC_MEDIA_URL ?? "").replace(/\/+$/, "");

/** URL de un asset de media. `ruta` va sin barra inicial, ej "video/hero.mp4" */
export const media = (ruta: string) =>
  BASE ? `${BASE}/masdechile/${ruta}` : `/${ruta}`;
