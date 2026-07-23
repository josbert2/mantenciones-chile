export interface Servicio {
  slug: string;
  nombre: string;
  /** Titulo corto para tarjetas/nav */
  titulo: string;
  /** <title> de la pagina (<= 60 caracteres idealmente) */
  seoTitle: string;
  /** meta description (<= 155 caracteres) */
  seoDescription: string;
  /** Bajada corta para cards */
  resumen: string;
  /** Parrafo intro de la pagina */
  intro: string;
  icon: string;
  imagen: string;
  keywords: string[];
  incluye: string[];
  faqs: { q: string; a: string }[];
}

export const servicios: Servicio[] = [
  {
    slug: "hidrojet-destapes",
    nombre: "Hidrojet y Destapes",
    titulo: "Hidrojet & Destapes",
    seoTitle: "Camión hidrojet y destapes RM | Más de Chile",
    seoDescription:
      "Servicio de hidrojet, destapes de tuberías, gestión de riles y certificado de disposición final. Tecnología avanzada para empresas y condominios.",
    resumen: "Camión hidrojet, destapes, gestión de riles, certificado disposición final.",
    intro:
      "Limpiezas de tuberías con sistema hidrojet de alta presión. Destapamos cañerías interiores y exteriores sin dañar, gestionamos residuos y emitimos certificado de disposición final para cumplimiento normativo.",
    icon: "hugeicons:gas-pipe",
    imagen: "camion-hidrojet/01",
    keywords: [
      "hidrojet santiago",
      "destape de cañerias",
      "gestion de riles",
      "limpieza de tuberias",
      "certificado disposicion final",
    ],
    incluye: [
      "Limpiezas con presión controlada hasta 350 bar",
      "Destape de tuberías interiores y exteriores",
      "Gestión y disposición de residuos",
      "Certificado de disposición final",
      "Servicio para condominios, empresas y hogares",
      "Respuesta rápida a emergencias",
    ],
    faqs: [
      {
        q: "¿Rompen las tuberías con el hidrojet?",
        a: "No. Usamos presión controlada y verificamos el estado de la tubería antes. El sistema es seguro para PVC y tuberías metálicas.",
      },
      {
        q: "¿Qué incluye el certificado de disposición final?",
        a: "Documentación legal que acredita el correcto manejo de residuos según normativa ambiental, obligatorio en muchos condominios.",
      },
    ],
  },
  {
    slug: "gasfiteria",
    nombre: "Gasfitería",
    titulo: "Gasfitería",
    seoTitle: "Gasfitería RM | Cambios de grifería, WC, reparaciones | Más de Chile",
    seoDescription:
      "Gasfitería completa: grifería, WC, termos eléctricos, puntos de agua, destapes y filtraciones. Técnicos certificados, cotización clara.",
    resumen: "Grifería, WC, termos, puntos de agua, filtraciones y destapes.",
    intro:
      "Servicio integral de gasfitería con técnicos certificados. Cambios de grifería y artefactos sanitarios, instalación de puntos de agua, reparación de filtraciones, destapes de tuberías y cámaras interiores. Precio claro y garantía.",
    icon: "hugeicons:gas-pipe",
    imagen: "lavaderos-industriales/05",
    keywords: [
      "gasfiter santiago",
      "cambio de grifo",
      "reparacion de filtraciones",
      "destape de cañerias",
      "instalacion wc",
    ],
    incluye: [
      "Cambios de grifería y artefactos sanitarios",
      "Instalación de WC y lavamanos",
      "Reparación de termos eléctricos",
      "Instalación de nuevos puntos de agua",
      "Detección y reparación de filtraciones",
      "Destape de artefactos, tuberías y cámaras",
    ],
    faqs: [
      {
        q: "¿Qué marcas de grifería usan?",
        a: "Trabajamos con marcas de calidad certificadas y también instalamos las que el cliente prefiera.",
      },
      {
        q: "¿Reparan termos eléctricos?",
        a: "Sí, reparamos y reemplazamos termos de todas las marcas principales del mercado.",
      },
    ],
  },
  {
    slug: "cerrajeria-estructuras",
    nombre: "Cerrajería y Estructuras",
    titulo: "Cerrajería & Estructuras",
    seoTitle: "Cerrajería, portones y estructuras metálicas RM | Más de Chile",
    seoDescription:
      "Reparación de portones de ingreso, puertas de seguridad, cerrajería y estructuras metálicas. Trabajos especializados para empresas.",
    resumen: "Portones, puertas de seguridad, cerrajería y estructuras metálicas.",
    intro:
      "Reparación y fabricación de portones de ingreso, puertas de seguridad y estructuras metálicas. Trabajamos con acero de calidad, sistemas de cierre profesionales y garantizamos trabajos prolijos y seguros.",
    icon: "hugeicons:security-check",
    imagen: "rejas-transtienda/01",
    keywords: [
      "cerrajeria santiago",
      "portones automaticos",
      "puertas de seguridad",
      "estructuras metalicas",
      "herreria profesional",
    ],
    incluye: [
      "Reparación de portones de ingreso",
      "Instalación de puertas de seguridad",
      "Cerrajería general",
      "Fabricación de estructuras metálicas",
      "Mantención de sistemas de cierre",
      "Consultoría en seguridad perimetral",
    ],
    faqs: [
      {
        q: "¿Fabrican portones personalizados?",
        a: "Sí, diseñamos y fabricamos portones según especificaciones del cliente con materiales de primera calidad.",
      },
      {
        q: "¿Instalan sistemas de automatización?",
        a: "Sí, integramos sistemas automáticos confiables en portones existentes o nuevos.",
      },
    ],
  },
  {
    slug: "obras-civiles",
    nombre: "Obras Civiles Menores",
    titulo: "Obras Civiles",
    seoTitle: "Reparaciones y remodelaciones menores RM | Más de Chile",
    seoDescription:
      "Reparaciones y remodelaciones de obras civiles menores: hormigón, enfondados, revestimientos. Trabajos profesionales con cotización clara.",
    resumen: "Reparaciones, remodelaciones y trabajos de hormigón y revestimientos.",
    intro:
      "Reparaciones y remodelaciones de obras civiles menores. Trabajamos con hormigón, enfondados, revestimientos, y pequeñas restructuraciones. Todos nuestros trabajos incluyen presupuesto previo y terminación prolija.",
    icon: "hugeicons:wrench-01",
    imagen: "escalera-metalica/01",
    keywords: [
      "reparacion obras civiles",
      "enfondado",
      "revestimientos",
      "hormigon",
      "remodelacion menor",
    ],
    incluye: [
      "Reparaciones de estructuras menores",
      "Enfondados y revestimientos",
      "Trabajos en hormigón",
      "Reparación de grietas y daños",
      "Consultoría antes de ejecutar",
      "Presupuesto sin compromiso",
    ],
    faqs: [
      {
        q: "¿Qué es una obra civil menor?",
        a: "Son trabajos de reparación y remodelación que no requieren permisos municipales complejos ni cambios estructurales mayores.",
      },
    ],
  },
  {
    slug: "emergencias-24-7",
    nombre: "Emergencias 24/7",
    titulo: "Emergencias 24/7",
    seoTitle: "Emergencias gasfitería, electricidad y cerrajería 24/7 RM",
    seoDescription:
      "Servicio de emergencia 24/7: reventones, inundaciones, fallas eléctricas, cerrajería y camión destape. Respuesta rápida en toda la RM.",
    resumen: "Reventones, inundaciones, fallas eléctricas y emergencias de cerrajería.",
    intro:
      "Servicio de emergencia 24/7 los 365 días del año. Reventones de cañerías, inundaciones, cortocircuitos, cerrajería y logística. Contamos con camión destape y respuesta promedio de 45 minutos en toda la Región Metropolitana.",
    icon: "hugeicons:24-hours-clock",
    imagen: "luminosos-corporativos/02",
    keywords: [
      "emergencia 24 horas",
      "reventon cañeria",
      "falla electrica urgente",
      "emergencia cerrajeria",
      "servicio urgente rm",
    ],
    incluye: [
      "Reventones de cañerías e inundaciones",
      "Cortocircuitos y fallas eléctricas urgentes",
      "Emergencias de cerrajería y acceso",
      "Destape con camión hidrojet",
      "Logística y coordinación",
      "Respuesta 45 minutos promedio",
    ],
    faqs: [
      {
        q: "¿Atienden todos los días?",
        a: "Sí, 24 horas todos los días del año, incluyendo festivos.",
      },
      {
        q: "¿Cómo contactar emergencias?",
        a: "Llamar directamente o enviar WhatsApp. Consultaremos tipo de emergencia y zona para despachar rápidamente.",
      },
    ],
  },
  {
    slug: "techumbres-sellados",
    nombre: "Techumbres y Sellados",
    titulo: "Techumbres y Sellados",
    seoTitle: "Techumbres y sellados de cubierta RM | Más de Chile",
    seoDescription:
      "Sellado preventivo de techumbres, reparación de filtraciones y cielos. Mantención de cubierta metálica y translúcida para locales y empresas.",
    resumen: "Sellado de cubiertas, reparación de filtraciones y cielos dañados.",
    intro:
      "Mantención integral de cubiertas y cielos. Sellamos penetraciones, traslapes y fijaciones de techumbre metálica con material asfáltico antes del invierno, y reparamos cielos dañados por filtraciones. Trabajo preventivo que evita problemas mayores en la temporada de lluvias.",
    icon: "hugeicons:home-01",
    imagen: "sellado-techumbres/04",
    keywords: [
      "sellado de techumbres",
      "reparacion de filtraciones",
      "impermeabilizacion cubierta",
      "reparacion de cielos",
      "mantencion techumbre santiago",
    ],
    incluye: [
      "Sellado asfáltico de penetraciones y traslapes",
      "Impermeabilización de fijaciones y tornillos",
      "Reparación de cielo americano por filtraciones",
      "Refuerzo de estructura en cubierta translúcida",
      "Mantención preventiva antes del invierno",
      "Trabajo en altura con procedimiento seguro",
    ],
    faqs: [
      {
        q: "¿Cuándo conviene sellar la techumbre?",
        a: "Antes del invierno. El sellado preventivo de penetraciones y fijaciones evita filtraciones que después obligan a reparar cielos y estructura.",
      },
      {
        q: "¿Reparan el cielo dañado por una filtración?",
        a: "Sí. Reparamos el cielo americano afectado y, sobre todo, corregimos el origen de la filtración en la cubierta para que no se repita.",
      },
    ],
  },
  {
    slug: "termos-electricos",
    nombre: "Termos Eléctricos",
    titulo: "Termos Eléctricos",
    seoTitle: "Mantención de termos eléctricos RM | Más de Chile",
    seoDescription:
      "Mantención y reparación de termos eléctricos: cambio de resistencias, limpieza de estanque y revisión de termostato. Recupera el agua caliente.",
    resumen: "Cambio de resistencias, limpieza de estanque y revisión de termostato.",
    intro:
      "Mantención y reparación de termos eléctricos de todas las marcas. Desarmamos, limpiamos el estanque, cambiamos resistencias calcificadas y verificamos el termostato con instrumento. Devolvemos el agua caliente y de paso bajamos el consumo eléctrico del equipo.",
    icon: "hugeicons:fire",
    imagen: "termos-electricos/01",
    keywords: [
      "mantencion termo electrico",
      "cambio de resistencia termo",
      "reparacion termo electrico santiago",
      "termostato termo",
      "termo no calienta",
    ],
    incluye: [
      "Desarme y limpieza del estanque",
      "Cambio de resistencias calcificadas",
      "Verificación de termostato con instrumento",
      "Revisión de ánodo y sellos",
      "Diagnóstico de consumo eléctrico",
      "Servicio para todas las marcas",
    ],
    faqs: [
      {
        q: "Mi termo no calienta, ¿tiene arreglo?",
        a: "Casi siempre sí. Lo más común es una resistencia calcificada o un termostato fallado; ambos se reemplazan sin cambiar el termo completo.",
      },
      {
        q: "¿Cada cuánto conviene mantener el termo?",
        a: "Una mantención anual limpia el estanque y revisa la resistencia. Alarga la vida del equipo y evita quedarse sin agua caliente de golpe.",
      },
    ],
  },
  {
    slug: "luminosos-corporativos",
    nombre: "Luminosos Corporativos",
    titulo: "Luminosos Corporativos",
    seoTitle: "Mantención de luminosos corporativos RM | Más de Chile",
    seoDescription:
      "Recambio y reparación de letreros luminosos de marca. Trabajo con alza-hombre fuera de horario para retail, comida rápida y locales comerciales.",
    resumen: "Recambio y reparación de letreros luminosos de marca en altura.",
    intro:
      "Mantención de letreros y luminosos corporativos para cadenas de retail y comida rápida. Reparamos y recambiamos letras y paneles luminosos trabajando con alza-hombre, fuera del horario de atención para no interrumpir el local. Coordinamos por sucursal según el estándar de cada marca.",
    icon: "hugeicons:flash",
    imagen: "luminosos-corporativos/02",
    keywords: [
      "mantencion de luminosos",
      "letreros corporativos",
      "reparacion letrero luminoso",
      "letras corporeas",
      "senaletica comercial santiago",
    ],
    incluye: [
      "Reparación y recambio de letras y paneles",
      "Cambio de iluminación a LED",
      "Trabajo con alza-hombre en altura",
      "Ejecución fuera del horario de atención",
      "Cobertura por sucursal para cadenas",
      "Respeto del estándar visual de la marca",
    ],
    faqs: [
      {
        q: "¿Atienden cadenas con varios locales?",
        a: "Sí. Coordinamos la mantención sucursal por sucursal respetando el estándar visual de la marca y los horarios de cada local.",
      },
      {
        q: "¿Trabajan fuera del horario del local?",
        a: "Sí. Programamos la intervención con alza-hombre fuera del horario de atención para no interrumpir la operación ni la venta.",
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
