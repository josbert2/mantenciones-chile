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
    slug: "gasfiteria",
    nombre: "Gasfiteria",
    titulo: "Gasfiteria",
    seoTitle: "Gasfiter a domicilio en Chile | Mantenciones Chile",
    seoDescription:
      "Gasfiter a domicilio para fugas, filtraciones, WC, calefont y destape de cañerias. Cotizacion clara y garantia de 90 dias. Atencion en 24 hrs.",
    resumen:
      "Fugas, filtraciones, WC, calefont, cambio de llaves y destape de cañerias.",
    intro:
      "Servicio de gasfiteria a domicilio con tecnicos certificados. Detectamos y reparamos fugas, cambiamos llaves y grifos, instalamos y reparamos calefont, y destapamos cañerias sin romper de mas. Precio claro antes de empezar y garantia por escrito.",
    icon: "hugeicons:gas-pipe",
    imagen: "vzqNanbKCcj5CLe2o3o7dvcpY",
    keywords: [
      "gasfiter a domicilio",
      "gasfiteria santiago",
      "reparacion de fugas de agua",
      "destape de cañerias",
      "reparacion de calefont",
      "gasfiter de urgencia",
    ],
    incluye: [
      "Deteccion y reparacion de fugas y filtraciones",
      "Instalacion y reparacion de WC, lavamanos y grifos",
      "Reparacion e instalacion de calefont",
      "Destape de cañerias y desagües",
      "Cambio de llaves de paso y flexibles",
      "Certificacion de instalaciones de gas",
    ],
    faqs: [
      {
        q: "Cuanto cuesta un gasfiter a domicilio?",
        a: "El valor depende del trabajo. Te entregamos una cotizacion clara y sin compromiso antes de empezar, y el precio final es el mismo que informamos. La visita de diagnostico parte desde $24.900.",
      },
      {
        q: "Atienden emergencias de gasfiteria?",
        a: "Si. Contamos con servicio de urgencia para reventones, fugas e inundaciones, con un tiempo de respuesta promedio de 45 minutos.",
      },
      {
        q: "Reparan calefont de cualquier marca?",
        a: "Trabajamos con las principales marcas del mercado (Junkers, Splendid, Neckar, Rheem, entre otras) para mantencion, reparacion e instalacion.",
      },
    ],
  },
  {
    slug: "electricidad",
    nombre: "Electricidad",
    titulo: "Electricidad",
    seoTitle: "Electricista a domicilio en Chile | Mantenciones Chile",
    seoDescription:
      "Electricista certificado SEC para cortocircuitos, tableros, enchufes e iluminacion. Cotizacion clara y garantia. Atencion en 24 hrs en todo Chile.",
    resumen:
      "Cortocircuitos, tableros, enchufes, iluminacion y certificacion SEC.",
    intro:
      "Servicio electrico a domicilio con personal certificado SEC. Resolvemos cortocircuitos y fallas, ampliamos y normalizamos tableros, instalamos enchufes e iluminacion, y entregamos certificado SEC cuando lo necesitas. Seguridad y trabajo prolijo garantizado.",
    icon: "hugeicons:flash",
    imagen: "5AgeMShXPsGp8UgPgzzfhnQJ9c",
    keywords: [
      "electricista a domicilio",
      "electricista certificado SEC",
      "reparacion de cortocircuitos",
      "instalacion de enchufes",
      "normalizacion de tablero electrico",
      "electricista de urgencia",
    ],
    incluye: [
      "Reparacion de cortocircuitos y fallas electricas",
      "Instalacion y normalizacion de tableros",
      "Instalacion de enchufes, interruptores y luminarias",
      "Certificacion SEC (TE1)",
      "Cableado y canalizaciones",
      "Instalacion de automaticos y diferenciales",
    ],
    faqs: [
      {
        q: "Entregan certificado SEC?",
        a: "Si. Nuestros electricistas estan certificados y emitimos el certificado de instalacion electrica (TE1) cuando el trabajo lo requiere.",
      },
      {
        q: "Atienden cortes de luz o cortocircuitos de urgencia?",
        a: "Si, contamos con atencion de emergencia electrica con respuesta promedio de 45 minutos para fallas urgentes.",
      },
      {
        q: "Pueden normalizar el tablero de mi casa o edificio?",
        a: "Si. Revisamos, ordenamos y normalizamos tableros de hogares, comunidades y locales segun la normativa vigente.",
      },
    ],
  },
  {
    slug: "climatizacion",
    nombre: "Climatizacion",
    titulo: "Climatizacion",
    seoTitle: "Instalacion y mantencion de aire acondicionado | Chile",
    seoDescription:
      "Instalacion, mantencion y limpieza de aire acondicionado split e inverter. Tecnicos certificados, cotizacion clara y garantia de 90 dias.",
    resumen:
      "Instalacion, mantencion y limpieza de aire acondicionado split e inverter.",
    intro:
      "Instalacion, mantencion y limpieza de aire acondicionado split e inverter para hogar y empresas. Dejamos tu equipo funcionando eficiente, sin malos olores ni perdidas, y te asesoramos para elegir el equipo adecuado segun el espacio.",
    icon: "hugeicons:snow",
    imagen: "FmTfTzSoFYlC2GlWZeVVu5zN9E",
    keywords: [
      "instalacion aire acondicionado",
      "mantencion aire acondicionado split",
      "limpieza de aire acondicionado",
      "recarga de gas aire acondicionado",
      "tecnico climatizacion",
    ],
    incluye: [
      "Instalacion de equipos split e inverter",
      "Mantencion preventiva y limpieza profunda",
      "Recarga de gas refrigerante",
      "Reparacion de fallas y fugas",
      "Asesoria para elegir el equipo adecuado",
      "Servicio para hogar, oficinas y locales",
    ],
    faqs: [
      {
        q: "Cada cuanto se hace la mantencion del aire acondicionado?",
        a: "Recomendamos una mantencion al menos una vez al año, o dos veces si el equipo se usa de forma intensiva, para mantener eficiencia y evitar malos olores.",
      },
      {
        q: "Instalan el equipo que compre por mi cuenta?",
        a: "Si. Instalamos equipos nuevos comprados por ti y tambien podemos asesorarte y conseguir el equipo adecuado para tu espacio.",
      },
      {
        q: "Hacen recarga de gas?",
        a: "Si, realizamos recarga de gas refrigerante y deteccion de fugas como parte del servicio de climatizacion.",
      },
    ],
  },
  {
    slug: "emergencias-24-7",
    nombre: "Emergencias 24/7",
    titulo: "Emergencias 24/7",
    seoTitle: "Emergencias de gasfiteria y electricidad 24/7 | Chile",
    seoDescription:
      "Servicio de emergencia 24/7 para reventones, inundaciones y fallas electricas. Respuesta promedio de 45 minutos. Cotizacion clara y garantia.",
    resumen:
      "Reventones, inundaciones y fallas electricas urgentes cualquier dia.",
    intro:
      "Servicio de emergencia 24/7 para cuando no puede esperar: reventones de cañerias, inundaciones, cortocircuitos y fallas electricas. Llegamos donde estes con un tiempo de respuesta promedio de 45 minutos, cualquier dia del año.",
    icon: "hugeicons:24-hours-clock",
    imagen: "8FKXOumsLuAOf81tpPnI3zu2Jg",
    keywords: [
      "emergencia gasfiteria 24 horas",
      "gasfiter de urgencia",
      "emergencia electrica",
      "reventon de cañeria",
      "servicio 24 horas mantencion",
    ],
    incluye: [
      "Reventones de cañerias e inundaciones",
      "Fugas de agua y filtraciones urgentes",
      "Cortocircuitos y fallas electricas",
      "Destapes de urgencia",
      "Atencion los 365 dias del año",
      "Respuesta promedio de 45 minutos",
    ],
    faqs: [
      {
        q: "En cuanto tiempo llegan a una emergencia?",
        a: "Nuestro tiempo de respuesta promedio para emergencias es de 45 minutos, sujeto a la ubicacion y la disponibilidad del momento.",
      },
      {
        q: "Atienden de noche y fines de semana?",
        a: "Si. El servicio de emergencia funciona las 24 horas, los 365 dias del año, incluidos festivos.",
      },
      {
        q: "Cuanto cuesta una emergencia?",
        a: "Te informamos el valor antes de ejecutar el trabajo. Aun en urgencia mantenemos precio claro y sin sorpresas al terminar.",
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
