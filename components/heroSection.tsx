"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Radio,
} from "lucide-react";
import { socialLinks } from "@/utils/constants";
import { Section3DBackground } from "@/components/three/Section3DBackground";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const heroSignals = ["Node", "Rails", "React", "AWS", "AI"];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 105, damping: 18 },
  },
};

export const HeroSection = () => {
  return (
    <section className="portfolio-hero" aria-label="Portfolio introduction">
      <Section3DBackground variant="hero" className="z-0 opacity-[0.18]" />
      <div className="portfolio-hero__contours" aria-hidden="true" />
      <div className="portfolio-hero__frame" aria-hidden="true" />

      <motion.nav
        className="portfolio-nav"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Primary navigation"
      >
        <Link href="#" className="portfolio-mark" aria-label="Back to top">
          AS
        </Link>
        <div className="portfolio-nav__links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="portfolio-nav__cta">
          Let&apos;s build
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </motion.nav>

      <div className="portfolio-hero__inner">
        <motion.div
          className="portfolio-hero__copy"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="portfolio-eyebrow" variants={rise}>
            <Radio className="h-4 w-4" aria-hidden="true" />
            Senior Software Engineer | Backend-heavy full stack
          </motion.div>

          <motion.h1 className="portfolio-hero__title" variants={rise}>
            Abubakar
            <span>Sohail</span>
          </motion.h1>

          <motion.p className="portfolio-hero__lede" variants={rise}>
            I design production systems with the sharp end covered: APIs,
            data flows, cloud deployments, AI workflows, and frontends that
            feel fast enough to trust.
          </motion.p>

          <motion.div className="portfolio-hero__actions" variants={rise}>
            <Link href="#projects" className="btn-primary">
              View work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="/as.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </motion.div>

          <motion.div className="portfolio-socials" variants={rise}>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={socialLinks.gmail} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="portfolio-hero__visual"
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.28, type: "spring", stiffness: 90, damping: 18 }}
        >
          <motion.div
            className="profile-console"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="profile-console__top">
              <Image
                src="/self.png"
                alt="Abubakar Sohail"
                width={132}
                height={132}
                priority
              />
              <div>
                <span className="profile-console__status">Senior software engineer</span>
                <strong>Reliable systems for ambitious products.</strong>
                <p>Backend, AI, cloud, product delivery.</p>
              </div>
            </div>
            <ul className="profile-console__signals" aria-label="Core strengths">
              <li>System architecture</li>
              <li>Multi-tenant SaaS</li>
              <li>Production AI</li>
              <li>Performance</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="portfolio-hero__ticker"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        aria-label="Core technologies"
      >
        <div className="ticker-track">
          {[...heroSignals, ...heroSignals].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </motion.div>

      <Link href="#about" className="portfolio-scroll" aria-label="Scroll to about section">
        <ArrowDown className="h-4 w-4" />
      </Link>
    </section>
  );
};
