import {
  Activity,
  Bot,
  Building2,
  CheckCircle2,
  Clock,
  Database,
  HeartPulse,
  Layers,
  Lock,
  MessageSquare,
  Play,
  Receipt,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  UtensilsCrossed,
  WifiOff,
  Workflow,
} from "lucide-react";
import type { PortfolioProject } from "../lib/portfolioData";
import { COLORS } from "../lib/brand";

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

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        isModal ? "h-72 sm:h-96" : "h-56"
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
          <div className="px-2.5 py-0.5 rounded-md bg-black/30 border border-white/5 text-[10px] font-mono text-white/50 truncate max-w-[180px]">
            {project.liveUrl
              ? project.liveUrl.replace("https://", "")
              : `${project.id}.davilaboost.app`}
          </div>
          <span
            className="text-[10px] font-mono px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
            }}
          >
            v2.0
          </span>
        </div>

        {/* Window Content */}
        {currentImg ? (
          <div className="relative flex-1 w-full overflow-hidden bg-[#0f1317]">
            <img
              src={currentImg}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(20, 25, 30, 0.85) 100%)",
              }}
            />
          </div>
        ) : (
          <div className="relative flex-1 p-3.5 flex flex-col justify-between overflow-hidden">
            {renderCustomMockup(project)}
          </div>
        )}
      </div>
    </div>
  );
}

