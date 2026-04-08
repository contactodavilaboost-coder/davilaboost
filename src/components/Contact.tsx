import { useState, createElement } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRAND, COLORS } from "../lib/brand";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  package: string;
  budget: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ENDPOINT_AQUI";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    package: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", whatsapp: "", package: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
      className: "flex items-center gap-2 transition",
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
      className: "flex items-center gap-2 transition",
      style: { color: COLORS.boneDim },
    },
    createElement(MessageCircle, { size: 16 }),
    " WhatsApp"
  );

  return (
    <section id="contacto" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: COLORS.tealLight }}>
              Contacto
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4" style={{ color: COLORS.bone }}>
            Hablemos de tu proyecto
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: COLORS.boneDim }}>
            Cuéntame qué necesitas y te responderé en menos de 24 horas con una propuesta personalizada.
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
              <input required type="text" placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
              <input required type="email" placeholder="Correo electronico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="tel" placeholder="WhatsApp" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} style={inputStyle} />
              <select required value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })} style={inputStyle}>
                <option value="">Tipo de proyecto</option>
                <option value="Landing Essential">Landing Essential</option>
                <option value="Web Business">Web Business</option>
                <option value="E-commerce Starter">E-commerce Starter</option>
                <option value="E-commerce Pro">E-commerce Pro</option>
                <option value="Sistema a medida">Sistema a medida</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </div>

            <div className="mb-4">
              <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} style={inputStyle}>
                <option value="">Presupuesto aproximado</option>
                <option value="lt200">Menos de 200$</option>
                <option value="200-500">200$ - 500$</option>
                <option value="500-1000">500$ - 1.000$</option>
                <option value="1000-2000">1.000$ - 2.000$</option>
                <option value="gt2000">Mas de 2.000$</option>
              </select>
            </div>

            <textarea
              required
              placeholder="Cuentame sobre tu proyecto..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "none", marginBottom: "24px" }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{
                backgroundColor: COLORS.teal,
                color: COLORS.bone,
                boxShadow: "0 10px 40px " + COLORS.teal + "50",
              }}
            >
              {status === "sending" ? "Enviando..." : status === "sent" ? "Mensaje enviado!" : (<><span>Enviar mensaje</span><Send size={18} /></>)}
            </button>

            {status === "error" && (
              <p className="text-sm text-center mt-4" style={{ color: "#f87171" }}>
                Hubo un error. Escribeme directo a {BRAND.email}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm" style={{ color: COLORS.boneDim }}>
            {mailLinkEl}
            {waLinkEl}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
