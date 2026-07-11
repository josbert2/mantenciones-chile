export const site = {
  name: "Más de Chile",
  legalName: "Más de Chile SpA",
  url: "https://www.masdechile.cl",
  shortDescription:
    "Servicios técnicos especializados para empresas, condominios y hogares en la Región Metropolitana.",
  description:
    "Hidrojet, gasfitería, cerrajería, estructuras metálicas, obras civiles, limpiezas industriales y pinturas corporativas. Emergencias 24/7 en toda la RM.",
  phone: "+56912345678",
  phoneDisplay: "+56 9 1234 5678",
  email: "contacto@masdechile.cl",
  whatsapp: "56912345678",
  locale: "es_CL",
  lang: "es",
  priceRange: "$$",
  address: {
    street: "Av. Providencia 1234, Of. 56",
    city: "Santiago",
    region: "Region Metropolitana",
    zip: "7500000",
    country: "CL",
  },
  geo: { lat: -33.4265, lng: -70.6167 },
  areaServed: ["Santiago", "Region Metropolitana", "Chile"],
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [
    "https://www.facebook.com/mantencioneschile",
    "https://www.instagram.com/mantencioneschile",
  ],
  rating: { value: "4.9", count: "8400" },
  ogImage: "/og.png",
} as const;
