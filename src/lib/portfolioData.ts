export type PortfolioCategoryId = "all" | "websites" | "gestion" | "pc-lab";

export type PreviewVariant =
  | "cristian-video"
  | "el-valera"
  | "cueros-davila"
  | "elemental-termo"
  | "jarvis-erp"
  | "odoo-kamaleon"
  | "fisiosys"
  | "inmogestion"
  | "nutririnna"
  | "restopro"
  | "precios-pro"
  | "elemental"
  | "editor-3"
  | "n8n-bots";

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<PortfolioCategoryId, "all">;
  categoryLabel: string;
  statusBadge: string;
  statusType: "live" | "demo" | "local";
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  previewVariant: PreviewVariant;
  images?: string[];
  liveUrl?: string;
  repoFolder?: string;
  featured?: boolean;
}

export interface CategoryMeta {
  id: PortfolioCategoryId;
  label: string;
  shortLabel: string;
  description: string;
  count: number;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ==========================================
  // 1. WEBSITES & E-COMMERCE
  // ==========================================
  {
    id: "studio-edit-cristian",
    title: "Cristian | Editor de Video Premium",
    subtitle: "Portafolio Audiovisual & Landing de Alta Conversión",
    category: "websites",
    categoryLabel: "Websites · Portafolio & Landing",
    statusBadge: "En Vivo en Vercel",
    statusType: "live",
    shortDesc:
      "Landing page de alto impacto para editor de video profesional con showreel interactivo, reproductor optimizado y arquitectura orientada a cierre de clientes.",
    fullDesc:
      "Sitio web diseñado para posicionar servicios de edición de video de alto nivel (Reels, YouTube y Comerciales). Integra animaciones fluidas, galería de casos de éxito en video sin penalizar la velocidad de carga, integración con Sanity CMS y llamado a la acción directo.",
    highlights: [
      "Reproductor de showreels optimizado sin bloqueo de renderizado",
      "Diseño dark cinema con micro-interacciones y carga instantánea",
      "Estructura persuasiva enfocada en retención y cierre de clientes",
      "Integración con CMS para actualizar portafolio audiovisual fácilmente",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Estado", value: "Live Web" },
      { label: "Formato", value: "Responsive" },
    ],
    accentColor: "#38bdf8",
    previewVariant: "cristian-video",
    images: ["/portfolio/cristian-home.png"],
    liveUrl: "https://portafolio-cristian-taupe.vercel.app/",
    featured: true,
  },
  {
    id: "el-valera-bbq",
    title: "El Valera Smoke & Grill",
    subtitle: "BBQ Artesanal en Coro, Falcón · Experiencia Gastronómica",
    category: "websites",
    categoryLabel: "Websites · Gastronomía & Marca",
    statusBadge: "En Vivo en Vercel",
    statusType: "live",
    shortDesc:
      "Sitio web inmersivo para restaurante de BBQ artesanal y ahumados en Coro, Falcón, con carta visual, historia de marca y pedidos/reservas directas.",
    fullDesc:
      "Presencia digital de alto impacto para El Valera Smoke & Grill. Captura la esencia del ahumado artesanal con una dirección de arte cálida y audaz, presentando sus cortes, menú interactivo, ubicación y canal directo de atención para comensales en Coro, Falcón.",
    highlights: [
      "Dirección visual gastronómica diseñada para resaltar cortes y ahumados",
      "Navegación fluida optimizada para clientes desde teléfonos móviles",
      "Secciones de menú, especialidad de la casa y contacto inmediato",
      "Despliegue optimizado en Vercel con carga ultrarrápida de activos",
    ],
    techStack: ["React", "Tailwind CSS", "UI/UX Gastronómico", "Vercel"],
    metrics: [
      { label: "Ubicación", value: "Coro, Falcón" },
      { label: "UX", value: "Mobile-First" },
      { label: "Estado", value: "Live Web" },
    ],
    accentColor: "#f97316",
    previewVariant: "el-valera",
    images: ["/portfolio/el-valera-home.png"],
    liveUrl: "https://el-valera.vercel.app/",
    featured: true,
  },
  {
    id: "cueros-davila",
    title: "Cueros Dávila · Marroquinería de Lujo",
    subtitle: "Artesanía en Cuero Plena Flor Chileno · E-Commerce + Admin",
    category: "websites",
    categoryLabel: "Websites · E-Commerce Boutique",
    statusBadge: "En Vivo en Vercel",
    statusType: "live",
    shortDesc:
      "Tienda online de marroquinería de lujo en cuero plena flor chileno con estética editorial, catálogo interactivo, carrito de compras y panel de pedidos.",
    fullDesc:
      "Experiencia de compra digital de lujo para Cueros Dávila. Combina un frontend editorial elegante que destaca la textura y calidad artesanal del cuero plena flor chileno con un flujo completo de catálogo, detalle de producto, carrito de compras y gestión administrativa.",
    highlights: [
      "Diseño boutique editorial enfocado en fotografía de alta marroquinería",
      "Catálogo completo con vistas de detalle de producto y carrito de compras",
      "Panel de administración de pedidos integrado con métricas de ventas",
      "Desplegado en producción con experiencia fluida en desktop y móvil",
    ],
    techStack: ["React / Web", "Tailwind CSS", "E-Commerce", "Admin Panel", "Vercel"],
    metrics: [
      { label: "Rubro", value: "Cuero Lujo" },
      { label: "Backoffice", value: "Incluido" },
      { label: "Estado", value: "Live Web" },
    ],
    accentColor: "#d97706",
    previewVariant: "cueros-davila",
    images: [
      "/portfolio/cueros-davila-live.png",
      "/portfolio/cueros-davila-home.png",
      "/portfolio/cueros-davila-catalog.png",
      "/portfolio/cueros-davila-admin.png",
    ],
    liveUrl: "https://cuerosdavila.vercel.app/",
    featured: true,
  },
  {
    id: "elemental-termos",
    title: "Elemental · Servicios de Termos Eléctricos",
    subtitle: "Conversión Pixel-Perfect desde Figma a Sitio Web en Producción",
    category: "websites",
    categoryLabel: "Websites · Figma a Código Web",
    statusBadge: "Extraído de Figma · Live",
    statusType: "live",
    shortDesc:
      "Desarrollo web extraído directamente desde un archivo de Figma entregado por el cliente, logrando fidelidad visual 1:1, diseño responsive y despliegue en vivo.",
    fullDesc:
      "Caso de éxito de implementación 'Figma to Code'. El cliente entregó el prototipo visual en Figma y nos encargamos de extraer cada componente, tipografía, espaciado y paleta de colores para transformarlo en una página web real, rápida, totalmente responsive y lista para captar clientes de instalación y mantenimiento de termos eléctricos.",
    highlights: [
      "Extracción y maquetación Pixel-Perfect 1:1 a partir del diseño original en Figma",
      "Adaptación responsive completa (móvil, tablet y desktop) respetando el sistema de diseño",
      "Optimización de imágenes, íconos vectoriales y velocidad de carga en producción",
      "Flujo claro de cotización y agendamiento de servicios técnicos",
    ],
    techStack: ["Figma to Code", "React", "Tailwind CSS", "Responsive UI", "Vercel"],
    metrics: [
      { label: "Origen", value: "Diseño Figma" },
      { label: "Fidelidad", value: "100% 1:1" },
      { label: "Estado", value: "Live Web" },
    ],
    accentColor: "#10b981",
    previewVariant: "elemental-termo",
    images: ["/portfolio/elemental-home.png"],
    liveUrl: "https://elemental-lilac.vercel.app/",
    featured: true,
  },

