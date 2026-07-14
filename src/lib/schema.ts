import { site } from "../data/site";
import { servicios, type Servicio } from "../data/servicios";

const abs = (path: string) => new URL(path, site.url).toString();

/** Nodo LocalBusiness reutilizable (con @id para referenciar) */
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: abs(site.ogImage),
    logo: abs("/favicon.svg"),
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHours: site.openingHours,
    sameAs: site.sameAs,
    foundingDate: site.founded,
    logo: {
      "@type": "ImageObject",
      url: abs("/maschile.svg"),
    },
    knowsAbout: [
      "Mantenimiento multitécnico",
      "Facility management",
      "Infraestructura comercial",
      "Continuidad operacional",
    ],
    // Catálogo de servicios: ayuda a Google a entender qué ofrecemos
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Más de Chile",
      itemListElement: servicios.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.nombre,
          description: s.resumen,
          url: `${site.url}/servicios/${s.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(s: Servicio) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.nombre,
    serviceType: s.nombre,
    description: s.seoDescription,
    url: `${site.url}/servicios/${s.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Servicios de ${s.nombre}`,
      itemListElement: s.incluye.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function localServiceSchema(s: Servicio, comunaNombre: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.nombre} en ${comunaNombre}`,
    serviceType: s.nombre,
    description: `${s.nombre} a domicilio en ${comunaNombre}. ${s.seoDescription}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: comunaNombre },
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-CL",
  };
}
