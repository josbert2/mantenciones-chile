export const site = {
  name: "Mantenciones Chile",
  legalName: "Mantenciones Chile SpA",
  url: "https://mantenciones.cl",
  shortDescription:
    "Servicio tecnico de mantencion para el hogar y empresas en Chile.",
  description:
    "Gasfiteria, electricidad, climatizacion y reparaciones con tecnicos certificados. Cotizacion clara, garantia de 90 dias y atencion en 24 hrs en todo Chile.",
  phone: "+56912345678",
  phoneDisplay: "+56 9 1234 5678",
  email: "hola@mantenciones.cl",
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
