import { Code2, Cpu, Layers, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

const STATS = [
  {
    icon: Layers,
    value: "10+",
    label: "Sistemas & Webs en Portafolio",
    detail: "Producción real verificable",
  },
  {
    icon: Code2,
    value: "1:1",
    label: "Fidelidad Figma a Código",
    detail: "Pixel-perfect & responsive",
  },
  {
    icon: Zap,
    value: "En Días",
    label: "Velocidad de Entrega",
    detail: "Arquitectura ágil sin fricción",
  },
  {
    icon: Cpu,
    value: "Full-Stack",
    label: "Web · SaaS · Estudio IA",
    detail: "Soluciones integrales a medida",
  },
];

export function About() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Sobre mí
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-6xl font-bold text-center tracking-tight leading-tight mb-8"
            style={{ color: COLORS.bone }}
          >
            La proactividad es un don
            <br />
            <span style={{ color: COLORS.boneDim }}>que pocos tenemos.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-16"
            style={{ color: COLORS.boneDim }}
          >
            Soy desarrollador full-stack apasionado por la eficiencia y el diseño
            de alto nivel. Combino arquitectura moderna, código limpio e
            inteligencia artificial para construir desde sitios web y tiendas
            online hasta sistemas clínicos, plataformas inmobiliarias y motores
            creativos en una fracción del tiempo tradicional.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={250 + i * 80}>
                <div
                  className="p-6 rounded-2xl border text-center sm:text-left transition-all duration-500 hover:-translate-y-1"
                  style={{
                    borderColor: COLORS.border,
                    backgroundColor: "rgba(245, 240, 230, 0.02)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex items-center justify-center sm:justify-between mb-4">
                    <span
                      className="text-3xl font-bold font-display tracking-tight"
                      style={{ color: COLORS.bone }}
                    >
                      {stat.value}
                    </span>
                    <div
                      className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center"
                      style={{
                        backgroundColor: `${COLORS.tealLight}15`,
                        color: COLORS.tealLight,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: COLORS.bone }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: COLORS.boneFaint }}
                  >
                    {stat.detail}
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
