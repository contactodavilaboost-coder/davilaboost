import { Sparkles } from "lucide-react";
import type { PortfolioProject } from "../lib/portfolioData";

interface ProjectPreviewProps {
  project: PortfolioProject;
  activeImageIndex?: number;
  isModal?: boolean;
}

export function ProjectPreview({
  project,
  activeImageIndex = 0,
  isModal = false,
}: ProjectPreviewProps) {
  const hasRealImage = project.images && project.images.length > 0;
  const currentImg = hasRealImage
    ? project.images![Math.min(activeImageIndex, project.images!.length - 1)]
    : null;

  // Special Editorial Fan Layout for Vertical Social Media Flyers (Publicidad Pro)
  if (project.id === "marketing-publicidad-pro" && project.images) {
    if (isModal && currentImg) {
      return (
        <div
          className="relative w-full h-80 sm:h-[420px] overflow-hidden flex items-center justify-center p-4 select-none"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${project.accentColor}30 0%, #11161b 80%)`,
          }}
        >
          {/* Blurred ambient background of the current flyer */}
          <img
            src={currentImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-110 pointer-events-none"
          />
          <img
            src={currentImg}
            alt={project.title}
            className="relative z-10 max-h-full w-auto rounded-2xl shadow-2xl border border-white/15 object-contain transition-all duration-500"
          />
        </div>
      );
    }

    return (
      <div
        className="relative w-full h-60 overflow-hidden flex items-center justify-center px-4 pt-6 select-none"
        style={{
          background: `radial-gradient(circle at 50% 25%, ${project.accentColor}28 0%, #14191f 80%)`,
        }}
      >
        <div className="relative flex items-center justify-center w-full max-w-md h-full">
          {/* Left flyer */}
          <img
            src={project.images[1]}
            alt="Flyer muestra 2"
            loading="lazy"
            className="w-28 sm:w-32 aspect-[4/5] object-cover rounded-xl border border-white/15 shadow-xl -rotate-6 -mr-6 translate-y-3 opacity-85 group-hover:-rotate-12 group-hover:-translate-x-2 transition-all duration-500"
          />
          {/* Center main flyer */}
          <img
            src={project.images[0]}
            alt="Flyer muestra principal"
            loading="lazy"
            className="relative z-10 w-32 sm:w-36 aspect-[4/5] object-cover rounded-xl border border-white/25 shadow-2xl group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500"
          />
          {/* Right flyer */}
          <img
            src={project.images[2]}
            alt="Flyer muestra 3"
            loading="lazy"
            className="w-28 sm:w-32 aspect-[4/5] object-cover rounded-xl border border-white/15 shadow-xl rotate-6 -ml-6 translate-y-3 opacity-85 group-hover:rotate-12 group-hover:translate-x-2 transition-all duration-500"
          />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(20, 25, 30, 0.92) 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        isModal ? "h-72 sm:h-96" : "h-60"
      }`}
      style={{
        background: `radial-gradient(circle at 20% 20%, ${project.accentColor}28 0%, #151b20 75%)`,
      }}
    >
      {/* Ambient grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${project.accentColor}30 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}30 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Browser / App Window Chrome */}
      <div className="absolute inset-x-3 top-3 bottom-0 flex flex-col rounded-t-xl border border-b-0 border-white/10 bg-[#14191e]/95 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:translate-y-[-2px]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#1b2228]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="px-2.5 py-0.5 rounded-md bg-black/30 border border-white/5 text-[10px] font-mono text-white/50 truncate max-w-[220px]">
            {project.liveUrl
              ? project.liveUrl.replace("https://", "").replace("/?demo=true", "")
              : `${project.id}.davilaboost.local`}
          </div>
          <span
            className="text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
            }}
          >
            <Sparkles size={9} />
            {project.statusType === "live" ? "LIVE" : "PRO"}
          </span>
        </div>

        {/* Window Content */}
        {currentImg ? (
          <div className="relative flex-1 w-full overflow-hidden bg-[#0f1317]">
            <img
              src={currentImg}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 65%, rgba(20, 25, 30, 0.75) 100%)",
              }}
            />
          </div>
        ) : project.previewVariant === "n8n-bots" ? (
          <div className="relative flex-1 w-full overflow-hidden bg-[#0d1217] p-3.5 sm:p-4 flex flex-col justify-between font-mono">
            {/* Top live execution status bar */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-semibold text-emerald-300 tracking-tight">
                  n8n v2.30.6 · Execution #5217: SUCCESS (2.1s)
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                WhatsApp → Odoo CRM
              </span>
            </div>

            {/* Node pipeline diagram */}
            <div className="my-auto py-2 grid grid-cols-4 gap-2 items-center">
              <div className="p-2.5 rounded-xl bg-[#162029] border border-emerald-500/40 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="text-[9px] text-emerald-400 uppercase">Webhook</div>
                <div className="text-xs font-bold text-white mt-0.5 truncate">Evolution API</div>
                <div className="text-[9px] text-white/50 mt-1 truncate">WA Message In</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#162029] border border-teal-400/40 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="text-[9px] text-teal-300 uppercase">AI Agent</div>
                <div className="text-xs font-bold text-white mt-0.5 truncate">Gemini 2.0</div>
                <div className="text-[9px] text-white/50 mt-1 truncate">JSON + PDF OCR</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#162029] border border-indigo-400/40 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="text-[9px] text-indigo-300 uppercase">Subworkflow</div>
                <div className="text-xs font-bold text-white mt-0.5 truncate">Odoo XML-RPC</div>
                <div className="text-[9px] text-white/50 mt-1 truncate">Dedupe & Create</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#162029] border border-amber-400/40 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="text-[9px] text-amber-300 uppercase">Output</div>
                <div className="text-xs font-bold text-white mt-0.5 truncate">Lead + Reply</div>
                <div className="text-[9px] text-emerald-400 mt-1 truncate">✓ Synced 100%</div>
              </div>
            </div>

            {/* Bottom terminal log */}
            <div className="px-3 py-2 rounded-lg bg-black/50 border border-white/10 flex items-center justify-between text-[10px] text-white/70">
              <span className="truncate">
                <strong className="text-emerald-400">[ODOO_CRM]</strong> Lead creado · RIF validado · Orden PDF auditada
              </span>
              <span className="text-emerald-400 font-semibold ml-2 flex-shrink-0">200 OK</span>
            </div>
          </div>
        ) : project.previewVariant === "odoo-kamaleon" ? (
          <div className="relative flex-1 w-full overflow-hidden bg-[#0f131c] p-3.5 sm:p-4 flex flex-col justify-between font-mono">
            {/* Top ERP Navbar */}
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 border border-indigo-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-xs font-bold text-white tracking-wide">
                  KAMALEON ERP · ODOO 18
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  BCV Dual USD/Bs
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                  OWL 2.0 POS
                </span>
              </div>
            </div>

            {/* Middle ERP Dashboard Cards */}
            <div className="grid grid-cols-3 gap-2 my-auto py-2">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[9px] text-indigo-300 uppercase">POS Teclado (0% Mouse)</div>
                <div className="text-sm font-bold text-white mt-0.5">180s → 22s</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">F6 · F8 · F10 Activos</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[9px] text-indigo-300 uppercase">Motor Comisiones</div>
                <div className="text-sm font-bold text-white mt-0.5">7% · 5% · 2%</div>
                <div className="text-[9px] text-amber-300 mt-0.5">Cálculo Automático</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[9px] text-indigo-300 uppercase">Rutas & Catálogo</div>
                <div className="text-sm font-bold text-white mt-0.5">XML-RPC Sync</div>
                <div className="text-[9px] text-sky-300 mt-0.5">Docker + PG15 + SSL</div>
              </div>
            </div>

            {/* Bottom Invoice Status Pill Bar */}
            <div className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-[10px]">
              <span className="text-white/75 truncate">
                INV/2026/0842 · Pago Móvil BCV · Comisión 7% (≤20 días)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold flex-shrink-0">
                ● Pagado
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
