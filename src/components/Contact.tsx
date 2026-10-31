import { useState, createElement } from "react";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRAND, COLORS } from "../lib/brand";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  package: string;
  message: string;
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola Jesús! Te escribo desde el portafolio de *DavilaBoost*:`,
      ``,
      `• *Nombre:* ${form.name}`,
      `• *Correo:* ${form.email}`,
      form.whatsapp ? `• *WhatsApp:* ${form.whatsapp}` : null,
      `• *Tipo de proyecto:* ${form.package}`,
      `• *Detalles:* ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `${BRAND.whatsappLink}?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "12px",
    backgroundColor: "rgba(245, 240, 230, 0.03)",
    border: "1px solid rgba(245, 240, 230, 0.1)",
    color: COLORS.bone,
    outline: "none",
    transition: "all 300ms",
    fontSize: "14px",
  };

  const mailLinkEl = createElement(
    "a",
    {
      href: "mailto:" + BRAND.email,
      className: "flex items-center gap-2 transition hover:text-white",
      style: { color: COLORS.boneDim },
    },
    createElement(Mail, { size: 16 }),
    " " + BRAND.email
  );

  const waLinkEl = createElement(
    "a",
    {
      href: BRAND.whatsappLink,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-center gap-2 transition hover:text-white",
      style: { color: COLORS.boneDim },
    },
    createElement(MessageCircle, { size: 16 }),
    " WhatsApp Directo"
  );

  return (
    <section id="contacto" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: COLORS.tealLight }}
            >
              Contacto
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4"
            style={{ color: COLORS.bone }}
          >
            Hablemos de tu proyecto
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="text-center mb-16 max-w-xl mx-auto"
            style={{ color: COLORS.boneDim }}
          >
            Cuéntame qué necesitas construir o automatizar y te responderé de
            inmediato con una propuesta a medida.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-3xl border backdrop-blur-xl"
            style={{
              borderColor: "rgba(245, 240, 230, 0.1)",
              backgroundColor: "rgba(245, 240, 230, 0.02)",
              boxShadow: "0 0 80px " + COLORS.teal + "15",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                required
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                required
                type="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="Tu WhatsApp (opcional)"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                style={inputStyle}
              />
              <select
                required
                value={form.package}
                onChange={(e) => setForm({ ...form, package: e.target.value })}
                style={inputStyle}
              >
                <option value="">Tipo de proyecto</option>
                <option value="Website / Landing / E-Commerce">
                  Website / Landing / E-Commerce
                </option>
                <option value="Diseño Figma a Código Web">
                  Diseño Figma a Código Web
                </option>
                <option value="Plataforma de Gestión (Clínica, Inmobiliaria, Restaurante)">
                  Plataforma de Gestión a Medida
                </option>
                <option value="Automatización IA (n8n + WhatsApp API + CRM)">
                  Automatización IA (n8n + WhatsApp API + CRM)
                </option>
                <option value="Implementación / Desarrollo Módulos Odoo 18 ERP">
                  Implementación / Desarrollo Módulos Odoo 18 ERP
                </option>
                <option value="Dirección de Arte IA / Flyers / Estudio Creativo">
                  Dirección de Arte IA / Estudio Creativo
                </option>
                <option value="Otro / Consulta General">
                  Otro / Consulta General
                </option>
              </select>
            </div>

            <textarea
              required
              placeholder="Cuéntame sobre tu negocio o el sistema que necesitas..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "none", marginBottom: "24px" }}
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: COLORS.teal,
                color: COLORS.bone,
                boxShadow: "0 10px 40px " + COLORS.teal + "50",
              }}
            >
              <span>Enviar propuesta por WhatsApp</span>
              <Send size={18} />
            </button>

            {sent && (
              <div
                className="mt-4 p-3.5 rounded-2xl border flex items-center justify-center gap-2 text-xs sm:text-sm"
                style={{
                  backgroundColor: "rgba(74, 147, 150, 0.12)",
                  borderColor: "rgba(74, 147, 150, 0.3)",
                  color: COLORS.bone,
                }}
              >
                <CheckCircle2 size={16} style={{ color: COLORS.tealLight }} />
                <span>
                  ¡Listo! Se abrió WhatsApp con el resumen de tu solicitud. También puedes escribirme a {BRAND.email}.
                </span>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={400}>
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm"
            style={{ color: COLORS.boneDim }}
          >
            {mailLinkEl}
            {waLinkEl}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
