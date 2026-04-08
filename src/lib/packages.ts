export type Package = {
  name: string;
  price: { ve: string; intl: string };
  desc: string;
  features: string[];
  featured: boolean;
};

export const packages: Package[] = [
  {
    name: "Landing Essential",
    price: { ve: "180$", intl: "400$" },
    desc: "Una página profesional para destacar tu marca.",
    features: [
      "Hasta 6 secciones",
      "Diseño responsive",
      "Formulario de contacto",
      "Botón de WhatsApp",
      "SEO básico",
      "Entrega en 5 días",
      "2 rondas de cambios",
    ],
    featured: false,
  },
  {
    name: "Web Business",
    price: { ve: "350$", intl: "750$" },
    desc: "Sitio completo para negocios que quieren presencia sólida.",
    features: [
      "Hasta 5 páginas",
      "Diseño personalizado",
      "Animaciones fluidas",
      "Google Maps + WhatsApp",
      "SEO completo",
      "Entrega en 10 días",
      "3 rondas de cambios",
    ],
    featured: true,
  },
  {
    name: "E-commerce Starter",
    price: { ve: "650$", intl: "1.400$" },
    desc: "Tienda online con carrito y panel de administración.",
    features: [
      "Hasta 50 productos",
      "Carrito + pasarelas de pago",
      "Panel de administración",
      "Control de stock",
      "Notificaciones WhatsApp",
      "Entrega en 3 semanas",
      "3 rondas de cambios",
    ],
    featured: false,
  },
  {
    name: "E-commerce Pro",
    price: { ve: "1.100$", intl: "2.400$" },
    desc: "Tienda avanzada para negocios en crecimiento.",
    features: [
      "Productos ilimitados",
      "Cupones y descuentos",
      "Clientes registrados",
      "Dashboard de reportes",
      "Blog integrado",
      "Entrega en 4-5 semanas",
      "4 rondas de cambios",
    ],
    featured: false,
  },
  {
    name: "Sistema a Medida",
    price: { ve: "Desde 1.500$", intl: "Desde 3.000$" },
    desc: "Proyectos complejos con requerimientos únicos.",
    features: [
      "Requerimientos únicos",
      "Reunión de descubrimiento",
      "Arquitectura personalizada",
      "Integraciones a medida",
      "Múltiples usuarios/roles",
      "Timeline personalizado",
      "Soporte dedicado",
    ],
    featured: false,
  },
];