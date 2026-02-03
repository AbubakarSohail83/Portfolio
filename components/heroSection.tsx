"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/utils/constants";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-[0.08] animate-glow" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-[var(--accent-secondary)] rounded-full blur-[150px] opacity-[0.08] animate-glow delay-500" />

      <div className="container relative z-10">
        <div className="content-wrapper">
          <div className="flex flex-col lg:flex-row items-center" style={{ gap: '64px' }}>
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status badge */}
              <div 
                className="inline-flex items-center rounded-full animate-fade-in-up"
                style={{
                  gap: '10px',
                  padding: '10px 20px',
                  marginBottom: '32px',
                  background: 'var(--surface-tertiary)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <span className="status-indicator pulse" />
                {/* SEO: Keyword-rich status targeting remote work intent */}
                <span className="text-small text-[var(--text-secondary)]">
                Available for opportunities</span>
              </div>

              {/* SEO: Primary H1 - ONE per page, keyword-optimized for brand + role */}
              <h1 
                className="text-display text-[var(--text-primary)] animate-fade-in-up delay-100"
                style={{ marginBottom: '16px' }}
              >
                Abubakar Sohail
              </h1>

              {/* SEO: Secondary heading with role keywords - using semantic p tag styled as headline */}
              <p 
                className="text-headline text-[var(--text-tertiary)] animate-fade-in-up delay-200"
                style={{ marginBottom: '32px' }}
              >
                Senior Full Stack Software Engineer
              </p>

              {/* SEO: Value proposition with embedded keywords targeting recruiters */}
              <p 
                className="text-body-lg text-[var(--text-secondary)] max-w-xl animate-fade-in-up delay-300 mx-auto lg:mx-0 leading-relaxed"
                style={{ marginBottom: '24px' }}
              >
                I build <strong>scalable, backend-heavy systems</strong> that power products used by thousands. 
                Specializing in{" "}
                <span className="text-[var(--text-primary)] font-medium">Node.js</span>,{" "}
                <span className="text-[var(--text-primary)] font-medium">Ruby on Rails</span>,{" "}
                <span className="text-[var(--text-primary)] font-medium">React</span>, and{" "}
                <span className="text-[var(--text-primary)] font-medium">cloud infrastructure (AWS)</span>.
              </p>

              {/* SEO: Geographic and work arrangement keywords */}
              <p 
                className="text-body text-[var(--text-muted)] animate-fade-in-up delay-300 mx-auto lg:mx-0"
                style={{ marginBottom: '40px' }}
              >
                Working with APAC, US, UK & Global teams
              </p>

              {/* CTA Buttons with SEO-friendly anchor text */}
              <div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start animate-fade-in-up delay-400"
                style={{ gap: '16px', marginBottom: '40px' }}
              >
                {/* SEO: Internal link with descriptive anchor text */}
                <Link 
                  href="#projects" 
                  className="btn-primary group"
                  aria-label="View my software engineering projects and case studies"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {/* SEO: Internal link with descriptive anchor text */}
                <Link 
                  href="#contact" 
                  className="btn-secondary"
                  aria-label="Contact Abubakar Sohail for software engineering opportunities"
                >
                  Hire Me
                </Link>
              </div>

              {/* Social links with SEO-friendly labels */}
              <div 
                className="flex items-center justify-center lg:justify-start animate-fade-in-up delay-500"
                style={{ gap: '16px' }}
              >
                <span className="text-small text-[var(--text-muted)]">Find me on</span>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] transition-all"
                    style={{ padding: '12px' }}
                    aria-label="Abubakar Sohail GitHub Profile - View Open Source Projects"
                    title="GitHub - Abubakar Sohail"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] transition-all"
                    style={{ padding: '12px' }}
                    aria-label="Abubakar Sohail LinkedIn Profile - Connect with me"
                    title="LinkedIn - Abubakar Sohail"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.gmail}
                    className="rounded-xl text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] transition-all"
                    style={{ padding: '12px' }}
                    aria-label="Email Abubakar Sohail - Hire a Full Stack Developer"
                    title="Email - Abubakar Sohail"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex-shrink-0 animate-fade-in-up delay-300">
              <div className="profile-image">
                {/* SEO: Keyword-rich alt text for image SEO */}
                <Image
                  src="/self.png"
                  alt="Abubakar Sohail - Senior Full Stack Software Engineer available for remote work with UK and international teams"
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
                  style={{ objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* SEO: "Who I Work With" section for targeting hiring intent keywords */}
          <div 
            className="animate-fade-in-up delay-500"
            style={{ marginTop: '64px', textAlign: 'center' }}
          >
            <p className="text-small text-[var(--text-muted)]" style={{ marginBottom: '16px' }}>
              Trusted by startups and enterprises worldwide
            </p>
            <div 
              className="flex flex-wrap justify-center items-center"
              style={{ gap: '32px' }}
            >
              {/* SEO: Client type keywords for search intent matching */}
              {['SaaS Companies', 'Startups', 'International Teams', 'Remote-First Companies'].map((item) => (
                <span 
                  key={item}
                  className="text-body text-[var(--text-tertiary)]"
                  style={{ 
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'var(--surface-tertiary)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in delay-500 hidden md:block">
          <div className="flex flex-col items-center text-[var(--text-muted)]" style={{ gap: '12px' }}>
            <span className="text-caption">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-[var(--border-primary)] flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[var(--text-muted)] rounded-full animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
