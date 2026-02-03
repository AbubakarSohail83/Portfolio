"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Database, Cloud, Wrench, Sparkles, ArrowRight } from "lucide-react";

type Category = "languages" | "backend" | "database" | "devops" | "ai";

interface SkillCategory {
  id: Category;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
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
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
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

        <div className="content-wrapper">
          {/* Category Tabs */}
          <nav 
            className="flex flex-wrap justify-center" 
            style={{ gap: '12px', marginBottom: '40px' }}
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center rounded-xl text-body font-medium transition-all ${
                    isActive
                      ? "bg-[var(--accent-primary)] text-white"
                      : "bg-[var(--surface-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] border border-[var(--border-primary)]"
                  }`}
                  style={{ gap: '10px', padding: '12px 20px' }}
                  aria-pressed={isActive}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Active Category Content */}
          {currentCategory && (
            <div className="card animate-fade-in" style={{ padding: '32px', marginBottom: '32px' }}>
              <div className="flex items-center" style={{ gap: '16px', marginBottom: '28px' }}>
                <div 
                  className="rounded-xl bg-[rgba(99,102,241,0.1)]"
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
                    className="rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] text-center text-body text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-all cursor-default"
                    style={{ padding: '14px' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3" style={{ gap: '20px', marginBottom: '32px' }}>
            <div className="card text-center hover-lift" style={{ padding: '24px' }}>
              <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>20+</div>
              <div className="text-body text-[var(--text-tertiary)]">Technologies</div>
            </div>
            <div className="card text-center hover-lift" style={{ padding: '24px' }}>
              <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>5</div>
              <div className="text-body text-[var(--text-tertiary)]">Domains</div>
            </div>
            <div className="card text-center hover-lift" style={{ padding: '24px' }}>
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

          {/* Expertise Areas */}
          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
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
                <div key={index} className="flex items-start" style={{ gap: '16px' }}>
                  <div 
                    className="rounded-full bg-[var(--accent-primary)] flex-shrink-0"
                    style={{ width: '10px', height: '10px', marginTop: '6px' }}
                    aria-hidden="true"
                  />
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
              aria-label="Contact Abubakar Sohail to hire a full stack developer"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