  // ==========================================
  // 2. PLATAFORMAS ESPECIALIZADAS POR INDUSTRIA
  // ==========================================
  {
    id: "fisiosys-clinico",
    title: "FisioSys · Sistema Clínico & Gestión E2EE",
    subtitle: "Plataforma Integral para Fisioterapia con Cifrado Extremo a Extremo",
    category: "gestion",
    categoryLabel: "Plataforma por Industria · Salud",
    statusBadge: "En Vivo en Vercel",
    statusType: "live",
    shortDesc:
      "Sistema clínico con historias médicas cifradas (AES-256-GCM), mapa corporal anatómico interactivo de dolor (EVA), agenda con WhatsApp/Google Calendar y finanzas.",
    fullDesc:
      "Plataforma médica de última generación diseñada para centros de rehabilitación y fisioterapeutas independientes. Protege los datos sensibles del paciente con cifrado de extremo a extremo en el navegador, permite marcar zonas de dolor sobre un mapa anatómico interactivo, automatiza recordatorios por WhatsApp y ofrece un portal privado para cada paciente.",
    highlights: [
      "Cifrado clínico de extremo a extremo (E2EE AES-256-GCM) para máxima privacidad",
      "Mapa corporal anatómico interactivo con escala visual analógica de dolor (EVA)",
      "Agenda inteligente sincronizada con Google Calendar y recordatorios WhatsApp",
      "Portal privado del paciente con rutinas de ejercicios y control de pagos",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "WebCrypto E2EE", "Gemini AI"],
    metrics: [
      { label: "Seguridad", value: "AES-256 E2EE" },
      { label: "Clínica", value: "Mapa EVA" },
      { label: "Agenda", value: "WhatsApp Sync" },
    ],
    accentColor: "#14b8a6",
    previewVariant: "fisiosys",
    images: ["/portfolio/fisiosys-home.png"],
    liveUrl: "https://fisio-sys.vercel.app/",
    repoFolder: "D:\\monke\\FisioSys",
    featured: true,
  },
  {
    id: "inmogestion-pro",
    title: "InmoGestión Pro",
    subtitle: "Plataforma Integral de Gestión y Automatización Inmobiliaria",
    category: "gestion",
    categoryLabel: "Plataforma por Industria · Real Estate",
    statusBadge: "En Vivo en Vercel",
    statusType: "live",
    shortDesc:
      "Administración completa de propiedades, control de cánones de arrendamiento, seguimiento de facturas de luz/agua, agenda de muestras y generador de contratos.",
    fullDesc:
      "Software especializado para agencias inmobiliarias y administradores de condominios o edificios de renta. Centraliza el estado de cada departamento, alerta sobre morosidad o vencimiento de servicios básicos (luz, agua, condominio), coordina visitas de prospectos y redacta contratos personalizados automáticamente.",
    highlights: [
      "Control de cobranza mensual de alquileres con alertas automáticas de morosidad",
      "Auditoría de servicios básicos por inmueble (facturas de luz, agua y mantenimiento)",
      "Ficha técnica completa por departamento con inventario fotográfico y propietario",
      "Generador inteligente de contratos de arrendamiento y calendario de muestras",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "PDF Engine"],
    metrics: [
      { label: "Control", value: "Arriendos 360°" },
      { label: "Servicios", value: "Luz / Agua" },
      { label: "Legal", value: "Contratos IA" },
    ],
    accentColor: "#3b82f6",
    previewVariant: "inmogestion",
    images: ["/portfolio/inmogestion-home.png"],
    liveUrl: "https://inmobiliariaslumaje.vercel.app/",
    repoFolder: "D:\\monke\\Inmobiliarias",
  },
  {
    id: "nutririnna-clinica",
    title: "NutriRinna · Clínica Nutricional",
    subtitle: "Sistema Integral de Consulta Nutricional, Antropometría y Dietética",
    category: "gestion",
    categoryLabel: "Plataforma por Industria · Nutrición",
    statusBadge: "Demo Sandbox Activo",
    statusType: "live",
    shortDesc:
      "Plataforma clínica para nutricionistas con cálculo antropométrico automatizado (IMC, pliegues, composición corporal), planes nutricionales y evolución gráfica.",
    fullDesc:
      "Desarrollado a medida para consulta nutricional especializada (Lcda. Rinna Camacho). Automatiza los cálculos antropométricos y de requerimiento calórico durante la consulta, genera planes de alimentación intercambiables por equivalentes y muestra al paciente su progreso físico sesión tras sesión. Incluye Modo Demo aislado para probar sin afectar pacientes reales.",
    highlights: [
      "Evaluación antropométrica completa con cálculo automático de composición corporal",
      "Generador de planes nutricionales personalizados y listas de intercambios",
      "Gráficos evolutivos de peso, porcentaje graso y masa muscular por paciente",
      "Modo Demo Sandbox aislado con pacientes de prueba precargados en navegador",
    ],
    techStack: ["React", "TypeScript", "Node.js / API", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Cálculo", value: "Antropometría" },
      { label: "Planes", value: "Personalizados" },
      { label: "Acceso", value: "Demo 1-Click" },
    ],
    accentColor: "#ec4899",
    previewVariant: "nutririnna",
    images: ["/portfolio/nutririnna-home.png"],
    liveUrl: "https://nutri-rinna-nu.vercel.app/?demo=true",
    repoFolder: "D:\\monke\\NutriRinna",
  },
  {
    id: "sistema-el-valera",
    title: "Sistema El Valera (RestoPro)",
    subtitle: "Plataforma de Gestión Gastronómica, Menú Digital y Comandas",
    category: "gestion",
    categoryLabel: "Plataforma por Industria · Restaurantes",
    statusBadge: "Demo Sandbox Activo",
    statusType: "live",
    shortDesc:
      "Sistema operativo gastronómico que une POS de mesas, recepción estructurada de pedidos, pantalla de comandas en cocina/barra, inventario y finanzas en tiempo real.",
    fullDesc:
      "Transforma la operación y toma de pedidos de El Valera Smoke & Grill. Permite gestionar mesas en el POS, enviar comandas separadas automáticamente a Cocina y Barra, descontar recetas de inventario en tiempo real y controlar cierres de caja en USD y Bs (BCV). Cuenta con Modo Demo Sandbox aislado para probar todo el flujo sin tocar la base de datos del restaurante.",
    highlights: [
      "Punto de Venta (POS) por mesas con modificadores, contornos y notas a cocina",
      "Pantallas separadas de Cocina y Barra con alertas sonoras en tiempo real",
      "Descuento automático de ingredientes por receta y control de inventario",
      "Modo Demo Sandbox pre-cargado con menú BBQ, mesas y comandas de prueba",
    ],
    techStack: ["React", "TypeScript", "Firebase / Firestore", "Tasa BCV", "Tailwind CSS"],
    metrics: [
      { label: "Módulos", value: "POS + Cocina" },
      { label: "Inventario", value: "Por Receta" },
      { label: "Acceso", value: "Demo 1-Click" },
    ],
    accentColor: "#f97316",
    previewVariant: "restopro",
    images: ["/portfolio/sistema-valera-home.png"],
    liveUrl: "https://resto-pro-nu.vercel.app/?demo=true",
    repoFolder: "D:\\monke\\antigravityqlq\\RestoPro",
  },