function renderCustomMockup(project: PortfolioProject) {
  switch (project.previewVariant) {
    case "cristian-video":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="relative flex-1 rounded-lg border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900 to-slate-950 p-3 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-sky-300 bg-sky-500/15 px-2 py-0.5 rounded-full mb-1.5">
                <Sparkles size={10} /> Showreel 4K · 60fps
              </span>
              <p className="text-xs font-semibold text-white">
                Edición de Alto Impacto & Retención
              </p>
              <p className="text-[10px] text-white/50 mt-0.5">
                Reels · YouTube · Comerciales
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-lg shadow-sky-500/20">
              <Play size={16} fill="currentColor" />
            </div>
          </div>
          {/* Timeline tracks */}
          <div className="space-y-1 bg-black/40 p-2 rounded-lg border border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-white/40 w-8">V1</span>
              <div className="h-2 flex-1 rounded bg-sky-500/50" />
              <div className="h-2 w-12 rounded bg-teal-400/50" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-white/40 w-8">SFX</span>
              <div className="h-1.5 w-16 rounded bg-amber-400/50" />
              <div className="h-1.5 flex-1 rounded bg-purple-400/40" />
            </div>
          </div>
        </div>
      );

    case "jarvis-erp":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50 font-mono">TASA BCV HOY</div>
              <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">
                Bs. Automático
              </div>
              <div className="text-[9px] text-white/40">Sync SENIAT</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50 font-mono">ESTADO POS</div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-300 mt-0.5">
                <WifiOff size={11} /> Offline PWA
              </div>
              <div className="text-[9px] text-white/40">IndexedDB Ready</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50 font-mono">INVENTARIO</div>
              <div className="text-xs font-bold text-teal-300 font-mono mt-0.5">
                Kardex Activo
              </div>
              <div className="text-[9px] text-white/40">Costo Promedio</div>
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-400/25">
            <div className="flex items-center gap-2">
              <Receipt size={14} style={{ color: COLORS.tealLight }} />
              <div>
                <div className="text-[11px] font-semibold text-white">
                  Factura Fiscal #004821 · Multimoneda
                </div>
                <div className="text-[9px] text-white/60">
                  Total: $142.50 USD / Conversión VES + IVA 16%
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              EMITIDA
            </span>
          </div>
        </div>
      );

    case "fisiosys":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/25">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal-300">
              <Lock size={11} /> E2EE AES-256-GCM Activo
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
              Historia Cifrada
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/60">Mapa Dolor EVA</span>
                <HeartPulse size={13} className="text-rose-400" />
              </div>
              <div className="space-y-1 my-1">
                <div className="flex justify-between text-[9px] text-white/70">
                  <span>Zona Lumbar L4-L5</span>
                  <span className="text-rose-400 font-mono">EVA 7/10</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-gradient-to-r from-teal-400 to-rose-500" />
                </div>
              </div>
              <div className="text-[9px] text-teal-300">Sesión #4 · Evolución +40%</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col justify-between">
              <div className="text-[10px] text-white/60">Agenda & WhatsApp</div>
              <div className="space-y-1">
                <div className="text-[10px] font-medium text-white truncate">
                  10:00 AM · Rehab. Deportiva
                </div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={10} /> Recordatorio WA enviado
                </div>
              </div>
              <div className="text-[9px] text-white/40 font-mono">Google Calendar Sync</div>
            </div>
          </div>
        </div>
      );

    case "inmogestion":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
              <div className="text-[9px] text-blue-200/60">OCUPACIÓN</div>
              <div className="text-sm font-bold text-blue-300 font-mono">94.2%</div>
              <div className="text-[9px] text-white/40">48 Deptos</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50">SERVICIOS</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">Luz / Agua OK</div>
              <div className="text-[9px] text-white/40">Al día</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50">CONTRATOS</div>
              <div className="text-xs font-bold text-amber-300 mt-0.5">Motor IA</div>
              <div className="text-[9px] text-white/40">Auto-PDF</div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 size={15} className="text-blue-400" />
              <div>
                <div className="text-[11px] font-semibold text-white">
                  Torre Los Palos Grandes · Apto 8-B
                </div>
                <div className="text-[9px] text-white/50">
                  Canon mensual pagado · Recibo #892
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              SOLVENTE
            </span>
          </div>
        </div>
      );

    case "nutririnna":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-400/20">
              <div className="text-[9px] text-pink-200/70">IMC PACIENTE</div>
              <div className="text-sm font-bold text-pink-300 font-mono">22.4</div>
              <div className="text-[9px] text-emerald-400">Rango Óptimo</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50">% GRASA</div>
              <div className="text-sm font-bold text-white font-mono">18.2%</div>
              <div className="text-[9px] text-emerald-400">-2.1% mes</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50">PLAN KCAL</div>
              <div className="text-sm font-bold text-amber-300 font-mono">1,950</div>
              <div className="text-[9px] text-white/40">Déficit Control</div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-pink-400" />
              <span className="text-[11px] text-white font-medium">
                Antropometría ISAK + Plan de Intercambios
              </span>
            </div>
            <span className="text-[9px] font-mono text-pink-300">PDF Listo</span>
          </div>
        </div>
      );

    case "restopro":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-400/25 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UtensilsCrossed size={14} className="text-orange-400" />
              <div>
                <div className="text-[11px] font-semibold text-white">
                  Comanda #108 · Mesa 4 / Delivery
                </div>
                <div className="text-[9px] text-white/60">
                  2x Burger Smash + Papas Trufadas + Bebidas
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-orange-300">
              $28.50
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
              <MessageSquare size={12} className="text-emerald-400" />
              <span className="text-[10px] text-emerald-200">
                WhatsApp Directo
              </span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Database size={12} className="text-amber-400" />
              <span className="text-[10px] text-white/70">
                Firestore Real-Time
              </span>
            </div>
          </div>
        </div>
      );

    case "precios-pro":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-400/25">
            <div className="flex items-center gap-2">
              <TrendingDown size={15} className="text-emerald-400" />
              <div>
                <div className="text-[11px] font-semibold text-white">
                  ¡Alerta de Rebaja Detectada! (-24%)
                </div>
                <div className="text-[9px] text-white/60">
                  MercadoLibre / Amazon · Bajo precio objetivo
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-400">
              $189 → $144
            </span>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-14 px-3 pt-2 pb-1 rounded-lg bg-white/[0.02] border border-white/5">
            {[78, 75, 82, 70, 68, 62, 45].map((h, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-t transition-all"
                style={{
                  height: `${h}%`,
                  backgroundColor:
                    idx === 6 ? "#10b981" : "rgba(245, 240, 230, 0.15)",
                }}
              />
            ))}
          </div>
        </div>
      );

    case "elemental":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
              <div className="text-[9px] text-cyan-200/70">ASISTENCIA HOY</div>
              <div className="text-sm font-bold text-cyan-300 font-mono">
                98.5% Activo
              </div>
              <div className="text-[9px] text-white/40">Marcaje Biométrico/Pin</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[9px] text-white/50">PUNTUALIDAD</div>
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 mt-0.5">
                <Clock size={12} /> 08:00 AM
              </div>
              <div className="text-[9px] text-white/40">Reporte Nómina</div>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between text-[10px]">
            <span className="text-white/80">Control de Turnos y Horas Extra</span>
            <ShieldCheck size={14} className="text-cyan-400" />
          </div>
        </div>
      );

    case "editor-3":
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex-1 rounded-lg bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-indigo-500/15 border border-pink-400/25 p-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-pink-300 uppercase">
                Antigravity Engine 3.0
              </div>
              <div className="text-xs font-bold text-white mt-0.5">
                Motor Modular Multimarca
              </div>
              <div className="text-[9px] text-white/50">
                Presets · Tipografía · Exportación HD
              </div>
            </div>
            <Layers size={22} className="text-pink-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
              src/engine
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
              src/skills
            </span>
            <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300">
              Brand Kits
            </span>
          </div>
        </div>
      );

    case "n8n-bots":
    default:
      return (
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex items-center justify-between gap-1.5 p-2.5 rounded-lg bg-rose-500/10 border border-rose-400/25">
            <div className="flex items-center gap-1.5">
              <Workflow size={14} className="text-rose-400" />
              <span className="text-[10px] font-mono text-white">
                Webhook → AI Agent → WhatsApp
              </span>
            </div>
            <Bot size={14} className="text-rose-300" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[10px] font-semibold text-white">IG Bot IA</div>
              <div className="text-[9px] text-white/50">
                Respuestas DM & Leads 24/7
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="text-[10px] font-semibold text-white">
                Agente RRHH
              </div>
              <div className="text-[9px] text-white/50">
                Scoring automático de CVs
              </div>
            </div>
          </div>
        </div>
      );
  }
}
