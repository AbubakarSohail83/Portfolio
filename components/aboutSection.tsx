"use client";

import Link from "next/link";
import { User, Zap, Globe, Server, Code2, Layers, ArrowRight, Brush, Brain } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable APIs, microservices, and data pipelines that handle high loads reliably",
  },
  {
    icon: Layers,
    title: "Full Stack Delivery",
    description: "End-to-end ownership from system design to deployment with cohesive experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Track record of 20-30% response time improvements through optimization",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, and CI/CD pipelines for reliable deployments",
  },
  {
    icon: Brush,
    title: "UI/UX",
    description: "Creative user interfaces that enhance user experience and engagement",
  },
  {
    icon: Brain,
    title: "AI/ML",
    description: "AI/ML integrations and data analytics",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "1000s", label: "Users Served" },
  { value: "30%", label: "Avg. Perf Gains" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <Section3DBackground variant="about" className="z-0 opacity-40" />
      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <User className="w-4 h-4" />
              About
            </div>
            {/* SEO: H2 with keyword variation targeting search intent */}
            <h2 className="section-title">
              Full Stack Software Engineer
            </h2>
            {/* SEO: Description targeting recruiter search intent */}
            <p className="section-description">
              Building production-scale applications for startups, SaaS companies, and international teams
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="content-wrapper">
          <AnimatedSection mode="stagger">
            {/* Bio */}
            <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="text-body-lg text-[var(--text-secondary)]" style={{ lineHeight: '1.8' }}>
                I&apos;m <strong>Abubakar Sohail</strong>, a <strong>Senior Full Stack Software Engineer</strong> focused 
                on building scalable backend systems and creative user interfaces for SaaS and startup environments.
              </p>
              <p className="text-body-lg text-[var(--text-secondary)]" style={{ lineHeight: '1.8' }}>
                My work centers around <strong>API-first architectures</strong>, <strong>real-time collaboration</strong>, 
                and <strong>performance optimization</strong> in production systems. At <strong>Devsinc</strong>, I help 
                architect multi-tenant platforms, reduce latency, and ship features used globally.
              </p>
              <p className="text-body-lg text-[var(--text-secondary)]" style={{ lineHeight: '1.8' }}>
                I work closely with product and engineering teams to turn business requirements into reliable 
                software—not just working code.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{ marginBottom: '32px' }}>
            {stats.map((stat, index) => (
              <div key={index} className="card stat-card-vibrant card-hover-glow text-center hover-lift" style={{ padding: '24px' }}>
                <div className="text-3xl md:text-4xl font-semibold gradient-text" style={{ marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div className="text-body text-[var(--text-tertiary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* SEO: H3 subheading with keyword variation */}
          <h3 
            className="text-title text-[var(--text-primary)] text-center"
            style={{ marginBottom: '24px' }}
          >
            Full Stack Developer for Startups, SaaS & Product Companies
          </h3>

          {/* Highlights Grid */}
          <div className="card-grid" style={{ marginBottom: '32px' }}>
            {highlights.map((item, index) => (
              <div key={index} className="card hover-lift group" style={{ padding: '24px' }}>
                <div className="flex items-start" style={{ gap: '16px' }}>
                  <div 
                    className="rounded-xl bg-[var(--surface-tertiary)] group-hover:bg-[rgba(99,102,241,0.1)] transition-colors flex-shrink-0"
                    style={{ padding: '12px' }}
                  >
                    <item.icon className="w-5 h-5 text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold text-[var(--text-primary)] text-lg"
                      style={{ marginBottom: '8px' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-body text-[var(--text-tertiary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Focus - vibrant accent */}
          <div 
            className="card impact-box-vibrant card-hover-glow bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface-tertiary)]"
            style={{ padding: '32px', marginBottom: '32px' }}
          >
            <div className="flex items-start" style={{ gap: '16px' }}>
              <div 
                className="rounded-xl bg-[rgba(99,102,241,0.1)] flex-shrink-0"
                style={{ padding: '12px' }}
              >
                <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />
              </div>
              <div>
                <h4 
                  className="font-semibold text-[var(--text-primary)] text-lg"
                  style={{ marginBottom: '12px' }}
                >
                  Current Focus
                </h4>
                <p className="text-body-lg text-[var(--text-secondary)]" style={{ lineHeight: '1.8' }}>
                  Exploring <strong>AI/LLM integrations</strong> in production systems, building <strong>event-driven 
                  architectures</strong>, and designing <strong>developer tools</strong>. Always seeking challenging 
                  problems at scale with forward-thinking teams.
                </p>
              </div>
            </div>
          </div>

          {/* SEO: Internal linking with descriptive anchor text */}
            <div className="text-center">
              <Link 
                href="#experience" 
                className="btn-secondary inline-flex"
                aria-label="View Abubakar Sohail's professional experience and work history"
              >
                View My Experience
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
