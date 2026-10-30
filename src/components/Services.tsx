import {
  Briefcase,
  Cpu,
  Database,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

type Service = {
  icon: LucideIcon;
  title: string;
  badge: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Websites & E-Commerce",
    badge: "Conversión & Ventas",
    desc: "Landings de alto impacto, portafolios interactivos y tiendas online con carrito, catálogo multicategoría y panel de pedidos.",
  },
  {
    icon: Database,
    title: "Sistemas ERP & Odoo",
    badge: "Control Empresarial",
    desc: "ERPs multimoneda con tasa BCV automática, Punto de Venta (POS) Offline-First y módulos personalizados en Odoo 18.",
  },
  {
    icon: Briefcase,
    title: "Gestiones de Negocios",
    badge: "Verticales a Medida",
    desc: "Software especializado para clínicas de fisioterapia (E2EE), administración inmobiliaria, consultas nutricionales y restaurantes.",
  },
  {
    icon: Cpu,
    title: "Automatización & IA",
    badge: "Bots & Scrapers",
    desc: "Agentes rastreadores de precios con Playwright, flujos autónomos en n8n (Instagram / RRHH) e integraciones con WhatsApp.",
  },
];

export function Services() {
  const scrollToPortfolio = () => {
    document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Áreas de Especialización
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-20"
            style={{ color: COLORS.bone }}
          >
            Todo lo que tu negocio necesita
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div
                  onClick={scrollToPortfolio}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") scrollToPortfolio();
                  }}
                  className="group h-full p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: "rgba(245, 240, 230, 0.02)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(245, 240, 230, 0.04)";
                    e.currentTarget.style.borderColor =
                      "rgba(245, 240, 230, 0.18)";
                    e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.teal}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(245, 240, 230, 0.02)";
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: `${COLORS.tealLight}15`,
                          color: COLORS.tealLight,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(245, 240, 230, 0.04)",
                          color: COLORS.tealLight,
                        }}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: COLORS.bone }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: COLORS.boneDim }}
                    >
                      {s.desc}
                    </p>
                  </div>

                  <div
                    className="mt-6 pt-4 border-t border-white/5 text-xs font-medium flex items-center justify-between"
                    style={{ color: COLORS.tealLight }}
                  >
                    <span>Ver proyectos en portafolio</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
