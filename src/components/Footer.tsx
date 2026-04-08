import { Instagram, Mail, Globe } from "lucide-react";
import { createElement } from "react";
import { Logo } from "./Logo";
import { BRAND, COLORS } from "../lib/brand";

export function Footer() {
  const instagramLink = createElement(
    "a",
    {
      href: BRAND.instagram,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "transition hover:opacity-100",
    },
    createElement(Instagram, { size: 18 })
  );

  const emailLink = createElement(
    "a",
    {
      href: "mailto:" + BRAND.email,
      className: "transition hover:opacity-100",
    },
    createElement(Mail, { size: 18 })
  );

  const whatsappLink = createElement(
    "a",
    {
      href: BRAND.whatsappLink,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "transition hover:opacity-100",
    },
    createElement(Globe, { size: 18 })
  );

  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ borderColor: "rgba(245, 240, 230, 0.05)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <div className="font-semibold" style={{ color: COLORS.bone }}>
              Davila<span style={{ color: COLORS.tealLight }}>Boost</span>
            </div>
            <div className="text-xs" style={{ color: COLORS.boneFaint }}>
              Automatiza tu negocio. Gana tiempo. Vive mejor.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4" style={{ color: COLORS.boneFaint }}>
          {instagramLink}
          {emailLink}
          {whatsappLink}
        </div>

        <div className="text-xs" style={{ color: COLORS.boneFaint }}>
          © 2026 DavilaBoost. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
