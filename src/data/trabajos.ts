// Trabajos reales ejecutados por Más de Chile.
// Fotografías propias tomadas en terreno (no stock).
// Las carpetas de origen venían mal rotuladas: la clasificación de acá
// se hizo revisando las fotos una por una.

export type Trabajo = {
  slug: string;
  titulo: string;
  categoria: string;
  /** Slug del servicio de /servicios/[slug] al que pertenece */
  servicio: string;
  desc: string;
  /** Cantidad de fotos disponibles en /public/trabajos/<slug>/ */
  fotos: number;
  /** Foto que se usa como portada (1-indexed) */
  portada?: number;
};

export const trabajos: Trabajo[] = [
  {
    slug: "camion-hidrojet",
    titulo: "Camión hidrojet 4.500 litros",
    categoria: "Hidrojet y destapes",
    servicio: "hidrojet-destapes",
    desc: "Equipo propio de 4.500 litros para retiro de aguas grasas, con sistema hidrojet de 500 litros de agua limpia y manguera de más de 50 metros. Entregamos certificados de disposición final.",
    fotos: 11,
  },
  {
    slug: "destape-tuberias",
    titulo: "Destape de tuberías con acumulación de grasas",
    categoria: "Hidrojet y destapes",
    servicio: "hidrojet-destapes",
    desc: "Limpieza de redes de descarga saturadas por grasas en cocinas industriales. Recuperamos el diámetro útil de la cañería sin romper obra.",
    fotos: 16,
  },
  {
    slug: "urinarios",
    titulo: "Mantención y destape de urinarios",
    categoria: "Hidrojet y destapes",
    servicio: "hidrojet-destapes",
    desc: "Destape y sanitización de baterías de urinarios en baños de alto tránsito, dejando la batería operativa el mismo día.",
    fotos: 3,
    portada: 2,
  },
  {
    slug: "lavaderos-industriales",
    titulo: "Instalación de lavaderos industriales",
    categoria: "Gasfitería",
    servicio: "gasfiteria",
    desc: "Instalación de lavaderos de acero inoxidable en cocinas comerciales: alimentación, desagüe, flexibles y grifería, cumpliendo normativa sanitaria.",
    fotos: 19,
    portada: 5,
  },
  {
    slug: "griferia",
    titulo: "Cambio de cartuchos y grifería",
    categoria: "Gasfitería",
    servicio: "gasfiteria",
    desc: "Reemplazo de cartuchos, llaves de paso y flexibles para eliminar filtraciones y recuperar presión en la red.",
    fotos: 3,
  },
  {
    slug: "termos-electricos",
    titulo: "Mantención de termos eléctricos",
    categoria: "Gasfitería",
    servicio: "termos-electricos",
    desc: "Desarme, limpieza de estanque, cambio de resistencias calcificadas y verificación de termostato con instrumento. Devuelve el agua caliente y baja el consumo.",
    fotos: 6,
  },
  {
    slug: "luminosos-corporativos",
    titulo: "Mantención de luminosos corporativos",
    categoria: "Electricidad",
    servicio: "luminosos-corporativos",
    desc: "Recambio y reparación de letreros luminosos de marca en locales de comida rápida, ejecutado con alza-hombre fuera del horario de atención.",
    fotos: 6,
  },
  {
    slug: "trabajos-altura",
    titulo: "Trabajos en altura con alza-hombre",
    categoria: "Electricidad",
    servicio: "emergencias-24-7",
    desc: "Intervenciones sobre ductos, tuberías y cielos a más de 6 metros, con plataforma elevadora y procedimiento de trabajo seguro en altura.",
    fotos: 7,
  },
  {
    slug: "cerrajeria",
    titulo: "Cerrajería y control de acceso",
    categoria: "Cerrajería y estructuras",
    servicio: "cerrajeria-estructuras",
    desc: "Instalación y reparación de cerraduras en puertas metálicas, incluyendo refuerzo de la zona perforada y ajuste de marco.",
    fotos: 5,
    portada: 3,
  },
  {
    slug: "rejas-transtienda",
    titulo: "Rejas y portones de transtienda",
    categoria: "Cerrajería y estructuras",
    servicio: "cerrajeria-estructuras",
    desc: "Fabricación e instalación de rejas de malla para transtiendas y bodegas, con marco de perfil estructural y portón de acceso operativo.",
    fotos: 15,
  },
  {
    slug: "cortinas-metalicas",
    titulo: "Cortinas metálicas y canaletas",
    categoria: "Cerrajería y estructuras",
    servicio: "cerrajeria-estructuras",
    desc: "Mantención de cortinas metálicas de acceso y recambio de canaletas de aguas lluvia en cubierta.",
    fotos: 5,
    portada: 2,
  },
  {
    slug: "proteccion-accesos",
    titulo: "Protección de accesos con lámina metálica",
    categoria: "Cerrajería y estructuras",
    servicio: "cerrajeria-estructuras",
    desc: "Blindaje de ventanas y vanos vulnerables con lámina metálica soldada, cerrando posibles puntos de ingreso sin afectar la fachada.",
    fotos: 9,
  },
  {
    slug: "lamina-estriada",
    titulo: "Recubrimiento con lámina estriada",
    categoria: "Obras civiles",
    servicio: "obras-civiles",
    desc: "Revestimiento de puertas y aristas de columna con lámina de aluminio estriado, para resistir el golpe de carros y pallets en zonas de tránsito.",
    fotos: 3,
  },
  {
    slug: "escalera-metalica",
    titulo: "Reparación de escaleras metálicas",
    categoria: "Obras civiles",
    servicio: "obras-civiles",
    desc: "Refuerzo y soldadura de estructura de escalera con peldaños de metal desplegado, recuperando la seguridad del acceso.",
    fotos: 4,
  },
  {
    slug: "tapas-alcantarillado",
    titulo: "Fabricación de tapas de alcantarillado",
    categoria: "Obras civiles",
    servicio: "obras-civiles",
    desc: "Fabricación a medida e instalación de tapas metálicas para cámaras de alcantarillado, niveladas al pavimento y con marco reforzado.",
    fotos: 5,
  },
  {
    slug: "cenefas-comerciales",
    titulo: "Cenefas metálicas en locales comerciales",
    categoria: "Obras civiles",
    servicio: "obras-civiles",
    desc: "Fabricación y reposición de cenefas metálicas sobre góndolas refrigeradas de supermercado, ejecutado en horario nocturno para no interrumpir la venta.",
    fotos: 5,
  },
  {
    slug: "sellado-techumbres",
    titulo: "Sellado preventivo de techumbres",
    categoria: "Techumbres",
    servicio: "techumbres-sellados",
    desc: "Sellado asfáltico de penetraciones, traslapes y fijaciones en cubierta metálica. Mantención preventiva que evita filtraciones antes del invierno.",
    fotos: 51,
    portada: 4,
  },
  {
    slug: "cielos-techumbres",
    titulo: "Reparación de cielos y techumbres",
    categoria: "Techumbres",
    servicio: "techumbres-sellados",
    desc: "Reparación de cielo americano dañado por filtraciones y refuerzo de la estructura metálica de soporte en cubierta translúcida.",
    fotos: 24,
    portada: 4,
  },
];

/** Categorías únicas, en orden de aparición */
export const categorias = [...new Set(trabajos.map((t) => t.categoria))];

/** Ruta de una foto de trabajo */
export const fotoTrabajo = (
  slug: string,
  n: number,
  ancho: 800 | 1600 = 800,
) => `/trabajos/${slug}/${String(n).padStart(2, "0")}-${ancho}.webp`;

/** Todas las fotos de un trabajo */
export const fotosDe = (t: Trabajo, ancho: 800 | 1600 = 800) =>
  Array.from({ length: t.fotos }, (_, i) => fotoTrabajo(t.slug, i + 1, ancho));
