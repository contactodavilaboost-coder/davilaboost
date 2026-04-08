import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, COLORS } from "../lib/brand";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ color: COLORS.bone }}
          >
            Davila<span style={{ color: COLORS.tealLight }}>Boost</span>
          </span>
        </div>

        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ color: COLORS.boneDim }}
        >
          <button onClick={() => scrollTo("servicios")} className="hover:opacity-100 transition">
            Servicios
          </button>
          <button onClick={() => scrollTo("paquetes")} className="hover:opacity-100 transition">
            Paquetes
          </button>
          <button onClick={() => scrollTo("proceso")} className="hover:opacity-100 transition">
            Proceso
          </button>
          <button onClick={() => scrollTo("portafolio")} className="hover:opacity-100 transition">
            Portafolio
          </button>
          <button onClick={() => scrollTo("faq")} className="hover:opacity-100 transition">
            FAQ
          </button>
        </nav>

        <button
          onClick={() => scrollTo("contacto")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: COLORS.teal,
            color: COLORS.bone,
            boxShadow: `0 0 30px ${COLORS.teal}40`,
          }}
        >
          Contáctame
          <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}