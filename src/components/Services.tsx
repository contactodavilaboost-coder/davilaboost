import { Code2, ShoppingCart, Settings, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Landings y sitios corporativos con diseño moderno, responsive y optimizados para conversión.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Tiendas online con carrito, pasarelas de pago, gestión de stock y panel de administración.",
  },
  {
    icon: Settings,
    title: "Sistemas a Medida",
    desc: "Plataformas personalizadas, dashboards, integraciones con APIs y automatizaciones.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    desc: "Actualizaciones, backups, cambios de contenido y soporte continuo para tu tranquilidad.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Servicios
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
                  className="group h-full p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: "rgba(245, 240, 230, 0.02)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(245, 240, 230, 0.04)";
                    e.currentTarget.style.borderColor =
                      "rgba(245, 240, 230, 0.15)";
                    e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.teal}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(245, 240, 230, 0.02)";
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${COLORS.tealLight}15`,
                      color: COLORS.tealLight,
                    }}
                  >
                    <Icon size={22} />
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}