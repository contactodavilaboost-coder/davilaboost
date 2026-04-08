import { MessageCircle } from "lucide-react";
import { createElement } from "react";
import { BRAND } from "../lib/brand";

export function WhatsAppFloat() {
  return createElement(
    "a",
    {
      href: BRAND.whatsappLink,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Contactar por WhatsApp",
      className:
        "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
      style: {
        backgroundColor: "#25D366",
        boxShadow:
          "0 10px 30px rgba(37, 211, 102, 0.5), 0 0 0 4px rgba(37, 211, 102, 0.15)",
      },
    },
    createElement(MessageCircle, { size: 26, color: "white", fill: "white" })
  );
}
