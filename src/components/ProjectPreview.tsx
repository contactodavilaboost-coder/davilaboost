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
        {currentImg && (
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
        )}
      </div>
    </div>
  );
}
