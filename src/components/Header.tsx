import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { COLORS } from "../lib/brand";
import { PORTFOLIO_PROJECTS } from "../lib/portfolioData";

const NAV_ITEMS = [
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio", badge: String(PORTFOLIO_PROJECTS.length) },
  { id: "proceso", label: "Proceso" },
  { id: "faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "backdrop-blur-xl bg-[#181e24]/85 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-left cursor-pointer"
          aria-label="Ir al inicio de DavilaBoost"
        >
          <Logo size={36} />
          <span
            className="text-xl font-bold tracking-tight font-display"
            style={{ color: COLORS.bone }}
          >
            Davila<span style={{ color: COLORS.tealLight }}>Boost</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium"
          aria-label="Navegación principal"
          style={{ color: COLORS.boneDim }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className="px-1.5 py-0.5 text-[10px] font-mono rounded-full transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: `${COLORS.tealLight}25`,
                    color: COLORS.tealLight,
                    border: `1px solid ${COLORS.tealLight}40`,
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contacto")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: COLORS.teal,
              color: COLORS.bone,
              boxShadow: `0 0 30px ${COLORS.teal}50`,
            }}
          >
            Contáctame
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border"
            style={{
              borderColor: "rgba(245, 240, 230, 0.15)",
              backgroundColor: "rgba(245, 240, 230, 0.04)",
              color: COLORS.bone,
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            aria-label="Menú móvil"
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#181e24]/95 backdrop-blur-xl px-6 pb-6"
          >
            <div className="flex flex-col gap-2 pt-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-left text-base font-medium hover:bg-white/5 transition-colors"
                  style={{ color: COLORS.bone }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className="px-2 py-0.5 text-xs font-mono rounded-full"
                      style={{
                        backgroundColor: `${COLORS.tealLight}25`,
                        color: COLORS.tealLight,
                      }}
                    >
                      {item.badge} proyectos
                    </span>
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contacto")}
                className="mt-3 w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
                style={{
                  backgroundColor: COLORS.teal,
                  color: COLORS.bone,
                }}
              >
                Hablemos de tu proyecto
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
