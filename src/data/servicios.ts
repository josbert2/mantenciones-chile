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
    imagen: "gasfiteria-caneria",
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
    imagen: "gasfiteria-llave",
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
    imagen: "instalacion-montaje",
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
    imagen: "reparacion-taladro",
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
    imagen: "electricidad-enchufe",
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
    slug: "limpiezas-campanas",
    nombre: "Limpiezas Industriales",
    titulo: "Limpiezas Industriales",
    seoTitle: "Limpiezas de campanas de extracción RM | Más de Chile",
    seoDescription:
      "Limpieza profesional de campanas de extracción, cambio de motores y correas. Servicio para cocinas comerciales y restaurantes.",
    resumen: "Limpieza de campanas, cambio de motores y correas de extracción.",
    intro:
      "Limpieza profesional de campanas de extracción y sistemas de ventilación. Reemplazamos motores y correas, cumpliendo normativas de seguridad industrial. Ideal para cocinas comerciales, restaurantes y empresas de food service.",
    icon: "hugeicons:wrench-01",
    imagen: "limpieza-piso",
    keywords: [
      "limpieza campanas extraccion",
      "cambio motor campana",
      "correas ventilacion",
      "seguridad industrial",
      "limpieza restaurante",
    ],
    incluye: [
      "Limpieza profunda de campanas y conductos",
      "Cambio de motores y correas",
      "Inspección de sistemas de ventilación",
      "Cumplimiento de normativas de seguridad",
      "Servicio especializado para comercios",
      "Mantenimiento preventivo",
    ],
    faqs: [
      {
        q: "¿Con qué frecuencia limpiar la campana?",
        a: "Recomendamos cada 2-3 meses en cocinas de alto volumen y cada 6 meses en uso moderado.",
      },
    ],
  },
  {
    slug: "pinturas-corporativas",
    nombre: "Pinturas Corporativas",
    titulo: "Pinturas Corporativas",
    seoTitle: "Pinturas corporativas RM | Proyectos empresariales | Más de Chile",
    seoDescription:
      "Servicios de pintura profesional para empresas, edificios y proyectos corporativos. Acabados de calidad con garantía.",
    resumen: "Pintura profesional para edificios y proyectos corporativos.",
    intro:
      "Servicios de pintura profesional para fachadas, interiores y proyectos corporativos. Usamos pinturas de calidad certificada, trabajamos con protocolos profesionales y garantizamos acabados duraderos y prolijos.",
    icon: "hugeicons:wrench-01",
    imagen: "terreno-cuadrilla",
    keywords: [
      "pintura corporativa",
      "pintura fachada",
      "pintura industrial",
      "proyectos empresariales",
      "pintor profesional santiago",
    ],
    incluye: [
      "Pintura de fachadas",
      "Pintura interior de oficinas",
      "Preparación y nivelación de superficies",
      "Uso de materiales certificados",
      "Protocolos de seguridad en altura",
      "Garantía de trabajos realizados",
    ],
    faqs: [
      {
        q: "¿Pueden pintar mientras está en funcionamiento el edificio?",
        a: "Sí, coordinamos horarios y zones para minimizar disrupciones y garantizar seguridad.",
      },
    ],
  },
  {
    slug: "ferreteria-industrial",
    nombre: "Ferretería Industrial",
    titulo: "Ferretería Industrial",
    seoTitle: "Venta ferretería industrial a pedido RM | Más de Chile",
    seoDescription:
      "Venta de ferretería industrial: materiales, herramientas especializadas y suministros. Consultoría técnica y entregas rápidas.",
    resumen: "Venta de ferretería industrial a pedido, consultoría técnica incluida.",
    intro:
      "Venta especializada de ferretería industrial. Suministramos materiales, herramientas y accesorios para proyectos de construcción, mantenimiento y reparación. Incluye consultoría técnica para elegir lo correcto según el proyecto.",
    icon: "hugeicons:wrench-01",
    imagen: "carpinteria-atornillado",
    keywords: [
      "ferreteria industrial santiago",
      "materiales construccion",
      "herramientas especializadas",
      "distribuidor industrial",
      "suministros a pedido",
    ],
    incluye: [
      "Amplio catálogo de materiales",
      "Herramientas de calidad industrial",
      "Accesorios especializados",
      "Asesoría técnica",
      "Entregas rápidas",
      "Precios mayoristas",
    ],
    faqs: [
      {
        q: "¿Hacen descuentos por volumen?",
        a: "Sí, ofrecemos precios especiales para compras en volumen y proyectos grandes.",
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
