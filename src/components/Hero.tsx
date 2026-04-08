import { ArrowRight, Sparkles, Clock, Rocket, ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, " + COLORS.tealLight + " 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none animate-pulse"
        style={{ background: COLORS.tealLight }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: COLORS.teal }}
      />

      {/* Subtle grid with radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(" + COLORS.tealLight + "55 1px, transparent 1px), linear-gradient(90deg, " + COLORS.tealLight + "55 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          opacity: 0.30,
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 25%, transparent 85%)",
        }}
      />

      {/* Bottom fade to blend with next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, " + COLORS.bg + " 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 border"
            style={{
              borderColor: COLORS.tealLight + "40",
              backgroundColor: COLORS.tealLight + "10",
              color: COLORS.tealLight,
            }}
          >
            <Sparkles size={14} />
            Desarrollo web impulsado por IA
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
            style={{ color: COLORS.bone }}
          >
            Tu negocio online,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, " + COLORS.tealLight + " 0%, " + COLORS.bone + " 100%)",
              }}
            >
              rápido y sin complicaciones.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: COLORS.boneDim }}
          >
            No es trabajar duro, es trabajar inteligente. Páginas web profesionales entregadas en días, no en meses.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("paquetes")}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: COLORS.teal,
                color: COLORS.bone,
                boxShadow: "0 10px 40px " + COLORS.teal + "50",
              }}
            >
              Ver paquetes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-all duration-300"
              style={{
                color: COLORS.bone,
                borderColor: COLORS.bone + "25",
              }}
            >
              Hablemos del tuyo
            </button>
          </div>
        </Reveal>

        <Reveal delay={650}>
          <div
            className="mt-20 flex flex-wrap items-center justify-center gap-8 text-sm"
            style={{ color: COLORS.boneFaint }}
          >
            <div className="flex items-center gap-2">
              <Clock size={16} />
              Entrega en días
            </div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.boneFaint }} />
            <div className="flex items-center gap-2">
              <Rocket size={16} />
              Optimizado para móvil
            </div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.boneFaint }} />
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              Diseño premium
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} style={{ color: COLORS.bone + "30" }} />
      </div>
    </section>
  );
}
