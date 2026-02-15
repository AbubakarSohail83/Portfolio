"use client";

import Link from "next/link";
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "freelance";
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Devsinc",
    role: "Senior Software Engineer",
    period: "2023 – Present",
    location: "Hybrid | Lahore, Pakistan",
    type: "full-time",
    achievements: [
      "Architected backend systems for multi-tenant platforms serving thousands of international users",
      "Built high-performance REST and GraphQL APIs with 20-30% response time improvements",
      "Integrated AI/LLM workflows and automation pipelines for data-driven features",
      "Implemented WebSocket-based real-time features supporting hundreds of concurrent connections",
      "Optimized database queries and Redis caching strategies for measurable performance gains",
    ],
    technologies: ["Node.js", "TypeScript", "Python", "FastAPI", "Ruby on Rails", "PostgreSQL", "Redis", "AWS", "Docker", "GraphQL"],
  },
  {
    company: "Technocares",
    role: "Software Engineer",
    period: "2023",
    location: "Onsite | Lahore, Pakistan",
    type: "full-time",
    achievements: [
      "Developed full-stack web applications using Node.js, React.js, AngularJS, and C#",
      "Optimized frontend performance, reducing UI loading times by 20%",
      "Contributed to backend API development and data flow architecture improvements",
    ],
    technologies: ["Node.js", "React.js", "AngularJS", "C#", ".NET"],
  },
  {
    company: "Fiverr",
    role: "Freelance Software Engineer",
    period: "2021 – 2022",
    location: "Remote | United States",
    type: "freelance",
    achievements: [
      "Delivered 20+ full-stack applications using Node.js, React.js, and Python",
      "Built backend services handling authentication, integrations, and data processing",
      "Managed projects end-to-end, including deployment and client support",
    ],
    technologies: ["Node.js", "React.js", "Python", "MongoDB", "PostgreSQL"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section relative overflow-hidden bg-[var(--surface-secondary)]">
      <Section3DBackground variant="experience" className="z-0 opacity-40" />
      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <Building2 className="w-4 h-4" />
              Experience
            </div>
            {/* SEO: H2 with keyword variation for work history searches */}
            <h2 className="section-title">
              Where I&apos;ve <span className="gradient-text">Worked</span>
            </h2>
            {/* SEO: Description targeting recruiter search intent */}
            <p className="section-description">
              A track record of building high-performance web applications and scalable systems for international clients
            </p>
          </div>
        </AnimatedSection>

        {/* Experience Cards - stagger entrance */}
        <div className="content-wrapper">
          <AnimatedSection mode="stagger" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, index) => (
            <article key={index} className="card card-hover-glow hover-lift" style={{ padding: '32px' }}>
              {/* Header */}
              <div 
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between"
                style={{ gap: '16px', marginBottom: '24px' }}
              >
                <div>
                  {/* SEO: Role title as H3 for semantic structure */}
                  <h3 
                    className="text-title text-[var(--text-primary)]"
                    style={{ marginBottom: '8px' }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-[var(--text-secondary)]" style={{ gap: '12px' }}>
                    <span className="font-medium text-lg">{exp.company}</span>
                    {exp.type === "freelance" && (
                      <span className="badge">Freelance</span>
                    )}
                  </div>
                </div>
                <div 
                  className="flex flex-col sm:items-end text-body text-[var(--text-tertiary)]"
                  style={{ gap: '8px' }}
                >
                  <div className="flex items-center" style={{ gap: '8px' }}>
                  </div>
                  <div className="flex items-center" style={{ gap: '8px' }}>
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="flex items-start text-body text-[var(--text-secondary)] leading-relaxed"
                    style={{ gap: '12px' }}
                  >
                    <span 
                      className="rounded-full bg-[var(--accent-primary)] flex-shrink-0"
                      style={{ width: '6px', height: '6px', marginTop: '8px' }}
                      aria-hidden="true"
                    />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap" style={{ gap: '8px' }}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="chip">{tech}</span>
                ))}
              </div>
            </article>
          ))}
          </AnimatedSection>
        </div>

        {/* Education */}
        <AnimatedSection mode="single">
          <div className="content-wrapper" style={{ marginTop: '48px' }}>
            <h3 
              className="text-title text-[var(--text-primary)] text-center"
              style={{ marginBottom: '24px' }}
            >
              Education
            </h3>
            <div 
              className="card flex flex-col sm:flex-row items-start sm:items-center justify-between hover-lift"
              style={{ padding: '24px', gap: '16px' }}
            >
            <div>
              <h4 
                className="font-semibold text-[var(--text-primary)] text-lg"
                style={{ marginBottom: '4px' }}
              >
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-body text-[var(--text-secondary)]">University of the Punjab - PUCIT</p>
            </div>
            <span className="badge">IELTS C1 (English)</span>
            </div>
          </div>
        </AnimatedSection>

        {/* SEO: Internal linking with descriptive anchor text */}
        <div className="content-wrapper text-center" style={{ marginTop: '32px' }}>
          <Link 
            href="#projects" 
            className="btn-secondary inline-flex"
            aria-label="View Abubakar Sohail's software engineering projects and case studies"
          >
            View My Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
