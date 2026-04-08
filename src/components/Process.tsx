import {
  MessageCircle,
  Palette,
  Code2,
  Rocket,
  ArrowRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Reunión inicial",
    desc: "Conversamos sobre tu negocio, objetivos y qué necesitas exactamente.",
    icon: MessageCircle,
  },
  {
    n: "02",
    title: "Diseño y propuesta",
    desc: "Te envío una propuesta visual y técnica para tu aprobación.",
    icon: Palette,
  },
  {
    n: "03",
    title: "Desarrollo",
    desc: "Construyo tu página con actualizaciones frecuentes y feedback en tiempo real.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Entrega y deploy",
    desc: "Tu página sale a vivir. Te capacito y quedas listo para crecer.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Proceso
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-20"
            style={{ color: COLORS.bone }}
          >
            Simple. Rápido. Profesional.
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="flex flex-col lg:flex-row items-center flex-1"
              >
                <Reveal delay={i * 150} className="flex-1 w-full">
                  <div
                    className="group relative h-full p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor: "rgba(245, 240, 230, 0.1)",
                      backgroundColor: "rgba(245, 240, 230, 0.02)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(245, 240, 230, 0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(245, 240, 230, 0.2)";
                      e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.teal}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(245, 240, 230, 0.02)";
                      e.currentTarget.style.borderColor =
                        "rgba(245, 240, 230, 0.1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div
                      className="absolute top-6 right-6 text-5xl font-bold opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ color: COLORS.tealLight }}
                    >
                      {s.n}
                    </div>
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
                      className="text-lg font-semibold mb-2"
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

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <Reveal delay={i * 150 + 100}>
                    <div className="flex items-center justify-center py-4 lg:py-0 lg:px-2">
                      {/* Desktop arrow */}
                      <div className="hidden lg:flex items-center">
                        <div
                          className="h-px w-4"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${COLORS.tealLight})`,
                          }}
                        />
                        <ArrowRight
                          size={20}
                          style={{ color: COLORS.tealLight }}
                        />
                      </div>
                      {/* Mobile arrow */}
                      <div className="lg:hidden flex flex-col items-center">
                        <div
                          className="w-px h-4"
                          style={{
                            background: `linear-gradient(180deg, transparent, ${COLORS.tealLight})`,
                          }}
                        />
                        <ChevronDown
                          size={20}
                          style={{ color: COLORS.tealLight }}
                        />
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}