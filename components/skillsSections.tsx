"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Cloud, Wrench, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";

type Category = "languages" | "backend" | "database" | "devops" | "ai";

interface SkillCategory {
  id: Category;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages & Frontend",
    shortLabel: "Languages",
    icon: Code2,
    description: "Core languages and frontend technologies",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Ruby",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    shortLabel: "Backend",
    icon: Database,
    description: "Server-side frameworks and API design",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Ruby on Rails",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    id: "database",
    label: "Databases",
    shortLabel: "Databases",
    icon: Database,
    description: "Data persistence and caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "Snowflake",
      "DynamoDB",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    shortLabel: "DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment",
    skills: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "ArgoCD",
      "Nginx",
      "Linux/Unix",
      "Git",
    ],
  },
  {
    id: "ai",
    label: "AI & Analytics",
    shortLabel: "AI",
    icon: Sparkles,
    description: "AI integrations and data analytics",
    skills: [
      "OpenAI API",
      "Gemini API",
      "LLM Integration",
      "Sentiment Analysis",
      "Looker Studio",
      "Datadog",
      "Sentry",
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("languages");

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section relative overflow-hidden">
      <Section3DBackground variant="skills" className="z-0 opacity-40" />
      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <Wrench className="w-4 h-4" />
              Skills
            </div>
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            {/* SEO: Description targeting technology-specific searches */}
            <p className="section-description">
              Full stack developer proficient in TypeScript, React, GraphQL, PostgreSQL, Docker, and Kubernetes
            </p>
          </div>
        </AnimatedSection>

        <div className="content-wrapper">
          {/* Category Tabs */}
          <AnimatedSection mode="single">
          <nav 
            className="flex flex-wrap justify-center" 
            style={{ gap: '12px', marginBottom: '40px' }}
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center rounded-xl text-body font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--accent-primary)] text-white"
                      : "bg-[var(--surface-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] border border-[var(--border-primary)]"
                  }`}
                  style={{ gap: '10px', padding: '12px 20px' }}
                  aria-pressed={isActive}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.shortLabel}</span>
                </motion.button>
              );
            })}
          </nav>
          </AnimatedSection>

          {/* Active Category Content - slide on tab change */}
          <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -24, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="card card-hover-glow"
              style={{ padding: '32px', marginBottom: '32px' }}
            >
              <div className="flex items-center" style={{ gap: '16px', marginBottom: '28px' }}>
                <div 
                  className="rounded-xl bg-gradient-to-br from-[rgba(99,102,241,0.15)] to-[rgba(139,92,246,0.1)] border border-[rgba(99,102,241,0.15)]"
                  style={{ padding: '14px' }}
                >
                  <currentCategory.icon className="w-6 h-6 text-[var(--accent-primary)]" aria-hidden="true" />
                </div>
                <div>
                  {/* SEO: H3 for category name */}
                  <h3 
                    className="font-semibold text-[var(--text-primary)] text-xl"
                    style={{ marginBottom: '4px' }}
                  >
                    {currentCategory.label}
                  </h3>
                  <p className="text-body text-[var(--text-tertiary)]">
                    {currentCategory.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: '12px' }}>
                {currentCategory.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] text-center text-body text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] hover:shadow-[0_0_20px_-6px_rgba(99,102,241,0.25)] transition-all duration-300 cursor-default"
                    style={{ padding: '14px' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Stats */}
          <div className="grid grid-cols-3" style={{ gap: '20px', marginBottom: '32px' }}>
            <div className="card stat-card-vibrant card-hover-glow text-center hover-lift" style={{ padding: '24px' }}>
              <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>20+</div>
              <div className="text-body text-[var(--text-tertiary)]">Technologies</div>
            </div>
            <div className="card stat-card-vibrant card-hover-glow text-center hover-lift" style={{ padding: '24px' }}>
              <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>5</div>
              <div className="text-body text-[var(--text-tertiary)]">Domains</div>
            </div>
            <div className="card stat-card-vibrant card-hover-glow text-center hover-lift" style={{ padding: '24px' }}>
              <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>4+</div>
              <div className="text-body text-[var(--text-tertiary)]">Years</div>
            </div>
          </div>

          {/* SEO: H3 subheading with expertise keywords */}
          <h3 
            className="text-title text-[var(--text-primary)] text-center"
            style={{ marginBottom: '24px' }}
          >
            Backend-Focused Full Stack Engineer
          </h3>

          {/* Expertise Areas - vibrant accent */}
          <div className="card card-hover-glow" style={{ padding: '32px', marginBottom: '32px' }}>
            <h4 
              className="font-semibold text-[var(--text-primary)] text-xl text-center"
              style={{ marginBottom: '28px' }}
            >
              Areas of Deep Expertise
            </h4>
            <div className="grid sm:grid-cols-2" style={{ gap: '24px' }}>
              {[
                {
                  title: "API-First Architecture",
                  description: "Scalable REST & GraphQL APIs, microservices, and event-driven systems for high loads",
                },
                {
                  title: "Database Optimization",
                  description: "Query optimization, indexing, and Redis caching for performance-critical applications",
                },
                {
                  title: "Cloud Infrastructure",
                  description: "AWS services, containerization with Docker, and CI/CD for reliable deployments",
                },
                {
                  title: "AI/LLM Integration",
                  description: "OpenAI and Gemini APIs for sentiment analysis and intelligent automation",
                },
              ].map((area, index) => (
                <div key={index} className="expertise-item-vibrant">
                  <div>
                    <h5 
                      className="font-medium text-[var(--text-primary)] text-lg"
                      style={{ marginBottom: '8px' }}
                    >
                      {area.title}
                    </h5>
                    <p className="text-body text-[var(--text-tertiary)] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO: Internal linking with descriptive anchor text */}
          <div className="text-center">
            <Link 
              href="#contact" 
              className="btn-primary inline-flex"
              aria-label="Contact Abubakar Sohail to discuss opportunities"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
