import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import type { PortfolioProject } from "../lib/portfolioData";
import { BRAND, COLORS } from "../lib/brand";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const buildWhatsAppLink = (p: PortfolioProject) => {
    const text = encodeURIComponent(
      `Hola Jesús! Vi el proyecto "${p.title}" (${p.categoryLabel}) en tu portafolio de DavilaBoost y me gustaría ver una demostración o cotizar algo similar.`
    );
    return `${BRAND.whatsappLink}?text=${text}`;
  };

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "#1d242a",
              borderColor: "rgba(245, 240, 230, 0.14)",
              boxShadow: `0 25px 90px -15px ${project.accentColor}40`,
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar vista previa del proyecto"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: "rgba(20, 25, 30, 0.85)",
                borderColor: "rgba(245, 240, 230, 0.15)",
                color: COLORS.bone,
              }}
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto flex-1">
              {/* Top Interactive / Screenshot Preview */}
              <div className="relative">
                <ProjectPreview
                  project={project}
                  activeImageIndex={activeImg}
                  isModal
                />

                {/* Image Switcher Pills if project has multiple real screenshots */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 shadow-xl">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          activeImg === idx
                            ? "bg-white text-slate-900 font-semibold shadow"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        Muestra {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                {/* Header & Metrics */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                        style={{
                          backgroundColor: `${project.accentColor}20`,
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}40`,
                        }}
                      >
                        {project.categoryLabel}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono border"
                        style={{
                          borderColor: "rgba(245, 240, 230, 0.12)",
                          backgroundColor: "rgba(245, 240, 230, 0.04)",
                          color: COLORS.boneDim,
                        }}
                      >
                        {project.statusBadge}
                      </span>
                    </div>

                    <h3
                      id="modal-project-title"
                      className="text-2xl sm:text-3xl font-bold tracking-tight"
                      style={{ color: COLORS.bone }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base mt-1"
                      style={{ color: COLORS.tealLight }}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Key Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2.5 sm:min-w-[290px]">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-2xl border text-center"
                        style={{
                          backgroundColor: "rgba(245, 240, 230, 0.02)",
                          borderColor: "rgba(245, 240, 230, 0.08)",
                        }}
                      >
                        <div
                          className="text-[10px] font-mono uppercase tracking-wider"
                          style={{ color: COLORS.boneFaint }}
                        >
                          {m.label}
                        </div>
                        <div
                          className="text-xs sm:text-sm font-bold mt-1 font-mono"
                          style={{ color: COLORS.bone }}
                        >
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h4
                    className="text-xs font-semibold uppercase tracking-widest mb-2.5 flex items-center gap-2"
                    style={{ color: COLORS.tealLight }}
                  >
                    <Sparkles size={14} /> Arquitectura y Solución
                  </h4>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: COLORS.boneDim }}
                  >
                    {project.fullDesc}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div>
                  <h4
                    className="text-xs font-semibold uppercase tracking-widest mb-3.5"
                    style={{ color: COLORS.tealLight }}
                  >
                    Funcionalidades Clave Implementadas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-3 p-3.5 rounded-2xl border"
                        style={{
                          backgroundColor: "rgba(245, 240, 230, 0.02)",
                          borderColor: "rgba(245, 240, 230, 0.07)",
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: project.accentColor }}
                        />
                        <span
                          className="text-xs sm:text-sm leading-snug"
                          style={{ color: COLORS.bone }}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Verified Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div>
                    <div
                      className="text-[11px] font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5"
                      style={{ color: COLORS.boneFaint }}
                    >
                      <Code2 size={13} /> Stack Tecnológico
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono border"
                          style={{
                            backgroundColor: "rgba(245, 240, 230, 0.04)",
                            borderColor: "rgba(245, 240, 230, 0.1)",
                            color: COLORS.bone,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono self-start sm:self-end"
                    style={{
                      backgroundColor: "rgba(74, 147, 150, 0.08)",
                      borderColor: "rgba(74, 147, 150, 0.25)",
                      color: COLORS.tealLight,
                    }}
                  >
                    <ShieldCheck size={15} />
                    <span>Desarrollo 100% Propio · DavilaBoost</span>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-white/10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        borderColor: `${project.accentColor}60`,
                        backgroundColor: `${project.accentColor}15`,
                        color: COLORS.bone,
                      }}
                    >
                      Probar Sistema en Vivo
                      <ExternalLink size={16} />
                    </a>
                  )}

                  <a
                    href={buildWhatsAppLink(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: COLORS.teal,
                      color: COLORS.bone,
                      boxShadow: `0 10px 35px ${COLORS.teal}60`,
                    }}
                  >
                    <MessageCircle size={17} />
                    Cotizar un Proyecto Similar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
