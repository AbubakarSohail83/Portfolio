"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink, ChevronRight, Layers, ArrowRight } from "lucide-react";
import { projects, featuredProjects, type Project } from "@/utils/constants";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="card card-hover-glow overflow-hidden hover-lift h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Header */}
      <div className="flex-1" style={{ padding: '28px', paddingBottom: '0' }}>
        <div className="flex items-start justify-between" style={{ gap: '12px', marginBottom: '16px' }}>
          <div className="flex-1">
            <div className="flex items-center" style={{ gap: '12px', marginBottom: '12px' }}>
              {/* SEO: Project title as H3 for semantic structure */}
              <h3 className="text-title text-[var(--text-primary)]">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] hover:bg-[var(--surface-tertiary)] transition-all"
                  style={{ padding: '8px' }}
                  aria-label={`Visit ${project.title} - Software Engineering Project by Abubakar Sohail`}
                  title={`${project.title} - Live Project`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <span className="badge">
              {project.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-body text-[var(--text-secondary)] leading-relaxed"
          style={{ marginBottom: '20px' }}
        >
          {project.description}
        </p>

        {/* Impact highlight - vibrant gradient box */}
        <div 
          className="impact-box-vibrant flex items-center rounded-xl transition-shadow duration-300"
          style={{ gap: '12px', padding: '14px 18px', marginBottom: '20px' }}
        >
          <Layers className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0" aria-hidden="true" />
          <span className="text-body font-medium gradient-text">
            {project.impact}
          </span>
        </div>

        {/* Details Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-body text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          style={{ gap: '8px', marginBottom: '16px' }}
          aria-expanded={isExpanded}
        >
          <ChevronRight
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
            aria-hidden="true"
          />
          {isExpanded ? "Hide details" : "View details"}
        </button>

        <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', overflow: 'hidden' }}
          >
            {project.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start text-body text-[var(--text-secondary)] leading-relaxed"
                style={{ gap: '12px' }}
              >
                <span 
                  className="rounded-full bg-[var(--text-muted)] flex-shrink-0"
                  style={{ width: '5px', height: '5px', marginTop: '8px' }}
                  aria-hidden="true"
                />
                {detail}
              </motion.li>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
      </div>

      {/* Technologies */}
      <div 
        className="border-t border-[var(--border-muted)] mt-auto"
        style={{ padding: '20px 28px' }}
      >
        <div className="flex flex-wrap" style={{ gap: '8px' }}>
          {project.technologies.slice(0, isExpanded ? undefined : 5).map((tech, i) => (
            <span key={i} className="chip">
              {tech}
            </span>
          ))}
          {!isExpanded && project.technologies.length > 5 && (
            <span className="chip">+{project.technologies.length - 5}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section relative overflow-hidden bg-[var(--surface-secondary)]">
      <Section3DBackground variant="projects" className="z-0 opacity-40" />
      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <Briefcase className="w-4 h-4" />
              Projects
            </div>
            {/* SEO: H2 with keyword variation for project/portfolio searches */}
            <h2 className="section-title">
              Production-Scale <span className="gradient-text">Applications</span>
            </h2>
            {/* SEO: Description targeting tech stack and scale keywords */}
            <p className="section-description">
              High-performance web applications built with Node.js, Ruby on Rails, React, and cloud infrastructure
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid - stagger entrance */}
        <div className="content-wrapper">
          <AnimatedSection mode="stagger" className="grid md:grid-cols-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </AnimatedSection>

          {/* Toggle Button */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
              aria-label={showAll ? "Show featured projects only" : `View all ${projects.length} software engineering projects`}
            >
              {showAll ? "Show Featured Only" : `View All Projects (${projects.length})`}
            </button>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{ marginBottom: '32px' }}>
            {[
              { value: `${projects.length}`, label: "Projects Delivered" },
              { value: "10+", label: "Technologies Used" },
              { value: "5+", label: "Industries Served" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="card stat-card-vibrant card-hover-glow text-center hover-lift" style={{ padding: '24px' }}>
                <div className="text-3xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div className="text-body text-[var(--text-tertiary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* SEO: Internal linking with descriptive anchor text */}
          <div className="text-center">
            <Link 
              href="#skills" 
              className="btn-secondary inline-flex"
              aria-label="View Abubakar Sohail's technical skills and expertise"
            >
              View Technical Skills
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
