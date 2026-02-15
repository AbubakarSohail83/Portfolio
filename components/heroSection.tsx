"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/utils/constants";
import { Globe } from "@/components/Globe";
import { Section3DBackground } from "@/components/three/Section3DBackground";

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const heroItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Three.js - theme-aligned, subtle */}
      <Section3DBackground variant="hero" className="z-0 opacity-[0.55]" />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 hero-mesh" aria-hidden="true" />
      
      {/* Grid pattern overlay - very subtle in dark (no gray) */}
      <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-[0.06]" />
      
      {/* Gradient orbs - theme colors, gentle pulse */}
      <motion.div
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full blur-[150px] bg-[var(--accent-primary)]"
        style={{ opacity: 0.1 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full blur-[150px] bg-[var(--accent-secondary)]"
        style={{ opacity: 0.08 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      {/* Background globe - right side, hidden on xs for space */}
      <div className="absolute right-0 top-1/2 z-0 hidden origin-right -translate-y-1/2 pointer-events-none sm:flex sm:scale-75 sm:opacity-50 md:scale-90 md:-mr-4 md:opacity-60 lg:scale-100 lg:opacity-70" aria-hidden>
        <Globe size={260} subtle className="-mr-24 md:-mr-16" />
      </div>

      {/* Foreground: two subtle accents (theme colors) */}
      <motion.div
        className="absolute left-[14%] top-[38%] z-[1] h-2 w-2 rounded-full border border-[var(--accent-primary)] hidden lg:block"
        aria-hidden
        animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[52%] z-[1] h-1.5 w-1.5 rounded-full bg-[var(--accent-tertiary)] hidden lg:block"
        aria-hidden
        animate={{ y: [0, 6, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="container relative z-10">
        <div className="content-wrapper">
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            style={{ gap: '64px' }}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status badge */}
              <motion.div 
                variants={heroItem}
                className="inline-flex items-center rounded-full"
                style={{
                  gap: '10px',
                  padding: '10px 20px',
                  marginBottom: '32px',
                  background: 'var(--surface-tertiary)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <span className="status-indicator pulse" />
                <span className="text-small text-[var(--text-secondary)]">
                  Available for opportunities
                </span>
              </motion.div>

              {/* SEO: Primary H1 */}
              <motion.h1 
                variants={heroItem}
                className="text-display text-[var(--text-primary)]"
                style={{ marginBottom: '16px' }}
              >
                Abubakar Sohail
              </motion.h1>

              {/* Role - with animated gradient */}
              <motion.p 
                variants={heroItem}
                className="text-headline gradient-text-animate"
                style={{ marginBottom: '32px' }}
              >
                Senior Full Stack Software Engineer
              </motion.p>

              {/* Value proposition */}
              <motion.p 
                variants={heroItem}
                className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
                style={{ marginBottom: '24px' }}
              >
                I build <strong>scalable, backend-heavy systems</strong> that power products used by thousands. 
                Specializing in{" "}
                <span className="text-[var(--text-primary)] font-medium">Node.js</span>,{" "}
                <span className="text-[var(--text-primary)] font-medium">Python</span>,{" "}
                <span className="text-[var(--text-primary)] font-medium">ROR</span>,{" "}
                <span className="text-[var(--text-primary)] font-medium">React</span>, and{" "}
                <span className="text-[var(--text-primary)] font-medium">cloud infrastructure (AWS)</span>.
              </motion.p>

              <motion.p 
                variants={heroItem}
                className="text-body text-[var(--text-muted)] mx-auto lg:mx-0"
                style={{ marginBottom: '40px' }}
              >
                Collaborating with distributed teams worldwide
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={heroItem}
                className="flex flex-col sm:flex-row justify-center lg:justify-start"
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
                  Let&apos;s Talk
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div 
                variants={heroItem}
                className="flex items-center justify-center lg:justify-start"
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
                    aria-label="Email Abubakar Sohail"
                    title="Email - Abubakar Sohail"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Profile Image */}
            <motion.div
              variants={heroItemScale}
              className="flex-shrink-0"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <motion.div
                className="profile-image"
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Descriptive alt text - simple, no keyword stuffing */}
                <Image
                  src="/self.png"
                  alt="Abubakar Sohail – Senior Full Stack Software Engineer"
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
                  style={{ objectPosition: 'top' }}
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Who I Work With - staggered pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 80, damping: 16 }}
            style={{ marginTop: '64px', textAlign: 'center' }}
          >
            <p className="text-small text-[var(--text-muted)]" style={{ marginBottom: '16px' }}>
              Trusted by startups and enterprises worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center" style={{ gap: '32px' }}>
              {['SaaS Companies', 'Startups', 'International Teams', 'Remote-First Companies'].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 + i * 0.08, type: "spring", stiffness: 120, damping: 18 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-body text-[var(--text-tertiary)] cursor-default"
                  style={{ 
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'var(--surface-tertiary)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - motion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            className="flex flex-col items-center text-[var(--text-muted)]"
            style={{ gap: '14px' }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-caption tracking-widest uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-[var(--border-primary)] flex items-start justify-center p-2 bg-[var(--surface-elevated)]/80 backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-2 bg-[var(--accent-primary)] rounded-full"
                animate={{ y: [0, 6, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col items-center" style={{ gap: '4px' }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-[var(--accent-primary)]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
