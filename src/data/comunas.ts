export interface Comuna {
  slug: string;
  nombre: string;
}

/** Comunas principales de la Region Metropolitana para SEO local */
export const comunas: Comuna[] = [
  { slug: "santiago-centro", nombre: "Santiago Centro" },
  { slug: "providencia", nombre: "Providencia" },
  { slug: "las-condes", nombre: "Las Condes" },
  { slug: "vitacura", nombre: "Vitacura" },
  { slug: "lo-barnechea", nombre: "Lo Barnechea" },
  { slug: "nunoa", nombre: "Ñuñoa" },
  { slug: "la-reina", nombre: "La Reina" },
  { slug: "macul", nombre: "Macul" },
  { slug: "penalolen", nombre: "Peñalolén" },
  { slug: "la-florida", nombre: "La Florida" },
  { slug: "maipu", nombre: "Maipú" },
  { slug: "puente-alto", nombre: "Puente Alto" },
  { slug: "san-miguel", nombre: "San Miguel" },
  { slug: "estacion-central", nombre: "Estación Central" },
  { slug: "recoleta", nombre: "Recoleta" },
  { slug: "independencia", nombre: "Independencia" },
  { slug: "quilicura", nombre: "Quilicura" },
  { slug: "huechuraba", nombre: "Huechuraba" },
  { slug: "san-bernardo", nombre: "San Bernardo" },
  { slug: "la-cisterna", nombre: "La Cisterna" },
  { slug: "renca", nombre: "Renca" },
  { slug: "colina", nombre: "Colina" },
];

export function getComuna(slug: string): Comuna | undefined {
  return comunas.find((c) => c.slug === slug);
}
