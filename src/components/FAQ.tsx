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
    q: "¿El dominio y hosting están incluidos en el precio?",
    a: "Depende del paquete. El Web Business y superiores incluyen el primer año de dominio. El hosting en Netlify/Vercel es gratuito en los paquetes base. Si necesitas hosting premium o quieres manejarlo por tu cuenta, lo conversamos.",
  },
  {
    q: "¿Cuánto tardas en entregar?",
    a: "Depende del paquete: desde 5 días hábiles para una landing hasta 5 semanas para un e-commerce completo. El tiempo empieza a contar cuando recibo todo el contenido (textos, imágenes, logo).",
  },
  {
    q: "¿Cómo funcionan los pagos?",
    a: "50% por adelantado para reservar el proyecto y comenzar, y 50% al momento de la entrega. Acepto Pago Móvil, Zelle, Binance Pay y transferencia internacional.",
  },
  {
    q: "¿Qué pasa si quiero cambios después de la entrega?",
    a: "Todos los paquetes incluyen rondas de cambios durante el desarrollo. Después de entregado, los cambios se cubren con un plan de mantenimiento mensual o se cobran aparte según el alcance.",
  },
  {
    q: "¿Trabajas con clientes fuera de Venezuela?",
    a: "¡Por supuesto! Trabajo con clientes de toda Latinoamérica, Estados Unidos y Europa. Los precios internacionales se ajustan al mercado pero siguen siendo muy competitivos.",
  },
  {
    q: "¿Puedo administrar yo mismo la página después?",
    a: "Sí, los paquetes de e-commerce incluyen panel de administración para que gestiones productos, pedidos y contenido. Además te doy una capacitación para que quedes cómodo usándolo.",
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