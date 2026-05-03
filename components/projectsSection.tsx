"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, ChevronRight, ExternalLink, Layers3 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";
import { featuredProjects, projects, type Project } from "@/utils/constants";

const palette = [
  "project-card--a",
  "project-card--b",
  "project-card--c",
  "project-card--d",
  "project-card--e",
  "project-card--f",
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const className = palette[index % palette.length];

  return (
    <motion.article
      layout
      className={`project-card ${className}`}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      whileHover={{ y: -12, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
    >
      <div className="project-card__media" aria-hidden="true">
        <div className="project-card__glyph">{project.title.slice(0, 2)}</div>
        <div className="project-card__index">{String(index + 1).padStart(2, "0")}</div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.type}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__impact">
          <Layers3 className="h-4 w-4" aria-hidden="true" />
          {project.impact}
        </div>

        <button
          type="button"
          className="project-card__toggle"
          onClick={() => setIsExpanded((value) => !value)}
          aria-expanded={isExpanded}
        >
          <ChevronRight className={isExpanded ? "rotate-90" : ""} aria-hidden="true" />
          {isExpanded ? "Collapse system notes" : "Open system notes"}
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              className="project-card__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="project-card__tech">
          {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section projects-lab relative overflow-hidden">
      <Section3DBackground variant="projects" className="z-0 opacity-[0.14]" />
      <div className="projects-lab__contours" aria-hidden="true" />

      <div className="container relative z-10">
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <Briefcase className="h-4 w-4" />
              Work
            </div>
            <h2 className="section-title">
              Selected systems, <span className="gradient-text">built to move</span>
            </h2>
            <p className="section-description">
              Client and product work across marketplaces, recruitment, HR,
              automotive platforms, analytics pipelines, and AI workflows.
            </p>
          </div>
        </AnimatedSection>

        <motion.div layout className="project-deck">
          <AnimatePresence initial={false}>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="project-footer">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="btn-secondary"
            aria-label={showAll ? "Show featured projects only" : `View all ${projects.length} projects`}
          >
            {showAll ? "Show featured" : `View all ${projects.length}`}
          </button>
          <Link href="#skills" className="btn-primary">
            Stack map
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
