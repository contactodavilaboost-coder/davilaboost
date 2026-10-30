import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "¿Pueden desarrollar mi página si ya tengo el diseño en Figma?",
    a: "¡Sí! Como en el caso de Elemental, si ya cuentas con un diseño en Figma lo extraemos y maquetamos pixel-perfect a código limpio, responsive y optimizado para producción.",
  },
  {
    q: "¿Cuánto tardas en entregar un proyecto?",
    a: "Depende del alcance: desde pocos días hábiles para una landing page o portafolio hasta pocas semanas para un e-commerce completo, sistema de gestión o implementación de ERP.",
  },
  {
    q: "¿Cómo funcionan las cotizaciones y pagos?",
    a: "Evaluamos tu requerimiento sin costo y te entregamos una propuesta clara a medida. Trabajamos con 50% para iniciar y 50% contra entrega (Pago Móvil, Zelle, Binance Pay o transferencia internacional).",
  },
  {
    q: "¿Qué pasa si necesito cambios o soporte después de la entrega?",
    a: "Todos los desarrollos incluyen rondas de revisión durante la construcción y soporte inicial. Además ofrecemos planes de mantenimiento continuo o mejoras evolutivas según crezca tu negocio.",
  },
  {
    q: "¿Trabajas con clientes dentro y fuera de Venezuela?",
    a: "¡Por supuesto! Desarrollo soluciones tanto adaptadas al mercado venezolano (tasas BCV automáticas, facturación fiscal, POS Offline) como para clientes en Latinoamérica, EE.UU. y Europa.",
  },
  {
    q: "¿Puedo autoadministrar mi web o sistema después?",
    a: "Sí, entregamos paneles administrativos intuitivos y te capacitamos paso a paso para que gestiones tus productos, clientes, inventario o contenido con total independencia.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              FAQ
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-16"
            style={{ color: COLORS.bone }}
          >
            Preguntas frecuentes
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className="border rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  borderColor: "rgba(245, 240, 230, 0.1)",
                  backgroundColor: "rgba(245, 240, 230, 0.02)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(245, 240, 230, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(245, 240, 230, 0.1)";
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span
                    className="font-medium pr-4"
                    style={{ color: COLORS.bone }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                    style={{ color: COLORS.boneDim }}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ color: COLORS.boneDim }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
