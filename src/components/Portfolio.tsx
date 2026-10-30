import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  ExternalLink,
  Eye,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { COLORS } from "../lib/brand";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategoryId,
  type PortfolioProject,
} from "../lib/portfolioData";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectModal } from "./ProjectModal";

const CATEGORY_ICONS: Record<PortfolioCategoryId, LucideIcon> = {
  all: Layers,
  websites: Globe,
  gestion: Briefcase,
  "pc-lab": Cpu,
};

const SECTION_GROUPS: {
  id: Exclude<PortfolioCategoryId, "all">;
  badge: string;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "websites",
    badge: "01 · Websites & E-Commerce",
    title: "Sitios Web, Landings & Tiendas Online",
    subtitle:
      "Experiencias web veloces, adaptables a móvil, extraídas desde Figma o diseñadas a medida para convertir visitantes en clientes.",
  },
  {
    id: "gestion",
    badge: "02 · Plataformas Especializadas por Industria",
    title: "Sistemas de Gestión Clínica, Inmobiliaria y Gastronómica",
    subtitle:
      "Plataformas verticales en producción para fisioterapia (FisioSys), nutrición (NutriRinna), inmobiliarias (InmoGestión) y restaurantes (Sistema El Valera).",
  },
  {
    id: "pc-lab",
    badge: "03 · Proyectos en PC · Laboratorio & Automatización IA",
    title: "Scrapers Inteligentes, Motores Creativos & Bots n8n",
    subtitle:
      "Soluciones desarrolladas en entorno local que combinan Python, Playwright, motores en TypeScript y flujos autónomos con IA.",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryId>("all");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const visibleGroups =
    activeCategory === "all"
      ? SECTION_GROUPS
      : SECTION_GROUPS.filter((g) => g.id === activeCategory);

  return (
    <section id="portafolio" className="py-32 px-6 relative">
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.tealLight} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full border"
              style={{
                color: COLORS.tealLight,
                borderColor: `${COLORS.tealLight}35`,
                backgroundColor: `${COLORS.tealLight}10`,
              }}
            >
              Portafolio & Ecosistema
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-5"
            style={{ color: COLORS.bone }}
          >
            Soluciones reales construidas a medida
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p
            className="text-center max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
            style={{ color: COLORS.boneDim }}
          >
            Explora mis desarrollos divididos por área: desde{" "}
            <span style={{ color: COLORS.bone }}>Websites y E-Commerce</span>,
            hasta <span style={{ color: COLORS.bone }}>Sistemas ERP/Odoo</span>,{" "}
            <span style={{ color: COLORS.bone }}>Gestiones de Negocios</span> y{" "}
            <span style={{ color: COLORS.bone }}>Proyectos de Automatización en PC</span>.
          </p>
        </Reveal>

        {/* Interactive Category Filter Bar */}
        <Reveal delay={240}>
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-20"
            role="tablist"
            aria-label="Categorías del portafolio"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id];
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer"
                  style={{
                    color: isActive ? COLORS.bone : COLORS.boneDim,
                    backgroundColor: isActive
                      ? "transparent"
                      : "rgba(245, 240, 230, 0.03)",
                    border: `1px solid ${
                      isActive
                        ? `${COLORS.tealLight}70`
                        : "rgba(245, 240, 230, 0.08)"
                    }`,
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePortfolioTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealSoft} 100%)`,
                        boxShadow: `0 8px 25px ${COLORS.teal}50`,
                      }}
                    />
                  )}
                  <Icon
                    size={15}
                    style={{
                      color: isActive ? COLORS.bone : COLORS.tealLight,
                    }}
                  />
                  <span>{cat.shortLabel}</span>
                  <span
                    className="px-1.5 py-0.5 rounded-full text-[10px] font-mono"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(245, 240, 230, 0.16)"
                        : "rgba(245, 240, 230, 0.06)",
                      color: isActive ? COLORS.bone : COLORS.boneFaint,
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Divided Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="space-y-24"
          >
            {visibleGroups.map((group) => {
              const groupProjects = PORTFOLIO_PROJECTS.filter(
                (p) => p.category === group.id
              );
              const GroupIcon = CATEGORY_ICONS[group.id];

              return (
                <div key={group.id} className="space-y-8">
                  {/* Area Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2" style={{ color: COLORS.tealLight }}>
                        <GroupIcon size={14} />
                        <span>{group.badge}</span>
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{ color: COLORS.bone }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm max-w-md leading-relaxed"
                      style={{ color: COLORS.boneDim }}
                    >
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {groupProjects.map((project, idx) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={idx}
                        onSelect={() => setSelectedProject(project)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Case Study / Demo Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  onSelect: () => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.06,
      }}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${project.title}`}
      className="group relative flex flex-col rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
      style={{
        backgroundColor: "rgba(245, 240, 230, 0.02)",
        borderColor: "rgba(245, 240, 230, 0.08)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.accentColor}55`;
        e.currentTarget.style.boxShadow = `0 22px 60px -15px ${project.accentColor}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(245, 240, 230, 0.08)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Top Preview Window */}
      <div className="relative">
        <ProjectPreview project={project} />

        {/* Status Pill Top Left */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border shadow-lg"
            style={{
              backgroundColor: "rgba(18, 23, 28, 0.85)",
              borderColor: `${project.accentColor}50`,
              color: COLORS.bone,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.accentColor }}
            />
            {project.statusBadge}
          </span>
        </div>

        {/* Hover Action Floating Badge */}
        <div
          className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 border"
          style={{
            backgroundColor: "rgba(18, 23, 28, 0.88)",
            borderColor: "rgba(245, 240, 230, 0.2)",
            color: COLORS.bone,
          }}
        >
          <Eye size={13} style={{ color: project.accentColor }} />
          <span>Explorar sistema</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className="text-[11px] font-mono uppercase tracking-wider font-semibold"
              style={{ color: project.accentColor }}
            >
              {project.categoryLabel}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                style={{ color: COLORS.tealLight }}
              >
                Demo Live <ExternalLink size={12} />
              </a>
            )}
          </div>

          <h4
            className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5 group-hover:text-white transition-colors"
            style={{ color: COLORS.bone }}
          >
            {project.title}
          </h4>

          <p
            className="text-xs sm:text-sm font-medium mb-3"
            style={{ color: COLORS.tealLight }}
          >
            {project.subtitle}
          </p>

          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: COLORS.boneDim }}
          >
            {project.shortDesc}
          </p>
        </div>

        {/* Metrics + Tech Stack Footer */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          {/* Mini Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="px-2.5 py-2 rounded-xl border"
                style={{
                  backgroundColor: "rgba(245, 240, 230, 0.02)",
                  borderColor: "rgba(245, 240, 230, 0.06)",
                }}
              >
                <div
                  className="text-[10px] font-mono uppercase truncate"
                  style={{ color: COLORS.boneFaint }}
                >
                  {m.label}
                </div>
                <div
                  className="text-xs font-bold font-mono mt-0.5 truncate"
                  style={{ color: COLORS.bone }}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badges & CTA */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border"
                  style={{
                    backgroundColor: "rgba(245, 240, 230, 0.03)",
                    borderColor: "rgba(245, 240, 230, 0.08)",
                    color: COLORS.boneDim,
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono"
                  style={{ color: COLORS.boneFaint }}
                >
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <span
              className="inline-flex items-center gap-1 text-xs font-semibold flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
              style={{ color: COLORS.bone }}
            >
              Ficha técnica
              <ArrowUpRight size={15} style={{ color: project.accentColor }} />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