  // ==========================================
  // 3. PROYECTOS EN PC / LAB IA & AUTOMATIZACIÓN
  // ==========================================
  {
    id: "precios-pro-scraper",
    title: "Precios Pro · Agente Rastreador IA",
    subtitle: "Scraper Universal de Precios + Alertas WhatsApp & n8n",
    category: "pc-lab",
    categoryLabel: "Proyectos PC · Automatización & IA",
    statusBadge: "Python + React + n8n",
    statusType: "local",
    shortDesc:
      "Motor de rastreo automatizado que monitorea productos en cualquier tienda online y MercadoLibre, grafica tendencias históricas y dispara alertas en rebajas.",
    fullDesc:
      "Solución full-stack (Backend Python + Playwright y Frontend React con Recharts). Extrae precios automáticamente mediante metadatos JSON-LD/OpenGraph o renderizado headless, permite buscar directamente en la API de MercadoLibre (VE, MX, AR, CO, CL, BR) y envía alertas con foto cuando un producto baja de tu precio objetivo.",
    highlights: [
      "Scraper universal con soporte JSON-LD Schema.org y fallback en Playwright",
      "Buscador multipaís conectado a la API oficial de MercadoLibre en tiempo real",
      "Gráficos interactivos en Recharts con línea de precio objetivo e historial",
      "Alertas multicanal automáticas: WhatsApp (Evolution API), SMTP y Webhooks n8n",
    ],
    techStack: ["Python", "Playwright", "React", "Recharts", "Evolution API", "n8n"],
    metrics: [
      { label: "Canales", value: "WA + Mail + n8n" },
      { label: "Motor", value: "Playwright" },
      { label: "Tiendas", value: "Universal" },
    ],
    accentColor: "#eab308",
    previewVariant: "precios-pro",
    repoFolder: "D:\\monke\\antigravityqlq\\Precios",
    featured: true,
  },
  {
    id: "elemental-asistencia",
    title: "Elemental Asistencia",
    subtitle: "Control Digital de Asistencia, Turnos y Puntualidad",
    category: "pc-lab",
    categoryLabel: "Proyectos PC · RRHH & Control",
    statusBadge: "Control de Personal",
    statusType: "local",
    shortDesc:
      "Aplicación para registro de entradas y salidas de personal, control de horas trabajadas, incidencias y reportes gerenciales de asistencia.",
    fullDesc:
      "Herramienta ágil para empresas que necesitan digitalizar el control horario de su equipo sin hardware costoso. Registra marcajes con validación, calcula horas efectivas y atrasos, y exporta reportes listos para el cálculo de nómina.",
    highlights: [
      "Panel de marcaje rápido de entrada, almuerzo y salida para empleados",
      "Dashboard administrativo con indicadores de asistencia y puntualidad diaria",
      "Gestión de turnos, permisos justificados y alertas de ausentismo",
      "Interfaz limpia optimizada para tablets en recepción o acceso móvil",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Registro", value: "Tiempo Real" },
      { label: "Reportes", value: "Nómina / RRHH" },
      { label: "Uso", value: "Kiosco / Web" },
    ],
    accentColor: "#06b6d4",
    previewVariant: "elemental",
    repoFolder: "D:\\monke\\elemental-asistencia",
  },
  {
    id: "antigravity-editor-3",
    title: "Antigravity Editor 3.0",
    subtitle: "Suite Creativa & Motor Modular de Piezas de Marca",
    category: "pc-lab",
    categoryLabel: "Proyectos PC · Creative Engine",
    statusBadge: "Motor en TypeScript",
    statusType: "local",
    shortDesc:
      "Estudio visual en React + TypeScript con motor de composición propio, presets de marcas y generación acelerada de artes publicitarios.",
    fullDesc:
      "Aplicación de escritorio/web construida con arquitectura de motor propio (src/engine, src/skills, perfiles de marcas) para estandarizar y acelerar la producción de piezas gráficas, flyers y contenido visual manteniendo consistencia tipográfica y cromática.",
    highlights: [
      "Motor de renderizado y composición modular escrito en TypeScript",
      "Sistema de perfiles multimarca con paletas, tipografías y reglas visuales",
      "Lienzo interactivo en tiempo real con controles de precisión",
      "Arquitectura extensible basada en skills de diseño publicitario",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Canvas Engine", "Lucide"],
    metrics: [
      { label: "Arquitectura", value: "Custom Engine" },
      { label: "Perfiles", value: "Multimarca" },
      { label: "Stack", value: "React + TS" },
    ],
    accentColor: "#ec4899",
    previewVariant: "editor-3",
    repoFolder: "D:\\monke\\antigravityqlq\\EDITOR 3.0",
  },
  {
    id: "n8n-automation-suite",
    title: "Suite Automatización n8n (IG Bot & RRHH)",
    subtitle: "Flujos Autónomos con Agentes IA para Instagram y Reclutamiento",
    category: "pc-lab",
    categoryLabel: "Proyectos PC · Agentes IA & n8n",
    statusBadge: "Workflows Autónomos",
    statusType: "local",
    shortDesc:
      "Ecosistema de automatizaciones en n8n: bot de atención y ventas para Instagram + pipeline inteligente de filtrado curricular para Recursos Humanos.",
    fullDesc:
      "Conjunto de flujos de trabajo de nivel producción en n8n que conectan modelos de lenguaje (LLMs), webhooks y bases de datos para operar procesos de negocio 24/7 sin intervención humana: desde responder mensajes y calificar leads en Instagram hasta analizar CVs y agendar entrevistas en RRHH.",
    highlights: [
      "IG Bot: Respuesta automática contextual en Instagram DM y captura de leads",
      "Flujo RRHH: Recepción de CVs, extracción estructurada con IA y scoring de candidatos",
      "Integración mediante Webhooks con WhatsApp (Evolution API), correo y CRM/ERP",
      "Manejo de errores estructurado, memoria conversacional y reintentos automáticos",
    ],
    techStack: ["n8n", "LangChain Agents", "OpenAI / Gemini", "Webhooks", "Docker"],
    metrics: [
      { label: "Operación", value: "24/7 Activo" },
      { label: "Agentes", value: "IG + RRHH" },
      { label: "Ahorro", value: "+15 hrs/sem" },
    ],
    accentColor: "#f43f5e",
    previewVariant: "n8n-bots",
    repoFolder: "D:\\monke\\antigravityqlq\\n8n",
  },
];

export const PORTFOLIO_CATEGORIES: CategoryMeta[] = [
  {
    id: "all",
    label: "Todos los Proyectos",
    shortLabel: "Todos",
    description: "Ecosistema completo de sitios web, plataformas especializadas por industria y automatizaciones.",
    count: PORTFOLIO_PROJECTS.length,
  },
  {
    id: "websites",
    label: "Websites & E-Commerce",
    shortLabel: "Websites",
    description: "Landings de alta conversión, portafolios interactivos, tiendas online y maquetación fiel desde Figma.",
    count: PORTFOLIO_PROJECTS.filter((p) => p.category === "websites").length,
  },
  {
    id: "gestion",
    label: "Plataformas por Industria",
    shortLabel: "Plataformas por Industria",
    description: "Sistemas especializados para clínicas de fisioterapia (FisioSys), inmobiliarias (InmoGestión), nutrición (NutriRinna) y restaurantes (Sistema El Valera).",
    count: PORTFOLIO_PROJECTS.filter((p) => p.category === "gestion").length,
  },
  {
    id: "pc-lab",
    label: "Proyectos en PC · Lab IA",
    shortLabel: "Laboratorio PC & IA",
    description: "Herramientas locales, scrapers inteligentes con Playwright, motores creativos y bots autónomos en n8n.",
    count: PORTFOLIO_PROJECTS.filter((p) => p.category === "pc-lab").length,
  },
];
