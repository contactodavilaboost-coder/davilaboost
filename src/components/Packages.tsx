import { useState } from "react";
import { Check, Star, Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";
import { packages } from "../lib/packages";
import { useIsVenezuela } from "../lib/useIsVenezuela";

export function Packages() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const { isVE, loaded } = useIsVenezuela();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="paquetes" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Paquetes
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4"
            style={{ color: COLORS.bone }}
          >
            Precios claros, sin sorpresas
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="text-center mb-8 max-w-2xl mx-auto"
            style={{ color: COLORS.boneDim }}
          >
            Elige el paquete que mejor se adapte a tu negocio. Todos incluyen
            deploy, soporte inicial y transparencia total.
          </p>
        </Reveal>

        {/* Location badge */}
        <Reveal delay={250}>
          <div className="flex justify-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-500"
              style={{
                borderColor: `${COLORS.tealLight}40`,
                backgroundColor: `${COLORS.tealLight}10`,
                color: COLORS.tealLight,
                opacity: loaded ? 1 : 0.5,
              }}
            >
              <Globe size={14} />
              {isVE ? "Precios para Venezuela 🇻🇪" : "International pricing 🌎"}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className="group relative h-full p-8 rounded-2xl border transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
                style={
                  pkg.featured
                    ? {
                        background: `linear-gradient(135deg, ${COLORS.teal}35 0%, ${COLORS.teal}08 100%)`,
                        boxShadow: `0 0 50px ${COLORS.teal}40`,
                        borderColor: `${COLORS.tealLight}80`,
                      }
                    : {
                        borderColor: "rgba(245, 240, 230, 0.1)",
                        backgroundColor: "rgba(245, 240, 230, 0.02)",
                      }
                }
                onMouseEnter={(e) => {
                  setHoveredIdx(i);
                  if (!pkg.featured) {
                    e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.teal}50, 0 0 0 1px ${COLORS.tealLight}80`;
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.background = `linear-gradient(135deg, ${COLORS.teal}25 0%, rgba(245,240,230,0.02) 100%)`;
                  } else {
                    e.currentTarget.style.boxShadow = `0 20px 80px ${COLORS.teal}70`;
                  }
                }}
                onMouseLeave={(e) => {
                  setHoveredIdx(null);
                  if (!pkg.featured) {
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.borderColor =
                      "rgba(245, 240, 230, 0.1)";
                    e.currentTarget.style.background =
                      "rgba(245, 240, 230, 0.02)";
                  } else {
                    e.currentTarget.style.boxShadow = `0 0 50px ${COLORS.teal}40`;
                  }
                }}
              >
                {/* Glow orb on hover */}
                <div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: COLORS.tealLight }}
                />

                {pkg.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10"
                    style={{ backgroundColor: COLORS.teal, color: COLORS.bone }}
                  >
                    <Star size={12} fill={COLORS.bone} />
                    Más Popular
                  </div>
                )}

                <div className="relative">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: COLORS.bone }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-sm mb-6 min-h-[40px]"
                    style={{ color: COLORS.boneDim }}
                  >
                    {pkg.desc}
                  </p>
                  <div className="mb-6">
                    <span
                      className="text-4xl font-bold bg-clip-text transition-all duration-500"
                      style={{
                        color: "transparent",
                        backgroundImage:
                          hoveredIdx === i
                            ? `linear-gradient(135deg, ${COLORS.tealLight} 0%, ${COLORS.bone} 100%)`
                            : `linear-gradient(135deg, ${COLORS.bone} 0%, ${COLORS.bone} 100%)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {isVE ? pkg.price.ve : pkg.price.intl}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: `${COLORS.bone}b3` }}
                      >
                        <Check
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: COLORS.tealLight }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollTo("contacto")}
                    className="w-full py-3 rounded-full font-medium text-sm transition-all duration-300 border"
                    style={
                      pkg.featured
                        ? {
                            backgroundColor: COLORS.teal,
                            color: COLORS.bone,
                            borderColor: "transparent",
                            boxShadow: `0 8px 30px ${COLORS.teal}40`,
                          }
                        : {
                            color: COLORS.bone,
                            borderColor: "rgba(245, 240, 230, 0.15)",
                            backgroundColor: "transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!pkg.featured) {
                        e.currentTarget.style.backgroundColor = COLORS.teal;
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.boxShadow = `0 8px 30px ${COLORS.teal}40`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!pkg.featured) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor =
                          "rgba(245, 240, 230, 0.15)";
                        e.currentTarget.style.boxShadow = "";
                      }
                    }}
                  >
                    Solicitar este paquete
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p
            className="text-center text-sm mt-12"
            style={{ color: COLORS.boneFaint }}
          >
            {isVE
              ? "¿Estás fuera de Venezuela? Los precios se ajustan automáticamente a tu región."
              : "Prices shown in USD. Discounts available for Venezuelan market — detected automatically."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}