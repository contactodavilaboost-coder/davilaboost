import { ArrowRight, Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

type Project = {
  title: string;
  category: string;
  color: string;
  image?: string; // opcional, cuando tengas los screenshots los pones aquí
};

const portfolio: Project[] = [
  {
    title: "Studio Edit Cristian",
    category: "Editor de Video · Landing",
    color: "#285A5C",
  },
  {
    title: "Proyecto 2",
    category: "Negocio · Web Business",
    color: "#4A9396",
  },
  {
    title: "Proyecto 3",
    category: "Próximamente",
    color: "#1F4749",
  },
  {
    title: "Primo (próximo)",
    category: "Próximamente",
    color: "#3A7B7E",
  },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Portafolio
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-20"
            style={{ color: COLORS.bone }}
          >
            Proyectos recientes
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 hover:-translate-y-2"
                style={{ borderColor: "rgba(245, 240, 230, 0.05)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(245, 240, 230, 0.2)";
                  e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.teal}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(245, 240, 230, 0.05)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Placeholder background — cuando tengas las imágenes reales
                    reemplaza este div por: <img src={p.image} ... /> */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(180deg, ${p.color}60 0%, ${COLORS.bg} 100%)`,
                  }}
                />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 20%, ${p.color} 0%, transparent 70%)`,
                  }}
                />

                {/* Icono central placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                      backgroundColor: `${COLORS.tealLight}30`,
                      border: `1px solid ${COLORS.tealLight}60`,
                    }}
                  >
                    <Globe size={28} style={{ color: COLORS.tealLight }} />
                  </div>
                </div>

                {/* Gradiente inferior para legibilidad del texto */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${COLORS.bg}E6)`,
                  }}
                />

                <div className="relative h-full flex flex-col justify-end p-5">
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-1"
                    style={{ color: COLORS.tealLight }}
                  >
                    {p.category}
                  </p>
                  <h3
                    className="text-base font-semibold leading-tight"
                    style={{ color: COLORS.bone }}
                  >
                    {p.title}
                  </h3>
                </div>

                <div
                  className="absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-2"
                  style={{ backgroundColor: "rgba(245, 240, 230, 0.1)" }}
                >
                  <ArrowRight size={16} style={{ color: COLORS.bone }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}